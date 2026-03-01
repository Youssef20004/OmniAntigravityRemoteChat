<div align="center">

# 📱 OmniAntigravity Remote Chat

### La tua sessione IA non deve finire quando lasci la scrivania.

<br/>

<img src="assets/hero-banner.png" alt="Controlla la tua IA dal divano" width="700" />

<br/>
<br/>

![Version](https://img.shields.io/badge/version-0.5.3-6366f1) ![Node](https://img.shields.io/badge/node-22%2B-10b981) ![CI](https://github.com/diegosouzapw/OmniAntigravityRemoteChat/actions/workflows/ci.yml/badge.svg) ![License](https://img.shields.io/badge/license-GPL--3.0-blue)

[![npm](https://img.shields.io/npm/v/omni-antigravity-remote-chat?color=cc3534&logo=npm)](https://www.npmjs.com/package/omni-antigravity-remote-chat) [![npm downloads](https://img.shields.io/npm/dm/omni-antigravity-remote-chat?color=blue&logo=npm)](https://www.npmjs.com/package/omni-antigravity-remote-chat) [![Docker](https://img.shields.io/docker/pulls/diegosouzapw/omni-antigravity-remote-chat?color=2496ED&logo=docker&logoColor=white)](https://hub.docker.com/r/diegosouzapw/omni-antigravity-remote-chat)

**Rispecchia la chat IA di Antigravity sul tuo telefono in tempo reale.**
<br/>
**Invia messaggi. Cambia modello. Gestisci finestre. Tutto dal tuo browser mobile.**

[Iniziare](#-iniziare) · [Screenshot](#-in-azione) · [Come Funziona](#-come-funziona) · [Docker](https://hub.docker.com/r/diegosouzapw/omni-antigravity-remote-chat) · [npm](https://www.npmjs.com/package/omni-antigravity-remote-chat)

🌐 **Disponibile in:** 🇺🇸 [English](README.md) | 🇧🇷 [Português (Brasil)](README.pt-BR.md) | 🇪🇸 [Español](README.es.md) | 🇫🇷 [Français](README.fr.md) | 🇮🇹 Italiano | 🇷🇺 [Русский](README.ru.md) | 🇨🇳 [中文 (简体)](README.zh-CN.md) | 🇩🇪 [Deutsch](README.de.md) | 🇮🇳 [हिन्दी](README.in.md) | 🇹🇭 [ไทย](README.th.md) | 🇺🇦 [Українська](README.uk-UA.md) | 🇸🇦 [العربية](README.ar.md) | 🇯🇵 [日本語](README.ja.md) | 🇻🇳 [Tiếng Việt](README.vi.md) | 🇧🇬 [Български](README.bg.md) | 🇩🇰 [Dansk](README.da.md) | 🇫🇮 [Suomi](README.fi.md) | 🇮🇱 [עברית](README.he.md) | 🇭🇺 [Magyar](README.hu.md) | 🇮🇩 [Bahasa Indonesia](README.id.md) | 🇰🇷 [한국어](README.ko.md) | 🇲🇾 [Bahasa Melayu](README.ms.md) | 🇳🇱 [Nederlands](README.nl.md) | 🇳🇴 [Norsk](README.no.md) | 🇵🇹 [Português (Portugal)](README.pt.md) | 🇷🇴 [Română](README.ro.md) | 🇵🇱 [Polski](README.pl.md) | 🇸🇰 [Slovenčina](README.sk.md) | 🇸🇪 [Svenska](README.sv.md) | 🇵🇭 [Filipino](README.phi.md)

</div>

<br/>

## 😤 Il Problema

Sei nel bel mezzo di una sessione di codifica assistita da IA. Claude sta generando codice, Gemini sta revisionando la tua architettura. Poi il telefono squilla, qualcuno ha bisogno di te in cucina, o vuoi semplicemente spostarti sul divano.

**Le tue opzioni oggi:**

- ❌ Tornare alla scrivania ogni volta che l'IA risponde
- ❌ Provare a leggere il monitor dall'altra parte della stanza
- ❌ Copiare e incollare in un'altra app mobile (perdendo il contesto)
- ❌ Semplicemente... smettere di programmare

**Ci deve essere un modo migliore.**

## ✅ La Soluzione

OmniAntigravity rispecchia **l'intera chat IA di Antigravity** sul tuo telefono — in tempo reale, con interazione completa. Leggi le risposte, invia messaggi di follow-up, cambia modelli IA, gestisci più finestre dell'editor. Tutto dal tuo browser mobile.

```bash
npx omni-antigravity-remote-chat
```

Tutto qui. Apri l'URL sul telefono. Sei dentro. 🚀

---

## 📸 In Azione

<div align="center">

|                Interfaccia Principale                |                   Selezione Modello                    |                  Pronto per Chattare                  |
| :--------------------------------------------------: | :----------------------------------------------------: | :---------------------------------------------------: |
| <img src="assets/screenshot-main.png" width="280" /> | <img src="assets/screenshot-models.png" width="280" /> | <img src="assets/screenshot-input.png" width="280" /> |
|       UI dark premium con sync in tempo reale        |             Passa tra Gemini, Claude, GPT              |            Invia messaggi dal tuo telefono            |

</div>

---

## ⚡ Iniziare

### Un comando — zero configurazione:

```bash
npx omni-antigravity-remote-chat
```

### O installa globalmente:

```bash
npm install -g omni-antigravity-remote-chat
omni-chat
```

### O esegui con Docker:

```bash
docker run -d --name omni-chat \
  --network host \
  -e APP_PASSWORD=la_tua_password \
  diegosouzapw/omni-antigravity-remote-chat:latest
```

### Prerequisito

Avvia Antigravity in modalità debug (configurazione una tantum):

```bash
antigravity . --remote-debugging-port=7800
```

> 💡 **Suggerimento:** Aggiungi `alias agd='antigravity . --remote-debugging-port=7800'` al tuo `~/.bashrc`

---

## 🏆 Perché gli Sviluppatori lo Scelgono

|     | Funzionalità             | Dettagli                                                                       |
| --- | ------------------------ | ------------------------------------------------------------------------------ |
| 🛋️  | **Programma da ovunque** | Leggi e rispondi alle chat IA dal divano, dal letto o dalla cucina             |
| 🪟  | **Multi-finestra**       | Passa tra più istanze Antigravity da un solo telefono                          |
| 🔄  | **Sync in tempo reale**  | < 100ms di latenza via WebSocket — gli aggiornamenti appaiono istantaneamente  |
| 🤖  | **Cambio modello**       | Passa tra Gemini, Claude, GPT da un dropdown mobile                            |
| 📋  | **Cronologia chat**      | Sfoglia e riprendi conversazioni precedenti su mobile                          |
| 🔒  | **Sicuro per default**   | HTTPS, autenticazione con password, sessioni cookie, auto-auth LAN             |
| 🌐  | **Accesso remoto**       | Supporto ngrok con QR code — accedi da ovunque                                 |
| 🐳  | **Docker pronto**        | Deploy con un singolo comando                                                  |
| ♻️  | **Codice modulare**      | Architettura pulita con tipizzazione JSDoc (`config`, `state`, `utils`, `cdp`) |

---

## 📱 Come Funziona

```
┌─────────────┐    CDP (7800)    ┌──────────────┐    HTTPS/WS (4747)    ┌─────────────┐
│ Antigravity  │ ◄──────────────► │  Node Server  │ ◄──────────────────► │  Telefono    │
│  (Desktop)   │    DOM snapshot   │  (server.js)  │    specchio+controllo│  (Browser)   │
└─────────────┘                  └──────────────┘                      └─────────────┘
```

Il server si connette ad Antigravity tramite il **Chrome DevTools Protocol (CDP)**, cattura il DOM della chat in tempo reale e lo trasmette al tuo telefono via WebSocket. Le azioni sul telefono (invio messaggi, cambio modelli) vengono eseguite sul desktop via CDP.

**Zero impatto sul desktop** — il mirroring è in sola lettura finché non interagisci. Nessun plugin, nessuna estensione, nessuna modifica ad Antigravity necessaria.

---

## 🔑 Configurazione

```bash
cp .env.example .env
```

| Variabile         | Predefinito       | Descrizione                         |
| ----------------- | ----------------- | ----------------------------------- |
| `APP_PASSWORD`    | `antigravity`     | Password di autenticazione          |
| `PORT`            | `4747`            | Porta del server                    |
| `COOKIE_SECRET`   | _(auto-generato)_ | Segreto per la firma dei cookie     |
| `AUTH_SALT`       | _(auto-generato)_ | Salt aggiuntivo per i token di auth |
| `NGROK_AUTHTOKEN` | _(opzionale)_     | Per accesso remoto via ngrok        |

---

## 🤝 Contribuire

1. Fai il fork del repository
2. Crea il tuo branch feature (`git checkout -b feature/funzionalita-incredibile`)
3. Committa le modifiche (`git commit -m 'Aggiunge funzionalità incredibile'`)
4. Pusha verso il branch (`git push origin feature/funzionalita-incredibile`)
5. Apri una Pull Request

Consulta [CONTRIBUTING.md](CONTRIBUTING.md) per le linee guida dettagliate.

---

## 🙏 Ringraziamenti

Un ringraziamento speciale a **[Krishna Kanth B](https://github.com/krishnakanthb13)** — il creatore originale del concetto di chat mobile per Windsurf che ha ispirato questo progetto. OmniAntigravity estende quella base con gestione multi-finestra, gestione CDP robusta, packaging NPM/Docker e una UI mobile-first premium.

---

## 📄 Licenza

GPL-3.0 — vedi [LICENSE](LICENSE) per i dettagli.

---

<div align="center">
  <sub>Fatto con ❤️ per gli sviluppatori che programmano da ovunque</sub>
  <br/>
  <sub><a href="https://github.com/diegosouzapw/OmniAntigravityRemoteChat">github.com/diegosouzapw/OmniAntigravityRemoteChat</a></sub>
</div>
