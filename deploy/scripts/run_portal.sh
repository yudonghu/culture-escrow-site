#!/usr/bin/env bash
set -euo pipefail

cd /opt/culture-escrow-site
export NODE_ENV=production
npm run start
