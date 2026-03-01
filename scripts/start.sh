#!/bin/bash

# OmniAntigravity Remote Chat - Local Launcher
cd "$(dirname "$0")/.."

echo "==================================================="
echo "  OmniAntigravity Remote Chat Launcher"
echo "==================================================="

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "[ERROR] Node.js is not installed. Please install Node.js 16+ to continue."
    exit 1
fi

# Check for .env file
if [ ! -f ".env" ]; then
    if [ -f ".env.example" ]; then
        echo "[INFO] .env file not found. Creating from .env.example..."
        cp .env.example .env
        echo "[SUCCESS] .env created!"
    fi
fi

# Launch using Node.js launcher
echo "[INFO] Starting OmniAntigravity Remote Chat..."
node launcher.js --mode local

echo ""
echo "[INFO] Server stopped."
read -p "Press Enter to exit..."
