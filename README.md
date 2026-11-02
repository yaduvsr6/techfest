# 🔥 IGNITE V7 — Techno-Cultural Festival Website & Branding Concept
**Mahaguru Institute of Technology (MIT)**  
*“Ignite the Future. Unleash the Energy.”*  
**Final Slogan:** *“One Campus. Infinite Energy. IGNITE V7.”*

---

## 🌟 Overview & Festival Identity

**IGNITE V7** is the flagship annual techno-cultural festival of **Mahaguru Institute of Technology (MIT)**. Designed as a national-level powerhouse festival, it unites high-performance engineering, automotive enthusiast culture, stadium sports championships, haute couture fashion, explosive street dance, and stadium-grade Pro Night concerts.

### Brand Palette & Visual Language
- **Matte Black (`#070709`, `#0d0d12`):** Grounded, stealth, high-contrast backdrop.
- **Deep Red (`#ff1e42`):** Raw horsepower, adrenaline, and passion.
- **Neon Flame Orange (`#ff5722`, `#ff9800`):** Core IGNITE fire, glowing energy, high visibility.
- **Electric Cyan / Blue (`#00f0ff`):** Cyber grid, robotics, future technology, and telemetry.
- **Metallic Silver / Chrome (`#e2e8f0`):** 3D metallic display typography and race-car badging.
- **Typography:** `Orbitron` (Futuristic display), `Outfit` (Headings & cards), `Plus Jakarta Sans` (Clean body text).

---

## 🚀 Key Website Features & Structure

1. **Ambient Canvas Particles:** Lightweight HTML5 Canvas system generating floating embers and sparks without external library overhead.
2. **Procedural Web Audio FX:** Built-in procedural ambient synth drone and interactive clicks using the Web Audio API (no broken audio links).
3. **Sticky Glassmorphic Navigation:** Fixed responsive header with animated flame brand logo, smooth navigation, and a slide-out mobile drawer.
4. **Hero Section:**
   - 3D Metallic chrome **IGNITE V7** lettering with glowing core.
   - Live working countdown timer (configurable target date).
   - Dynamic animated statistics counters (45+ Events, 25K+ Footfall, ₹6L+ Prizes, 120+ Colleges).
   - "Watch Teaser" cinematic video simulation modal.
5. **About IGNITE V7:** Heritage narrative, four thematic pillars (Tech & AI, Auto Culture, Stage & ProShows, Sports Arena), and college credentials.
6. **All Events Explorer:**
   - Instant live search bar.
   - Filter pills (All, Technology, Entertainment, Cultural & Dance, Auto Expo, Sports Arena).
   - Rich event cards with date, venue, team requirements, and cash prizes.
   - **Quick View Modal** with competition guidelines and coordinator info.
7. **ProShow & Pro Night Section:**
   - VIP concert atmosphere, moving stage spotlight effects.
   - Lineup cards: Headline Rock Band, Elektra EDM DJ Night, Inaugural Fusion Night.
   - Concert acoustics strip (50k Watts Line-Array, Laser & CO2 FX, RFID access).
8. **Auto Expo Pavilion:**
   - Supercar & custom widebody pavilion spotlight (850+ HP showcase).
   - Superbike arena & liter-class monsters.
   - Decibel Duel rev limiter exhaust sound battle.
9. **Tech Zone (Workshops & Hackathons):**
   - Generative AI & Agentic Systems Masterclass.
   - Red Team Ops & Offensive Ethical Hacking Live Lab.
   - Autonomous Quadcopters & ROS2 Robotics.
   - IGNITE 24-Hour Code Sprint National Hackathon (₹1,00,000 prize pool).
   - Industry keynote lectures & global webinars.
10. **Cultural Zone:**
    - Vogue Illuminate: High-Fashion Runway.
    - Body Show: Inter-College Physique Championship (Iron Titan).
    - Break the Floor: Urban Street Dance Battles & Crew Wars.
    - Voice of MIT: Solo & Duet Vocal Clash.
11. **IGNITE Sports Arena:**
    - Interactive tab controller for all 5 sports:
      1. **Kabaddi** (Synthetic pro mat, 20-5-20 min knockout)
      2. **Football** (11-a-side on stadium turf)
      3. **County Cricket** (10-over white ball under floodlights)
      4. **Volleyball** (Synthetic court indoor smash trophy)
      5. **3's Street Football** (Enclosed turf cage shootout)
    - Squad sizes, prize pools, match schedules, and direct registration triggers.
12. **Festival Schedule & Timetable:**
    - Interactive tabs for Day 1, Day 2, and Day 3.
    - Chronological timeline cards with timeslots, venues, and category badges.
    - "Download Official Printable Schedule" action.
