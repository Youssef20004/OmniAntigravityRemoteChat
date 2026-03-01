<div align="center">

# 📱 OmniAntigravity Remote Chat

### Ваша AI-сесія кодування не повинна закінчуватися, коли ви відходите від столу.

<br/>

<img src="assets/hero-banner.png" alt="Керуйте AI з дивана" width="700" />

<br/>
<br/>

![Version](https://img.shields.io/badge/version-0.5.3-6366f1) ![Node](https://img.shields.io/badge/node-22%2B-10b981) ![CI](https://github.com/diegosouzapw/OmniAntigravityRemoteChat/actions/workflows/ci.yml/badge.svg) ![License](https://img.shields.io/badge/license-GPL--3.0-blue)

[![npm](https://img.shields.io/npm/v/omni-antigravity-remote-chat?color=cc3534&logo=npm)](https://www.npmjs.com/package/omni-antigravity-remote-chat) [![npm downloads](https://img.shields.io/npm/dm/omni-antigravity-remote-chat?color=blue&logo=npm)](https://www.npmjs.com/package/omni-antigravity-remote-chat) [![Docker](https://img.shields.io/docker/pulls/diegosouzapw/omni-antigravity-remote-chat?color=2496ED&logo=docker&logoColor=white)](https://hub.docker.com/r/diegosouzapw/omni-antigravity-remote-chat)

**Дзеркаліть чат AI Antigravity на телефоні в реальному часі.**
<br/>
**Надсилайте повідомлення. Змінюйте моделі. Керуйте вікнами. Все з мобільного браузера.**

🌐 **Available in:** 🇺🇸 [English](README.md) | 🇧🇷 [Português (Brasil)](README.pt-BR.md) | 🇪🇸 [Español](README.es.md) | 🇫🇷 [Français](README.fr.md) | 🇮🇹 [Italiano](README.it.md) | 🇷🇺 [Русский](README.ru.md) | 🇨🇳 [中文 (简体)](README.zh-CN.md) | 🇩🇪 [Deutsch](README.de.md) | 🇮🇳 [हिन्दी](README.in.md) | 🇹🇭 [ไทย](README.th.md) | 🇺🇦 Українська | 🇸🇦 [العربية](README.ar.md) | 🇯🇵 [日本語](README.ja.md) | 🇻🇳 [Tiếng Việt](README.vi.md) | 🇧🇬 [Български](README.bg.md) | 🇩🇰 [Dansk](README.da.md) | 🇫🇮 [Suomi](README.fi.md) | 🇮🇱 [עברית](README.he.md) | 🇭🇺 [Magyar](README.hu.md) | 🇮🇩 [Bahasa Indonesia](README.id.md) | 🇰🇷 [한국어](README.ko.md) | 🇲🇾 [Bahasa Melayu](README.ms.md) | 🇳🇱 [Nederlands](README.nl.md) | 🇳🇴 [Norsk](README.no.md) | 🇵🇹 [Português (Portugal)](README.pt.md) | 🇷🇴 [Română](README.ro.md) | 🇵🇱 [Polski](README.pl.md) | 🇸🇰 [Slovenčina](README.sk.md) | 🇸🇪 [Svenska](README.sv.md) | 🇵🇭 [Filipino](README.phi.md)

</div>

<br/>

## 😤 

Ви в розпалі AI-сесії кодування. Claude генерує код, Gemini ревізує архітектуру. Тоді дзвонить телефон, комусь потрібна ваша допомога на кухні, або ви просто хочете переміститися на диван.

## ✅ 

OmniAntigravity дзеркалить **весь чат AI Antigravity** на ваш телефон — у реальному часі, з повною взаємодією.

```bash
npx omni-antigravity-remote-chat
```

---

## ⚡ Quick Start

```bash
npx omni-antigravity-remote-chat
```

```bash
npm install -g omni-antigravity-remote-chat
omni-chat
```

```bash
docker run -d --name omni-chat \
  --network host \
  -e APP_PASSWORD=your_password \
  diegosouzapw/omni-antigravity-remote-chat:latest
```

```bash
antigravity . --remote-debugging-port=7800
```

---

## 📱 How It Works

```
┌─────────────┐    CDP (7800)    ┌──────────────┐    HTTPS/WS (4747)    ┌─────────────┐
│ Antigravity  │ ◄──────────────► │  Node Server  │ ◄──────────────────► │   Phone      │
│  (Desktop)   │    DOM snapshot   │  (server.js)  │    mirror + control  │  (Browser)   │
└─────────────┘                  └──────────────┘                      └─────────────┘
```

---

## 🔑 Configuration

| Variable | Default | Description |
|---|---|---|
| `APP_PASSWORD` | `antigravity` | Authentication password |
| `PORT` | `4747` | Server port |
| `COOKIE_SECRET` | _(auto)_ | Cookie signing secret |
| `AUTH_SALT` | _(auto)_ | Auth token salt |
| `NGROK_AUTHTOKEN` | _(optional)_ | ngrok remote access |

---

## 📄 License

GPL-3.0 — [LICENSE](LICENSE)

---

<div align="center">
  <sub>Зроблено з ❤️ для розробників, які кодять звідусіль</sub>
  <br/>
  <sub><a href="https://github.com/diegosouzapw/OmniAntigravityRemoteChat">github.com/diegosouzapw/OmniAntigravityRemoteChat</a></sub>
</div>
