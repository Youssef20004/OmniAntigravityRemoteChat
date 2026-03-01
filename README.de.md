<div align="center">

# 📱 OmniAntigravity Remote Chat

### Deine KI-Coding-Session muss nicht enden, wenn du deinen Schreibtisch verlässt.

<br/>

<img src="assets/hero-banner.png" alt="Steuere deine KI vom Sofa aus" width="700" />

<br/>
<br/>

![Version](https://img.shields.io/badge/version-0.5.3-6366f1) ![Node](https://img.shields.io/badge/node-22%2B-10b981) ![CI](https://github.com/diegosouzapw/OmniAntigravityRemoteChat/actions/workflows/ci.yml/badge.svg) ![License](https://img.shields.io/badge/license-GPL--3.0-blue)

[![npm](https://img.shields.io/npm/v/omni-antigravity-remote-chat?color=cc3534&logo=npm)](https://www.npmjs.com/package/omni-antigravity-remote-chat) [![npm downloads](https://img.shields.io/npm/dm/omni-antigravity-remote-chat?color=blue&logo=npm)](https://www.npmjs.com/package/omni-antigravity-remote-chat) [![Docker](https://img.shields.io/docker/pulls/diegosouzapw/omni-antigravity-remote-chat?color=2496ED&logo=docker&logoColor=white)](https://hub.docker.com/r/diegosouzapw/omni-antigravity-remote-chat)

**Spiegle deinen Antigravity KI-Chat in Echtzeit auf dein Handy.**
<br/>
**Nachrichten senden. Modelle wechseln. Fenster verwalten. Alles aus deinem mobilen Browser.**

[Loslegen](#-loslegen) · [Screenshots](#-in-aktion) · [Funktionsweise](#-wie-es-funktioniert) · [Docker](https://hub.docker.com/r/diegosouzapw/omni-antigravity-remote-chat) · [npm](https://www.npmjs.com/package/omni-antigravity-remote-chat)

🌐 **Verfügbar in:** 🇺🇸 [English](README.md) | 🇧🇷 [Português (Brasil)](README.pt-BR.md) | 🇪🇸 [Español](README.es.md) | 🇫🇷 [Français](README.fr.md) | 🇮🇹 [Italiano](README.it.md) | 🇷🇺 [Русский](README.ru.md) | 🇨🇳 [中文 (简体)](README.zh-CN.md) | 🇩🇪 Deutsch | 🇮🇳 [हिन्दी](README.in.md) | 🇹🇭 [ไทย](README.th.md) | 🇺🇦 [Українська](README.uk-UA.md) | 🇸🇦 [العربية](README.ar.md) | 🇯🇵 [日本語](README.ja.md) | 🇻🇳 [Tiếng Việt](README.vi.md) | 🇧🇬 [Български](README.bg.md) | 🇩🇰 [Dansk](README.da.md) | 🇫🇮 [Suomi](README.fi.md) | 🇮🇱 [עברית](README.he.md) | 🇭🇺 [Magyar](README.hu.md) | 🇮🇩 [Bahasa Indonesia](README.id.md) | 🇰🇷 [한국어](README.ko.md) | 🇲🇾 [Bahasa Melayu](README.ms.md) | 🇳🇱 [Nederlands](README.nl.md) | 🇳🇴 [Norsk](README.no.md) | 🇵🇹 [Português (Portugal)](README.pt.md) | 🇷🇴 [Română](README.ro.md) | 🇵🇱 [Polski](README.pl.md) | 🇸🇰 [Slovenčina](README.sk.md) | 🇸🇪 [Svenska](README.sv.md) | 🇵🇭 [Filipino](README.phi.md)

</div>

<br/>

## 😤 Das Problem

Du steckst mitten in einer KI-gestützten Coding-Session. Claude generiert Code, Gemini überprüft deine Architektur. Dann klingelt dein Telefon, jemand braucht dich in der Küche, oder du willst dich einfach aufs Sofa setzen.

**Deine Optionen heute:**

- ❌ Jedes Mal zum Schreibtisch zurücklaufen, wenn die KI antwortet
- ❌ Versuchen, den Monitor von der anderen Seite des Raums zu lesen
- ❌ In eine andere mobile App kopieren (und den Kontext verlieren)
- ❌ Einfach... aufhören zu programmieren

**Es muss einen besseren Weg geben.**

## ✅ Die Lösung

OmniAntigravity spiegelt deinen **gesamten Antigravity KI-Chat** auf dein Handy — in Echtzeit, mit voller Interaktion. Lies Antworten, sende Folgenachrichten, wechsle KI-Modelle, verwalte mehrere Editor-Fenster. Alles aus deinem mobilen Browser.

```bash
npx omni-antigravity-remote-chat
```

Das war's. Öffne die URL auf deinem Handy. Du bist drin. 🚀

---

## 📸 In Aktion

<div align="center">

|                   Hauptoberfläche                    |                     Modellauswahl                      |                    Bereit zum Chat                    |
| :--------------------------------------------------: | :----------------------------------------------------: | :---------------------------------------------------: |
| <img src="assets/screenshot-main.png" width="280" /> | <img src="assets/screenshot-models.png" width="280" /> | <img src="assets/screenshot-input.png" width="280" /> |
|          Premium Dark UI mit Echtzeit-Sync           |          Wechsle zwischen Gemini, Claude, GPT          |          Sende Nachrichten von deinem Handy           |

</div>

---

## ⚡ Loslegen

### Ein Befehl — null Konfiguration:

```bash
npx omni-antigravity-remote-chat
```

### Oder global installieren:

```bash
npm install -g omni-antigravity-remote-chat
omni-chat
```

### Oder mit Docker ausführen:

```bash
docker run -d --name omni-chat \
  --network host \
  -e APP_PASSWORD=dein_passwort \
  diegosouzapw/omni-antigravity-remote-chat:latest
```

### Voraussetzung

Starte Antigravity im Debug-Modus (einmalige Einrichtung):

```bash
antigravity . --remote-debugging-port=7800
```

> 💡 **Tipp:** Füge `alias agd='antigravity . --remote-debugging-port=7800'` zu deiner `~/.bashrc` hinzu

---

## 🏆 Warum Entwickler es wählen

|     | Feature                   | Details                                                                       |
| --- | ------------------------- | ----------------------------------------------------------------------------- |
| 🛋️  | **Überall programmieren** | Lies und antworte auf KI-Chats vom Sofa, Bett oder der Küche                  |
| 🪟  | **Multi-Fenster**         | Wechsle zwischen mehreren Antigravity-Instanzen von einem Handy               |
| 🔄  | **Echtzeit-Sync**         | < 100ms Latenz über WebSocket — Updates erscheinen sofort                     |
| 🤖  | **Modellwechsel**         | Wechsle zwischen Gemini, Claude, GPT über ein mobiles Dropdown                |
| 📋  | **Chat-Verlauf**          | Durchsuche und setze vergangene Gespräche auf dem Handy fort                  |
| 🔒  | **Sicher ab Werk**        | HTTPS, Passwort-Auth, Cookie-Sessions, LAN Auto-Auth                          |
| 🌐  | **Fernzugriff**           | ngrok-Unterstützung mit QR-Code — Zugriff von überall                         |
| 🐳  | **Docker-fertig**         | Einzeiler-Container-Deployment                                                |
| ♻️  | **Modularer Code**        | Saubere Architektur mit JSDoc-Typisierung (`config`, `state`, `utils`, `cdp`) |

---

## 📱 Wie es funktioniert

```
┌─────────────┐    CDP (7800)    ┌──────────────┐    HTTPS/WS (4747)    ┌─────────────┐
│ Antigravity  │ ◄──────────────► │  Node Server  │ ◄──────────────────► │    Handy     │
│  (Desktop)   │    DOM Snapshot   │  (server.js)  │   Spiegel + Kontrolle│  (Browser)   │
└─────────────┘                  └──────────────┘                      └─────────────┘
```

Der Server verbindet sich über das **Chrome DevTools Protocol (CDP)** mit Antigravity, erfasst das Chat-DOM in Echtzeit und streamt es über WebSocket auf dein Handy. Aktionen auf dem Handy (Nachrichten senden, Modelle wechseln) werden über CDP auf dem Desktop ausgeführt.

**Null Auswirkung auf deinen Desktop** — die Spiegelung ist schreibgeschützt, bis du interagierst. Keine Plugins, keine Erweiterungen, keine Antigravity-Modifikationen nötig.

---

## 🔑 Konfiguration

```bash
cp .env.example .env
```

| Variable          | Standard           | Beschreibung                      |
| ----------------- | ------------------ | --------------------------------- |
| `APP_PASSWORD`    | `antigravity`      | Authentifizierungspasswort        |
| `PORT`            | `4747`             | Server-Port                       |
| `COOKIE_SECRET`   | _(auto-generiert)_ | Geheimnis für Cookie-Signierung   |
| `AUTH_SALT`       | _(auto-generiert)_ | Zusätzlicher Salt für Auth-Tokens |
| `NGROK_AUTHTOKEN` | _(optional)_       | Für Fernzugriff über ngrok        |

---

## 🤝 Mitwirken

1. Forke das Repository
2. Erstelle deinen Feature-Branch (`git checkout -b feature/tolles-feature`)
3. Committe deine Änderungen (`git commit -m 'Füge tolles Feature hinzu'`)
4. Pushe zum Branch (`git push origin feature/tolles-feature`)
5. Öffne einen Pull Request

Siehe [CONTRIBUTING.md](CONTRIBUTING.md) für detaillierte Richtlinien.

---

## 🙏 Danksagungen

Besonderer Dank an **[Krishna Kanth B](https://github.com/krishnakanthb13)** — den ursprünglichen Ersteller des Windsurf Mobile-Chat-Konzepts, das dieses Projekt inspiriert hat. OmniAntigravity baut auf dieser Grundlage auf mit Multi-Fenster-Verwaltung, robuster CDP-Behandlung, NPM/Docker-Paketierung und einer Premium Mobile-First UI.

---

## 📄 Lizenz

GPL-3.0 — siehe [LICENSE](LICENSE) für Details.

---

<div align="center">
  <sub>Mit ❤️ gemacht für Entwickler, die von überall aus programmieren</sub>
  <br/>
  <sub><a href="https://github.com/diegosouzapw/OmniAntigravityRemoteChat">github.com/diegosouzapw/OmniAntigravityRemoteChat</a></sub>
</div>
