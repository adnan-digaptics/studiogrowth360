import { publicAsset } from "@/utils/publicAsset";

export interface PortfolioDataType {
  id: number;
  img: string;
  title: string;
  client: string;
  category: "Tech & Venture" | "Culture & Creators" | "Deep Tech & AI" | "Finance & Wealth" | "Health & Performance" | "Music & Audio";
  des: string;
  impact: string;
  services: string[];
}

const portfolio_data: PortfolioDataType[] = [
  {
    id: 1,
    img: publicAsset("/assets/img/podcast/podcast_show_tech.jpg"),
    title: "The Founder's Orbit: Frontier Tech & Venture",
    client: "Aiden Vance (Silicon Valley VC)",
    category: "Tech & Venture",
    des: "Weekly executive video podcast interviewing unicorn founders and tier-1 partners. Recorded in our Obsidian Suite with 4-camera 4K Sony FX6 rig, live ATEM switching, and 10 viral-hooked vertical shorts.",
    impact: "24M+ Views · Spotify Top 10 Business",
    services: ["4K Multi-Cam Recording", "Live ATEM Switching", "Viral Shorts Engine"],
  },
  {
    id: 2,
    img: publicAsset("/assets/img/podcast/podcast_show_creator.jpg"),
    title: "Unfiltered Culture & Modern Pulse",
    client: "Maya Sterling & Jordan Cross",
    category: "Culture & Creators",
    des: "High-energy cultural commentary and celebrity interview show featuring vibrant custom RGB neon set lighting, kinetic subtitles, and multi-platform TikTok/Reels syndication.",
    impact: "45M+ Organic Views · #1 Trending YouTube",
    services: ["Set Lighting Design", "Kinetic Subtitles", "Omnichannel Syndication"],
  },
  {
    id: 3,
    img: publicAsset("/assets/img/podcast/podcast_show_deeptech.jpg"),
    title: "The Artificial Minds Blueprint",
    client: "Dr. Aris Thorne (Frontier AI Lab)",
    category: "Deep Tech & AI",
    des: "Intimate deep-dive interview series exploring quantum computing, neural networks, and robotics with scientific visual overlays and pristine broadcast sound isolation.",
    impact: "1.2M Monthly Streams · Apple Top 20",
    services: ["Acoustic Isolation", "Motion Overlays", "RSS Syndication"],
  },
  {
    id: 4,
    img: publicAsset("/assets/img/podcast/podcast_audio_console.jpg"),
    title: "Macro Wealth & Sovereign Capital",
    client: "Harrison Sterling (Private Equity)",
    category: "Finance & Wealth",
    des: "Bi-weekly executive audio and video series featuring institutional asset managers. Produced in our Minimalist Boardroom suite with confidential VIP green room hospitality.",
    impact: "$140M Deal Flow · Strict Mutual NDA",
    services: ["Executive Hospitality", "VIP Green Room", "Loudness Mastering"],
  },
  {
    id: 5,
    img: publicAsset("/assets/img/podcast/podcast_mobile_shorts.jpg"),
    title: "The Viral Cutdown & Retention Engine",
    client: "Studio360 Creator Network (Multiple Shows)",
    category: "Culture & Creators",
    des: "Dedicated short-form post-production pipeline turning longform podcast hours into high-velocity 9:16 vertical shorts with animated subtitles, dynamic zooms, and sound design.",
    impact: "50M+ Views Across TikTok & Shorts",
    services: ["Vertical Cutdowns", "Kinetic Typography", "Sound Effects"],
  },
  {
    id: 6,
    img: publicAsset("/assets/img/podcast/podcast_recording_session.jpg"),
    title: "Apex Longevity & Human Performance",
    client: "Dr. Elena Rostova (Neuroscience Institute)",
    category: "Health & Performance",
    des: "Conversational health deep dives with Olympic coaches and longevity scientists. Engineered with triple-pane soundproofing, dual lavalier backups, and pristine Shure SM7B presence.",
    impact: "18M+ Global Streams · Top 5 Health",
    services: ["Shure SM7B Rigs", "Soundproof Booth", "Cloud Raw Ingest"],
  },
  {
    id: 7,
    img: publicAsset("/assets/img/podcast/podcast_studio_lounge.jpg"),
    title: "Sonic Architecture & Mix Sessions",
    client: "Studio360 Original Series",
    category: "Music & Audio",
    des: "Grammy-winning mixing engineers and electronic producers breaking down production stems, signal chains, and vocal processing in our Dolby Atmos calibrated control room.",
    impact: "Signal Award Winner · Best Audio Craft",
    services: ["Dolby Atmos Suite", "Stem Breakdowns", "Live Multi-Cam 4K"],
  },
];

export default portfolio_data;
