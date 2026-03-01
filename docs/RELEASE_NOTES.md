# 📦 Release Notes

All notable changes to **Antigravity Phone Connect** are documented here, in reverse chronological order (latest first).

---

## v0.2.17 - UI Polish & Model Compatibility 🌟
**Release Date:** February 20, 2026

---

### 🚀 New Features & Improvements
- **Glassmorphism UI**: Upgraded the quick actions and settings bars with a gorgeous new glassmorphism effect for a sleek, modern, and premium mobile experience.
- **Latest AI Models**: Automatically updated and verified support for the latest model versions from Gemini, Claude, and OpenAI to ensure zero disruption.
- **Improved Dark Mode Tracking**: Enhanced UI styling and state capture logic designed to provide maximum clarity and correct model detection down to the CSS layer while in dark mode.

### 📚 Documentation Updates
- Updated `README.md` to showcase the new glassmorphism and model coverage features.
- Synced `CODE_DOCUMENTATION.md` and `DESIGN_PHILOSOPHY.md` to capture recent visual overrides and DOM scraping improvements.

---

## v0.2.13 - Smart Cleanup & Reliability 🛡️ (supports latest release)
**Release Date:** February 7, 2026

---

### 🚀 Performance & UI Reliability
- **Aggressive DOM Cleanup**: Rewrote the snapshot capture logic to filter out more desktop-specific noise, including "Review Changes" bars, "Linked Objects," and leftover desktop input elements.
- **Improved Model Selection**: Implemented a multi-strategy polling approach for the remote Model Selector, significantly increasing reliability when switching between Gemini, Claude, and GPT.
- **Smart Container Detection**: The server now supports multiple chat container IDs (including legacy `#conversation` and newer `#cascade`), ensuring compatibility across various Antigravity versions.

### 📚 Documentation & Developer Experience
- **Documentation Overhaul**: Major updates to `README.md`, `CODE_DOCUMENTATION.md`, and `DESIGN_PHILOSOPHY.md` to reflect the current security model and new features.
- **Context Menu Visibility**: Added documentation for the native Windows/Linux right-click context menu installation scripts.
- **Setup Refinement**: Clearer instructions for self-signed certificate handling and Web Mode (ngrok) configuration.

### 🐛 Bug Fixes & Refinements
- **UI Overflow**: Fixed an issue where the history panel would occasionally overflow on small mobile screens.
- **Empty State Formatting**: Corrected HTML formatting in the empty chat state component.
- **Process Cleanup**: Enhanced the port-killing logic to handle stubborn "ghost" processes on Windows more reliably.

---

## v0.2.6 - Full-Screen History & Visual Upgrades 📜
**Release Date:** February 1, 2026

---

### ✨ NEW: Mobile History Experience
- **Full-Screen History Layer**: Replaced the cramped history view with a dedicated, high-density full-screen layer for mobile.
- **Remote Conversation Switching**: Tap any past conversation on your phone to instantly switch the desktop session to that chat.
- **History Icon**: A new dedicated icon in the header allows for instant access to your past chats.

### 🚀 Visual & UX Improvements
- **Visual Context Menus**: Added native icons to the Windows right-click menu ("Open with Antigravity (Debug)") for a premium feel.
- **Zero-Config Setup**: Launchers now automatically create a `.env` file from templates if it's missing.
- **Frictionless Experience**: Improved setup guidance for first-time web access and remote configurations.

---

## v0.2.1 - Magic Links & Unified Launcher ✨
**Release Date:** January 21, 2026

---

### ✨ NEW: Magic Link Auto-Login
- **QR Code Magic**: In Web Mode, the QR code now embeds your password! Just scan it to log in instantly—no typing required.
- **Smart Redirects**: Automatically sets your secure session cookie and seamlessly redirects you to the app interface.

### 🚀 Unified Launcher Experience
- **One Script to Rule Them All**: Introduced `launcher.py`, a robust Python core that powers both Local and Web modes.
- **Improved Local Mode**:
  - Automatically detects if you have SSL certificates and generates the correct `https://` local URL.
  - Generates a QR code for your local Wi-Fi IP for easy connecting.
- **Cleaner Interface**:
  - Server logs are now redirected to `server_log.txt`, keeping your terminal screen calm and focused.
  - Displays clear, numbered steps for connecting on both Local and Web modes.

### 🛡️ Enhanced Troubleshooting
- **Real-Time Diagnostics**: The launcher now monitors the server log in real-time.
- **Immediate Alerts**: If the server can't find the Antigravity editor (CDP), it instantly flashes a **RED WARNING** in the terminal with specific fix instructions (e.g., "Open with Antigravity (Debug)").

