/**
 * ===================================================================
 * IGNITE V7 — OFFICIAL FESTIVAL SCRIPT
 * Annual Techno-Cultural Fest of Mahaguru Institute of Technology (MIT)
 * "Ignite the Future. Unleash the Energy."
 * ===================================================================
 */

/* ===================================================================
   CONFIGURATION & SETTINGS (EASILY CUSTOMIZABLE FOR ORGANIZERS)
   =================================================================== */
const FESTIVAL_CONFIG = {
  festivalName: "IGNITE V7",
  collegeName: "Mahaguru Institute of Technology (MIT)",
  // Set festival starting date here (YYYY-MM-DDTHH:MM:SS)
  targetDate: "2026-11-20T09:00:00",
  venueAddress: "Mahaguru Institute of Technology, Mavelikkara, Kerala - 690547",
  emergencyPhone: "+91 98765 43210",
  officialEmail: "ignitev7@mahagurutech.edu",
  registrationOpen: true
};

/* ===================================================================
   1. FESTIVAL EVENTS DATABASE
   =================================================================== */
const FESTIVAL_EVENTS = [
  // Entertainment & Stage
  {
    id: "evt-pro-night",
    title: "The Grand Pro Night: DJ Shaan & Live Rock Sensation",
    category: "entertainment",
    badgeText: "STAGE PROSHOW",
    prize: "₹599 PASS",
    feeText: "₹599 All-Access Pass",
    tagline: "“Tomorrowland Mainstage Headliner Live with Kavya Jones”",
    date: "Day 3 • 7:30 PM",
    venue: "Main Festival Arena",
    teamSize: "Individual / Arena Pit",
    coordinator: "Arun Kumar (+91 98472 00002)",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    description: "The grand festival finale featuring DJ SHAAN (Tomorrowland Mainstage / Ministry of Sound), live vocals by Kavya Jones, and an 8-piece rock band under 50k watt laser cannons.",
    rules: [
      "Fest registration pass (₹599) & college ID mandatory for entry.",
      "Gates open at 6:30 PM; strict wristband verification at gate checkpoints.",
      "Includes general arena entry, front-row pit access, and glowing RFID wristband."
    ]
  },
  {
    id: "evt-edm-night",
    title: "Elektra: Lost Stories EDM Night (Spinnin' Records)",
    category: "entertainment",
    badgeText: "STAGE PROSHOW",
    prize: "₹599 INCLUDED",
    feeText: "Included with ₹599 Pass",
    tagline: "“World Top-100 DJ Duo • Ultra Music Festival & Tomorrowland”",
    date: "Day 2 • 8:00 PM",
    venue: "Festival Central Ground",
    teamSize: "Individual / Pass",
    coordinator: "Siddharth N. (+91 98472 00010)",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    description: "Massive electronic dance music spectacle featuring LOST STORIES (Prayag & Rishab) dropping heavy bass, melodic progressive house, and synchronized pyrotechnics.",
    rules: [
      "Access included with the ₹599 ProShow all-access festival pass.",
      "Ear protection recommended near front speaker arrays.",
      "Entry closes at 9:15 PM."
    ]
  },
  {
    id: "evt-dance-battle",
    title: "Break the Floor: Street Dance Championship",
    category: "cultural",
    badgeText: "DANCE WARS",
    prize: "₹45,000",
    feeText: "₹400 / Crew Entry",
    tagline: "“Explosive Urban Hip-Hop Cyphers & Crew Wars”",
    date: "Day 2 • 3:00 PM",
    venue: "Open Air Amphitheatre",
    teamSize: "Crew (6-20) / 1v1 All-Styles",
    coordinator: "Neha Menon (+91 98472 00012)",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80",
    description: "High-octane urban hip-hop battle featuring crew choreography, cyphers, b-boying, and head-to-head 1v1 all-styles showdowns.",
    rules: [
      "Crew performance time: 6 to 8 minutes maximum.",
      "Music track must be submitted in MP3 format on pendrive 2 hours prior.",
      "Props allowed upon prior safety inspection by stage coordinators."
    ]
  },
  {
    id: "evt-fashion-show",
    title: "Vogue Illuminate: The High-Fashion Runway",
    category: "cultural",
    badgeText: "COUTURE",
    prize: "₹50,000",
    feeText: "₹500 / Fashion Squad",
    tagline: "“Avant-Garde Silhouettes & Haute Couture Runway”",
    date: "Day 2 • 6:30 PM",
    venue: "Main Auditorium",
    teamSize: "Team of 10-18 Models",
    coordinator: "Ananya Krishna (+91 96454 00004)",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    description: "Inter-college fashion showcase blending avant-garde themes, dramatic runway lighting, haute couture, and soundtrack narratives.",
    rules: [
      "Stage time: 10-12 minutes including setup and walk.",
      "Judging criteria: Theme cohesion, garments, walk poise, and choreography.",
      "Vulgarity or offensive themes results in instant disqualification."
    ]
  },
  {
    id: "evt-body-show",
    title: "Body Show: Inter-College Physique Clash (Iron Titan)",
    category: "cultural",
    badgeText: "FITNESS CHAMPIONSHIP",
    prize: "₹35,000 + Medals",
    feeText: "₹200 / Athlete Pass",
    tagline: "“Peak Vascularity, Symmetry & Stage Poise Clash”",
    date: "Day 2 • 11:00 AM",
    venue: "Indoor Auditorium Stage",
    teamSize: "Solo Participant",
    coordinator: "Rahul R. (+91 98472 00015)",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    description: "Physique and bodybuilding showcase judged on muscle symmetry, vascularity, definition, and stage posing under spotlight conditions.",
    rules: [
      "Mandatory weigh-in on Day 2 morning at 9:00 AM.",
      "Divisions: Under 65kg, 65-75kg, 75kg+ & Men's Physique Open.",
      "Standard bodybuilding posing trunks / board shorts required."
    ]
  },
  {
    id: "evt-voice-mit",
    title: "Voice of MIT: Solo & Duet Vocal Clash",
    category: "cultural",
    badgeText: "SINGING COMPETITION",
    prize: "₹25,000 + Studio Rec",
    feeText: "₹100 / Vocalist",
    tagline: "“The Golden Voice Search Across Western & Classical”",
    date: "Day 1 • 2:00 PM",
    venue: "Seminar Hall 1",
    teamSize: "Solo / Duet",
    coordinator: "Gokul Das (+91 98472 00018)",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    description: "Vocal talent search across Western Solo, Indian Classical, and Contemporary Light Music judged by acclaimed recording artists.",
    rules: [
      "Performance time: 4 minutes round 1; 5 minutes final round.",
      "Karaoke track or single acoustic instrument allowed.",
      "Judged on pitch, rhythm, vocal texture, and crowd engagement."
    ]
  },

  // Automotive Exhibition
  {
    id: "evt-auto-supercars",
    title: "Auto Expo: Supercars & Street Builds Pavilion",
    category: "auto",
    badgeText: "EXHIBIT & DISPLAY",
    prize: "ENTRY: ₹100",
    feeText: "₹100 Visitor Ticket",
    tagline: "“850+ Horsepower Track Builds & Widebody Pavilion”",
    date: "Day 2 & 3 • Full Day",
    venue: "Auto Pavilion Ground",
    teamSize: "Visitor / Exhibitor",
    coordinator: "Vishnu Prasad (+91 98472 00020)",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
    description: "Massive automotive pavilion featuring track-spec modified automobiles, bagged widebody builds, exotic imports, and custom aero fabrication. Public entry passes available for ₹100.",
    rules: [
      "Visitor entry pass ₹100 mandatory for pavilion floor access.",
      "Vehicle exhibitors must register in advance for paddock slots.",
      "Engine revving strictly restricted to the Decibel Duel competition arena."
    ]
  },
  {
    id: "evt-auto-bikes",
    title: "Superbike Arena & Custom Choppers",
    category: "auto",
    badgeText: "SUPERBIKE SHOW",
    prize: "ENTRY: ₹100",
    feeText: "Included with ₹100 Auto Pass",
    tagline: "“Liter-Class Monsters & Handcrafted Choppers”",
    date: "Day 2 & 3 • Full Day",
    venue: "Motorsport Paddock B",
    teamSize: "Visitor / Rider",
    coordinator: "Akhil Nair (+91 98472 00022)",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    description: "Showcasing liter-class superbikes, cafe racers, adventure cross-country rigs, and precision engine modifications.",
    rules: [
      "Valid ₹100 Auto Expo pass gives access to both Car & Superbike pavilions.",
      "Helmets and paddock safety attire required inside pit areas."
    ]
  },
  {
    id: "evt-auto-decibel",
    title: "Decibel Duel: Exhaust Rev Limiter Clash",
    category: "auto",
    badgeText: "REV BATTLE",
    prize: "₹15,000 Cash Prize",
    feeText: "Included with ₹100 Auto Pass",
    tagline: "“Calibrated Decibel Meters & Two-Step Flame Battle”",
    date: "Day 3 • 2:00 PM",
    venue: "Burnout Pad Arena",
    teamSize: "Individual Vehicle",
    coordinator: "Kiran Dev (+91 98472 00024)",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    description: "Calibrated decibel sound meters measuring peak exhaust frequencies, launch control two-step, and engine acoustics.",
    rules: [
      "Strict 30-second rev window per vehicle.",
      "Hearing protection provided to all pit attendants.",
      "Sound meter placed at standardized 1-meter 45-degree angle."
    ]
  },

  // Technology & Learning
  {
    id: "evt-tech-ai-workshop",
    title: "Generative AI & Agentic Systems Workshop",
    category: "tech",
    badgeText: "HANDS-ON MASTERCLASS",
    prize: "Certified + Kits",
    feeText: "Free (Limited 60 Seats)",
    tagline: "“Build Autonomous Multi-Agent AI Pipelines”",
    date: "Day 1 • 10:00 AM",
    venue: "Advanced Computing Lab",
    teamSize: "Individual / Student",
    coordinator: "Dr. Rajesh V. (+91 94471 00001)",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    description: "Hands-on immersion in LLM agent orchestration, LangChain, vector embeddings, and building autonomous enterprise pipelines.",
    rules: [
      "Laptops with Python 3.10+ installed required.",
      "API sandbox access and training dataset provided.",
      "Verified Certificate of Excellence awarded upon completion."
    ]
  },
  {
    id: "evt-tech-hackathon",
    title: "IGNITE 24H National Code Sprint Hackathon",
    category: "tech",
    badgeText: "NATIONAL HACKATHON",
    prize: "₹1,00,000 Prize Pool",
    feeText: "Free (Sponsored by Nexus)",
    tagline: "“24 Hours Non-Stop Coding & Venture Pitching”",
    date: "Day 1-2 • 24 Hours",
    venue: "MIT Tech Innovation Hub",
    teamSize: "Teams of 2 to 4",
    coordinator: "Ananya Krishna (+91 96454 00004)",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    description: "Non-stop 24-hour sprint across Web3, Climate Tech, Healthcare AI, and Smart Cities with direct venture incubation pitches.",
    rules: [
      "All code must be written during the hackathon hours; Git commits tracked.",
      "Pre-existing open-source libraries and APIs permitted.",
      "Midnight meals, high-speed Wi-Fi, and beanbag resting areas provided."
    ]
  },
  {
    id: "evt-tech-cybersecurity",
    title: "Red Team Ops: Ethical Hacking & CTF",
    category: "tech",
    badgeText: "CYBER LAB",
    prize: "₹30,000 + Vouchers",
    feeText: "Free (Limited 50 Seats)",
    tagline: "“Sandboxed War Games & Penetration Testing”",
    date: "Day 2 • 10:00 AM",
    venue: "Cyber Security Lab 2",
    teamSize: "Solo or Duo",
    coordinator: "Sandeep Roy (+91 98472 00030)",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    description: "Capture-the-flag live attack-defense simulation covering reverse engineering, cryptography, web exploitation, and network privilege escalation.",
    rules: [
      "Attacking the fest infrastructure outside the CTF sandbox leads to instant ban.",
      "Teams scored on flag submission timestamps and challenge difficulty."
    ]
  },

  // Sports Championship
  {
    id: "evt-sport-kabaddi",
    title: "Inter-Collegiate Kabaddi Championship",
    category: "sports",
    badgeText: "SPORTS ARENA",
    prize: "₹35,000 Cash",
    feeText: "₹500 / Team Entry",
    tagline: "“Pro Mat Surface • Bone-Crushing Tackles & Raids”",
    date: "Day 1 & 2 • Full Day",
    venue: "Sports Complex Mat Arena",
    teamSize: "7 Players + 5 Subs",
    coordinator: "Jithin Joy (+91 97463 00003)",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?auto=format&fit=crop&w=800&q=80",
    description: "Fast-paced pro-kabaddi format played on official AKFI synthetic mats with electronic scoring, bonus line raids, and super tackles.",
    rules: [
      "Official AKFI tournament rules apply.",
      "Weight limit: 80 kg maximum per player during morning weighing.",
      "Proper kabaddi kit and mat shoes mandatory."
    ]
  },
  {
    id: "evt-sport-football",
    title: "IGNITE Cup: 11-a-Side Football Tournament",
    category: "sports",
    badgeText: "SPORTS ARENA",
    prize: "₹50,000 Cash + Trophy",
    feeText: "₹800 / Team Entry",
    tagline: "“32 Elite Colleges On Full Stadium Turf”",
    date: "Day 1, 2, 3 • Knockout",
    venue: "MIT Main Football Stadium",
    teamSize: "11 Players + 7 Subs",
    coordinator: "Farhan K. (+91 98472 00035)",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
    description: "The marquee college football tournament featuring 32 institutions competing for glory on the full-sized stadium turf.",
    rules: [
      "FIFA international match guidelines followed by qualified referees.",
      "Match duration: 35-10-35 minutes for prelims; 45-15-45 for finals.",
      "Shin guards and studded turf boots mandatory."
    ]
  },
  {
    id: "evt-sport-cricket",
    title: "IGNITE County Cricket Championship (T10)",
    category: "sports",
    badgeText: "SPORTS ARENA",
    prize: "₹45,000 Cash",
    feeText: "₹750 / Team Entry",
    tagline: "“White Leather Ball T10 Under Stadium Floodlights”",
    date: "Day 1, 2, 3 • Oval",
    venue: "MIT Cricket Oval (Turf Pitch)",
    teamSize: "11 Players + 4 Reserves",
    coordinator: "Naveen Chandran (+91 98472 00038)",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
    description: "Thrilling 10-over county format with white leather balls, colored team kits, powerplay overs, and floodlit championship final.",
    rules: [
      "10 overs per side, maximum 2 overs per bowler.",
      "Coloured jerseys mandatory for all squad members.",
      "Decision of the on-field match umpires is final."
    ]
  },
  {
    id: "evt-sport-volleyball",
    title: "Inter-College Volleyball Smash Trophy",
    category: "sports",
    badgeText: "SPORTS ARENA",
    prize: "₹30,000 Cash",
    feeText: "₹400 / Squad Entry",
    tagline: "“Thunderous Spikes & Acrobatic Defensive Blocks”",
    date: "Day 1 & 2 • Indoor",
    venue: "Indoor Stadium Court",
    teamSize: "6 Players + 4 Subs",
    coordinator: "Sujith M. (+91 98472 00040)",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80",
    description: "Thunderous spikes and defensive blocks on high-traction synthetic courts with official Volleyball Federation guidelines.",
    rules: [
      "Best of 3 sets for preliminary stages (25-25-15 points).",
      "Rotation and libero replacement rules strictly enforced.",
      "Non-marking court shoes mandatory."
    ]
  },
  {
    id: "evt-sport-threesfootball",
    title: "3's Street Football Cage Shootout",
    category: "sports",
    badgeText: "SPORTS ARENA",
    prize: "₹25,000 Cash",
    feeText: "₹300 / Squad Entry",
    tagline: "“Enclosed Turf Cage & Golden Goal Sudden Death”",
    date: "Day 2 & 3 • Turf Cage",
    venue: "MIT Cage Turf Arena",
    teamSize: "3 Starters + 2 Rolling Subs",
    coordinator: "Akshay B. (+91 98472 00042)",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
    description: "Fast-paced three-a-side street football on a compact turf cage with miniature goals and zero goalkeepers. Pure skill and pace.",
    rules: [
      "5-2-5 minutes match duration with continuous running clock.",
      "No handling; goals can only be scored from the attacking half.",
      "Golden goal sudden death rule applies in case of draws."
    ]
  }
];

