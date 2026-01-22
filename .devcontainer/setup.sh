#!/bin/bash
# Codespace setup script
# Add new interview track setup sections below.

set -e

echo "Setting up Reverb Code Extension environment..."

echo "Setting up data engineering track..."

if ! command -v uv &> /dev/null; then
    curl -LsSf https://astral.sh/uv/install.sh | sh
    export PATH="$HOME/.local/bin:$PATH"
fi

(cd data/python && uv sync)


echo "Environment setup complete!"