### 🐛 Bug Fixes
- **Socket Error**: Fixed a crash in `launcher.py` related to `socket.AF_INET` initialization.
- **HTTPS Mismatch**: Fixed an issue where Local Mode would generate `http://` links even when the server was running securely on `https://`.

---

## v0.2.0 - Global Remote Access (Web Mode) 🌍
**Release Date:** January 21, 2026

---

### ✨ NEW: World-Wide Remote Access
- **Global Tunneling**: Integrated `ngrok` support via `tunnel.py` to expose the server securely to the internet.
- **Mobile Data Support**: Access your Antigravity chat from anywhere without needing to be on the same Wi-Fi.
- **One-Click Web Launchers**: New `start_ag_phone_connect_web.bat` and `.sh` scripts that automate server startup, tunnel creation, and passcode management.

### 🔒 Security & Authentication
- **Password Protection**: Introduced a passcode system for all remote sessions.
- **Passcode Auto-Generation**: Automatically generates a temporary 6-digit passcode if no password is set in `.env`.
- **Conditional Auth**: Intelligently bypasses authentication for devices on the same local Wi-Fi for a seamless home experience.
- **Secure Sessions**: Implemented signed `httpOnly` cookies for robust session management.

### 🛡️ Improved Process Management
- **Aggressive Cleanup**: Launchers now forcefully kill any hidden "ghost" processes from previous messy exits, ensuring a clean start every time.
- **Smarter Exit Handlers**: `Ctrl+C` now triggers a graceful shutdown and automatically closes the terminal window after a 3-second countdown.

### 🚀 Optimization
- **Data Compression**: Gzip compression added to all snapshots, reducing mobile data usage and speeding up loading on thin signals.
- **Express Speed**: Snapshots are now served with explicit UTF-8 encoding and optimized headers to prevent character corruption on mobile proxies.

---

## v0.1.7 - Robustness & Stability Update 🛡️
**Release Date:** January 21, 2026

---

### ✨ Key Improvements

#### 🔄 Smart Reconnection
- **Auto-Recovery**: Server now automatically detects lost CDP connections (e.g., if you close/reopen Antigravity) and reconnects without needing a restart.
- **Resilient Startup**: You can now start the server *before* Antigravity. It will patiently poll ("🔍 Looking for Antigravity...") until it finds the debug port.
- **Context Awareness**: Improved logic to track active execution contexts, preventing "stuck" snapshots when tabs are closed or refreshed.

#### 🛠️ Frontend & Performance
- **Client-Side Rendering**: Fixed a critical bug where the mobile client would hang on loading due to a syntax error in dynamic CSS injection.
- **Optimized Capture**: Rewrote the CSS gathering logic to use array joining instead of string concatenation, improving performance on large chat histories.
- **Syntax Fixes**: Corrected template literal escaping in the snapshot capture script (`\n` vs `\\n`) to prevent runtime evaluation errors.

#### 🔍 Enhanced Diagnostics
- **Throttled Logging**: Added intelligent logging that warns about common issues (like "cascade not found") only once every 10 seconds, preventing console spam.
- **Actionable Tips**: Error messages now include helpful hints (e.g., "Tip: Ensure an active chat is open in Antigravity").

#### 🐛 Bug Fixes
- **Registry Path Handling**: Fixed `install_context_menu.bat` to correctly handle installation paths containing spaces (wrapping `%V` in quotes).
- **Process Cleanup**: Improved the "Auto-Port Kill" feature to be more reliable on Windows.

---

## v0.1.6 - Mobile Copy & Stability Improvements 📋
**Release Date:** January 20, 2026

---

### ✨ New Features

#### 📋 Mobile Code Block Copy Button
- **One-Tap Copy**: Small copy icon appears next to all code blocks on mobile
- **Cross-Platform Support**: Works on Android, iOS, Windows, and macOS browsers
- **Visual Feedback**: Icon turns into a green checkmark (✓) on successful copy
- **Clipboard API**: Uses modern `navigator.clipboard` with fallback to `execCommand` for older browsers
- **Minimal Design**: Icon-only button, no text, no frame - clean and unobtrusive

#### 🔄 Automatic Port Cleanup
- **No More EADDRINUSE**: Server automatically kills any existing process on port 3000 before starting
- **Cross-Platform**: Works on Windows (`taskkill`), Linux (`kill`), and macOS (`kill`)
- **Console Notification**: Shows `⚠️ Killed existing process on port 3000 (PID: XXXX)` when cleanup occurs

### 🐛 Bug Fixes

