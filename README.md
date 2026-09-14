<div align="center">

# 🧭 TrekFlow

### *Your trip. Your plan. Your way.*

A self-hosted, real-time collaborative travel planner — with interactive maps, budgets, packing lists, a journey journal, and built-in AI assistance.

<br />

[![License](https://img.shields.io/badge/license-AGPL_v3-6B7280?style=for-the-badge)](LICENSE)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com/r/mauriceboe/trek)
[![Node](https://img.shields.io/badge/Node.js_22-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)

</div>

---

## ✨ What is TrekFlow?

**TrekFlow** is a feature-rich, open-source travel planning platform you can run on your own server. Plan trips collaboratively in real time, track budgets, manage packing lists, attach booking confirmations, explore maps, and even keep a personal travel journal — all in one place, with no third-party cloud required.

> Built on the excellent [TREK](https://github.com/liketrek/TREK) open-source foundation (AGPL v3), extended and rebranded for TrekFlow.

---

## 🚀 Quick Start (30 seconds)

```bash
ENCRYPTION_KEY=$(openssl rand -hex 32) docker run -d -p 3000:3000 \
  -e ENCRYPTION_KEY=$ENCRYPTION_KEY \
  -v ./data:/app/data -v ./uploads:/app/uploads mauriceboe/trek
```

Open **http://localhost:3000**. On first boot TrekFlow seeds an admin account — credentials are printed to the container log (`docker logs <container>`).

---

## 🐳 Docker Compose (Recommended)

```yaml
# docker-compose.yml
version: "3.9"
services:
  trekflow:
    image: mauriceboe/trek:latest
    container_name: trekflow
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      ENCRYPTION_KEY: ${ENCRYPTION_KEY}        # Generate: openssl rand -hex 32
      ALLOWED_ORIGINS: https://your-domain.com
      APP_URL: https://your-domain.com
      # SMTP — optional, enables email notifications & password reset
      SMTP_HOST: smtp.gmail.com
      SMTP_PORT: 587
      SMTP_USER: you@gmail.com
      SMTP_PASS: your-app-password
      SMTP_FROM: '"TrekFlow" <you@gmail.com>'
    volumes:
      - ./data:/app/data
      - ./uploads:/app/uploads
```

```bash
docker compose up -d
```

---

## 🗺️ Features

<table>
<tr>
<td width="50%" valign="top">

### 🧭 Trip Planning
- **Day plans** — drag places between days, add notes and bookings, drop map markers
- **Interactive maps** — Leaflet, Mapbox GL or MapLibre GL (no token required for OpenFreeMap)
- **Place search** — Google Places (with key) or OpenStreetMap (free, no key)
- **Place enrichment** — descriptions, facts, photos from OSM, Wikipedia & Wikidata
- **POI explore** — pull nearby points of interest by category via Overpass API
- **Import** — Google Maps & Naver Maps lists, GPX, KML, KMZ files
- **Export** — GPX tracks, ICS calendar feed per trip or global
- **Routes** — auto-sort a day, driving/walking/cycling via OSRM, open in Google Maps
- **Weather** — 16-day forecast from Open-Meteo, no API key required
- **Public transport** — door-to-door itineraries via Transitous

</td>
<td width="50%" valign="top">

### 🧳 Bookings & Budget
- **16 booking types** — flights, hotels, trains, tours, restaurants and more
- **Flights & trains** — multi-leg with stopovers, local timezone resolution (4,045 airports bundled)
- **Booking import** — EML, PDF, PKPass, HTML confirmations via KItinerary
- **Costs** — split expenses with equal or custom shares, multi-payer, settle-up suggestions, CSV export
- **Multi-currency** — rate frozen at entry, powered by Frankfurter (no key)
- **Packing lists** — categories, templates, assignees, visibility tiers, weight roll-up
- **To-dos** — assignee, due date, priority, reminders
- **Files** — attach to trips, places, days or bookings (50 MB / 500 MB video)
- **PDF export** — cover page, photos, notes, bookings, costs, optional per-day page breaks

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 👥 Real-Time Collaboration
- **Live sync** via WebSocket — edits land instantly for all trip members
- **Members** — invite by email/username, hand over ownership, add guests (no login required)
- **Permissions** — map 16 trip actions to admin / owner / member / public
- **Invite links** — reusable links with optional expiry
- **Public share** — read-only trip page, no account needed
- **Collab hub** — group chat, replies, reactions, link previews, shared notes, polls, What's Next board

</td>
<td width="50%" valign="top">

### 📔 Journal & Atlas
- **Journey** — dated diary entries with mood, weather, tags, photos, video, map views, co-authors, public share
- **Atlas** — mark countries and sub-national regions visited, bucket list, travel stats
- **Vacay** — leave calendar with half days, public holidays, school holiday overlays (16 EU countries)
- **Collections** — a place library outside any trip, with labels, ratings, and sharing

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 📱 Mobile & Offline
- **PWA** — install on iOS & Android straight from the browser, no App Store
- **Offline reads** — app shell, routes and trip data cached in IndexedDB
- **Offline writes** — mutations queue and replay with idempotency keys
- **Offline maps** — pre-download raster tiles for a trip area

</td>
<td width="50%" valign="top">

### 🤖 AI & Security
- **Booking AI parsing** — read confirmations via Ollama, OpenAI-compatible or Anthropic
- **MCP server** — OAuth 2.1 with PKCE, 199 tools, 30 resources, 4 prompts
- **2FA** — TOTP + backup codes; admin-enforced or user opt-in
- **Passkeys** — WebAuthn (fingerprint, face, PIN, security key)
- **OIDC SSO** — Authentik, Keycloak, Google, and more
- **Hardening** — per-IP rate limits, encrypted secrets at rest, SSRF guard

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

![NestJS](https://img.shields.io/badge/NestJS_11-E0234E?style=flat-square&logo=nestjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat-square&logo=leaflet&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js_22-339933?style=flat-square&logo=node.js&logoColor=white)

</div>

| Layer | Technology |
|-------|-----------|
| Backend | NestJS 11, Node.js 22 |
| Frontend | React 19, Vite, Tailwind CSS |
| Database | SQLite (via better-sqlite3) |
| Real-time | WebSocket (`ws`) |
| Auth | JWT + OAuth 2.1 + OIDC + WebAuthn (Passkeys) + TOTP |
| Maps | Leaflet, Mapbox GL, MapLibre GL |
| Weather | Open-Meteo (no key) |
| State | Zustand |
| Language | TypeScript (monorepo: client / server / shared) |

---

## 📧 SMTP Configuration (Email & Password Reset)

TrekFlow sends emails for password resets and notifications. Configure SMTP via environment variables **or** via the Admin Panel → Notifications.

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | Mail server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | Port number (`587` = STARTTLS, `465` = TLS, `25` = plain) | `587` |
| `SMTP_USER` | SMTP login username | `you@gmail.com` |
| `SMTP_PASS` | SMTP password / app-specific password | `xxxx xxxx xxxx xxxx` |
| `SMTP_FROM` | From address shown in sent emails | `"TrekFlow" <you@gmail.com>` |
| `SMTP_SKIP_TLS_VERIFY` | Set `true` only for internal relays with self-signed certs | `false` |

### Gmail Quick Setup
1. Enable **2-Step Verification** on your Google account
2. Go to **Security → App passwords** and generate a password for "Mail"
3. Use `smtp.gmail.com`, port `587`, your Gmail address, and the generated app password

> **Without SMTP** — password reset links are printed to the server log so you can relay them manually. TrekFlow works fully without SMTP configured.

---

## ⚙️ Environment Variables

Key variables (full list in [`server/.env.example`](server/.env.example)):

| Variable | Default | Description |
|----------|---------|-------------|
| `ENCRYPTION_KEY` | auto-generated | 256-bit hex key for encrypting stored secrets |
| `PORT` | `3001` | HTTP server port |
| `NODE_ENV` | `development` | `development` or `production` |
| `ALLOWED_ORIGINS` | — | Comma-separated CORS origins |
| `APP_URL` | — | Public base URL (required for OIDC, invite links) |
| `TZ` | `UTC` | Timezone for logs and reminders |
| `ADMIN_EMAIL` | — | Seed admin email (first boot only) |
| `ADMIN_PASSWORD` | — | Seed admin password (first boot only) |

---

## 🔄 Reverse Proxy (Production)

TrekFlow requires WebSocket support for real-time sync. Point your proxy at port `3000`.

<details>
<summary><b>Nginx</b></summary>

```nginx
server {
    listen 443 ssl http2;
    server_name trekflow.yourdomain.com;

    ssl_certificate     /etc/ssl/fullchain.pem;
    ssl_certificate_key /etc/ssl/privkey.pem;

    client_max_body_size 500m;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /ws {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_read_timeout 86400;
    }
}
```

</details>

<details>
<summary><b>Caddy</b></summary>

```caddy
trekflow.yourdomain.com {
    reverse_proxy localhost:3000
}
```

Caddy handles TLS and WebSockets automatically.

</details>

---

## 💻 Local Development

### Prerequisites
- Node.js 22+
- npm 10+

```bash
# Clone the repository
git clone https://github.com/amanshaikh3602/TrekFlow.git
cd TrekFlow

# Install dependencies
npm install

# Copy and edit environment config
cp server/.env.example server/.env
# Edit server/.env with your settings

# Start all services (shared + server + client with hot reload)
npm run dev
```

Open **http://localhost:5173** for the client dev server.

### Project Structure

```
TrekFlow/
├── client/          # React 19 + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/       # Zustand state stores
│   │   └── api/
├── server/          # NestJS 11 backend
│   ├── src/
│   │   ├── nest/        # NestJS modules (auth, notifications, maps, etc.)
│   │   ├── app-config/  # Env schema + validation
│   │   └── db/          # SQLite migrations
│   └── .env.example
├── shared/          # Shared TypeScript types & i18n
├── docs/            # Documentation assets
├── wiki/            # In-app help pages
├── charts/          # Helm chart for Kubernetes
└── docker-compose.yml
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start all packages in watch mode |
| `npm run build` | Build all packages for production |
| `npm run test` | Run all unit tests |
| `npm run lint` | Lint all packages |
| `npm run format` | Format all files with Prettier |

---

## 🧩 Plugin System

TrekFlow supports a sandboxed plugin architecture:

- **Install** from the registry or sideload a `.zip`
- **Permissions** — 63 grantable, admin-controlled
- **Extension points** — map layers, place details, PDF sections, Atlas layers, notification channels
- **SDK** — [`trek-plugin-sdk`](https://www.npmjs.com/package/trek-plugin-sdk) on npm with a manifest validator and mock host

---

## 🌍 Internationalization

TrekFlow ships in **23 languages**: English, German, Spanish, French, Italian, Dutch, Hungarian, Russian, Chinese (Simplified & Traditional), Polish, Czech, Arabic (RTL), Breton, Indonesian, Turkish, Japanese, Korean, Ukrainian, Greek, Swedish, Vietnamese, Catalan.

---

## 🤝 Contributing

Contributions are very welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m 'feat: add some feature'`
4. Push: `git push origin feat/your-feature`
5. Open a Pull Request

Please follow our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 🔐 Security

Found a vulnerability? Please see [SECURITY.md](SECURITY.md) and report responsibly.

---

## 📊 Data Sources

- **Country/region boundaries** — [geoBoundaries](https://www.geoboundaries.org/) (CC BY 4.0)
- **Weather** — [Open-Meteo](https://open-meteo.com/) (free, no key)
- **Currency rates** — [Frankfurter](https://www.frankfurter.app/) (free, no key)
- **Place data** — OpenStreetMap, Wikipedia, Wikidata, Wikimedia Commons
- **Airport data** — 4,045 airports bundled (no key required)

See [NOTICE.md](NOTICE.md) for full third-party attributions.

---

## 📄 License

TrekFlow is licensed under the **[GNU Affero General Public License v3.0](LICENSE)**.

- ✅ Self-host freely for personal or internal company use
- ✅ Modify and redistribute
- ⚠️ If you modify TrekFlow and offer it as a network service, your modifications must be open-sourced under the same licence

---

<div align="center">

Made with ❤️ for travellers everywhere

**[⬆ Back to top](#-trekflow)**

</div>