/* ===================================================================
   2. SCHEDULE TIMETABLE DATA
   =================================================================== */
const FESTIVAL_SCHEDULE = {
  day1: [
    { time: "09:00 AM", title: "Grand Inaugural Ceremony & Lamp Lighting", cat: "Ceremony", venue: "Open Air Amphitheatre", desc: "Honoring national delegates, MIT management, and celebrity guest inaugurator." },
    { time: "10:00 AM", title: "Generative AI & Agentic Systems Workshop", cat: "Tech", venue: "Advanced Computing Lab", desc: "Hands-on multi-agent building with Python and enterprise LLMs." },
    { time: "10:30 AM", title: "IGNITE 24H National Code Sprint Commences", cat: "Tech", venue: "Innovation Hub", desc: "24-hour non-stop hackathon kickoff with problem statements released." },
    { time: "11:30 AM", title: "Keynote: Quantum Computing & Post-Quantum Encryption", cat: "Lecture", venue: "Main Auditorium", desc: "Auditorium address by Senior Scientist, Deep Tech Labs." },
    { time: "01:30 PM", title: "Kabaddi & Volleyball Championship Prelims", cat: "Sports", venue: "Sports Complex", desc: "High-intensity inter-collegiate knockouts begin." },
    { time: "02:00 PM", title: "Voice of MIT: Solo Vocal Showdown", cat: "Cultural", venue: "Seminar Hall 1", desc: "Western and Classical vocal preliminary rounds." },
    { time: "07:00 PM", title: "Inaugural Fusion Night & Celebrity Band Concert", cat: "Entertainment", venue: "Open Air Amphitheatre", desc: "Opening night music extravaganza and campus fireworks." }
  ],
  day2: [
    { time: "09:00 AM", title: "Auto Expo Grand Gate Opening & Supercar Pavilion", cat: "Auto Expo", venue: "Auto Pavilion Ground", desc: "Exotic widebody supercars, custom superbikes, and EV displays open." },
    { time: "10:00 AM", title: "Red Team Ethical Hacking & Live CTF", cat: "Tech", venue: "Cyber Lab 2", desc: "Attack-defense cyber simulation battle." },
    { time: "11:00 AM", title: "Body Show: Inter-College Physique Championship", cat: "Cultural", venue: "Indoor Auditorium", desc: "Men's physique, aesthetics, and muscularity judging rounds." },
    { time: "02:00 PM", title: "IGNITE 3's Street Football Shootout Starts", cat: "Sports", venue: "Cage Turf Arena", desc: "Continuous 3v3 cage football knockout action." },
    { time: "03:00 PM", title: "Break the Floor: Street Dance Championship", cat: "Cultural", venue: "Open Air Amphitheatre", desc: "Hip-hop crew wars, cyphers, and 1v1 all-styles battles." },
    { time: "06:30 PM", title: "Vogue Illuminate: The High-Fashion Runway", cat: "Cultural", venue: "Main Auditorium", desc: "Inter-collegiate fashion spectacle with avant-garde lighting." },
    { time: "08:00 PM", title: "Elektra: International DJ & EDM Laser Night", cat: "Entertainment", venue: "Main Festival Arena", desc: "Massive electronic dance music experience under laser canons." }
  ],
  day3: [
    { time: "09:30 AM", title: "Hackathon 24H Final Pitches & Project Judging", cat: "Tech", venue: "Innovation Hub", desc: "Top 10 teams pitch before venture capitalists and tech directors." },
    { time: "10:30 AM", title: "Autonomous Quadcopters & ROS2 Drone Demos", cat: "Tech", venue: "Robotics Arena", desc: "Waypoint flight demos and obstacle course trials." },
    { time: "01:30 PM", title: "Sports Arena Finals: Kabaddi, Volleyball & Cricket", cat: "Sports", venue: "Sports Grounds", desc: "Championship matches to crown the inter-college winners." },
    { time: "02:00 PM", title: "Decibel Duel: Exhaust Rev Limiter Championship", cat: "Auto Expo", venue: "Burnout Pad", desc: "Peak sound meter shootout for custom performance exhausts." },
    { time: "04:00 PM", title: "Championship Football Final (11s)", cat: "Sports", venue: "Main Stadium", desc: "The grand clash for the prestigious IGNITE Cup." },
    { time: "05:30 PM", title: "Grand Awards & Valedictory Ceremony", cat: "Ceremony", venue: "Main Stage", desc: "Felicitation of winners across all 45+ events with ₹6 Lakhs+ prizes." },
    { time: "07:30 PM", title: "THE PRO NIGHT: Grand Celebrity Rock Concert", cat: "Entertainment", venue: "Festival Main Grounds", desc: "Headline superstar concert with 50,000 watts of sound and grand finale." }
  ]
};