#### 📜 Scroll Jumping Fix
- **Problem**: When scrolling on phone, the view would jump to bottom after each snapshot update
- **Solution**: Added 3-second scroll lock that respects user scroll position
- **Smart Detection**: Auto-scroll resumes when user scrolls back to bottom or taps scroll-to-bottom button
- **Percentage-Based**: Uses scroll percentage for more accurate position restoration

### 📄 Documentation Updates

- **README.md**: Completely reorganized Quick Start into 4 clear steps with correct order
- **CODE_DOCUMENTATION.md**: Updated Execution Flow section with startup sequence requirements
- **Added Warning**: Clear callout that order matters - Antigravity + chat must be running before server

### 🚀 Startup Sequence (Important!)

> ⚠️ The order of steps matters! Follow this sequence:

1. **Start Antigravity** with `--remote-debugging-port=9000`
2. **Open or start a chat** in Antigravity
3. **Run the server** (`start_ag_phone_connect.bat` or `.sh`)
4. **Connect your phone** using the displayed URL

---

## v0.1.5 - HTTPS & Scroll Sync 🔒
**Release Date:** January 17, 2026

---

### 🎉 Highlights

This release introduces **HTTPS support**, **scroll synchronization**, and several bug fixes to improve the overall experience.

### ✨ New Features

#### 🔒 HTTPS Support
- **Secure connections** with self-signed SSL certificates
- **Hybrid certificate generation**: Tries OpenSSL first (for proper IP SAN support), falls back to Node.js crypto (zero dependencies)
- **Auto-detection**: Server automatically uses HTTPS when certificates are present
- **Web UI button**: "Enable HTTPS" banner for one-click certificate generation
- **Git for Windows support**: Automatically finds OpenSSL bundled with Git

#### 📜 Scroll Sync
- **Bi-directional scrolling**: When you scroll on your phone, the desktop Antigravity scrolls too
- **Virtualized content support**: Triggers snapshot reload after scrolling to capture newly rendered messages
- **Debounced**: 150ms debounce to prevent excessive requests

#### 📄 New Documentation
- **SECURITY.md**: Comprehensive security guide with:
  - Browser warning bypass instructions (Chrome, Safari, Firefox, Edge)
  - Certificate verification commands
  - Security model explanation
  - OpenSSL installation guide

### 🐛 Bug Fixes

#### Message Sending
- **Fixed**: "Error sending: Unknown" popup no longer appears when message is successfully sent
- **Fixed**: Message input now clears immediately after sending (optimistic UI)
- **Changed**: `/send` endpoint now always returns 200 OK

#### CSS Formatting
- **Fixed**: Double-escaped newline in CSS capture that was breaking phone formatting

#### IP Detection
- **Fixed**: Now prioritizes real network IPs (192.168.x.x, 10.x.x.x) over virtual adapters (172.x.x.x from WSL/Docker)
- **Fixed**: Server now displays only one URL instead of multiple confusing options

### 🔌 New API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/ssl-status` | GET | Returns HTTPS status and certificate info |
| `/generate-ssl` | POST | Generates SSL certificates via web UI |
| `/remote-scroll` | POST | Syncs phone scroll position to desktop |

### 🔧 Technical Details

#### HTTPS Implementation
- Uses Node.js built-in `https` module
- Certificates stored in `./certs/` (gitignored)
- Server checks for `certs/server.key` and `certs/server.cert` on startup
- WebSocket automatically upgrades to `wss://` when HTTPS is enabled

#### Scroll Sync Implementation
- Uses percentage-based scrolling for cross-device consistency
- Handles Antigravity's virtualized scrolling by:
  1. Scrolling desktop to position
  2. Waiting 300ms for content to render
  3. Capturing fresh snapshot
  4. Sending to phone

---

## v0.1.0 - Initial Release 🎉
**Release Date:** January 17, 2026

---

We are thrilled to announce the **first official release** of **Antigravity Phone Connect**! This tool transforms your mobile device into a real-time wireless viewport for your Antigravity AI coding sessions.

### ✨ Features

#### 🔄 Real-Time Mirroring
- **1-Second Polling**: Near-instant sync keeps your phone's display updated with your desktop session.
- **WebSocket Notifications**: Efficient push updates notify your phone only when content changes.
- **Smart Content Hashing**: Minimizes bandwidth by detecting actual UI changes.

#### 🎮 Remote Control
- **Send Messages**: Compose and send prompts to your AI directly from your phone.
- **Stop Generations**: Halt long-running AI generations with a single tap.
- **Mode Switching**: Toggle between **Fast** and **Planning** modes remotely.
- **Model Selection**: Switch between AI models (Gemini, Claude, GPT) on the fly.

