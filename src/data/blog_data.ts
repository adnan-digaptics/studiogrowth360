import blog_img_1 from "@/assets/img/post_1.jpg";
import blog_img_2 from "@/assets/img/post_2.jpg";
import blog_img_3 from "@/assets/img/post_3.jpg";
import blog_img_4 from "@/assets/img/post_4.jpg";
import blog_img_5 from "@/assets/img/post_5.jpg";
import blog_img_6 from "@/assets/img/post_6.jpg";
import { publicAsset } from "@/utils/publicAsset";

export interface BlogItem {
  id: number;
  img: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  des: string;
}

const blog_data: BlogItem[] = [
  {
    id: 1,
    img: publicAsset("/assets/img/podcast/podcast_recording_session.jpg"),
    category: "Show Strategy",
    readTime: "6 min read",
    date: "November 2026",
    title: "The 4K Multi-Cam Advantage: Why Video Podcasts Are Dominating Spotify & YouTube",
    des: "Audio-only podcasts are losing market share to visual storytelling. Discover how multi-cam switching and cinema lighting elevate audience watch-time by over 340%.",
  },
  {
    id: 2,
    img: publicAsset("/assets/img/podcast/podcast_audio_console.jpg"),
    category: "Audio Engineering",
    readTime: "8 min read",
    date: "November 2026",
    title: "Vocal Presence & Acoustics: Dialing In Broadcast Sound Without Harsh Sibilance",
    des: "A technical breakdown of Shure SM7B gain staging, Cloudlifters, STC 65 soundproofing diffusers, and iZotope RX spectral de-noising in luxury broadcast suites.",
  },
  {
    id: 3,
    img: publicAsset("/assets/img/podcast/podcast_mobile_shorts.jpg"),
    category: "Viral Shorts",
    readTime: "5 min read",
    date: "October 2026",
    title: "The Retention Formula: Slicing 10 Viral Vertical Clips from a 60-Minute Episode",
    des: "How to identify high-converting debate hooks, craft kinetic animated typography, and apply sound design to blow up on TikTok, Instagram Reels, and YouTube Shorts.",
  },
  {
    id: 4,
    img: publicAsset("/assets/img/podcast/podcast_show_tech.jpg"),
    category: "Executive Shows",
    readTime: "7 min read",
    date: "October 2026",
    title: "The Corporate Podcasting Playbook: Converting Thought Leadership Into Enterprise Pipelines",
    des: "How venture-backed founders and institutional CEOs use confidential studio sets and VIP green rooms to build industry authority and accelerate deal flow.",
  },
  {
    id: 5,
    img: publicAsset("/assets/img/podcast/hero_podcast_studio.jpg"),
    category: "Studio Design",
    readTime: "6 min read",
    date: "October 2026",
    title: "Acoustic Architecture: Why Floating Floors and Diffusers Beat Software Plugins",
    des: "Software cleanup plugins degrade vocal warmth. Here is how custom walnut slat resonators, silent HVAC, and physical acoustic treatment guarantee broadcast perfection.",
  },
  {
    id: 6,
    img: publicAsset("/assets/img/podcast/podcast_studio_lounge.jpg"),
    category: "Syndication & SEO",
    readTime: "7 min read",
    date: "September 2026",
    title: "Mastering for Streaming: LUFS Specs, YouTube Chaptering & Google Podcast Indexing",
    des: "The definitive guide to -14 LUFS Spotify targets, -16 LUFS Apple guidelines, timestamped show notes, and transcript structuring for organic Google ranking.",
  },
];

export default blog_data;