13. **Cinematic Photo & Video Gallery:**
    - Filterable grid (Concerts, Auto Expo, Sports, Culture).
    - Interactive lightbox modal viewer with high-res photography.
14. **Partners & Sponsors:**
    - Title Sponsor, Auto Partner, Energy Drink, Cloud Partner, Media & Radio.
    - "Request Sponsorship Deck" callout.
15. **Multi-Tab Registration Hub with Instant Verified QR E-Pass:**
    - Tabs: Individual Pass, Event/Tech Team, Sports Arena Team.
    - Real-time client-side validation for Name, Email, Phone, College, Event, and Squad details.
    - Dynamic registration fee calculation.
    - **Verified Digital Pass Modal**: Creates an instant cyber-festival ticket with attendee name, registration code (`IGN7-XXXXXX-MIT`), procedurally rendered QR code, barcode, and a working **Print / Save Pass** button (`window.print()` compatible).
16. **Campus Venue & Contacts:**
    - Mahaguru Institute of Technology campus address, transit routes (Airport, Railway, Bus).
    - Faculty and student convener directory with phone numbers.
    - Dark-themed high-tech Google Maps iframe embed.
    - Quick inquiry feedback form.
17. **Footer:**
    - Full festival branding, zones navigation, live notification newsletter subscription, emergency helplines, and social media links.

---

## 🛠️ How to Run Locally on Windows

No Node.js, npm, or build tools are required! The site runs directly in any modern browser.

### Option 1: Direct Double Click
1. Open Windows File Explorer.
2. Navigate to `c:\Users\yadus\Downloads\techfest`.
3. Double-click `index.html` to open in Google Chrome, Microsoft Edge, or Mozilla Firefox.

### Option 2: Run via VS Code Live Server
1. Open the `techfest` folder in **Visual Studio Code**.
2. If installed, right-click `index.html` and click **"Open with Live Server"**.

### Option 3: Local Python HTTP Server (PowerShell)
Open PowerShell in `c:\Users\yadus\Downloads\techfest` and run:
```powershell
python -m http.server 8080
```
Then visit `http://localhost:8080` in your web browser.

---

## ✏️ Customization Guide (Where to Update)

All key variables are isolated and clearly documented:

### 1. Festival Date & Countdown
In [`script.js`](file:///c:/Users/yadus/Downloads/techfest/script.js#L11-L25):
```javascript
const FESTIVAL_CONFIG = {
  festivalName: "IGNITE V7",
  collegeName: "Mahaguru Institute of Technology (MIT)",
  targetDate: "2026-11-20T09:00:00", // <-- Change your festival start date here
  venueAddress: "Mahaguru Institute of Technology, Mavelikkara, Kerala - 690547",
  emergencyPhone: "+91 98765 43210",
  officialEmail: "ignitev7@mahagurutech.edu"
};
```

### 2. Events, Prizes & Guidelines
In [`script.js`](file:///c:/Users/yadus/Downloads/techfest/script.js#L27-L200):
Update the `FESTIVAL_EVENTS` array to add, edit, or remove competitions, adjust prize pools, or update student coordinator phone numbers.

### 3. Day-Wise Schedule
In [`script.js`](file:///c:/Users/yadus/Downloads/techfest/script.js#L205-L260):
Update `FESTIVAL_SCHEDULE.day1`, `day2`, or `day3` to reflect your exact stage times and speaker schedules.

### 4. Campus Location & Google Maps
In [`index.html`](file:///c:/Users/yadus/Downloads/techfest/index.html#L535-L555):
Replace the `iframe src` with your custom Google Maps embed link.

### 5. Sponsors & Partners
In [`index.html`](file:///c:/Users/yadus/Downloads/techfest/index.html#L420-L470):
Replace the sponsor logos and company names with your festival's confirmed corporate partners.

---

## 📜 Technology Stack
- **HTML5:** Modern semantic architecture, accessible form controls, ARIA attributes.
- **CSS3:** Custom properties (CSS variables), glassmorphism (`backdrop-filter`), flexbox, grid, keyframe animations, `@media print` stylesheets.
- **Vanilla JavaScript (ES6+):** Canvas particle animation, Web Audio API procedural sound engine, IntersectionObserver, client-side validation, procedural QR code rendering, and modal management.
- **Fonts & Icons:** Google Fonts (`Orbitron`, `Outfit`, `Plus Jakarta Sans`) & FontAwesome 6 CDN.

---
*Developed for Mahaguru Institute of Technology (MIT) — IGNITE V7 Annual Techno-Cultural Fest.*
