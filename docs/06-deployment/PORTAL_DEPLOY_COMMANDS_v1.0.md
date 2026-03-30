# Portal Deploy Commands v1.0

## 首次部署（示例）
```bash
cd /opt
git clone https://github.com/yudonghu/culture-escrow-site.git
cd /opt/culture-escrow-site
git checkout main
npm install
npm run build
sudo cp deploy/culture-portal.service.example /etc/systemd/system/culture-portal.service
sudo systemctl daemon-reload
sudo systemctl enable culture-portal.service
sudo systemctl start culture-portal.service
```

## 更新部署（示例）
```bash
cd /opt/culture-escrow-site
git fetch origin
git checkout main
git pull --ff-only origin main
npm install
npm run build
sudo systemctl restart culture-portal.service
```