#### 🧠 Thought Expansion
- **Remote Click Relay**: Tap on "Thinking..." or "Thought" blocks on your phone to expand them on your desktop IDE.
- **Full Reasoning Access**: Peek into the AI's internal reasoning process from anywhere in your home.

#### 🔁 Bi-Directional Sync
- **State Synchronization**: Changes made on your desktop (model, mode) are automatically reflected on your phone.
- **Force Refresh**: Manually trigger a full sync with the Refresh button when needed.

#### 🎨 Premium Mobile UI
- **Dark-Themed Design**: Sleek, modern slate-dark interface optimized for mobile viewing.
- **Touch-Optimized**: Large tap targets and responsive layouts for comfortable mobile interaction.
- **Aggressive CSS Inheritance**: VS Code theme-agnostic rendering ensures consistent mobile appearance.

#### 📁 Context Menu Integration
- **Windows**: Right-click any folder and select "Open with Antigravity (Debug)" for instant debugging sessions.
- **Linux (Nautilus/GNOME)**: Native Nautilus script integration for seamless right-click access.
- **macOS**: Step-by-step Quick Action guide for Automator-based integration.

#### 🛠️ Context Menu Management Scripts
- **Install/Remove**: Easy toggle for context menu entries.
- **Backup**: Automatic backup before making registry/script changes.
- **Restart**: One-click Explorer (Windows) or Nautilus (Linux) restart to apply changes.

### 🖥️ Platform Support

| Platform | Launcher Script | Context Menu Script |
|:---------|:----------------|:--------------------|
| **Windows** | `start_ag_phone_connect.bat` | `install_context_menu.bat` |
| **macOS** | `start_ag_phone_connect.sh` | Manual Automator setup |
| **Linux** | `start_ag_phone_connect.sh` | `install_context_menu.sh` |

### 📡 API Endpoints

| Endpoint | Method | Description |
|:---------|:-------|:------------|
| `/health` | GET | Server status and CDP connection health |
| `/snapshot` | GET | Latest captured HTML/CSS snapshot |
| `/app-state` | GET | Current Mode and Model selection |
| `/send` | POST | Send a message to the AI chat |
| `/stop` | POST | Stop current AI generation |
| `/set-mode` | POST | Switch between Fast/Planning modes |
| `/set-model` | POST | Change the AI model |
| `/remote-click` | POST | Trigger click for Thought expansion |
| `/debug-ui` | GET | Serialized UI tree for debugging |

### 📋 Requirements

- **Node.js**: v16.0.0 or higher
- **Network**: Phone and PC must be on the same Wi-Fi network
- **Antigravity**: Running with `--remote-debugging-port=9000`

### 📦 Dependencies

| Package | Version | Purpose |
|:--------|:--------|:--------|
| `express` | ^4.18.2 | HTTP server for UI and API |
| `ws` | ^8.18.0 | WebSocket for real-time updates |

### 🔒 Security

- **Local Network Only**: By design, the app is constrained to your LAN.
- **No Authentication Required**: Simplified setup for trusted home/office networks.
- **CDP Sandboxing**: DOM snapshots are cloned before capture to prevent interference.

### 🐛 Known Limitations

- **CDP Port Range**: Auto-discovery scans ports 9000-9003.
- **macOS Context Menu**: Requires manual Automator Quick Action setup.
- **Theme Variance**: Some extreme custom Antigravity themes may render differently on mobile.

---

## 📝 Full Changelog

- v0.1.7 - fix: Robust reconnection, app.js syntax, path escaping, enhanced logging
- v0.1.6 - feat: Mobile copy button, auto port cleanup, scroll fix, docs update
- v0.1.5 - feat: HTTPS support, scroll sync, bug fixes, SECURITY.md
- v0.1.4 - feat: add scroll sync and SSL endpoints
- v0.1.3 - docs: update documentation for HTTPS/SSL support
- v0.1.2 - feat: add local SSL certificate generation
- v0.1.1 - docs: expand API endpoint documentation
- v0.1.0 - Initial release with real-time mirroring, remote control, and mobile UI

---

## 🙏 Acknowledgments

Based on the original [Antigravity Shit-Chat](https://github.com/gherghett/Antigravity-Shit-Chat) by **@gherghett**.

---

## 📄 License

Licensed under the [GNU GPL v3](LICENSE).  
Copyright (C) 2026 **Krishna Kanth B** ([@krishnakanthb13](https://github.com/krishnakanthb13))

---

*For detailed documentation, see [CODE_DOCUMENTATION.md](CODE_DOCUMENTATION.md) and [DESIGN_PHILOSOPHY.md](DESIGN_PHILOSOPHY.md).*
