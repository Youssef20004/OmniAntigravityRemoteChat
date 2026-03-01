<div align="center">

# 📱 OmniAntigravity Remote Chat

### Votre session IA ne doit pas se terminer quand vous quittez votre bureau.

<br/>

<img src="assets/hero-banner.png" alt="Contrôlez votre IA depuis le canapé" width="700" />

<br/>
<br/>

![Version](https://img.shields.io/badge/version-0.5.3-6366f1) ![Node](https://img.shields.io/badge/node-22%2B-10b981) ![CI](https://github.com/diegosouzapw/OmniAntigravityRemoteChat/actions/workflows/ci.yml/badge.svg) ![License](https://img.shields.io/badge/license-GPL--3.0-blue)

[![npm](https://img.shields.io/npm/v/omni-antigravity-remote-chat?color=cc3534&logo=npm)](https://www.npmjs.com/package/omni-antigravity-remote-chat) [![npm downloads](https://img.shields.io/npm/dm/omni-antigravity-remote-chat?color=blue&logo=npm)](https://www.npmjs.com/package/omni-antigravity-remote-chat) [![Docker](https://img.shields.io/docker/pulls/diegosouzapw/omni-antigravity-remote-chat?color=2496ED&logo=docker&logoColor=white)](https://hub.docker.com/r/diegosouzapw/omni-antigravity-remote-chat)

**Reflétez le chat IA d'Antigravity sur votre téléphone en temps réel.**
<br/>
**Envoyez des messages. Changez de modèle. Gérez les fenêtres. Tout depuis votre navigateur mobile.**

[Démarrer](#-démarrer) · [Captures](#-en-action) · [Fonctionnement](#-comment-ça-marche) · [Docker](https://hub.docker.com/r/diegosouzapw/omni-antigravity-remote-chat) · [npm](https://www.npmjs.com/package/omni-antigravity-remote-chat)

🌐 **Disponible en :** 🇺🇸 [English](README.md) | 🇧🇷 [Português (Brasil)](README.pt-BR.md) | 🇪🇸 [Español](README.es.md) | 🇫🇷 Français | 🇮🇹 [Italiano](README.it.md) | 🇷🇺 [Русский](README.ru.md) | 🇨🇳 [中文 (简体)](README.zh-CN.md) | 🇩🇪 [Deutsch](README.de.md) | 🇮🇳 [हिन्दी](README.in.md) | 🇹🇭 [ไทย](README.th.md) | 🇺🇦 [Українська](README.uk-UA.md) | 🇸🇦 [العربية](README.ar.md) | 🇯🇵 [日本語](README.ja.md) | 🇻🇳 [Tiếng Việt](README.vi.md) | 🇧🇬 [Български](README.bg.md) | 🇩🇰 [Dansk](README.da.md) | 🇫🇮 [Suomi](README.fi.md) | 🇮🇱 [עברית](README.he.md) | 🇭🇺 [Magyar](README.hu.md) | 🇮🇩 [Bahasa Indonesia](README.id.md) | 🇰🇷 [한국어](README.ko.md) | 🇲🇾 [Bahasa Melayu](README.ms.md) | 🇳🇱 [Nederlands](README.nl.md) | 🇳🇴 [Norsk](README.no.md) | 🇵🇹 [Português (Portugal)](README.pt.md) | 🇷🇴 [Română](README.ro.md) | 🇵🇱 [Polski](README.pl.md) | 🇸🇰 [Slovenčina](README.sk.md) | 🇸🇪 [Svenska](README.sv.md) | 🇵🇭 [Filipino](README.phi.md)

</div>

<br/>

## 😤 Le Problème

Vous êtes en pleine session de codage assisté par IA. Claude génère du code, Gemini révise votre architecture. Puis votre téléphone sonne, quelqu'un a besoin de vous dans la cuisine, ou vous voulez simplement vous installer dans le canapé.

**Vos options aujourd'hui :**

- ❌ Retourner au bureau à chaque réponse de l'IA
- ❌ Essayer de lire votre écran depuis l'autre bout de la pièce
- ❌ Copier-coller dans une autre app mobile (en perdant le contexte)
- ❌ Tout simplement... arrêter de coder

**Il doit y avoir une meilleure solution.**

## ✅ La Solution

OmniAntigravity reflète **l'intégralité du chat IA d'Antigravity** sur votre téléphone — en temps réel, avec interaction complète. Lisez les réponses, envoyez des messages de suivi, changez de modèle IA, gérez plusieurs fenêtres. Tout depuis votre navigateur mobile.

```bash
npx omni-antigravity-remote-chat
```

C'est tout. Ouvrez l'URL sur votre téléphone. Vous êtes connecté. 🚀

---

## 📸 En Action

<div align="center">

|                 Interface Principale                 |                  Sélection de Modèle                   |                    Prêt à Chatter                     |
| :--------------------------------------------------: | :----------------------------------------------------: | :---------------------------------------------------: |
| <img src="assets/screenshot-main.png" width="280" /> | <img src="assets/screenshot-models.png" width="280" /> | <img src="assets/screenshot-input.png" width="280" /> |
|       UI dark premium avec sync en temps réel        |           Basculez entre Gemini, Claude, GPT           |      Envoyez des messages depuis votre téléphone      |

</div>

---

## ⚡ Démarrer

### Une commande — zéro configuration :

```bash
npx omni-antigravity-remote-chat
```

### Ou installez globalement :

```bash
npm install -g omni-antigravity-remote-chat
omni-chat
```

### Ou lancez avec Docker :

```bash
docker run -d --name omni-chat \
  --network host \
  -e APP_PASSWORD=votre_mot_de_passe \
  diegosouzapw/omni-antigravity-remote-chat:latest
```

### Prérequis

Lancez Antigravity en mode debug (configuration unique) :

```bash
antigravity . --remote-debugging-port=7800
```

> 💡 **Astuce :** Ajoutez `alias agd='antigravity . --remote-debugging-port=7800'` à votre `~/.bashrc`

---

## 🏆 Pourquoi les Développeurs le Choisissent

|     | Fonctionnalité           | Détails                                                                         |
| --- | ------------------------ | ------------------------------------------------------------------------------- |
| 🛋️  | **Codez de partout**     | Lisez et répondez aux chats IA depuis le canapé, le lit ou la cuisine           |
| 🪟  | **Multi-fenêtres**       | Basculez entre plusieurs instances Antigravity depuis un seul téléphone         |
| 🔄  | **Sync temps réel**      | < 100ms de latence via WebSocket — les mises à jour apparaissent instantanément |
| 🤖  | **Changement de modèle** | Basculez entre Gemini, Claude, GPT depuis un menu déroulant mobile              |
| 📋  | **Historique de chat**   | Parcourez et reprenez les conversations précédentes sur mobile                  |
| 🔒  | **Sécurisé par défaut**  | HTTPS, authentification par mot de passe, sessions cookie, auto-auth LAN        |
| 🌐  | **Accès distant**        | Support ngrok avec QR code — accédez de n'importe où                            |
| 🐳  | **Docker prêt**          | Déploiement en une seule commande                                               |
| ♻️  | **Code modulaire**       | Architecture propre avec typage JSDoc (`config`, `state`, `utils`, `cdp`)       |

---

## 📱 Comment Ça Marche

```
┌─────────────┐    CDP (7800)    ┌──────────────┐    HTTPS/WS (4747)    ┌─────────────┐
│ Antigravity  │ ◄──────────────► │  Node Server  │ ◄──────────────────► │  Téléphone   │
│  (Bureau)    │    DOM snapshot   │  (server.js)  │    miroir + contrôle │  (Navigateur)│
└─────────────┘                  └──────────────┘                      └─────────────┘
```

Le serveur se connecte à Antigravity via le **Chrome DevTools Protocol (CDP)**, capture le DOM du chat en temps réel et le transmet à votre téléphone via WebSocket. Les actions sur votre téléphone (envoi de messages, changement de modèle) sont exécutées sur le bureau via CDP.

**Zéro impact sur votre bureau** — le miroir est en lecture seule jusqu'à ce que vous interagissiez. Pas de plugins, pas d'extensions, aucune modification d'Antigravity nécessaire.

---

## 🪟 Gestion Multi-Fenêtres

Gérez **plusieurs instances Antigravity** depuis un seul téléphone :

- **Sélecteur de Fenêtre** — Appuyez sur 🖥️ pour voir toutes les fenêtres Antigravity ouvertes
- **Changement Instantané** — Sélectionnez n'importe quelle fenêtre, mirroring en 2 secondes
- **Filtrage Intelligent** — Affiche uniquement les vraies fenêtres éditeur (masque Paramètres, Launchpad)
- **Ouvrir des Fenêtres** — Créez de nouvelles instances Antigravity directement depuis votre téléphone

---

## 🔑 Configuration

```bash
cp .env.example .env
```

| Variable          | Par défaut      | Description                          |
| ----------------- | --------------- | ------------------------------------ |
| `APP_PASSWORD`    | `antigravity`   | Mot de passe d'authentification      |
| `PORT`            | `4747`          | Port du serveur                      |
| `COOKIE_SECRET`   | _(auto-généré)_ | Secret pour la signature des cookies |
| `AUTH_SALT`       | _(auto-généré)_ | Salt supplémentaire pour les tokens  |
| `NGROK_AUTHTOKEN` | _(optionnel)_   | Pour l'accès distant via ngrok       |

---

## 🛠️ Dépannage

| Problème                     | Solution                                                                         |
| ---------------------------- | -------------------------------------------------------------------------------- |
| "CDP not found"              | Lancez Antigravity avec `--remote-debugging-port=7800`                           |
| "EADDRINUSE"                 | Changez `PORT` dans `.env`, ou arrêtez le processus sur ce port                  |
| Le téléphone ne connecte pas | Vérifiez le même réseau Wi-Fi et vérifiez le pare-feu                            |
| "Syncing..." bloqué          | Attendez 2-3s pour que les contextes CDP se chargent après changement de fenêtre |

---

## 🤝 Contribuer

1. Forkez le dépôt
2. Créez votre branche de fonctionnalité (`git checkout -b feature/fonctionnalite-incroyable`)
3. Committez vos changements (`git commit -m 'Ajoute fonctionnalité incroyable'`)
4. Poussez vers la branche (`git push origin feature/fonctionnalite-incroyable`)
5. Ouvrez une Pull Request

Consultez [CONTRIBUTING.md](CONTRIBUTING.md) pour les directives détaillées.

---

## 🙏 Remerciements

Un merci spécial à **[Krishna Kanth B](https://github.com/krishnakanthb13)** — le créateur original du concept de chat mobile pour Windsurf qui a inspiré ce projet. OmniAntigravity étend cette base avec la gestion multi-fenêtres, un traitement CDP robuste, le packaging NPM/Docker et une UI mobile-first premium.

---

## 📄 Licence

GPL-3.0 — voir [LICENSE](LICENSE) pour les détails.

---

<div align="center">
  <sub>Fait avec ❤️ pour les développeurs qui codent de partout</sub>
  <br/>
  <sub><a href="https://github.com/diegosouzapw/OmniAntigravityRemoteChat">github.com/diegosouzapw/OmniAntigravityRemoteChat</a></sub>
</div>
