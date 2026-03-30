# Portal EC2 Runbook v1.0

## 目标
把 portal 从“部署方案”推进到“接近可执行”的 EC2 落地准备。

## 目录约定
推荐：
- Portal repo: `/opt/culture-escrow-site`
- Portal env: `/opt/culture-escrow-site/.env.production`

## 推荐端口
- Portal: `3000`
- pg17 API: `8787`

## 部署步骤（建议）
### 1. 准备代码目录
```bash
cd /opt
git clone https://github.com/yudonghu/culture-escrow-site.git
cd culture-escrow-site
git checkout main
npm install
npm run build
```

### 2. 准备环境文件
参考：
- `deploy/environments/.env.portal.example`

### 3. 启动方式
参考脚本：
- `deploy/scripts/run_portal.sh`

### 4. systemd
参考：
- `deploy/culture-portal.service.example`

### 5. Caddy
参考：
- `deploy/caddy/Caddyfile.portal.example`

## 验证
- `http://127.0.0.1:3000`
- `https://hydenluc.com`
- `https://hydenluc.com/daily-tools`
- `https://hydenluc.com/tools/pg17`