/* ===================================================================
   3. DOM READY INITIALIZATION
   =================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initAmbientCanvas();
  initBackgroundDjVideo();
  initProShowDemoVideo();
  initAudioAtmosphere();
  initCountdownTimer();
  initNavbarAndMobileMenu();
  initStatsCounters();
  initEventCardsAndFiltering();
  initSportsArenaTabs();
  initScheduleTabs();
  initGalleryLightbox();
  initRegistrationHub();
  initModals();
  initQuickInquiry();
  initNewsletter();
});

/* ===================================================================
   4. AMBIENT CANVAS (FLYING EMBER PARTICLES & CYBER GLOW)
   =================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById("ambientCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  const particleCount = 70;

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  class EmberParticle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 80;
      this.size = Math.random() * 2.8 + 0.8;
      this.speedY = Math.random() * 1.5 + 0.4;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.opacity = Math.random() * 0.75 + 0.25;
      this.fadeSpeed = Math.random() * 0.006 + 0.002;
      // Ember colors: neon orange, deep red, electric cyan spark
      const colors = ["#ff5722", "#ff1e42", "#ff9800", "#00f0ff"];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.opacity -= this.fadeSpeed;

      if (this.y < -10 || this.opacity <= 0) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    const p = new EmberParticle();
    p.y = Math.random() * height; // initial spread
    particles.push(p);
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(animate);
  }

  animate();
}

/* ===================================================================
   5. WEB AUDIO API SYNTHESIZER (NO EXTERNAL AUDIO FILES REQUIRED)
   =================================================================== */
