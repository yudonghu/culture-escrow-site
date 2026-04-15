# Deployment Runbook

## 首次部署（全新 EC2）

```bash
# 1. 克隆代码
cd /opt
git clone https://github.com/yudonghu/culture-escrow-site.git
cd culture-escrow-site
git checkout main

# 2. 安装依赖并构建
npm install
npm run build

# 3. 创建 .env 文件
cat > .env << 'EOF'
NEXTAUTH_SECRET=<生成随机 secret: openssl rand -base64 32>
NEXTAUTH_URL=https://portal.cultureescrow.com
DATABASE_URL=postgresql://postgres:<password>@localhost:5432/temply
AUTH_TRUST_HOST=true
EOF

# 4. 配置 systemd 服务
sudo cp deploy/culture-portal.service.example /etc/systemd/system/culture-portal.service
sudo systemctl daemon-reload
sudo systemctl enable culture-portal
sudo systemctl start culture-portal

# 5. 验证
sudo systemctl status culture-portal
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
```

## 日常更新部署

通过 GitHub Actions 自动触发（merge 到 main 即自动部署）。

手动部署：
```bash
cd /opt/culture-escrow-site
git pull --ff-only origin main
npm install
npm run build
sudo systemctl restart culture-portal
```

## 数据库迁移

Schema 变更需手动在 EC2 上执行 SQL：

```bash
sudo -u postgres psql -d temply -c "ALTER TABLE auth.users ADD COLUMN ..."
```

当前已执行的迁移：
- 初始建表：`auth.users`（id, username, email, password_hash, is_active, created_at）
- 新增 `role` 列：`ALTER TABLE auth.users ADD COLUMN role TEXT NOT NULL DEFAULT 'staff'`

## 部署后验证清单

- [ ] `https://portal.cultureescrow.com` 首页可访问
- [ ] `https://portal.cultureescrow.com/en/daily-tools` 未登录跳转 `/login`
- [ ] 登录后跳转到 `/en/daily-tools`，Header 显示用户名
- [ ] admin 用户 Header 显示 Manage Users 按钮
- [ ] `https://portal.cultureescrow.com/pg17` 未登录跳转 `/login`
- [ ] `https://portal.cultureescrow.com/temply/` 未登录跳转 `/login`
- [ ] `/en/admin/users` 显示用户列表（admin 登录后）

## 常见问题排查

**服务无法启动**
```bash
journalctl -u culture-portal -n 50
# 检查 .env 是否存在、DATABASE_URL 是否正确
```

**数据库连接失败**
```bash
# 验证 PostgreSQL 可连接
psql "postgresql://postgres:<password>@localhost:5432/temply" -c "SELECT 1"
```

**Caddy 配置生效**
```bash
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

**强制重新部署**
```bash
cd /opt/culture-escrow-site
rm -rf .next
npm run build
sudo systemctl restart culture-portal
```
