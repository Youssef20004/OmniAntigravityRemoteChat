<div align="center">

# 📱 OmniAntigravity Remote Chat

### 你的 AI 编程会话不应在你离开桌面时结束。

<br/>

<img src="assets/hero-banner.png" alt="从沙发上控制你的 AI" width="700" />

<br/>
<br/>

![Version](https://img.shields.io/badge/version-0.5.3-6366f1) ![Node](https://img.shields.io/badge/node-22%2B-10b981) ![CI](https://github.com/diegosouzapw/OmniAntigravityRemoteChat/actions/workflows/ci.yml/badge.svg) ![License](https://img.shields.io/badge/license-GPL--3.0-blue)

[![npm](https://img.shields.io/npm/v/omni-antigravity-remote-chat?color=cc3534&logo=npm)](https://www.npmjs.com/package/omni-antigravity-remote-chat) [![npm downloads](https://img.shields.io/npm/dm/omni-antigravity-remote-chat?color=blue&logo=npm)](https://www.npmjs.com/package/omni-antigravity-remote-chat) [![Docker](https://img.shields.io/docker/pulls/diegosouzapw/omni-antigravity-remote-chat?color=2496ED&logo=docker&logoColor=white)](https://hub.docker.com/r/diegosouzapw/omni-antigravity-remote-chat)

**将 Antigravity 的 AI 聊天实时镜像到手机上。**
<br/>
**发消息。切换模型。管理窗口。全部通过手机浏览器完成。**

[快速开始](#-快速开始) · [截图](#-实际效果) · [工作原理](#-工作原理) · [Docker](https://hub.docker.com/r/diegosouzapw/omni-antigravity-remote-chat) · [npm](https://www.npmjs.com/package/omni-antigravity-remote-chat)

🌐 **可用语言：** 🇺🇸 [English](README.md) | 🇧🇷 [Português (Brasil)](README.pt-BR.md) | 🇪🇸 [Español](README.es.md) | 🇫🇷 [Français](README.fr.md) | 🇮🇹 [Italiano](README.it.md) | 🇷🇺 [Русский](README.ru.md) | 🇨🇳 中文 (简体) | 🇩🇪 [Deutsch](README.de.md) | 🇮🇳 [हिन्दी](README.in.md) | 🇹🇭 [ไทย](README.th.md) | 🇺🇦 [Українська](README.uk-UA.md) | 🇸🇦 [العربية](README.ar.md) | 🇯🇵 [日本語](README.ja.md) | 🇻🇳 [Tiếng Việt](README.vi.md) | 🇧🇬 [Български](README.bg.md) | 🇩🇰 [Dansk](README.da.md) | 🇫🇮 [Suomi](README.fi.md) | 🇮🇱 [עברית](README.he.md) | 🇭🇺 [Magyar](README.hu.md) | 🇮🇩 [Bahasa Indonesia](README.id.md) | 🇰🇷 [한국어](README.ko.md) | 🇲🇾 [Bahasa Melayu](README.ms.md) | 🇳🇱 [Nederlands](README.nl.md) | 🇳🇴 [Norsk](README.no.md) | 🇵🇹 [Português (Portugal)](README.pt.md) | 🇷🇴 [Română](README.ro.md) | 🇵🇱 [Polski](README.pl.md) | 🇸🇰 [Slovenčina](README.sk.md) | 🇸🇪 [Svenska](README.sv.md) | 🇵🇭 [Filipino](README.phi.md)

</div>

<br/>

## 😤 问题

你正在进行 AI 辅助编程。Claude 正在生成代码，Gemini 正在审查你的架构。然后电话响了，有人需要你去厨房，或者你只是想移到沙发上。

**你今天的选择：**

- ❌ 每次 AI 回复时都走回桌前
- ❌ 试着从房间另一头看屏幕
- ❌ 复制粘贴到另一个移动应用（丢失上下文）
- ❌ 干脆……不写代码了

**一定有更好的方法。**

## ✅ 解决方案

OmniAntigravity 将 **Antigravity 的整个 AI 聊天** 镜像到你的手机上——实时、完全可交互。阅读回复、发送后续消息、切换 AI 模型、管理多个编辑器窗口。全部通过手机浏览器完成。

```bash
npx omni-antigravity-remote-chat
```

就这样。在手机上打开 URL。你已连接。🚀

---

## 📸 实际效果

<div align="center">

|                        主界面                        |                        模型选择                        |                       准备聊天                        |
| :--------------------------------------------------: | :----------------------------------------------------: | :---------------------------------------------------: |
| <img src="assets/screenshot-main.png" width="280" /> | <img src="assets/screenshot-models.png" width="280" /> | <img src="assets/screenshot-input.png" width="280" /> |
|                高级暗色 UI，实时同步                 |            在 Gemini、Claude、GPT 之间切换             |                    从手机发送消息                     |

</div>

---

## ⚡ 快速开始

### 一条命令——零配置：

```bash
npx omni-antigravity-remote-chat
```

### 或全局安装：

```bash
npm install -g omni-antigravity-remote-chat
omni-chat
```

### 或通过 Docker 运行：

```bash
docker run -d --name omni-chat \
  --network host \
  -e APP_PASSWORD=你的密码 \
  diegosouzapw/omni-antigravity-remote-chat:latest
```

### 前置条件

以调试模式启动 Antigravity（一次性设置）：

```bash
antigravity . --remote-debugging-port=7800
```

> 💡 **小贴士：** 在 `~/.bashrc` 中添加 `alias agd='antigravity . --remote-debugging-port=7800'`

---

## 🏆 为什么开发者选择它

|     | 特性            | 详情                                                            |
| --- | --------------- | --------------------------------------------------------------- |
| 🛋️  | **随处编程**    | 从沙发、床上或厨房阅读和回复 AI 聊天                            |
| 🪟  | **多窗口**      | 从一部手机在多个 Antigravity 实例之间切换                       |
| 🔄  | **实时同步**    | 通过 WebSocket < 100ms 延迟——聊天更新即时出现                   |
| 🤖  | **模型切换**    | 从移动端下拉菜单在 Gemini、Claude、GPT 之间切换                 |
| 📋  | **聊天历史**    | 在移动端浏览和恢复过去的对话                                    |
| 🔒  | **默认安全**    | HTTPS、密码认证、Cookie 会话、LAN 自动认证                      |
| 🌐  | **远程访问**    | 支持 ngrok 和二维码——从任何地方访问                             |
| 🐳  | **Docker 就绪** | 一行命令容器部署                                                |
| ♻️  | **模块化代码**  | 干净的架构，JSDoc 类型标注（`config`、`state`、`utils`、`cdp`） |

---

## 📱 工作原理

```
┌─────────────┐    CDP (7800)    ┌──────────────┐    HTTPS/WS (4747)    ┌─────────────┐
│ Antigravity  │ ◄──────────────► │  Node Server  │ ◄──────────────────► │    手机      │
│  (桌面端)    │    DOM snapshot   │  (server.js)  │    镜像 + 控制       │  (浏览器)    │
└─────────────┘                  └──────────────┘                      └─────────────┘
```

服务器通过 **Chrome DevTools Protocol (CDP)** 连接到 Antigravity，实时捕获聊天 DOM，并通过 WebSocket 传输到你的手机。手机上的操作（发送消息、切换模型）通过 CDP 在桌面端执行。

**对桌面端零影响**——镜像在你交互之前是只读的。无需插件、无需扩展、无需修改 Antigravity。

---

## 🔑 配置

```bash
cp .env.example .env
```

| 变量              | 默认值        | 描述                |
| ----------------- | ------------- | ------------------- |
| `APP_PASSWORD`    | `antigravity` | 认证密码            |
| `PORT`            | `4747`        | 服务器端口          |
| `COOKIE_SECRET`   | _(自动生成)_  | Cookie 签名密钥     |
| `AUTH_SALT`       | _(自动生成)_  | 认证令牌附加盐值    |
| `NGROK_AUTHTOKEN` | _(可选)_      | 通过 ngrok 远程访问 |

---

## 🤝 贡献

1. Fork 仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

详细指南请参阅 [CONTRIBUTING.md](CONTRIBUTING.md)。

---

## 🙏 致谢

特别感谢 **[Krishna Kanth B](https://github.com/krishnakanthb13)** ——Windsurf 移动聊天概念的原始创建者，他启发了本项目。OmniAntigravity 在此基础上增加了多窗口管理、稳健的 CDP 处理、NPM/Docker 打包和高级 mobile-first UI。

---

## 📄 许可证

GPL-3.0——详见 [LICENSE](LICENSE)。

---

<div align="center">
  <sub>用 ❤️ 为随处编程的开发者打造</sub>
  <br/>
  <sub><a href="https://github.com/diegosouzapw/OmniAntigravityRemoteChat">github.com/diegosouzapw/OmniAntigravityRemoteChat</a></sub>
</div>
