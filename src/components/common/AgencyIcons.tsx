import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
  strokeWidth?: number;
}

export const IconContainer = ({
  children,
  size = 48,
  bg = "rgba(0, 102, 255, 0.08)",
  border = "1px solid rgba(0, 102, 255, 0.2)",
  radius = "14px",
  className = "",
}: {
  children: React.ReactNode;
  size?: number;
  bg?: string;
  border?: string;
  radius?: string;
  className?: string;
}) => (
  <div
    className={`d-inline-flex align-items-center justify-content-center transition-all ${className}`}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      background: bg,
      border: border,
      borderRadius: radius,
      flexShrink: 0,
    }}
  >
    {children}
  </div>
);

/* -------------------------------------------------------------
   7 CORE SERVICE ICONS (CLEAN SVG LINE VECTOR ICONS)
   ------------------------------------------------------------- */

// 1. Lead Generation (Target / Crosshair / Precision Acquisition)
export const IconTarget = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
  </svg>
);

// 2. n8n Automation (Lightning / High-Speed Workflows)
export const IconZap = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

// 3. GoHighLevel CRM (Rocket / Growth Engine)
export const IconRocket = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2.5 5-2.5" />
    <path d="M15 12v5s3.03-.55 4.5-2c1.63-1.62 2.5-5 2.5-5" />
  </svg>
);

// 4. CRM & Client Management (Users / Multi-Pipeline)
export const IconUsers = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// 5. AI Automation (Sparkles / Autonomous Intelligence)
export const IconSparkles = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

// 6. Website & Funnel Development (Browser Window / Funnel)
export const IconLayout = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
    <circle cx="5.5" cy="6" r="0.75" fill={color} />
    <circle cx="7.5" cy="6" r="0.75" fill={color} />
  </svg>
);

// 7. Digital Marketing (Megaphone / Audience Outreach)
export const IconMegaphone = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 11l18-5v12L3 13v-2z" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    <path d="M21 8v8" />
  </svg>
);

/* -------------------------------------------------------------
   4 INDUSTRY VERTICAL ICONS (MINIMALIST VECTOR OUTLINES)
   ------------------------------------------------------------- */

// Photography Studio (Camera / Optical Aperture)
export const IconCamera = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

// Podcast Studio (Studio Broadcast Microphone)
export const IconMic = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="8" y1="22" x2="16" y2="22" />
  </svg>
);

// Yoga & Movement Studio (Lotus / Mindfulness / Flow)
export const IconLotus = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3c-1.5 3-4.5 6-7 7 2.5 1 5.5 4 7 7 1.5-3 4.5-6 7-7-2.5-1-5.5-4-7-7z" />
    <path d="M12 17c-2 2-5 3-8 3 3-2 4-5 4-8" />
    <path d="M12 17c2 2 5 3 8 3-3-2-4-5-4-8" />
  </svg>
);

// Arts & Crafts Studio (Palette & Brush / Creative Studio)
export const IconPalette = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="13.5" cy="6.5" r=".75" fill={color} />
    <circle cx="17.5" cy="10.5" r=".75" fill={color} />
    <circle cx="8.5" cy="7.5" r=".75" fill={color} />
    <circle cx="6.5" cy="12.5" r=".75" fill={color} />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z" />
  </svg>
);

/* -------------------------------------------------------------
   FEATURE & SYSTEM WORKFLOW ICONS
   ------------------------------------------------------------- */

// Calendar / Scheduling
export const IconCalendar = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

// Payment / Stripe Escrow
export const IconCreditCard = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
    <line x1="5" y1="15" x2="9" y2="15" />
  </svg>
);

// Phone / AI Voice
export const IconPhone = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

// Chat / Messaging / SMS
export const IconMessage = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

// Unified Inbox
export const IconInbox = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  </svg>
);

// Digital Contract / Waiver
export const IconFileText = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

// Review / Rating / Star
export const IconStar = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Shield / Security
export const IconShield = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// Analytics / Growth Chart
export const IconTrendingUp = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

// Database / Integrations
export const IconDatabase = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

// Clock / Real-Time
export const IconClock = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// Dollar / Cost Reduction
export const IconDollar = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

// Plug / Integration
export const IconPlug = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v6" />
    <path d="M6 8h12" />
    <path d="M6 8v6a6 6 0 0 0 12 0V8" />
    <path d="M12 20v2" />
  </svg>
);

// Git Branch / Workflow Logic
export const IconGitBranch = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);

// Cpu / Processor / AI
export const IconCpu = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

// Cloud / S3 Drive
export const IconCloud = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

// Lock / Confidentiality
export const IconLock = ({ size = 24, color = "#0066FF", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

// CheckCircle
export const IconCheckCircle = ({ size = 24, color = "#00E676", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// ArrowDown
export const IconArrowDown = ({ size = 20, color = "#38BDF8", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>
);

// MapPin / Location
export const IconMapPin = ({ size = 16, color = "#38BDF8", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// Mail / Email
export const IconMail = ({ size = 16, color = "#38BDF8", strokeWidth = 2, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// Smart Helper to get corresponding vector icon for service or industry
export const getServiceVectorIcon = (slug: string, size = 24, color = "#0066FF") => {
  switch (slug) {
    case 'lead-generation':
      return <IconTarget size={size} color={color} />;
    case 'n8n-automation':
      return <IconZap size={size} color={color} />;
    case 'gohighlevel-services':
      return <IconRocket size={size} color={color} />;
    case 'crm-solutions':
      return <IconUsers size={size} color={color} />;
    case 'ai-automation':
      return <IconSparkles size={size} color={color} />;
    case 'website-funnel-development':
      return <IconLayout size={size} color={color} />;
    case 'digital-marketing':
      return <IconMegaphone size={size} color={color} />;
    default:
      return <IconZap size={size} color={color} />;
  }
};

export const getIndustryVectorIcon = (slug: string, size = 24, color = "#0066FF") => {
  switch (slug) {
    case 'photography-studios':
      return <IconCamera size={size} color={color} />;
    case 'podcast-studios':
      return <IconMic size={size} color={color} />;
    case 'yoga-studios':
      return <IconLotus size={size} color={color} />;
    case 'craft-studios':
      return <IconPalette size={size} color={color} />;
    default:
      return <IconCamera size={size} color={color} />;
  }
};