function initAudioAtmosphere() {
  const soundBtn = document.getElementById("soundBtn");
  const audioIcon = document.getElementById("audioIcon");
  if (!soundBtn) return;

  let isPlaying = false;
  let audioCtx = null;
  let synthOsc1 = null;
  let synthOsc2 = null;
  let masterGain = null;

  soundBtn.addEventListener("click", () => {
    if (!isPlaying) {
      startAmbientSynth();
    } else {
      stopAmbientSynth();
    }
  });

  function startAmbientSynth() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioCtx) audioCtx = new AudioContext();
      if (audioCtx.state === "suspended") audioCtx.resume();

      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.01, audioCtx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 2);
      masterGain.connect(audioCtx.destination);

      // Low cyberpunk ambient synth drone
      synthOsc1 = audioCtx.createOscillator();
      synthOsc1.type = "sawtooth";
      synthOsc1.frequency.setValueAtTime(55, audioCtx.currentTime); // Low A

      // Low pass filter to create deep warm concert stage rumble
      const filter = audioCtx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(220, audioCtx.currentTime);

      synthOsc2 = audioCtx.createOscillator();
      synthOsc2.type = "sine";
      synthOsc2.frequency.setValueAtTime(110.5, audioCtx.currentTime); // Slight detune

      synthOsc1.connect(filter);
      synthOsc2.connect(filter);
      filter.connect(masterGain);

      synthOsc1.start();
      synthOsc2.start();

      isPlaying = true;
      soundBtn.classList.add("playing");
      audioIcon.className = "fa-solid fa-volume-high";
    } catch (e) {
      console.warn("Web Audio API not supported in this browser.", e);
    }
  }

  function stopAmbientSynth() {
    if (masterGain && audioCtx) {
      masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
      setTimeout(() => {
        if (synthOsc1) synthOsc1.stop();
        if (synthOsc2) synthOsc2.stop();
        synthOsc1 = null;
        synthOsc2 = null;
      }, 800);
    }
    isPlaying = false;
    soundBtn.classList.remove("playing");
    audioIcon.className = "fa-solid fa-volume-xmark";
  }
}

/* ===================================================================
   6. COUNTDOWN TIMER
   =================================================================== */
function initCountdownTimer() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const targetDateDisplay = document.getElementById("targetDateDisplay");

  if (!daysEl) return;

  const target = new Date(FESTIVAL_CONFIG.targetDate).getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = target - now;

    if (distance < 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      if (targetDateDisplay) {
        targetDateDisplay.textContent = "FESTIVAL IS LIVE NOW! WELCOME TO MIT!";
      }
      return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(d).padStart(2, "0");
    hoursEl.textContent = String(h).padStart(2, "0");
    minutesEl.textContent = String(m).padStart(2, "0");
    secondsEl.textContent = String(s).padStart(2, "0");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ===================================================================
   7. NAVBAR & MOBILE DRAWER
   =================================================================== */
function initNavbarAndMobileMenu() {
  const navbar = document.getElementById("navbar");
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerClose = document.getElementById("drawerClose");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  // Sticky Navbar Scroll Effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile Drawer Toggle
  function openDrawer() {
    mobileDrawer.classList.add("open");
    drawerBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    mobileDrawer.classList.remove("open");
    drawerBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (mobileToggle) mobileToggle.addEventListener("click", openDrawer);
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeDrawer();
    });
  });

  // Scrollspy to highlight active nav link
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

/* ===================================================================
   8. STATS COUNTERS ANIMATION (INTERSECTION OBSERVER)
   =================================================================== */
function initStatsCounters() {
  const statNumbers = document.querySelectorAll(".stat-number");
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetVal = parseInt(el.getAttribute("data-target"), 10) || 0;
        let startVal = 0;
        const duration = 1800;
        const stepTime = 25;
        const steps = duration / stepTime;
        const increment = targetVal / steps;

        const counter = setInterval(() => {
          startVal += increment;
          if (startVal >= targetVal) {
            el.textContent = targetVal;
            clearInterval(counter);
          } else {
            el.textContent = Math.ceil(startVal);
          }
        }, stepTime);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => observer.observe(el));
}

/* ===================================================================
   9. EVENT CARDS RENDERING & INTERACTIVE SEARCH / FILTER
   =================================================================== */
