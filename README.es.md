<div align="center">

# 📱 OmniAntigravity Remote Chat

### Tu sesión de IA no tiene que acabar cuando te levantas del escritorio.

<br/>

<img src="assets/hero-banner.png" alt="Controla tu IA desde el sofá" width="700" />

<br/>
<br/>

![Version](https://img.shields.io/badge/version-0.5.3-6366f1) ![Node](https://img.shields.io/badge/node-22%2B-10b981) ![CI](https://github.com/diegosouzapw/OmniAntigravityRemoteChat/actions/workflows/ci.yml/badge.svg) ![License](https://img.shields.io/badge/license-GPL--3.0-blue)

[![npm](https://img.shields.io/npm/v/omni-antigravity-remote-chat?color=cc3534&logo=npm)](https://www.npmjs.com/package/omni-antigravity-remote-chat) [![npm downloads](https://img.shields.io/npm/dm/omni-antigravity-remote-chat?color=blue&logo=npm)](https://www.npmjs.com/package/omni-antigravity-remote-chat) [![Docker](https://img.shields.io/docker/pulls/diegosouzapw/omni-antigravity-remote-chat?color=2496ED&logo=docker&logoColor=white)](https://hub.docker.com/r/diegosouzapw/omni-antigravity-remote-chat)

**Refleja el chat de IA de Antigravity en tu teléfono en tiempo real.**
<br/>
**Envía mensajes. Cambia modelos. Gestiona ventanas. Todo desde tu navegador móvil.**

[Empezar](#-empezar) · [Capturas](#-véalo-en-acción) · [Cómo Funciona](#-cómo-funciona) · [Docker](https://hub.docker.com/r/diegosouzapw/omni-antigravity-remote-chat) · [npm](https://www.npmjs.com/package/omni-antigravity-remote-chat)

🌐 **Disponible en:** 🇺🇸 [English](README.md) | 🇧🇷 [Português (Brasil)](README.pt-BR.md) | 🇪🇸 Español | 🇫🇷 [Français](README.fr.md) | 🇮🇹 [Italiano](README.it.md) | 🇷🇺 [Русский](README.ru.md) | 🇨🇳 [中文 (简体)](README.zh-CN.md) | 🇩🇪 [Deutsch](README.de.md) | 🇮🇳 [हिन्दी](README.in.md) | 🇹🇭 [ไทย](README.th.md) | 🇺🇦 [Українська](README.uk-UA.md) | 🇸🇦 [العربية](README.ar.md) | 🇯🇵 [日本語](README.ja.md) | 🇻🇳 [Tiếng Việt](README.vi.md) | 🇧🇬 [Български](README.bg.md) | 🇩🇰 [Dansk](README.da.md) | 🇫🇮 [Suomi](README.fi.md) | 🇮🇱 [עברית](README.he.md) | 🇭🇺 [Magyar](README.hu.md) | 🇮🇩 [Bahasa Indonesia](README.id.md) | 🇰🇷 [한국어](README.ko.md) | 🇲🇾 [Bahasa Melayu](README.ms.md) | 🇳🇱 [Nederlands](README.nl.md) | 🇳🇴 [Norsk](README.no.md) | 🇵🇹 [Português (Portugal)](README.pt.md) | 🇷🇴 [Română](README.ro.md) | 🇵🇱 [Polski](README.pl.md) | 🇸🇰 [Slovenčina](README.sk.md) | 🇸🇪 [Svenska](README.sv.md) | 🇵🇭 [Filipino](README.phi.md)

</div>

<br/>

## 😤 El Problema

Estás en medio de una sesión de codificación asistida por IA. Claude está generando código, Gemini está revisando tu arquitectura. Entonces suena tu teléfono, alguien te necesita en la cocina, o simplemente quieres moverte al sofá.

**Tus opciones hoy:**

- ❌ Volver al escritorio cada vez que la IA responde
- ❌ Intentar leer el monitor desde el otro lado de la habitación
- ❌ Copiar y pegar en otra app móvil (perdiendo contexto)
- ❌ Simplemente... dejar de programar

**Tiene que haber una forma mejor.**

## ✅ La Solución

OmniAntigravity refleja **todo el chat de IA de Antigravity** en tu teléfono — en tiempo real, con interacción completa. Lee respuestas, envía mensajes de seguimiento, cambia modelos de IA, gestiona múltiples ventanas del editor. Todo desde tu navegador móvil.

```bash
npx omni-antigravity-remote-chat
```

Eso es todo. Abre la URL en tu teléfono. Ya estás dentro. 🚀

---

## 📸 Véalo en Acción

<div align="center">

|                  Interfaz Principal                  |                  Selección de Modelo                   |                    Listo para Chat                    |
| :--------------------------------------------------: | :----------------------------------------------------: | :---------------------------------------------------: |
| <img src="assets/screenshot-main.png" width="280" /> | <img src="assets/screenshot-models.png" width="280" /> | <img src="assets/screenshot-input.png" width="280" /> |
|       UI dark premium con sync en tiempo real        |           Alterna entre Gemini, Claude, GPT            |           Envía mensajes desde tu teléfono            |

</div>

---

## ⚡ Empezar

### Un comando — cero configuración:

```bash
npx omni-antigravity-remote-chat
```

### O instala globalmente:

```bash
npm install -g omni-antigravity-remote-chat
omni-chat
```

### O ejecuta con Docker:

```bash
docker run -d --name omni-chat \
  --network host \
  -e APP_PASSWORD=tu_contraseña \
  diegosouzapw/omni-antigravity-remote-chat:latest
```

### Prerequisito

Inicia Antigravity en modo debug (configuración única):

```bash
antigravity . --remote-debugging-port=7800
```

> 💡 **Consejo:** Añade `alias agd='antigravity . --remote-debugging-port=7800'` a tu `~/.bashrc`

---

## 🏆 Por Qué los Desarrolladores lo Eligen

|     | Característica                     | Detalles                                                                     |
| --- | ---------------------------------- | ---------------------------------------------------------------------------- |
| 🛋️  | **Programa desde cualquier lugar** | Lee y responde chats de IA desde el sofá, la cama o la cocina                |
| 🪟  | **Multi-ventana**                  | Alterna entre múltiples instancias de Antigravity desde un teléfono          |
| 🔄  | **Sync en tiempo real**            | < 100ms de latencia vía WebSocket — las actualizaciones aparecen al instante |
| 🤖  | **Cambio de modelo**               | Alterna entre Gemini, Claude, GPT desde un dropdown móvil                    |
| 📋  | **Historial de chat**              | Navega y retoma conversaciones anteriores en el móvil                        |
| 🔒  | **Seguro por defecto**             | HTTPS, autenticación por contraseña, sesiones por cookie, auto-auth LAN      |
| 🌐  | **Acceso remoto**                  | Soporte ngrok con código QR — accede desde cualquier lugar                   |
| 🐳  | **Docker listo**                   | Despliegue con un solo comando                                               |
| ♻️  | **Código modular**                 | Arquitectura limpia con tipado JSDoc (`config`, `state`, `utils`, `cdp`)     |

---

## 📱 Cómo Funciona

```
┌─────────────┐    CDP (7800)    ┌──────────────┐    HTTPS/WS (4747)    ┌─────────────┐
│ Antigravity  │ ◄──────────────► │  Node Server  │ ◄──────────────────► │   Teléfono   │
│  (Desktop)   │    DOM snapshot   │  (server.js)  │    espejo + control  │  (Browser)   │
└─────────────┘                  └──────────────┘                      └─────────────┘
```

El servidor se conecta a Antigravity a través del **Chrome DevTools Protocol (CDP)**, captura el DOM del chat en tiempo real y lo transmite a tu teléfono vía WebSocket. Las acciones en tu teléfono (enviar mensajes, cambiar modelos) se ejecutan de vuelta en el escritorio vía CDP.

**Zero impacto en tu escritorio** — el espejo es de solo lectura hasta que interactúes. Sin plugins, sin extensiones, sin modificaciones a Antigravity.

---

## 🪟 Gestión Multi-Ventana

Gestiona **múltiples instancias de Antigravity** desde un solo teléfono:

- **Selector de Ventana** — Toca 🖥️ para ver todas las ventanas abiertas de Antigravity
- **Cambio Instantáneo** — Selecciona cualquier ventana, se refleja en 2 segundos
- **Filtro Inteligente** — Solo muestra ventanas reales del editor (oculta Configuración, Launchpad)
- **Abrir Ventanas** — Crea nuevas instancias de Antigravity directamente desde tu teléfono

---

## 🔑 Configuración

```bash
cp .env.example .env
```

| Variable          | Por defecto       | Descripción                        |
| ----------------- | ----------------- | ---------------------------------- |
| `APP_PASSWORD`    | `antigravity`     | Contraseña de autenticación        |
| `PORT`            | `4747`            | Puerto del servidor                |
| `COOKIE_SECRET`   | _(auto-generado)_ | Secreto para firma de cookies      |
| `AUTH_SALT`       | _(auto-generado)_ | Salt adicional para tokens de auth |
| `NGROK_AUTHTOKEN` | _(opcional)_      | Para acceso remoto vía ngrok       |

---

## 🛠️ Solución de Problemas

| Problema               | Solución                                                               |
| ---------------------- | ---------------------------------------------------------------------- |
| "CDP not found"        | Inicia Antigravity con `--remote-debugging-port=7800`                  |
| "EADDRINUSE"           | Cambia `PORT` en `.env`, o detén el proceso en ese puerto              |
| El teléfono no conecta | Verifica que estén en la misma red Wi-Fi y revisa el firewall          |
| "Syncing..." atascado  | Espera 2-3s para que los contextos CDP se carguen tras cambiar ventana |

---

## 📁 Estructura del Proyecto

```
├── src/
│   ├── server.js              # Servidor principal (Express + WS + acciones CDP)
│   ├── config.js              # Constantes, variables de entorno, IDs de contenedores
│   ├── state.js               # Estado compartido + definiciones de tipos JSDoc
│   ├── cdp/
│   │   └── connection.js      # Descubrimiento y conexión CDP
│   └── utils/
│       ├── network.js         # getLocalIP, isLocalRequest, getJson
│       ├── process.js         # killPortProcess, launchAntigravity
│       └── hash.js            # Utilidad de hash
├── public/                    # Interfaz móvil del chat
├── launcher.js                # Launcher con QR code + ngrok
├── scripts/                   # SSL, instaladores de menú contextual
├── test/                      # Suite de pruebas de validación
├── Dockerfile                 # Soporte Docker
└── .github/workflows/         # CI + auto-release + Docker Hub
```

---

## 🤝 Contribuir

1. Haz un fork del repositorio
2. Crea tu rama de feature (`git checkout -b feature/caracteristica-increible`)
3. Haz commit de tus cambios (`git commit -m 'Añade característica increíble'`)
4. Haz push a la rama (`git push origin feature/caracteristica-increible`)
5. Abre un Pull Request

Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para directrices detalladas.

---

## 🙏 Agradecimientos

Agradecimiento especial a **[Krishna Kanth B](https://github.com/krishnakanthb13)** — el creador original del concepto de chat móvil para Windsurf que inspiró este proyecto. OmniAntigravity amplía esa base con gestión multi-ventana, manejo robusto de CDP, empaquetado NPM/Docker y una UI mobile-first premium.

---

## 📄 Licencia

GPL-3.0 — consulta [LICENSE](LICENSE) para detalles.

---

<div align="center">
  <sub>Hecho con ❤️ para desarrolladores que programan desde cualquier lugar</sub>
  <br/>
  <sub><a href="https://github.com/diegosouzapw/OmniAntigravityRemoteChat">github.com/diegosouzapw/OmniAntigravityRemoteChat</a></sub>
</div>
