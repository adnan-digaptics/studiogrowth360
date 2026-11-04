export interface StudioService {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  deliverables: string[];
  metrics: string;
  technologies: string[];
}

const studioServices: StudioService[] = [
  {
    id: "01",
    title: "Multi-Cam 4K Studio Rental & Live Switching",
    shortDesc: "Acoustically tuned sets, Sony Cinema FX6 cameras, Shure SM7B mics, and on-site engineers.",
    description:
      "Record your podcast in our broadcast-grade, soundproof recording suites. Equipped with 3 to 4 Sony Cinema Line cameras, industry-standard Shure SM7B microphones, flattering cinema lighting, and live multi-cam video switching. Step into a world-class set, deliver your insights, and walk away with flawless raw files or let our editors craft the final cut.",
    deliverables: [
      "Triple-pane STC 65 soundproof broadcast rooms with zero ambient echo",
      "3x to 4x Sony FX6 / FX3 Cinema 4K camera angles with prime G-Master lenses",
      "Shure SM7B broadcast dynamic microphones with Cloudlifters & RØDECaster Pro II",
      "Aputure & Nanlite studio lighting calibrated for cinematic skin tones",
      "Live Blackmagic ATEM ISO video switching with instant post-wrap cloud backup",
    ],
    metrics: "100% turnkey studio session readiness",
    technologies: ["Sony FX6", "Shure SM7B", "Blackmagic ATEM", "RØDECaster Pro II", "Aputure 300d", "Sennheiser HD650"],
  },
  {
    id: "02",
    title: "Full Episode Post-Production & Sound Design",
    shortDesc: "Cinema-grade multi-cam editing, audio de-noising, sonic branding, and DaVinci color grading.",
    description:
      "We transform your raw studio session into a polished television-grade show. Our senior audio engineers and video editors synchronize multi-cam angles to speaker cadence, clean mouth noises and background hum with iZotope RX, normalize loudness to Spotify/Apple specs, and grade color for breathtaking visual depth.",
    deliverables: [
      "Dynamic multi-cam switching matching conversational rhythm and guest reactions",
      "iZotope RX 10 vocal cleanup, spectral de-noising, and room tone equalization",
      "Broadcast loudness normalization (-14 LUFS for Spotify, -16 LUFS for Apple Podcasts)",
      "Bespoke animated intro/outro sequences, lower-third overlays, and musical beds",
      "Cinema-grade DaVinci Resolve color grading tailored to your visual identity",
    ],
    metrics: "< 24-hour delivery on full episode cuts",
    technologies: ["DaVinci Resolve Studio", "Premiere Pro", "iZotope RX 10", "FabFilter Pro-Q 3", "Logic Pro X"],
  },
  {
    id: "03",
    title: "Viral Shorts, Reels & TikTok Growth Engine",
    shortDesc: "High-retention 9:16 vertical cutdowns with kinetic subtitles, hooks, and punchy sound design.",
    description:
      "A podcast without vertical short-form clips is an undiscovered show. We mine each episode for its highest-converting emotional and intellectual hooks, slicing them into punchy 30-60 second vertical clips with kinetic motion subtitles, face-tracking zooms, and sound effects built to dominate TikTok, Reels, and YouTube Shorts.",
    deliverables: [
      "5 to 10 viral-optimized 9:16 vertical shorts extracted per recorded episode",
      "Kinetic animated typography styled for maximum retention and readability",
      "Dynamic camera punch-ins, audio waveform visualizers, and sound effects",
      "Curated viral hook selection based on platform algorithmic watch-time signals",
      "Turnkey scheduling tags, hashtags, and caption copywriting for each clip",
    ],
    metrics: "50M+ organic short views generated",
    technologies: ["After Effects", "AutoCut AI", "Descript", "CapCut Pro", "Frame.io"],
  },
  {
    id: "04",
    title: "Show Launch, Syndication & SEO Show Notes",
    shortDesc: "End-to-end RSS distribution to Spotify, Apple & YouTube with search-optimized metadata.",
    description:
      "Launching a new show or scaling an existing one requires meticulous technical infrastructure. We configure and manage your RSS feeds across all major audio and video streaming platforms, design striking cover artwork, write timestamped SEO show notes, and submit transcripts to maximize Google search indexing.",
    deliverables: [
      "Apple Podcasts, Spotify, Amazon Music & YouTube Podcasts RSS syndication",
      "High-converting show artwork and custom YouTube thumbnail design suites",
      "Timestamped show notes, guest biographies, key takeaways, and resource links",
      "YouTube chapter markers and search-optimized episode titles and descriptions",
      "Full episode transcripts formatted for Google organic search indexing",
    ],
    metrics: "14+ client shows ranked in Top 100 Charts",
    technologies: ["Megaphone", "Transistor.fm", "Apple Podcasts Connect", "Spotify for Podcasters", "YouTube Studio"],
  },
  {
    id: "05",
    title: "Remote & Hybrid Recording Concierge",
    shortDesc: "Studio-grade lossless audio & 4K video recording for remote global guests via Riverside.fm.",
    description:
      "Your dream guests aren't always in town. Our remote production concierge connects global guests directly to your session via Riverside.fm with local uncompressed 4K video and 48kHz audio recording. Our engineer handles remote mic checks, lighting advice, and live audio leveling so you focus solely on the interview.",
    deliverables: [
      "Dedicated remote audio engineer conducting guest tech check & sound leveling",
      "Lossless 4K local video and uncompressed 48kHz WAV audio capture via Riverside.fm",
      "Real-time live producer intercom with host for seamless topic prompting",
      "Dual cloud-recording redundancy preventing data loss during network spikes",
      "Optional white-glove broadcast microphone kits shipped to VIP remote guests",
    ],
    metrics: "99.9% flawless remote capture rate",
    technologies: ["Riverside.fm", "SquadCast", "Slack Producership", "NDI Audio", "Zoom Enterprise"],
  },
  {
    id: "06",
    title: "Executive & Branded Corporate Podcasting",
    shortDesc: "Turnkey enterprise thought-leadership shows for CEOs, VCs, and category-defining brands.",
    description:
      "Enterprise brands and venture-backed founders leverage Studio360 to build high-authority audio assets that attract customers, investors, and elite talent. We provide complete strategic direction, guest curation support, executive hospitality, and content repurposing that converts thought leadership into pipeline revenue.",
    deliverables: [
      "Strategic show concept development, audience persona mapping & content pillars",
      "VIP guest booking outreach templates, pre-interview briefings & hospitality",
      "Private VIP creator green room lounge with dedicated concierge support",
      "B2B lead generation hooks, sponsor integration & newsletter adaptations",
      "Enterprise mutual NDA compliance, confidential file handling & SOC2 security",
    ],
    metrics: "12x pipeline acceleration for B2B brands",
    technologies: ["HubSpot CRM", "LinkedIn Audio", "Substack", "Frame.io Enterprise", "Notion"],
  },
];

export default studioServices;
