# Deployment

## 基础设施

| 组件 | 详情 |
|---|---|
| 服务器 | AWS EC2（`50.18.170.151`） |
| 域名 | `portal.cultureescrow.com` |
| 反向代理 | Caddy |
| 进程管理 | systemd（`culture-portal.service`） |
| CI/CD | GitHub Actions self-hosted runner（EC2 本机） |
| Portal 端口 | `3000` |
| PG17 端口 | `8787`（独立服务） |

## 目录约定

```
/opt/culture-escrow-site/     # Portal repo
/opt/culture-escrow-site/.env # 生产环境变量（不进 git，rsync --exclude）
```

## 环境变量（`.env`）

```env
NEXTAUTH_SECRET=<random-base64>
NEXTAUTH_URL=https://portal.cultureescrow.com
DATABASE_URL=postgresql://postgres:<password>@localhost:5432/temply
AUTH_TRUST_HOST=true
```

## systemd 服务

服务名：`culture-portal.service`

```ini
[Service]
WorkingDirectory=/opt/culture-escrow-site
EnvironmentFile=/opt/culture-escrow-site/.env
ExecStart=npm run start
Restart=always
```

常用命令：
```bash
sudo systemctl restart culture-portal
sudo systemctl status culture-portal
journalctl -u culture-portal -f
```

## Caddy 配置（`/etc/caddy/Caddyfile`）

```caddy
portal.cultureescrow.com {
    # pg17：forward_auth 保护
    handle /pg17* {
        forward_auth localhost:3000 {
            uri /api/check-auth
            copy_headers Cookie
        }
        reverse_proxy localhost:8787
    }

    # temply：forward_auth 保护
    handle /temply* {
        forward_auth localhost:3000 {
            uri /api/check-auth
            copy_headers Cookie
        }
        reverse_proxy localhost:8787
    }

    # Portal 主体
    handle {
        reverse_proxy localhost:3000
    }
}
```

重载 Caddy：`sudo systemctl reload caddy`

## GitHub Actions 部署流程

触发：push 到 `main` 或手动 `workflow_dispatch`

步骤：
1. rsync 代码到 `/opt/culture-escrow-site`（`--exclude='.env'`）
2. `npm install`
3. `npm run build`
4. `sudo systemctl restart culture-portal`
5. 验证服务状态

## 数据库管理

连接：
```bash
sudo -u postgres psql -d temply
```

常用操作：
```sql
-- 查看用户列表
SELECT username, role, is_active FROM auth.users ORDER BY username;

-- 新增用户（密码需先 bcrypt hash）
INSERT INTO auth.users (username, email, password_hash, role)
VALUES ('newuser', 'email@example.com', '<bcrypt-hash>', 'staff');

-- 修改 role
UPDATE auth.users SET role = 'admin' WHERE username = 'someone';
```
