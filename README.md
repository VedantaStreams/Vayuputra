# Vāyuputra in Windy City — App

**Chinmaya Mission Chicago** · Badri | Yamunotri | Gangotri  
**Event Date:** Saturday, July 11, 2026  
**Venue:** DuPage County Fairgrounds, Wheaton, IL  
**Website:** [vayuputra.org](https://vayuputra.org)

---

## 🚀 Quick Start

1. Clone this repo: `git clone https://github.com/vedantastreams/vayuputra.git`
2. Open `index.html` in your browser — the app runs immediately
3. To go live: drag the entire folder to [netlify.com/drop](https://netlify.com/drop)

---

## 📁 Repo Structure

```
vayuputra/
├── index.html              ← Main app (all screens)
├── assets/
│   ├── flyer.png           ← Add your event flyer here
│   ├── cm-logo.png         ← Chinmaya Mission logo
│   └── amrit-logo.png      ← 75th Amrit Mahotsav logo
├── data/
│   ├── config.json         ← Event details & contacts
│   ├── videos.json         ← YouTube video library ← UPDATE WEEKLY
│   ├── schedule.json       ← Event schedule
│   ├── organizations.json  ← Partner orgs ← ADD NEW ORGS HERE
│   ├── chalisa.json        ← 40 Chaupai tracker ← UPDATE WEEKLY
│   └── sponsorships.json   ← Seva tiers
├── netlify.toml            ← Auto-deploy config
└── README.md               ← This file
```

---

## ✏️ How to Update Content

### ▶ Add a new YouTube video (every week)
1. Open `data/videos.json`
2. Copy one of the existing entries
3. Paste it at the top of the list
4. Fill in: `title`, `channel` (Badri/Yamunotri/Gangotri), `type` (Stream/Chaupai/Promo), `youtubeId`
5. The `youtubeId` is the part after `?v=` in the YouTube URL
6. Submit a pull request → owner approves → live in 60 seconds

**Example:**
```json
{
  "id": "v005",
  "title": "Hanumān Chalisā Week 5 — Spiritual Stream",
  "channel": "Badri",
  "type": "Stream",
  "youtubeId": "dQw4w9WgXcQ",
  "date": "2026-02-14",
  "featured": false
}
```

### 🎵 Mark a Chaupai as released
1. Open `data/chalisa.json`
2. Find the Chaupai number
3. Change `"released": false` to `"released": true`
4. Add the `youtubeId` for that verse
5. Submit pull request

### 🏢 Add a new partner organization
1. Open `data/organizations.json`
2. Add a new entry:
```json
{ "name": "Your Org Name", "city": "City, IL", "type": "Partner", "participation": "Sankalpa Sahayog", "confirmed": true }
```

### 📅 Update the schedule
Edit `data/schedule.json` — one object per activity.

---

## 📱 Making it Downloadable on iPhone & Android

### Option A — Add to Home Screen (Free, works now)
1. Host on Netlify or GitHub Pages (free)
2. Share the link
3. Users open in Safari (iPhone) or Chrome (Android)
4. Tap Share → "Add to Home Screen"
5. App icon appears on their phone — works offline too

### Option B — App Store & Google Play (Paid)
Requires wrapping with **Capacitor** (free framework):
```bash
npm install @capacitor/core @capacitor/cli
npx cap init
npx cap add ios
npx cap add android
npx cap sync
```
Then submit to:
- Apple App Store: $99/year developer account
- Google Play: $25 one-time fee

---

## 🔄 GitHub Workflow for Team

```
1. Fork this repo (or clone if you have write access)
2. Make your changes (edit a JSON file)
3. Submit a Pull Request
4. Repo owner (vedantastreams admin) reviews and merges
5. Netlify auto-deploys — live in ~60 seconds
```

### Team Roles
| Role | What they edit | Time needed |
|------|---------------|-------------|
| Video updater | `data/videos.json` | 10 min/week |
| Chalisa tracker | `data/chalisa.json` | 5 min/week |
| Org coordinator | `data/organizations.json` | As needed |
| Schedule manager | `data/schedule.json` | As needed |
| Repo owner | Reviews & merges PRs | 5 min/week |

---

## 🌐 Deployment

### GitHub Pages (Free)
1. Go to repo Settings → Pages
2. Source: Deploy from branch → `main` → `/root`
3. Your app is live at: `vedantastreams.github.io/vayuputra`

### Netlify (Free, faster)
1. Go to [netlify.com](https://netlify.com) → New site from Git
2. Connect your GitHub repo
3. Build command: (leave empty)
4. Publish directory: `/`
5. Deploy → live at `vayuputra.netlify.app`

---

## 📞 Contact
- Email: vayuputra@mychinmaya.org
- Website: vayuputra.org
- Rajul Bhalala: (847) 302-2383
- Ashok Dholakia: (708) 602-3901
- Nitish Kanabar: (347) 829-9099

---

*Jai Hanumān! 🙏 — Chinmaya Mission Chicago*