function initEventCardsAndFiltering() {
  const container = document.getElementById("eventsGridContainer");
  const filterPills = document.querySelectorAll(".filter-pill");
  const searchInput = document.getElementById("eventSearchInput");

  if (!container) return;

  let activeCategory = "all";
  let searchQuery = "";

  function renderEvents() {
    container.innerHTML = "";

    const filtered = FESTIVAL_EVENTS.filter(evt => {
      const matchesCategory = activeCategory === "all" || evt.category === activeCategory;
      const matchesSearch = 
        evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.venue.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: #94a3b8;">
          <i class="fa-solid fa-face-meh" style="font-size: 2.5rem; color: var(--neon-orange); margin-bottom: 1rem;"></i>
          <h3>No events match your search</h3>
          <p>Try searching for "dance", "cricket", "workshop", or switch categories.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(evt => {
      const card = document.createElement("div");
      card.className = "event-card";
      card.setAttribute("data-event-id", evt.id);

      card.innerHTML = `
        <div class="event-card-img-wrap view-poster-trigger" data-event-id="${evt.id}" title="Click to view Official Festival Poster">
          <img src="${evt.image}" alt="${evt.title}" loading="lazy">
          <span class="event-category-chip">${evt.badgeText}</span>
          <span class="event-prize-tag">${evt.prize}</span>
          <div class="poster-hover-pill"><i class="fa-solid fa-file-image"></i> View Poster</div>
        </div>
        <div class="event-card-body">
          <h3 class="view-poster-trigger" data-event-id="${evt.id}" title="Click to view Official Poster" style="cursor: pointer;">${evt.title}</h3>
          <p>${evt.description}</p>
          <div class="event-meta-info">
            <div><i class="fa-regular fa-clock"></i> <span>${evt.date}</span></div>
            <div><i class="fa-solid fa-location-dot"></i> <span>${evt.venue}</span></div>
            <div><i class="fa-solid fa-ticket text-neon-orange"></i> <span>${evt.feeText || evt.prize}</span></div>
          </div>
          <div class="event-card-actions">
            <button class="btn btn-poster btn-sm view-poster-btn" data-event-id="${evt.id}" title="View Official Event Poster">
              <i class="fa-solid fa-file-image"></i> Poster
            </button>
            <button class="btn btn-outline btn-sm quick-view-btn" data-event-id="${evt.id}" title="View Guidelines & Details">
              <i class="fa-solid fa-circle-info"></i> Details
            </button>
            <button class="btn btn-primary btn-sm glow-btn register-trigger-btn" data-event-title="${evt.title}">
              <i class="fa-solid fa-ticket"></i> Register
            </button>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    attachDynamicCardListeners();
  }

  // Category Pill Buttons
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.getAttribute("data-filter");
      renderEvents();
    });
  });

  // Search Input with Debounce
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderEvents();
    });
  }

  renderEvents();
}

function attachDynamicCardListeners() {
  // Official Poster triggers (clicking poster button or card image/title)
  document.querySelectorAll(".view-poster-btn, .view-poster-trigger").forEach(el => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const eventId = el.getAttribute("data-event-id");
      if (eventId) openEventPosterModal(eventId);
    });
  });

  // Quick View triggers
  document.querySelectorAll(".quick-view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const eventId = btn.getAttribute("data-event-id");
      openEventDetailModal(eventId);
    });
  });

  // Register Buttons across the page
  document.querySelectorAll(".register-trigger-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const eventTitle = btn.getAttribute("data-event-title");
      const sportType = btn.getAttribute("data-sport-type");

      // Smooth scroll to registration section
      const regSection = document.getElementById("registration");
      if (regSection) {
        regSection.scrollIntoView({ behavior: "smooth" });
      }

      // If it's a sport, select the sports tab
      if (sportType) {
        const sportsTab = document.querySelector('.reg-tab[data-reg-type="sports"]');
        if (sportsTab) sportsTab.click();
      }

      // Pre-select the event in dropdown after slight delay
      setTimeout(() => {
        const select = document.getElementById("regEventSelect");
        if (select && eventTitle) {
          // Check if option exists or create one
          let matched = false;
          for (let opt of select.options) {
            if (opt.text.toLowerCase().includes(eventTitle.toLowerCase()) || opt.value.toLowerCase().includes(eventTitle.toLowerCase())) {
              select.value = opt.value;
              matched = true;
              break;
            }
          }
          if (!matched) {
            const newOpt = new Option(eventTitle, eventTitle);
            select.add(newOpt);
            select.value = eventTitle;
          }
        }
      }, 300);
    });
  });
}

/* ===================================================================
   10. SPORTS ARENA TAB CONTROLLER
   =================================================================== */
function initSportsArenaTabs() {
  const tabs = document.querySelectorAll(".sport-tab-btn");
  const panes = document.querySelectorAll(".sport-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      const sportKey = tab.getAttribute("data-sport");
      const targetPane = document.getElementById(`sport-${sportKey}`);
      if (targetPane) targetPane.classList.add("active");
    });
  });
}

/* ===================================================================
   11. SCHEDULE DAY TABS & TIMELINE RENDERING
   =================================================================== */
function initScheduleTabs() {
  const dayTabs = document.querySelectorAll(".day-tab");
  const contentContainer = document.getElementById("scheduleContent");
  const downloadPdfBtn = document.getElementById("downloadPdfScheduleBtn");

  if (!contentContainer) return;

  function renderDaySchedule(dayKey) {
    const list = FESTIVAL_SCHEDULE[dayKey] || [];
    contentContainer.innerHTML = "";

    list.forEach(item => {
      const itemEl = document.createElement("div");
      itemEl.className = "timeline-item";
      itemEl.innerHTML = `
        <div class="timeline-time">
          <strong>${item.time}</strong>
          <span>${item.cat}</span>
        </div>
        <div class="timeline-card">
          <div class="timeline-card-header">
            <h4>${item.title}</h4>
            <span class="timeline-badge">${item.cat}</span>
          </div>
          <p>${item.desc}</p>
          <div class="timeline-venue">
            <i class="fa-solid fa-location-dot"></i>
            <span>${item.venue}</span>
          </div>
        </div>
      `;
      contentContainer.appendChild(itemEl);
    });
  }

  dayTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      dayTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const day = tab.getAttribute("data-day");
      renderDaySchedule(day);
    });
  });

  if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener("click", () => {
      alert("Opening printable festival schedule...");
      window.print();
    });
  }

  // Render Day 1 by default
  renderDaySchedule("day1");
}

/* ===================================================================
   12. CINEMATIC GALLERY FILTERING & LIGHTBOX
   =================================================================== */
function initGalleryLightbox() {
  const filterBtns = document.querySelectorAll(".gal-filter");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-gal");

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute("data-category");
        if (filter === "all" || itemCat === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Clicking an item opens the modal view with full photo
  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const imgUrl = item.getAttribute("data-img-url");
      const caption = item.getAttribute("data-caption") || "IGNITE V7 Festival";
      openGalleryLightbox(imgUrl, caption);
    });
  });
}

function openGalleryLightbox(url, caption) {
  let lightbox = document.getElementById("galleryLightboxModal");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "galleryLightboxModal";
    lightbox.className = "modal-backdrop";
    lightbox.innerHTML = `
      <div class="modal-card" style="max-width: 900px; padding: 0; background: #000; overflow: hidden; text-align: center;">
        <button class="modal-close-btn" id="lightboxCloseBtn">&times;</button>
        <img src="" id="lightboxImg" style="width: 100%; max-height: 75vh; object-fit: contain;">
        <p id="lightboxCaption" style="padding: 1.2rem; color: #cbd5e1; font-size: 0.95rem;"></p>
      </div>
    `;
    document.body.appendChild(lightbox);

    const closeBtn = lightbox.querySelector("#lightboxCloseBtn");
    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.classList.remove("active");
    });
  }

  const lightboxImg = lightbox.querySelector("#lightboxImg");
  const lightboxCap = lightbox.querySelector("#lightboxCaption");
  lightboxImg.src = url;
  lightboxCap.textContent = caption;
  lightbox.classList.add("active");
}

/* ===================================================================
   13. REGISTRATION HUB & VERIFIED DIGITAL PASS GENERATION
   =================================================================== */
function initRegistrationHub() {
  const regTabs = document.querySelectorAll(".reg-tab");
  const form = document.getElementById("mainRegistrationForm");
  const eventSelect = document.getElementById("regEventSelect");
  const teamOnlyFields = document.querySelectorAll(".team-only-field");
  const formTypeTitle = document.getElementById("formTypeTitle");
  const passSummaryTitle = document.getElementById("passSummaryTitle");
  const feeDisplay = document.getElementById("feeDisplay");

  let currentRegType = "individual";

  const eventCatalog = {
    individual: [
      { name: "Pro Night All-Access Concert Pass", fee: "₹599 (PRO NIGHT PASS)" },
      { name: "Auto Expo General Visitor Entry", fee: "₹100 (AUTO EXPO PASS)" },
      { name: "Generative AI & Agentic Systems Workshop", fee: "FREE (LIMITED SEATS)" },
      { name: "Red Team Ethical Hacking Workshop", fee: "FREE (LIMITED SEATS)" },
      { name: "Autonomous Quadcopters & ROS2 Masterclass", fee: "FREE (LIMITED SEATS)" },
      { name: "Voice of MIT: Solo Vocal Battle", fee: "₹100 (REGISTRATION)" },
      { name: "Body Show: Physique Championship", fee: "₹200 (WEIGH-IN PASS)" }
    ],
    team: [
      { name: "IGNITE 24-Hour Code Sprint Hackathon (2-4 Members)", fee: "FREE / SPONSORED" },
      { name: "Vogue Illuminate Fashion Show (10-18 Members)", fee: "₹500 / SQUAD" },
      { name: "Break the Floor Dance Crew Championship (6-20 Members)", fee: "₹400 / CREW" },
      { name: "Auto Expo Custom Vehicle Pavilion Exhibit", fee: "FREE (PRIOR APPROVAL)" }
    ],
    sports: [
      { name: "Inter-Collegiate Kabaddi Championship (7+5)", fee: "₹500 / TEAM" },
      { name: "IGNITE Cup 11-a-Side Football Tournament (11+7)", fee: "₹800 / TEAM" },
      { name: "County Cricket Championship T10 (11+4)", fee: "₹750 / SQUAD" },
      { name: "Inter-College Volleyball Smash Trophy (6+4)", fee: "₹400 / SQUAD" },
      { name: "3's Street Football Shootout (3+2)", fee: "₹300 / SQUAD" }
    ]
  };

  function populateDropdown(type) {
    if (!eventSelect) return;
    eventSelect.innerHTML = '<option value="" disabled selected>-- Choose an Event / Workshop --</option>';

    const list = eventCatalog[type] || [];
    list.forEach(item => {
      const opt = document.createElement("option");
      opt.value = item.name;
      opt.textContent = `${item.name} — [${item.fee}]`;
      opt.setAttribute("data-fee", item.fee);
      eventSelect.appendChild(opt);
    });
  }

  // Switch tabs
  regTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      regTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentRegType = tab.getAttribute("data-reg-type");

      if (currentRegType === "individual") {
        teamOnlyFields.forEach(f => f.style.display = "none");
        formTypeTitle.innerHTML = '<i class="fa-solid fa-sparkles"></i> Individual Participant Registration';
        passSummaryTitle.textContent = "All-Access Student Participant Badge";
        feeDisplay.textContent = "FREE / INCLUDED";
      } else if (currentRegType === "team") {
        teamOnlyFields.forEach(f => f.style.display = "flex");
        formTypeTitle.innerHTML = '<i class="fa-solid fa-users"></i> Event & Tech Team Registration';
        passSummaryTitle.textContent = "Multi-Member Event Squad Pass";
        feeDisplay.textContent = "TEAM SLOTS OPEN";
      } else if (currentRegType === "sports") {
        teamOnlyFields.forEach(f => f.style.display = "flex");
        formTypeTitle.innerHTML = '<i class="fa-solid fa-trophy"></i> Sports Arena Championship Squad Registration';
        passSummaryTitle.textContent = "Official Sports Arena Team Entry";
        feeDisplay.textContent = "TOURNAMENT ENTRY";
      }

      populateDropdown(currentRegType);
    });
  });

  populateDropdown("individual");

  if (eventSelect) {
    eventSelect.addEventListener("change", () => {
      const selectedOpt = eventSelect.options[eventSelect.selectedIndex];
      const fee = selectedOpt.getAttribute("data-fee");
      if (fee) feeDisplay.textContent = fee;
    });
  }

  // Form Validation & Submission
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let isValid = true;
      const fullName = document.getElementById("regFullName");
      const email = document.getElementById("regEmail");
      const phone = document.getElementById("regPhone");
      const college = document.getElementById("regCollege");
      const terms = document.getElementById("regTerms");
      const teamName = document.getElementById("regTeamName");
      const teamSize = document.getElementById("regTeamSize");

      // Validate Full Name
      if (!fullName.value || fullName.value.trim().length < 3) {
        showError("nameError", fullName);
        isValid = false;
      } else {
        clearError("nameError", fullName);
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value || !emailRegex.test(email.value.trim())) {
        showError("emailError", email);
        isValid = false;
      } else {
        clearError("emailError", email);
      }

      // Validate Phone (10 digits)
      const phoneClean = phone.value.replace(/[^0-9]/g, "");
      if (phoneClean.length < 10) {
        showError("phoneError", phone);
        isValid = false;
      } else {
        clearError("phoneError", phone);
      }

      // Validate College
      if (!college.value || college.value.trim().length < 2) {
        showError("collegeError", college);
        isValid = false;
      } else {
        clearError("collegeError", college);
      }

      // Validate Event Select
      if (!eventSelect.value) {
        showError("eventSelectError", eventSelect);
        isValid = false;
      } else {
        clearError("eventSelectError", eventSelect);
      }

      // Validate Team fields if applicable
      if (currentRegType !== "individual") {
        if (!teamName.value || teamName.value.trim().length < 2) {
          showError("teamNameError", teamName);
          isValid = false;
        } else {
          clearError("teamNameError", teamName);
        }

        if (!teamSize.value || parseInt(teamSize.value, 10) < 2) {
          showError("teamSizeError", teamSize);
          isValid = false;
        } else {
          clearError("teamSizeError", teamSize);
        }
      }

      // Validate Terms Checkbox
      if (!terms.checked) {
        document.getElementById("termsError").classList.add("active");
        isValid = false;
      } else {
        document.getElementById("termsError").classList.remove("active");
      }

      if (!isValid) return;

      // SUCCESS! Generate Digital Pass
      generateDigitalPass({
        name: fullName.value.trim(),
        email: email.value.trim(),
        college: college.value.trim(),
        eventName: eventSelect.value,
        regType: currentRegType,
        teamName: (currentRegType !== "individual") ? teamName.value.trim() : null
      });

      form.reset();
      populateDropdown(currentRegType);
    });
  }

  function showError(errorId, inputEl) {
    const err = document.getElementById(errorId);
    if (err) err.classList.add("active");
    if (inputEl) inputEl.classList.add("input-invalid");
  }

  function clearError(errorId, inputEl) {
    const err = document.getElementById(errorId);
    if (err) err.classList.remove("active");
    if (inputEl) inputEl.classList.remove("input-invalid");
  }
}

function generateDigitalPass(data) {
  const modal = document.getElementById("ticketModal");
  if (!modal) return;

  const attendeeNameEl = document.getElementById("ticketAttendeeName");
  const eventNameEl = document.getElementById("ticketEventName");
  const collegeNameEl = document.getElementById("ticketCollegeName");
  const regIdEl = document.getElementById("ticketRegId");
  const dateIssuedEl = document.getElementById("ticketDateIssued");

  // Create Unique ID
  const randomCode = Math.floor(100000 + Math.random() * 900000);
  const regId = `IGN7-${randomCode}-MIT`;

  let displayName = data.name;
  if (data.teamName) {
    displayName += ` [Team: ${data.teamName}]`;
  }

  if (attendeeNameEl) attendeeNameEl.textContent = displayName;
  if (eventNameEl) eventNameEl.textContent = data.eventName;
  if (collegeNameEl) collegeNameEl.textContent = data.college;
  if (regIdEl) regIdEl.textContent = regId;
  if (dateIssuedEl) dateIssuedEl.textContent = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

  modal.classList.add("active");
}

/* ===================================================================
   14. MODAL CONTROLS (EVENT DETAIL, TEASER, TICKET)
   =================================================================== */
function initModals() {
  // Event Detail Modal
  const eventModal = document.getElementById("eventDetailModal");
  const eventCloseBtn = document.getElementById("modalCloseBtn");
  const modalRegisterBtn = document.getElementById("modalRegisterBtn");

  if (eventCloseBtn && eventModal) {
    eventCloseBtn.addEventListener("click", () => eventModal.classList.remove("active"));
    eventModal.addEventListener("click", (e) => {
      if (e.target === eventModal) eventModal.classList.remove("active");
    });
  }

  if (modalRegisterBtn) {
    modalRegisterBtn.addEventListener("click", () => {
      eventModal.classList.remove("active");
      const title = document.getElementById("modalEventTitle").textContent;
      const regSection = document.getElementById("registration");
      if (regSection) regSection.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        const select = document.getElementById("regEventSelect");
        if (select && title) {
          let matched = false;
          for (let opt of select.options) {
            if (opt.text.toLowerCase().includes(title.toLowerCase())) {
              select.value = opt.value;
              matched = true;
              break;
            }
          }
          if (!matched) {
            select.add(new Option(title, title));
            select.value = title;
          }
        }
      }, 350);
    });
  }

  // Teaser Modal
  const teaserModal = document.getElementById("teaserModal");
  const teaserModalBtn = document.getElementById("teaserModalBtn");
  const teaserCloseBtn = document.getElementById("teaserCloseBtn");

  if (teaserModalBtn && teaserModal) {
    teaserModalBtn.addEventListener("click", () => teaserModal.classList.add("active"));
  }
  if (teaserCloseBtn && teaserModal) {
    teaserCloseBtn.addEventListener("click", () => teaserModal.classList.remove("active"));
    teaserModal.addEventListener("click", (e) => {
      if (e.target === teaserModal) teaserModal.classList.remove("active");
    });
  }

  // Ticket Modal Close & Print
  const ticketModal = document.getElementById("ticketModal");
  const ticketCloseBtn = document.getElementById("ticketCloseBtn");
  const closeTicketModalBtn = document.getElementById("closeTicketModalBtn");
  const printTicketBtn = document.getElementById("printTicketBtn");

  function closeTicket() {
    if (ticketModal) ticketModal.classList.remove("active");
  }

  if (ticketCloseBtn) ticketCloseBtn.addEventListener("click", closeTicket);
  if (closeTicketModalBtn) closeTicketModalBtn.addEventListener("click", closeTicket);
  if (ticketModal) {
    ticketModal.addEventListener("click", (e) => {
      if (e.target === ticketModal) closeTicket();
    });
  }

  if (printTicketBtn) {
    printTicketBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // Poster Modal controls
  const posterModal = document.getElementById("eventPosterModal");
  const posterCloseBtn = document.getElementById("posterCloseBtn");
  const posterDownloadBtn = document.getElementById("posterDownloadBtn");
  const posterRegisterBtn = document.getElementById("posterRegisterBtn");
  const posterSwitchDetailsBtn = document.getElementById("posterSwitchDetailsBtn");

  if (posterCloseBtn && posterModal) {
    posterCloseBtn.addEventListener("click", () => posterModal.classList.remove("active"));
    posterModal.addEventListener("click", (e) => {
      if (e.target === posterModal) posterModal.classList.remove("active");
    });
  }

  if (posterDownloadBtn) {
    posterDownloadBtn.addEventListener("click", () => {
      window.print();
    });
  }

  if (posterRegisterBtn) {
    posterRegisterBtn.addEventListener("click", () => {
      if (posterModal) posterModal.classList.remove("active");
      const title = document.getElementById("posterTitle").textContent;
      const regSection = document.getElementById("registration");
      if (regSection) regSection.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        const select = document.getElementById("regEventSelect");
        if (select && title) {
          let matched = false;
          for (let opt of select.options) {
            if (opt.text.toLowerCase().includes(title.toLowerCase()) || opt.value.toLowerCase().includes(title.toLowerCase())) {
              select.value = opt.value;
              matched = true;
              break;
            }
          }
          if (!matched) {
            select.add(new Option(title, title));
            select.value = title;
          }
        }
      }, 350);
    });
  }

  if (posterSwitchDetailsBtn) {
    posterSwitchDetailsBtn.addEventListener("click", () => {
      if (posterModal) posterModal.classList.remove("active");
      if (currentPosterEventId) openEventDetailModal(currentPosterEventId);
    });
  }

  // Close modals on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("active"));
    }
  });
}

let currentPosterEventId = null;

function openEventPosterModal(eventId) {
  const modal = document.getElementById("eventPosterModal");
  if (!modal) return;

  const evt = FESTIVAL_EVENTS.find(e => e.id === eventId);
  if (!evt) return;

  currentPosterEventId = eventId;

  document.getElementById("posterImg").src = evt.image;
  document.getElementById("posterCategoryName").textContent = evt.badgeText;
  
  const prizeRibbon = document.getElementById("posterPrizeRibbon");
  const prizeText = document.getElementById("posterPrizeText");
  if (evt.prize) {
    prizeRibbon.style.display = "flex";
    prizeText.textContent = evt.prize.includes("₹") ? evt.prize : (evt.prize + " • " + (evt.feeText || ""));
  } else {
    prizeRibbon.style.display = "none";
  }

  document.getElementById("posterTitle").textContent = evt.title;
  document.getElementById("posterTagline").textContent = evt.tagline || "“Ignite the Future. Unleash the Energy.”";
  document.getElementById("posterDate").textContent = evt.date;
  document.getElementById("posterVenue").textContent = evt.venue;
  document.getElementById("posterFee").textContent = evt.feeText || evt.prize;
  document.getElementById("posterSquad").textContent = evt.teamSize;
  document.getElementById("posterContact").textContent = evt.coordinator;

  modal.classList.add("active");
}

function openEventDetailModal(eventId) {
  const modal = document.getElementById("eventDetailModal");
  if (!modal) return;

  const evt = FESTIVAL_EVENTS.find(e => e.id === eventId);
  if (!evt) return;

  currentPosterEventId = eventId;

  document.getElementById("modalEventImg").src = evt.image;
  document.getElementById("modalEventCat").textContent = evt.badgeText;
  document.getElementById("modalEventPrize").textContent = evt.prize;
  document.getElementById("modalEventTitle").textContent = evt.title;
  document.getElementById("modalEventDesc").textContent = evt.description;
  document.getElementById("modalEventDate").textContent = evt.date;
  document.getElementById("modalEventVenue").textContent = evt.venue;
  document.getElementById("modalEventTeam").textContent = evt.teamSize;
  document.getElementById("modalEventContact").textContent = evt.coordinator;

  const rulesList = document.getElementById("modalRulesList");
  rulesList.innerHTML = "";
  if (evt.rules && evt.rules.length > 0) {
    evt.rules.forEach(rule => {
      const li = document.createElement("li");
      li.textContent = rule;
      rulesList.appendChild(li);
    });
  } else {
    rulesList.innerHTML = "<li>Valid college student ID card mandatory.</li><li>Report at venue 30 minutes before schedule.</li>";
  }

  modal.classList.add("active");
}

/* ===================================================================
   BACKGROUND DJ PROSHOW VIDEO CONTROLLER
   =================================================================== */
function initBackgroundDjVideo() {
  const bgVideo = document.getElementById("bgDjVideo");
  const videoToggleBtn = document.getElementById("videoToggleBtn");
  const videoIcon = document.getElementById("videoIcon");
  const videoText = document.querySelector(".video-text");
  const videoContainer = document.getElementById("videoBgContainer");

  if (!bgVideo) return;

  bgVideo.muted = true;
  const playPromise = bgVideo.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Auto-play was prevented by browser policy; starts on first user click
      document.addEventListener("click", () => {
        bgVideo.play().catch(() => {});
      }, { once: true });
    });
  }

  let isVideoOn = true;
  if (videoToggleBtn) {
    videoToggleBtn.addEventListener("click", () => {
      if (isVideoOn) {
        bgVideo.pause();
        if (videoContainer) videoContainer.classList.add("video-hidden");
        videoToggleBtn.classList.add("video-paused");
        if (videoIcon) videoIcon.className = "fa-solid fa-video-slash";
        if (videoText) videoText.textContent = "DJ Video: OFF";
        isVideoOn = false;
      } else {
        bgVideo.play().catch(() => {});
        if (videoContainer) videoContainer.classList.remove("video-hidden");
        videoToggleBtn.classList.remove("video-paused");
        if (videoIcon) videoIcon.className = "fa-solid fa-video";
        if (videoText) videoText.textContent = "DJ Video: ON";
        isVideoOn = true;
      }
    });
  }
}

/* ===================================================================
   PROSHOW DEMO VIDEO PLAYER CONTROLLER
   =================================================================== */
function initProShowDemoVideo() {
  const video = document.getElementById("proshowDemoVideo");
  const playBtn = document.getElementById("demoPlayBtn");
  const playIcon = document.getElementById("demoPlayIcon");
  const overlay = document.getElementById("demoPlayerOverlay");
  const ctrlPlayPause = document.getElementById("ctrlPlayPause");
  const ctrlMute = document.getElementById("ctrlMute");
  const ctrlFullscreen = document.getElementById("ctrlFullscreen");
  const progressBar = document.getElementById("ctrlProgressBar");
  const progressWrap = document.getElementById("ctrlProgressWrap");
  const timeDisplay = document.getElementById("ctrlTime");
  const tabBtns = document.querySelectorAll(".demo-tab-btn");
  const nowPlaying = document.getElementById("demoNowPlaying");

  if (!video) return;

  function togglePlay() {
    if (video.paused) {
      video.play().catch(() => {});
      if (playIcon) playIcon.className = "fa-solid fa-pause";
      if (ctrlPlayPause) ctrlPlayPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
      if (overlay) overlay.style.opacity = "0.2";
    } else {
      video.pause();
      if (playIcon) playIcon.className = "fa-solid fa-play";
      if (ctrlPlayPause) ctrlPlayPause.innerHTML = '<i class="fa-solid fa-play"></i>';
      if (overlay) overlay.style.opacity = "1";
    }
  }

  if (playBtn) playBtn.addEventListener("click", togglePlay);
  if (ctrlPlayPause) ctrlPlayPause.addEventListener("click", togglePlay);
  if (video) video.addEventListener("click", togglePlay);

  if (video && overlay) {
    video.addEventListener("mouseenter", () => { overlay.style.opacity = "1"; });
    video.addEventListener("mouseleave", () => {
      if (!video.paused) overlay.style.opacity = "0.2";
    });
  }

  video.addEventListener("timeupdate", () => {
    if (!video.duration) return;
    const pct = (video.currentTime / video.duration) * 100;
    if (progressBar) progressBar.style.width = `${pct}%`;

    const curM = Math.floor(video.currentTime / 60);
    const curS = Math.floor(video.currentTime % 60);
    const durM = Math.floor(video.duration / 60) || 0;
    const durS = Math.floor(video.duration % 60) || 0;
    if (timeDisplay) {
      timeDisplay.textContent = `${String(curM).padStart(2, '0')}:${String(curS).padStart(2, '0')} / ${String(durM).padStart(2, '0')}:${String(durS).padStart(2, '0')}`;
    }
  });

  if (progressWrap) {
    progressWrap.addEventListener("click", (e) => {
      const rect = progressWrap.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      if (video.duration) video.currentTime = pos * video.duration;
    });
  }

  if (ctrlMute) {
    ctrlMute.addEventListener("click", () => {
      video.muted = !video.muted;
      ctrlMute.innerHTML = video.muted ? '<i class="fa-solid fa-volume-xmark"></i>' : '<i class="fa-solid fa-volume-high"></i>';
    });
  }

  if (ctrlFullscreen) {
    ctrlFullscreen.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        if (video.requestFullscreen) video.requestFullscreen().catch(() => {});
      } else {
        if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
      }
    });
  }

  // Switch demo clips
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const src = btn.getAttribute("data-video-src");
      const title = btn.getAttribute("data-video-title");
      if (src && video) {
        video.src = src;
        video.load();
        video.play().catch(() => {});
        if (playIcon) playIcon.className = "fa-solid fa-pause";
        if (ctrlPlayPause) ctrlPlayPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
        if (nowPlaying) nowPlaying.textContent = title;
      }
    });
  });
}

/* ===================================================================
   15. QUICK INQUIRY & CONTACT FORM
   =================================================================== */
function initQuickInquiry() {
  const form = document.getElementById("quickContactForm");
  const success = document.getElementById("inqSuccessMsg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (success) {
        success.style.display = "block";
        form.reset();
        setTimeout(() => {
          success.style.display = "none";
        }, 5000);
      }
    });
  }
}

/* ===================================================================
   16. NEWSLETTER SUBSCRIPTION
   =================================================================== */
function initNewsletter() {
  const form = document.getElementById("newsletterForm");
  const success = document.getElementById("newsSuccess");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (success) {
        success.style.display = "block";
        form.reset();
        setTimeout(() => {
          success.style.display = "none";
        }, 5000);
      }
    });
  }
}
