<div align="center">

# 📱 OmniAntigravity Remote Chat

### あなたのAIコーディングセッションは、デスクを離れても終わらない。

<br/>

<img src="assets/hero-banner.png" alt="ソファからAIを操作" width="700" />

<br/>
<br/>

![Version](https://img.shields.io/badge/version-0.5.3-6366f1) ![Node](https://img.shields.io/badge/node-22%2B-10b981) ![CI](https://github.com/diegosouzapw/OmniAntigravityRemoteChat/actions/workflows/ci.yml/badge.svg) ![License](https://img.shields.io/badge/license-GPL--3.0-blue)

[![npm](https://img.shields.io/npm/v/omni-antigravity-remote-chat?color=cc3534&logo=npm)](https://www.npmjs.com/package/omni-antigravity-remote-chat) [![npm downloads](https://img.shields.io/npm/dm/omni-antigravity-remote-chat?color=blue&logo=npm)](https://www.npmjs.com/package/omni-antigravity-remote-chat) [![Docker](https://img.shields.io/docker/pulls/diegosouzapw/omni-antigravity-remote-chat?color=2496ED&logo=docker&logoColor=white)](https://hub.docker.com/r/diegosouzapw/omni-antigravity-remote-chat)

**AntigravityのAIチャットをリアルタイムでスマホにミラーリング。**
<br/>
**メッセージ送信。モデル切替。ウィンドウ管理。すべてモバイルブラウザから。**

[始める](#-始める) · [スクリーンショット](#-実際の動作) · [仕組み](#-仕組み) · [Docker](https://hub.docker.com/r/diegosouzapw/omni-antigravity-remote-chat) · [npm](https://www.npmjs.com/package/omni-antigravity-remote-chat)

🌐 **利用可能な言語：** 🇺🇸 [English](README.md) | 🇧🇷 [Português (Brasil)](README.pt-BR.md) | 🇪🇸 [Español](README.es.md) | 🇫🇷 [Français](README.fr.md) | 🇮🇹 [Italiano](README.it.md) | 🇷🇺 [Русский](README.ru.md) | 🇨🇳 [中文 (简体)](README.zh-CN.md) | 🇩🇪 [Deutsch](README.de.md) | 🇮🇳 [हिन्दी](README.in.md) | 🇹🇭 [ไทย](README.th.md) | 🇺🇦 [Українська](README.uk-UA.md) | 🇸🇦 [العربية](README.ar.md) | 🇯🇵 日本語 | 🇻🇳 [Tiếng Việt](README.vi.md) | 🇧🇬 [Български](README.bg.md) | 🇩🇰 [Dansk](README.da.md) | 🇫🇮 [Suomi](README.fi.md) | 🇮🇱 [עברית](README.he.md) | 🇭🇺 [Magyar](README.hu.md) | 🇮🇩 [Bahasa Indonesia](README.id.md) | 🇰🇷 [한국어](README.ko.md) | 🇲🇾 [Bahasa Melayu](README.ms.md) | 🇳🇱 [Nederlands](README.nl.md) | 🇳🇴 [Norsk](README.no.md) | 🇵🇹 [Português (Portugal)](README.pt.md) | 🇷🇴 [Română](README.ro.md) | 🇵🇱 [Polski](README.pl.md) | 🇸🇰 [Slovenčina](README.sk.md) | 🇸🇪 [Svenska](README.sv.md) | 🇵🇭 [Filipino](README.phi.md)

</div>

<br/>

## 😤 問題

AI支援コーディングセッションの真っ最中。Claudeがコードを生成し、Geminiがアーキテクチャをレビューしている。そこで電話が鳴る、キッチンで呼ばれる、ソファに移動したい。

**今日の選択肢：**

- ❌ AIが応答するたびにデスクに戻る
- ❌ 部屋の反対側からモニターを読もうとする
- ❌ 別のモバイルアプリにコピー＆ペースト（コンテキストを失う）
- ❌ ただ…コーディングをやめる

**もっと良い方法があるはず。**

## ✅ ソリューション

OmniAntigravityは**Antigravityの全AIチャット**をスマホにミラーリングします — リアルタイム、完全なインタラクション付き。応答を読み、フォローアップメッセージを送り、AIモデルを切り替え、複数のエディタウィンドウを管理。すべてモバイルブラウザから。

```bash
npx omni-antigravity-remote-chat
```

以上です。スマホでURLを開きます。接続完了。🚀

---

## 📸 実際の動作

<div align="center">

|                メインインターフェース                |                       モデル選択                       |                   チャット準備完了                    |
| :--------------------------------------------------: | :----------------------------------------------------: | :---------------------------------------------------: |
| <img src="assets/screenshot-main.png" width="280" /> | <img src="assets/screenshot-models.png" width="280" /> | <img src="assets/screenshot-input.png" width="280" /> |
|         プレミアムダークUI、リアルタイム同期         |             Gemini、Claude、GPT を切り替え             |              スマホからメッセージを送信               |

</div>

---

## ⚡ 始める

### 1コマンド — 設定不要：

```bash
npx omni-antigravity-remote-chat
```

### またはグローバルインストール：

```bash
npm install -g omni-antigravity-remote-chat
omni-chat
```

### またはDockerで実行：

```bash
docker run -d --name omni-chat \
  --network host \
  -e APP_PASSWORD=your_password \
  diegosouzapw/omni-antigravity-remote-chat:latest
```

### 前提条件

デバッグモードでAntigravityを起動（初回のみ）：

```bash
antigravity . --remote-debugging-port=7800
```

> 💡 **ヒント：** `~/.bashrc` に `alias agd='antigravity . --remote-debugging-port=7800'` を追加

---

## 🏆 開発者が選ぶ理由

|     | 機能                   | 詳細                                                                  |
| --- | ---------------------- | --------------------------------------------------------------------- |
| 🛋️  | **どこからでもコード** | ソファ、ベッド、キッチンからAIチャットを読んで返信                    |
| 🪟  | **マルチウィンドウ**   | 1台のスマホから複数のAntigravityインスタンスを切り替え                |
| 🔄  | **リアルタイム同期**   | WebSocket経由 < 100msレイテンシ — 更新が即座に表示                    |
| 🤖  | **モデル切替**         | モバイルドロップダウンからGemini、Claude、GPTを切り替え               |
| 📋  | **チャット履歴**       | モバイルで過去の会話を閲覧・再開                                      |
| 🔒  | **デフォルトで安全**   | HTTPS、パスワード認証、Cookieセッション、LAN自動認証                  |
| 🌐  | **リモートアクセス**   | QRコード付きngrokサポート — どこからでもアクセス                      |
| 🐳  | **Docker対応**         | ワンライナーコンテナデプロイ                                          |
| ♻️  | **モジュラーコード**   | JSDoc型付きクリーンアーキテクチャ (`config`, `state`, `utils`, `cdp`) |

---

## 📱 仕組み

```
┌─────────────┐    CDP (7800)    ┌──────────────┐    HTTPS/WS (4747)    ┌─────────────┐
│ Antigravity  │ ◄──────────────► │  Node Server  │ ◄──────────────────► │   スマホ     │
│  (デスクトップ)│    DOM snapshot   │  (server.js)  │  ミラー + コントロール│  (ブラウザ)  │
└─────────────┘                  └──────────────┘                      └─────────────┘
```

サーバーは **Chrome DevTools Protocol (CDP)** でAntigravityに接続し、チャットDOMをリアルタイムでキャプチャし、WebSocket経由でスマホにストリーミングします。スマホでの操作（メッセージ送信、モデル切替）はCDP経由でデスクトップで実行されます。

**デスクトップへの影響ゼロ** — インタラクションするまでミラーリングは読み取り専用です。プラグイン不要、拡張不要、Antigravityの変更不要。

---

## 🔑 設定

```bash
cp .env.example .env
```

| 変数              | デフォルト    | 説明                          |
| ----------------- | ------------- | ----------------------------- |
| `APP_PASSWORD`    | `antigravity` | 認証パスワード                |
| `PORT`            | `4747`        | サーバーポート                |
| `COOKIE_SECRET`   | _(自動生成)_  | Cookie署名用シークレット      |
| `AUTH_SALT`       | _(自動生成)_  | 認証トークン用追加ソルト      |
| `NGROK_AUTHTOKEN` | _(任意)_      | ngrok経由のリモートアクセス用 |

---

## 🤝 コントリビューション

1. リポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. Pull Requestを作成

詳細なガイドラインは [CONTRIBUTING.md](CONTRIBUTING.md) をご覧ください。

---

## 🙏 謝辞

**[Krishna Kanth B](https://github.com/krishnakanthb13)** に特別な感謝を — このプロジェクトのインスピレーションとなったWindsurfモバイルチャットコンセプトのオリジナル作者です。OmniAntigravityはその基盤の上に、マルチウィンドウ管理、堅牢なCDP処理、NPM/Dockerパッケージング、プレミアムモバイルファーストUIを構築しています。

---

## 📄 ライセンス

GPL-3.0 — 詳細は [LICENSE](LICENSE) をご覧ください。

---

<div align="center">
  <sub>どこからでもコーディングする開発者のために ❤️ で作られました</sub>
  <br/>
  <sub><a href="https://github.com/diegosouzapw/OmniAntigravityRemoteChat">github.com/diegosouzapw/OmniAntigravityRemoteChat</a></sub>
</div>
