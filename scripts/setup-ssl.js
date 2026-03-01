#!/usr/bin/env node
/**
 * OmniAntigravity Remote Chat — Trusted HTTPS Setup
 * 
 * Automatically installs mkcert, creates a local CA, and generates
 * trusted SSL certificates. After this, browsers will show the green
 * padlock with zero warnings.
 * 
 * Usage: node scripts/setup-ssl.js
 *
 * Supports: Linux (apt/pacman/dnf), macOS (brew), Windows (choco/scoop)
 */
import { execSync } from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, '..');
const certsDir = path.join(PROJECT_ROOT, 'certs');

const c = {
    reset: '\x1b[0m', bold: '\x1b[1m', dim: '\x1b[2m',
    green: '\x1b[32m', red: '\x1b[31m', yellow: '\x1b[33m',
    cyan: '\x1b[36m', magenta: '\x1b[35m',
};

function log(msg) { console.log(`  ${msg}`); }
function ok(msg) { log(`${c.green}✓${c.reset} ${msg}`); }
function warn(msg) { log(`${c.yellow}⚠${c.reset} ${msg}`); }
function fail(msg) { log(`${c.red}✗${c.reset} ${msg}`); }
function info(msg) { log(`${c.cyan}ℹ${c.reset} ${msg}`); }

function run(cmd, opts = {}) {
    try {
        return execSync(cmd, { encoding: 'utf8', stdio: 'pipe', ...opts }).trim();
    } catch (e) {
        return null;
    }
}

function hasBinary(name) {
    const cmd = process.platform === 'win32' ? `where ${name}` : `which ${name}`;
    return run(cmd) !== null;
}

function getLocalIPs() {
    const ips = ['localhost', '127.0.0.1'];
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                ips.push(iface.address);
            }
        }
    }
    return [...new Set(ips)];
}

// ─── Step 1: Check if mkcert is installed ─────────────────────────
function checkMkcert() {
    if (hasBinary('mkcert')) {
        ok('mkcert is installed');
        return true;
    }
    return false;
}

// ─── Step 2: Install mkcert ───────────────────────────────────────
function installMkcert() {
    const platform = process.platform;

    console.log('');
    warn('mkcert is not installed. Attempting automatic installation...\n');

    if (platform === 'linux') {
        // Try apt (Ubuntu/Debian)
        if (hasBinary('apt-get')) {
            info('Detected apt (Ubuntu/Debian)');
            try {
                execSync('sudo apt-get update -qq && sudo apt-get install -y -qq mkcert', { stdio: 'inherit' });
                return true;
            } catch { /* fall through */ }
        }
        // Try pacman (Arch)
        if (hasBinary('pacman')) {
            info('Detected pacman (Arch)');
            try {
                execSync('sudo pacman -S --noconfirm mkcert', { stdio: 'inherit' });
                return true;
            } catch { /* fall through */ }
        }
        // Try dnf (Fedora)
        if (hasBinary('dnf')) {
            info('Detected dnf (Fedora/RHEL)');
            try {
                execSync('sudo dnf install -y mkcert', { stdio: 'inherit' });
                return true;
            } catch { /* fall through */ }
        }
    } else if (platform === 'darwin') {
        if (hasBinary('brew')) {
            info('Detected Homebrew (macOS)');
            try {
                execSync('brew install mkcert', { stdio: 'inherit' });
                return true;
            } catch { /* fall through */ }
        }
    } else if (platform === 'win32') {
        if (hasBinary('choco')) {
            info('Detected Chocolatey (Windows)');
            try {
                execSync('choco install mkcert -y', { stdio: 'inherit' });
                return true;
            } catch { /* fall through */ }
        }
        if (hasBinary('scoop')) {
            info('Detected Scoop (Windows)');
            try {
                execSync('scoop install mkcert', { stdio: 'inherit' });
                return true;
            } catch { /* fall through */ }
        }
    }

    // Manual installation instructions
    console.log('');
    fail('Could not install mkcert automatically.\n');
    console.log(`${c.bold}  Manual installation:${c.reset}\n`);

    if (platform === 'linux') {
        console.log('    Ubuntu/Debian:  sudo apt install mkcert');
        console.log('    Arch:           sudo pacman -S mkcert');
        console.log('    Fedora:         sudo dnf install mkcert');
    } else if (platform === 'darwin') {
        console.log('    brew install mkcert');
    } else if (platform === 'win32') {
        console.log('    choco install mkcert');
        console.log('    # or');
        console.log('    scoop install mkcert');
    }

    console.log(`\n    Then re-run: ${c.cyan}node scripts/setup-ssl.js${c.reset}\n`);
    return false;
}

