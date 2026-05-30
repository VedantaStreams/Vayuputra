# 🕉️ Vāyuputra in Windy City

**Samashti Hanuman Chalisa Havan**  
Chinmaya Mission Chicago · Badri | Yamunotri | Gangotri  
**July 11, 2026 · DuPage County Fairgrounds, Wheaton, IL**  
**Presided by:** Pujya Swami Swaroopananda Ji  
Website: [vayuputra.org](https://vayuputra.org)

---

## Quick Start (run locally in 10 seconds)

```bash
git clone https://github.com/VedantaStreams/Vayuputra.git
cd Vayuputra
# Open index.html directly in Chrome — or use a local server:
npx serve .      # then open http://localhost:3000
```

---

## Project Structure

```
Vayuputra/
├── index.html              ← Full app (all screens, desktop + mobile)
├── CNAME                   ← Custom domain: vayuputra.org
├── netlify.toml            ← Netlify deploy config
├── .gitignore
├── assets/
│   ├── flyer.png           ← Event flyer (already in repo)
│   ├── logo.jpg            ← Vayuputra / Chinmaya Mission logo  ← ADD THIS
│   └── cm75.jpg            ← 75th Amrit Mahotsav logo           ← ADD THIS
└── data/
    ├── config.json         ← Event details & contacts            ← edit anytime
    ├── schedule.json       ← Full event schedule                 ← edit anytime
    ├── videos.json         ← YouTube video library              ← UPDATE WEEKLY
    ├── chalisa.json        ← 40 Chaupai tracker                 ← UPDATE WEEKLY
    ├── organizations.json  ← Partner organizations              ← add new orgs
    └── faq.json            ← FAQ answers                        ← edit anytime
```

---

## How to Update Content (No Coding Needed)

### ▶ Add a YouTube video (every week)
1. Open `data/videos.json`
2. Add a new entry at the top:
```json
{
  "id": "v007",
  "title": "Chaupai 3 — Mahavir Vikram Bajrangi",
  "channel": "Badri",
  "type": "Chaupai",
  "youtubeId": "abc123XYZ",
  "date": "2026-02-07",
  "featured": false
}
```
3. The `youtubeId` is from `youtube.com/watch?v=abc123XYZ`

### 🎵 Mark a Chaupai as released
1. Open `data/chalisa.json`
2. Find the chaupai number, set `"released": true` and add the `youtubeId`

### 🏢 Add a partner organization
1. Open `data/organizations.json`
2. Add:
```json
{ "name": "Your Org", "city": "City, IL", "type": "Partner", "participation": "Sankalpa Sahayog", "confirmed": true }
```

### 🖼 Add logo images
Download these two images and save to `assets/`:
- **logo.jpg** — from https://vayuputra.org/wp-content/uploads/2026/05/logo.jpeg
- **cm75.jpg** — from https://vayuputra.org/wp-content/uploads/2026/05/75-years.jpeg

---

## Deploying to GitHub Pages (Free)

```bash
# In your repo Settings → Pages
# Source: Deploy from branch → main → / (root)
# Your site: vedantastreams.github.io/Vayuputra
```

With `CNAME` file already in the repo, adding DNS records (below) connects vayuputra.org.

## Deploying to Netlify (Free, Faster, Recommended)

1. Go to [netlify.com](https://netlify.com) → New site from Git
2. Connect GitHub → select `VedantaStreams/Vayuputra`
3. Build command: *(leave empty)*  |  Publish directory: `/`
4. Click **Deploy** — live at `vayuputra.netlify.app` in ~60 seconds

---

## Connecting vayuputra.org Custom Domain

### Step 1 — Add domain in Netlify (or GitHub Pages)
- Netlify: Site settings → Domain management → Add custom domain → `vayuputra.org`
- GitHub Pages: Settings → Pages → Custom domain → `vayuputra.org`

### Step 2 — Add DNS records at your domain registrar
Log in to wherever vayuputra.org is registered (GoDaddy, Namecheap, etc.) and add:

**For Netlify:**
```
Type  Name    Value
A     @       75.2.60.5
CNAME www     vayuputra.netlify.app
```

**For GitHub Pages:**
```
Type  Name    Value
A     @       185.199.108.153
A     @       185.199.109.153
A     @       185.199.110.153
A     @       185.199.111.153
CNAME www     vedantastreams.github.io
```

### Step 3 — Enable HTTPS
Both Netlify and GitHub Pages automatically provision a free SSL certificate. Check the box "Enforce HTTPS" after DNS propagates (~24 hrs).

---

## Push Changes to GitHub

```bash
# After editing any file:
git add .
git commit -m "update: add new video / mark chaupai released"
git push origin main
# Netlify auto-deploys in ~60 seconds
```

---

## Team Workflow

| Role | Edit which file | Time |
|------|----------------|------|
| Video updater | `data/videos.json` | 10 min/week |
| Chalisa tracker | `data/chalisa.json` | 5 min/week |
| Org coordinator | `data/organizations.json` | As needed |
| Schedule manager | `data/schedule.json` | As needed |
| Repo owner | Reviews & merges PRs | 5 min/week |

---

## Contact
- Email: vayuputra@mychinmaya.org
- Website: vayuputra.org
- Rajul Bhalala: (847) 302-2383
- Ashok Dholakia: (708) 602-3901
- Nitish Kanabar: (347) 829-9099

---

*Jai Hanumān! 🙏 — Chinmaya Mission Chicago — © 2026*
