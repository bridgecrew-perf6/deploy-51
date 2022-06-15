#!/bin/bash
echo "[>] Starting deployment"

echo "  [+] Remove containers, volume and networks older than 1 week..."
docker system prune --force --filter "until=168h"

cd way_up_frontend

echo "  [+] Start (or Restart) containers"
docker compose down -v && docker compose up -d --build

echo "[>] Deployment done."