// ─── Step 3: Install local CA ─────────────────────────────────────
function installCA() {
    info('Installing local Certificate Authority...');
    try {
        execSync('mkcert -install', { stdio: 'inherit' });
        ok('Local CA installed in system + browser trust stores');
        return true;
    } catch (e) {
        fail(`CA installation failed: ${e.message}`);
        return false;
    }
}

// ─── Step 4: Generate certificates ────────────────────────────────
function generateCerts() {
    const ips = getLocalIPs();
    info(`Generating certificate for: ${ips.join(', ')}`);

    // Create certs directory
    if (!fs.existsSync(certsDir)) {
        fs.mkdirSync(certsDir, { recursive: true });
    }

    const keyFile = path.join(certsDir, 'server.key');
    const certFile = path.join(certsDir, 'server.cert');

    try {
        execSync(
            `mkcert -key-file "${keyFile}" -cert-file "${certFile}" ${ips.join(' ')}`,
            { stdio: 'inherit' }
        );
        ok('Trusted SSL certificates generated!');
        return true;
    } catch (e) {
        fail(`Certificate generation failed: ${e.message}`);
        return false;
    }
}

// ─── Main ─────────────────────────────────────────────────────────
function main() {
    console.log('');
    console.log(`${c.magenta}${c.bold}  ╔══════════════════════════════════════════╗${c.reset}`);
    console.log(`${c.magenta}${c.bold}  ║  OmniAntigravity — Trusted HTTPS Setup  ║${c.reset}`);
    console.log(`${c.magenta}${c.bold}  ╚══════════════════════════════════════════╝${c.reset}`);
    console.log('');

    // Step 1: Check/install mkcert
    if (!checkMkcert()) {
        if (!installMkcert()) {
            process.exit(1);
        }
        if (!hasBinary('mkcert')) {
            fail('mkcert still not found after installation attempt');
            process.exit(1);
        }
        ok('mkcert installed successfully');
    }

    // Step 2: Install CA
    if (!installCA()) {
        process.exit(1);
    }

    // Step 3: Generate certs
    if (!generateCerts()) {
        process.exit(1);
    }

    // Done!
    console.log('');
    console.log(`${c.bold}─────────────────────────────────────────────${c.reset}`);
    console.log(`  ${c.green}${c.bold}✓ HTTPS setup complete!${c.reset}`);
    console.log(`  ${c.dim}Certificates: certs/server.key + certs/server.cert${c.reset}`);
    console.log(`${c.bold}─────────────────────────────────────────────${c.reset}`);
    console.log('');
    console.log(`  ${c.cyan}Start the server:${c.reset} npm start`);
    console.log(`  ${c.dim}It will auto-detect the certs and use HTTPS.${c.reset}`);
    console.log('');

    // Mobile instructions
    console.log(`  ${c.yellow}${c.bold}📱 For phones (optional):${c.reset}`);
    console.log(`  ${c.dim}Phones need the CA certificate installed manually.${c.reset}`);

    const caRoot = run('mkcert -CAROOT');
    if (caRoot) {
        const caFile = path.join(caRoot, 'rootCA.pem');
        if (fs.existsSync(caFile)) {
            console.log(`  ${c.dim}CA file: ${caFile}${c.reset}`);
            console.log('');
            console.log(`  ${c.bold}Android:${c.reset}`);
            console.log(`    1. Transfer ${c.cyan}rootCA.pem${c.reset} to your phone`);
            console.log(`    2. Settings → Security → Install certificate`);
            console.log(`    3. Select the rootCA.pem file`);
            console.log('');
            console.log(`  ${c.bold}iOS:${c.reset}`);
            console.log(`    1. Transfer ${c.cyan}rootCA.pem${c.reset} to your phone`);
            console.log(`    2. Settings → Profile Downloaded → Install`);
            console.log(`    3. Settings → General → About → Certificate Trust`);
            console.log(`    4. Enable trust for the mkcert root CA`);
        }
    }
    console.log('');
}

main();
