# Culture Escrow Inc. 多语言展示站（本地预览版）

## 语言结构
- 英文（主语言）：`/en/`
- 中文简体：`/zh-cn/`
- 中文繁体：`/zh-tw/`

根路径 `index.html` 会自动跳转到英文首页 `/en/index.html`。

## 页面（每种语言）
- 首页 `index.html`
- 公司背景及理念 `about.html`
- 服务 `services.html`
- 员工介绍 `team.html`
- 联系我们 `contact.html`

## 本地预览
```bash
cd /Users/wu/.openclaw/workspace/work/company-showcase-site
python3 -m http.server 8080
```

浏览器打开：
- `http://localhost:8080/`（自动到英文）
- `http://localhost:8080/zh-cn/`
- `http://localhost:8080/zh-tw/`

## 下一步
1. 替换正式公司文案（中英繁）
2. 补充真实团队信息与服务详情
3. 增加 Logo、品牌色与图片素材
4. 确认部署方案（Vercel / Netlify / Cloudflare Pages / 自有服务器）

## Portal Bootstrap (PR3)
This repo is being upgraded from static HTML into a Next.js-based portal.

### Local run (new portal)
```bash
npm install
npm run dev
```
