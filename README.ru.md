<div align="center">

# 📱 OmniAntigravity Remote Chat

### Ваша сессия ИИ не должна заканчиваться, когда вы уходите от стола.

<br/>

<img src="assets/hero-banner.png" alt="Управляйте ИИ с дивана" width="700" />

<br/>
<br/>

![Version](https://img.shields.io/badge/version-0.5.3-6366f1) ![Node](https://img.shields.io/badge/node-22%2B-10b981) ![CI](https://github.com/diegosouzapw/OmniAntigravityRemoteChat/actions/workflows/ci.yml/badge.svg) ![License](https://img.shields.io/badge/license-GPL--3.0-blue)

[![npm](https://img.shields.io/npm/v/omni-antigravity-remote-chat?color=cc3534&logo=npm)](https://www.npmjs.com/package/omni-antigravity-remote-chat) [![npm downloads](https://img.shields.io/npm/dm/omni-antigravity-remote-chat?color=blue&logo=npm)](https://www.npmjs.com/package/omni-antigravity-remote-chat) [![Docker](https://img.shields.io/docker/pulls/diegosouzapw/omni-antigravity-remote-chat?color=2496ED&logo=docker&logoColor=white)](https://hub.docker.com/r/diegosouzapw/omni-antigravity-remote-chat)

**Отражайте чат ИИ Antigravity на телефоне в реальном времени.**
<br/>
**Отправляйте сообщения. Меняйте модели. Управляйте окнами. Всё из мобильного браузера.**

[Начать](#-начать) · [Скриншоты](#-в-действии) · [Как Работает](#-как-это-работает) · [Docker](https://hub.docker.com/r/diegosouzapw/omni-antigravity-remote-chat) · [npm](https://www.npmjs.com/package/omni-antigravity-remote-chat)

🌐 **Доступно на:** 🇺🇸 [English](README.md) | 🇧🇷 [Português (Brasil)](README.pt-BR.md) | 🇪🇸 [Español](README.es.md) | 🇫🇷 [Français](README.fr.md) | 🇮🇹 [Italiano](README.it.md) | 🇷🇺 Русский | 🇨🇳 [中文 (简体)](README.zh-CN.md) | 🇩🇪 [Deutsch](README.de.md) | 🇮🇳 [हिन्दी](README.in.md) | 🇹🇭 [ไทย](README.th.md) | 🇺🇦 [Українська](README.uk-UA.md) | 🇸🇦 [العربية](README.ar.md) | 🇯🇵 [日本語](README.ja.md) | 🇻🇳 [Tiếng Việt](README.vi.md) | 🇧🇬 [Български](README.bg.md) | 🇩🇰 [Dansk](README.da.md) | 🇫🇮 [Suomi](README.fi.md) | 🇮🇱 [עברית](README.he.md) | 🇭🇺 [Magyar](README.hu.md) | 🇮🇩 [Bahasa Indonesia](README.id.md) | 🇰🇷 [한국어](README.ko.md) | 🇲🇾 [Bahasa Melayu](README.ms.md) | 🇳🇱 [Nederlands](README.nl.md) | 🇳🇴 [Norsk](README.no.md) | 🇵🇹 [Português (Portugal)](README.pt.md) | 🇷🇴 [Română](README.ro.md) | 🇵🇱 [Polski](README.pl.md) | 🇸🇰 [Slovenčina](README.sk.md) | 🇸🇪 [Svenska](README.sv.md) | 🇵🇭 [Filipino](README.phi.md)

</div>

<br/>

## 😤 Проблема

Вы глубоко погружены в сессию кодирования с ИИ. Claude генерирует код, Gemini ревизирует архитектуру. Затем звонит телефон, кому-то нужна ваша помощь на кухне, или вы просто хотите переместиться на диван.

**Ваши варианты сегодня:**

- ❌ Возвращаться к столу каждый раз, когда ИИ отвечает
- ❌ Пытаться читать монитор с другого конца комнаты
- ❌ Копировать и вставлять в другое мобильное приложение (теряя контекст)
- ❌ Просто... перестать кодить

**Должен быть способ лучше.**

## ✅ Решение

OmniAntigravity отражает **весь чат ИИ Antigravity** на вашем телефоне — в реальном времени, с полным взаимодействием. Читайте ответы, отправляйте сообщения, переключайте модели ИИ, управляйте несколькими окнами редактора. Всё из мобильного браузера.

```bash
npx omni-antigravity-remote-chat
```

Вот и всё. Откройте URL на телефоне. Вы внутри. 🚀

---

## 📸 В Действии

<div align="center">

|                  Основной Интерфейс                  |                      Выбор Модели                      |                     Готов к Чату                      |
| :--------------------------------------------------: | :----------------------------------------------------: | :---------------------------------------------------: |
| <img src="assets/screenshot-main.png" width="280" /> | <img src="assets/screenshot-models.png" width="280" /> | <img src="assets/screenshot-input.png" width="280" /> |
|          Премиум тёмный UI с синхронизацией          |        Переключайтесь между Gemini, Claude, GPT        |           Отправляйте сообщения с телефона            |

</div>

---

## ⚡ Начать

### Одна команда — ноль конфигурации:

```bash
npx omni-antigravity-remote-chat
```

### Или установите глобально:

```bash
npm install -g omni-antigravity-remote-chat
omni-chat
```

### Или запустите через Docker:

```bash
docker run -d --name omni-chat \
  --network host \
  -e APP_PASSWORD=ваш_пароль \
  diegosouzapw/omni-antigravity-remote-chat:latest
```

### Предварительное требование

Запустите Antigravity в режиме отладки (одноразовая настройка):

```bash
antigravity . --remote-debugging-port=7800
```

> 💡 **Совет:** Добавьте `alias agd='antigravity . --remote-debugging-port=7800'` в ваш `~/.bashrc`

---

## 🏆 Почему Разработчики Выбирают Это

|     | Функция                              | Детали                                                                      |
| --- | ------------------------------------ | --------------------------------------------------------------------------- |
| 🛋️  | **Кодьте откуда угодно**             | Читайте и отвечайте на чаты ИИ с дивана, кровати или кухни                  |
| 🪟  | **Мульти-окна**                      | Переключайтесь между несколькими экземплярами Antigravity с одного телефона |
| 🔄  | **Синхронизация в реальном времени** | < 100мс задержки через WebSocket — обновления мгновенные                    |
| 🤖  | **Смена модели**                     | Переключайтесь между Gemini, Claude, GPT из мобильного выпадающего меню     |
| 📋  | **История чата**                     | Просматривайте и возобновляйте прошлые разговоры на мобильном               |
| 🔒  | **Безопасность по умолчанию**        | HTTPS, аутентификация паролем, сессии на куки, авто-аутентификация LAN      |
| 🌐  | **Удалённый доступ**                 | Поддержка ngrok с QR-кодом — доступ откуда угодно                           |
| 🐳  | **Docker готов**                     | Развёртывание одной командой                                                |
| ♻️  | **Модульный код**                    | Чистая архитектура с типизацией JSDoc (`config`, `state`, `utils`, `cdp`)   |

---

## 📱 Как Это Работает

```
┌─────────────┐    CDP (7800)    ┌──────────────┐    HTTPS/WS (4747)    ┌─────────────┐
│ Antigravity  │ ◄──────────────► │  Node Server  │ ◄──────────────────► │  Телефон     │
│  (Десктоп)   │    DOM snapshot   │  (server.js)  │  зеркало + контроль │  (Браузер)   │
└─────────────┘                  └──────────────┘                      └─────────────┘
```

Сервер подключается к Antigravity через **Chrome DevTools Protocol (CDP)**, захватывает DOM чата в реальном времени и передаёт его на ваш телефон через WebSocket. Действия на телефоне (отправка сообщений, смена моделей) выполняются обратно на десктопе через CDP.

**Ноль влияния на десктоп** — зеркалирование только для чтения, пока вы не начнёте взаимодействовать. Без плагинов, без расширений, без модификаций Antigravity.

---

## 🔑 Конфигурация

```bash
cp .env.example .env
```

| Переменная        | По умолчанию       | Описание                             |
| ----------------- | ------------------ | ------------------------------------ |
| `APP_PASSWORD`    | `antigravity`      | Пароль аутентификации                |
| `PORT`            | `4747`             | Порт сервера                         |
| `COOKIE_SECRET`   | _(авто-генерация)_ | Секрет для подписи куки              |
| `AUTH_SALT`       | _(авто-генерация)_ | Дополнительная соль для токенов auth |
| `NGROK_AUTHTOKEN` | _(опционально)_    | Для удалённого доступа через ngrok   |

---

## 🤝 Участие

1. Сделайте форк репозитория
2. Создайте ветку фичи (`git checkout -b feature/потрясающая-фича`)
3. Закоммитьте изменения (`git commit -m 'Добавляет потрясающую фичу'`)
4. Запушьте ветку (`git push origin feature/потрясающая-фича`)
5. Откройте Pull Request

Смотрите [CONTRIBUTING.md](CONTRIBUTING.md) для подробных рекомендаций.

---

## 🙏 Благодарности

Особая благодарность **[Krishna Kanth B](https://github.com/krishnakanthb13)** — оригинальному создателю концепции мобильного чата для Windsurf, который вдохновил этот проект. OmniAntigravity расширяет эту основу управлением мульти-окнами, надёжной обработкой CDP, упаковкой NPM/Docker и премиальным mobile-first UI.

---

## 📄 Лицензия

GPL-3.0 — смотрите [LICENSE](LICENSE) для подробностей.

---

<div align="center">
  <sub>Сделано с ❤️ для разработчиков, которые кодят отовсюду</sub>
  <br/>
  <sub><a href="https://github.com/diegosouzapw/OmniAntigravityRemoteChat">github.com/diegosouzapw/OmniAntigravityRemoteChat</a></sub>
</div>
