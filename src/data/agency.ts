export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  category: string;
  tagline: string;
  heroHighlight: string;
  coreOfferings: { title: string; desc: string }[];
  studioBenefits: string[];
  deliverables: string[];
  sampleWorkflow: string;
  stats: { metric: string; label: string }[];
}

export interface IndustryDetail {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  icon: string;
  badge: string;
  image: string;
  painPoints: string[];
  solutions: { title: string; desc: string; icon: string }[];
  workflows: string[];
  caseStudy: {
    studioName: string;
    location: string;
    results: string[];
    quote: string;
    owner: string;
  };
  metrics: { value: string; label: string }[];
}

// 7 MAIN SERVICES
export const mainServices: ServiceDetail[] = [
  {
    id: "lead-generation",
    slug: "lead-generation",
    title: "Lead Generation Services",
    shortDesc: "Targeted multi-channel lead generation, high-converting landing pages, paid ads management, and automated appointment setting built for US studios.",
    fullDesc: "We build and execute predictable, high-converting lead generation engines tailored specifically for studios. From hyper-targeted Meta & Google Ads to conversion-optimized landing pages and instant SMS/email qualification funnels, we turn local searches into fully booked studio calendars.",
    icon: "🎯",
    category: "Customer Acquisition",
    tagline: "Fill Your Booking Calendar with Ready-to-Buy Clients",
    heroHighlight: "Stop relying on unpredictable word-of-mouth. Build a machine that consistently delivers qualified booking inquiries every single day.",
    coreOfferings: [
      { title: "B2B & Targeted Lead Generation", desc: "Hyper-localized audience targeting tailored to commercial clients, brands, event planners, and local enthusiasts." },
      { title: "Facebook & Instagram Ad Campaigns", desc: "High-ROI visual ad creatives with localized geo-fencing, retargeting pixels, and instant lead capture forms." },
      { title: "Google Ads (Search & Maps)", desc: "Capture high-intent prospects searching for 'photography studio near me', 'podcast recording space', or 'yoga memberships'." },
      { title: "Landing Pages & Conversion Funnels", desc: "Lightning-fast, mobile-first booking landing pages with social proof, dynamic pricing, and frictionless calendar widgets." },
      { title: "Lead Qualification & Automated Follow-ups", desc: "Automated 2-minute response sequences via SMS, email, and WhatsApp that nurture leads before they go cold." },
      { title: "Appointment Setting & Call Routing", desc: "Direct calendar self-scheduling with automated reminder sequences that slash no-show rates by over 60%." },
    ],
    studioBenefits: [
      "Consistent 30-50+ new qualified booking inquiries every month",
      "Immediate < 2 minute lead response time via automated SMS hooks",
      "Over 65% reduction in client no-shows through smart calendar reminders",
      "Clear attribution dashboard showing exact cost per acquired booking",
    ],
    deliverables: [
      "Custom Meta & Google Ads Ad Account Setup & Copywriting",
      "Dedicated High-Converting Landing Page with A/B Testing",
      "Instant Lead Capture System connected to GoHighLevel CRM",
      "Automated 5-Touch SMS & Email Nurture Sequence",
      "Weekly ROI & Cost-Per-Acquisition Reporting",
    ],
    sampleWorkflow: "Local Search / Social Ad → High-Converting Studio Landing Page → Instant SMS Lead Qualification → Self-Scheduled Booking → Automated Session Prep Email",
    stats: [
      { metric: "3.4x", label: "Average ROAS on Studio Ad Spend" },
      { metric: "< 2 min", label: "Automated Lead Response Time" },
      { metric: "62%", label: "Decrease in Studio No-Show Rates" },
      { metric: "350+", label: "US Studios Powered" },
    ],
  },
  {
    id: "n8n-automation",
    slug: "n8n-automation",
    title: "n8n Automation Services",
    shortDesc: "Custom n8n workflow development, AI-powered business logic, deep API integrations, and multi-app orchestration that automate repetitive studio operations.",
    fullDesc: "Eliminate manual data entry, disconnected spreadsheets, and tedious admin work with enterprise-grade n8n workflow automations. We build self-hosted and cloud n8n orchestrations that seamlessly connect your CRM, booking calendar, accounting, email, SMS, and cloud storage into one autonomous machine.",
    icon: "⚡",
    category: "Workflow Orchestration",
    tagline: "Connect Every Tool. Eliminate Repetitive Admin Work.",
    heroHighlight: "Save 25+ hours every week by connecting your disjointed apps into custom, automated n8n pipelines that never sleep.",
    coreOfferings: [
      { title: "Custom n8n Workflow Development", desc: "Tailored multi-branch workflows connecting your specific tech stack with error handling and fallback routing." },
      { title: "Business Process & Data Sync Automation", desc: "Bi-directional synchronization between calendars, payment gateways, accounting software, and CRM contacts." },
      { title: "AI-Powered Workflow Automation", desc: "Embed OpenAI and Claude models directly into your workflows for automated customer email drafting, categorization, and summary notes." },
      { title: "API & Third-Party App Integrations", desc: "Custom REST API, GraphQL, and Webhook connectors for specialized studio hardware, cameras, and proprietary software." },
      { title: "Autonomous AI Agents in n8n", desc: "Build autonomous agents that monitor inquiries, inspect calendar vacancies, and trigger dynamic promotional offers." },
      { title: "Self-Hosted & Scalable Infrastructure", desc: "Deploy n8n securely on dedicated VPS servers with automated backups, high availability, and zero per-task execution fees." },
    ],
    studioBenefits: [
      "Save 20-30 hours per week of manual admin and data entry",
      "Zero per-automation usage fees compared to Zapier or Make",
      "Seamless bi-directional data flow across your entire studio tech stack",
      "Automated invoice creation, session stem uploads, and contract routing",
    ],
    deliverables: [
      "Full n8n Cloud or Self-Hosted Docker Deployment",
      "Complete Architecture Blueprint & Workflow Documentation",
      "Error-Handling & Automatic Webhook Retry Systems",
      "Custom Webhooks connecting Stripe, GHL, Google Sheets, & S3",
      "Quarterly Workflow Performance Optimization Audits",
    ],
    sampleWorkflow: "Stripe Deposit Paid → n8n Webhook Triggers → Google Calendar Booked → Client Folders Created in Drive → Digital NDA Sent via SignRequest → Staff Alerted on Slack",
    stats: [
      { metric: "25+ hrs", label: "Weekly Admin Time Saved per Studio" },
      { metric: "99.9%", label: "Workflow Execution Uptime" },
      { metric: "500+", label: "Available App Connectors" },
      { metric: "0", label: "Per-Task Usage Fees" },
    ],
  },
  {
    id: "gohighlevel-services",
    slug: "gohighlevel-services",
    title: "GoHighLevel (GHL) Services",
    shortDesc: "End-to-end GoHighLevel setup, custom studio snapshots, automated sales pipelines, booking calendars, SMS marketing, and white-label CRM solutions.",
    fullDesc: "GoHighLevel is the ultimate all-in-one operating system for modern studios—replacing 8+ expensive software subscriptions. We deliver battle-tested, studio-specific GHL snapshots complete with pre-built booking calendars, client pipelines, automated nurture sequences, two-way unified inboxes, and reputation engines.",
    icon: "🚀",
    category: "CRM & Marketing Engine",
    tagline: "The Operating System That Replaces 8 Disjointed Tools",
    heroHighlight: "Consolidate your CRM, email marketing, SMS, landing pages, booking calendars, and invoicing into one seamless, high-converting hub.",
    coreOfferings: [
      { title: "GoHighLevel Account Setup & Architecture", desc: "Full sub-account configuration with custom domains, dedicated phone numbers, LC-Phone SMS setup, and email warming." },
      { title: "Custom Studio Snapshots", desc: "Turnkey snapshots built specifically for photography, podcast, yoga, or craft studios with pre-configured funnels and pipelines." },
      { title: "GHL Workflow & Trigger Automation", desc: "Sophisticated multi-stage automation workflows for inquiry responses, booking confirmations, deposit receipts, and re-engagement." },
      { title: "Unified Conversation Inbox", desc: "Manage Instagram DMs, Facebook messages, Google Business chats, SMS, and emails from a single clean unified dashboard." },
      { title: "White Label CRM & SaaS Mode", desc: "Deploy your own branded client portal with your studio logo, colors, and custom mobile apps on iOS and Android." },
      { title: "Seamless CRM Migration & Integration", desc: "Safely transfer contacts, booking histories, and active pipelines from HoneyBook, Dubsado, Mindbody, or Square into GHL." },
    ],
    studioBenefits: [
      "Replace HoneyBook, Mailchimp, Calendly, and Zapier with one unified tool",
      "Save $300-$600/month on redundant SaaS tool subscriptions",
      "Two-way SMS messaging with clients directly from your computer or phone",
      "Automated Google Review requests that boost local search visibility",
    ],
    deliverables: [
      "Full GoHighLevel Sub-Account Setup & Phone/Email Provisioning",
      "Pre-Built Studio Sales Pipeline & Lead Stages",
      "Multi-Suite / Multi-Service Booking Calendar System",
      "Pre-Written SMS & Email Follow-Up Templates",
      "1-on-1 Studio Team Onboarding & Loom Video Playbooks",
    ],
    sampleWorkflow: "Website Inquiry Received → Instant 2-Minute SMS Sent → Two-Way Chat in Unified Inbox → Client Picks Calendar Time Slot → Payment Processed → Added to Studio Pipeline",
    stats: [
      { metric: "$4,800+", label: "Average Annual SaaS Cost Savings" },
      { metric: "1 Inbox", label: "For Email, SMS, Instagram, & GBP" },
      { metric: "4.9★", label: "Average Google Review Rating Boost" },
      { metric: "100%", label: "White-Label Brand Ownership" },
    ],
  },
  {
    id: "crm-solutions",
    slug: "crm-solutions",
    title: "CRM & Client Management",
    shortDesc: "Custom CRM architectures, client onboarding automation, retention pipelines, automated billing, and real-time revenue analytics for studio operators.",
    fullDesc: "Turn chaotic contact lists and scattered client messages into an organized, automated customer relationship management powerhouse. We design CRM solutions that track every client from their initial inquiry to their 10th repeat studio booking, ensuring zero lost revenue and maximum lifetime customer value.",
    icon: "📊",
    category: "Operations & Retention",
    tagline: "Track Every Inquiry. Retain Every Client. Maximize Lifetime Value.",
    heroHighlight: "Never let another prospective client fall through the cracks. Build an organized client pipeline that runs with military precision.",
    coreOfferings: [
      { title: "Custom CRM Architecture & Pipeline Design", desc: "Visual pipeline stages mapped to your studio's exact client lifecycle: Inquiry, Qualified, Deposit Paid, Session Complete, Review Request." },
      { title: "Client Onboarding & Intake Automation", desc: "Automated digital waivers, creative briefs, questionnaires, and equipment requests delivered immediately upon booking." },
      { title: "Customer Retention & Win-Back Sequences", desc: "Automated check-ins at 30, 60, and 90 days after sessions to re-book repeat photography shoots, podcast seasons, or class packs." },
      { title: "Billing, Invoicing & Escrow Deposits", desc: "Integrated payment processing with automated deposit collection, card-on-file billing, and instant receipt generation." },
      { title: "CRM Migration & Data Cleansing", desc: "Seamless transfer of customer databases from legacy software without duplicate contacts or data loss." },
      { title: "Executive Reporting & Revenue Telemetry", desc: "Real-time dashboard showing monthly recurring revenue, suite utilization rate, lead conversion velocity, and customer LTV." },
    ],
    studioBenefits: [
      "360-degree view of every client's booking history, spend, and preferences",
      "Automated intake forms that eliminate 90% of pre-session email back-and-forth",
      "Predictable 25%+ increase in repeat client re-booking frequency",
      "Real-time revenue telemetry to make data-backed business decisions",
    ],
    deliverables: [
      "Custom CRM Pipeline Configuration & Custom Fields",
      "Automated Intake Forms & Digital Waiver Systems",
      "Re-Engagement & Milestone Birthday/Anniversary Campaigns",
      "Stripe / QuickBooks Financial Integration",
      "Custom Studio Executive KPI Dashboard",
    ],
    sampleWorkflow: "Session Complete → Automated Thank-You Email Sent → 3 Days Later: Automated Google Review Request → 45 Days Later: VIP Re-Booking Discount Triggered",
    stats: [
      { metric: "28%", label: "Average Increase in Client LTV" },
      { metric: "0", label: "Lost Leads or Missed Inquiries" },
      { metric: "100%", label: "Digital Onboarding Compliance" },
      { metric: "Real-Time", label: "Revenue & Booking Telemetry" },
    ],
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI Automation Services",
    shortDesc: "Intelligent AI receptionists, 24/7 AI booking agents, voice callers, custom lead qualification bots, and automated smart business assistants.",
    fullDesc: "Deploy cutting-edge artificial intelligence directly into your studio operations. Our custom-trained AI voice agents and web chat assistants handle inbound phone calls, answer complex studio pricing and equipment questions, qualify prospective leads, and book studio sessions 24/7/365 without missing a beat.",
    icon: "🤖",
    category: "Artificial Intelligence",
    tagline: "24/7 AI Receptionists & Booking Agents That Never Miss a Call",
    heroHighlight: "Capture late-night bookings and answer inbound calls while you are busy running shoots or recording sessions.",
    coreOfferings: [
      { title: "24/7 AI Voice Phone Receptionist", desc: "Human-sounding conversational voice agents that answer studio phones, explain packages, answer FAQs, and book sessions live." },
      { title: "Intelligent Website Chatbots", desc: "Custom-trained on your studio's specific gear, pricing, availability, and policies to qualify visitors and drive instant bookings." },
      { title: "AI Lead Qualification & Screening", desc: "Automatically screen inquiries to filter out unqualified leads and route high-budget commercial clients directly to your calendar." },
      { title: "AI Appointment Booking Agents", desc: "Conversational agents that negotiate dates, check room availability in real-time, and confirm bookings over SMS or WhatsApp." },
      { title: "Automated Customer Support Assistants", desc: "Instant responses to common questions about parking, studio directions, equipment lists, and file delivery timelines." },
      { title: "Intelligent Document & Content Summarization", desc: "AI-driven transcription, show notes extraction, and creative brief synthesis generated immediately after sessions." },
    ],
    studioBenefits: [
      "Never miss a lucrative phone booking while recording or shooting in the booth",
      "Instant 24/7 inquiry handling even at 11:00 PM on Sunday night",
      "Human-like conversation flow with natural pauses, accents, and studio knowledge",
      "Drastically reduce the need to hire expensive front-desk reception staff",
    ],
    deliverables: [
      "Custom AI Voice Agent trained on your studio's exact knowledge base",
      "Inbound Phone System integration (Twilio / LC-Phone)",
      "Branded Website AI Chat Widget with calendar self-booking",
      "Live Call Transfer logic for VIP commercial clients",
      "Transcript and sentiment logging directly into your CRM",
    ],
    sampleWorkflow: "Prospective Client Calls After Hours → AI Receptionist Answers in 1 Ring → Answers Studio Equipment Questions → Checks Live Calendar → Books 2-Hour Session → Sends Confirmation SMS",
    stats: [
      { metric: "24/7", label: "Instant Response Availability" },
      { metric: "< 1 sec", label: "AI Voice Response Latency" },
      { metric: "40%", label: "Of Studio Bookings Captured After Hours" },
      { metric: "$3,500/mo", label: "Saved in Receptionist Payroll" },
    ],
  },
  {
    id: "website-funnel-development",
    slug: "website-funnel-development",
    title: "Website & Funnel Development",
    shortDesc: "High-converting studio websites, custom sales funnels, integrated room booking engines, and mobile-optimized digital storefronts.",
    fullDesc: "Your studio website shouldn't just be an online brochure—it should be your most profitable full-time salesperson. We build lightning-fast, visually stunning, conversion-optimized websites and sales funnels engineered specifically to turn casual visitors into paying studio clients.",
    icon: "💻",
    category: "Web & Conversion",
    tagline: "Websites Engineered to Turn Visitors Into Paying Studio Clients",
    heroHighlight: "Elevate your studio brand with a modern, high-speed website integrated directly into your live booking calendar and CRM.",
    coreOfferings: [
      { title: "Custom Studio Business Websites", desc: "Premium, responsive websites showcasing your suites, acoustics, equipment list, client portfolio, and transparent rate cards." },
      { title: "High-Converting Sales Funnels", desc: "Dedicated landing pages engineered for specific promotions, seasonal mini-sessions, podcast launches, or workshop tickets." },
      { title: "Live Booking & Room Scheduling Engines", desc: "Interactive multi-room reservation systems with buffer intervals, add-on upsells, and instant credit card checkout." },
      { title: "Website & CRM Deep Integration", desc: "Direct bi-directional sync ensuring every form submission, button click, and chat inquiry instantly populates your CRM." },
      { title: "Mobile-First Responsive Engineering", desc: "Flawless performance across smartphones, tablets, laptops, and ultra-wide screens with sub-second page load times." },
      { title: "Conversion Rate Optimization (CRO)", desc: "Strategic visual hierarchy, clear call-to-actions, social proof widgets, and heat-map analyzed layout structures." },
    ],
    studioBenefits: [
      "Sub-second page load speeds that rank higher on Google search",
      "Interactive 360-degree suite showcases that build trust instantly",
      "Direct online reservation system with integrated Stripe deposit checkout",
      "Built-in tracking pixels for Meta, Google, and TikTok ad optimization",
    ],
    deliverables: [
      "Full Custom Website Design & Next.js / WordPress / GHL Development",
      "Interactive Booking & Multi-Suite Scheduling System",
      "SEO-Optimized Schema Markup & Meta Configuration",
      "Full Mobile and Tablet Responsive Optimization",
      "Integrated Live Chat & Lead Capture Forms",
    ],
    sampleWorkflow: "Visitor Lands from Google → Explores 4K Studio Photos & Rates → Selects Desired Suite & Add-on → Pays 50% Non-Refundable Deposit → Synced to Studio Master Calendar",
    stats: [
      { metric: "< 0.8s", label: "Average Mobile Page Load Speed" },
      { metric: "+45%", label: "Average Booking Conversion Lift" },
      { metric: "100%", label: "Mobile Responsive & Accessible" },
      { metric: "Zero", label: "Booking Back-and-Forth Friction" },
    ],
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing Services",
    shortDesc: "Automated email newsletters, SMS flash campaigns, Google Business Profile optimization, reputation management, and multi-channel marketing.",
    fullDesc: "Dominate your local market and stay top-of-mind with every prospective client in your metropolitan area. We craft and automate multi-channel digital marketing campaigns that drive steady bookings, generate glowing 5-star reviews, and cement your studio as the premier creative hub in your city.",
    icon: "📈",
    category: "Growth & Retention",
    tagline: "Dominate Local Search & Keep Your Studio Top of Mind",
    heroHighlight: "Automate your client marketing so your studio continuously attracts high-ticket bookings without daily manual marketing hustle.",
    coreOfferings: [
      { title: "Google Business Profile (GBP) Optimization", desc: "Complete local SEO optimization to dominate the local Google Maps 3-Pack for high-intent 'near me' search queries." },
      { title: "Automated Review & Reputation Management", desc: "Automated post-session review requests via SMS that systematically generate 5-star Google and Yelp reviews." },
      { title: "Email & SMS Marketing Automation", desc: "Segmented email newsletters, VIP announcements, off-peak discount blasts, and seasonal promotions that drive repeat bookings." },
      { title: "Social Media Automation & Growth", desc: "Content syndication pipelines that schedule and distribute studio behind-the-scenes content across Instagram, TikTok, and LinkedIn." },
      { title: "Local SEO & Citations Management", desc: "Consistent NAP (Name, Address, Phone) citations across 50+ local business directories to maximize local authority." },
      { title: "Omnichannel Retargeting Campaigns", desc: "Smart pixel retargeting that keeps your studio visible across social media to everyone who visited your website." },
    ],
    studioBenefits: [
      "Rank #1 on Google Maps for high-intent local studio searches",
      "Systematic stream of authentic 5-star client reviews every month",
      "Fill empty weekday slots with automated SMS flash promotions",
      "Professional brand presence that outshines local competitors",
    ],
    deliverables: [
      "Google Business Profile Audit, Optimization & Weekly Geo-Posts",
      "Automated Review Request SMS Sequence with QR Code Studio Standees",
      "Monthly Email Newsletter & Campaign Strategy",
      "Local Citation Directory Submissions & Cleanup",
      "Monthly Marketing Analytics & Local Keyword Ranking Report",
    ],
    sampleWorkflow: "Client Finishes Session → QR Code or Automated SMS Sent → 1-Click Link to Google Review Form → 5-Star Review Posted → Automatically Displayed on Studio Website",
    stats: [
      { metric: "Top 3", label: "Google Maps Local Pack Placement" },
      { metric: "+120", label: "New 5-Star Google Reviews / Year" },
      { metric: "38%", label: "Average Email Open Rate" },
      { metric: "3.2x", label: "Increase in Local Search Visibility" },
    ],
  },
];

// 4 INDUSTRY-SPECIFIC VERTICALS ("Who We Help")
export const industrySolutions: IndustryDetail[] = [
  {
    id: "photography-studios",
    slug: "photography-studios",
    name: "Photography Studios",
    tagline: "Automate Bookings. Manage Galleries. Fill Your Shoot Schedule.",
    heroHeadline: "Client Lead Generation & Booking Automation for Photography Studios",
    heroSubheadline: "We help portrait, commercial, wedding, and rental photography studio owners attract high-paying clients, automate session contracts and deposits, and streamline client gallery delivery.",
    icon: "📸",
    badge: "For Photography Studios",
    image: "/assets/img/studios/photography-studio.jpg",
    painPoints: [
      "Hours wasted sending manual pricing PDFs and back-and-forth scheduling emails",
      "Prospects ghosting after receiving quotes without automated follow-up sequences",
      "Last-minute cancellations and no-shows resulting in lost revenue",
      "Scattered client notes, gallery links, and contract signing friction",
    ],
    solutions: [
      {
        title: "Automated Inquiry Response System",
        desc: "Instant SMS & email response within 2 minutes of inquiry submission with interactive pricing packages and direct calendar scheduling.",
        icon: "⚡",
      },
      {
        title: "Digital Contracts & Retainer Deposits",
        desc: "Mandatory digital waiver/contract signing and automated non-refundable 50% deposit collection via Stripe before dates are locked.",
        icon: "💳",
      },
      {
        title: "Session Prep & Reminder Workflows",
        desc: "Automated outfit guide delivery, studio location pins, and multi-step SMS reminders sent at 7 days, 48 hours, and 2 hours prior to shoots.",
        icon: "📅",
      },
      {
        title: "Gallery Delivery & Print Upsell Funnels",
        desc: "Automated delivery notifications and scheduled follow-ups offering print package upgrades and anniversary session discounts.",
        icon: "🖼️",
      },
      {
        title: "Commercial Client Acquisition Pipeline",
        desc: "Targeted B2B outreach and LinkedIn funnels connecting your studio directly with local e-commerce brands and creative directors.",
        icon: "🎯",
      },
      {
        title: "Automated 5-Star Review Engine",
        desc: "Trigger review requests right when clients are happiest—the moment they download their high-res photo gallery.",
        icon: "⭐",
      },
    ],
    workflows: [
      "Inquiry Received → Instant SMS with Portfolio Link → Client Selects Date & Package → Contract Signed & Deposit Paid Online → Prep Guide Sent Automatically → Automated Reminders → Post-Shoot Review Request",
    ],
    caseStudy: {
      studioName: "Lumina Creative Studio",
      location: "Chicago, IL",
      results: ["+$11,400 monthly revenue added", "Zero client no-shows in 6 months", "18 hours saved per week on admin"],
      quote: "Before StudioGrowth360, I was spending my evenings emailing back and forth with couples and commercial clients. Now clients pick their date, sign the contract, and pay their deposit completely on autopilot.",
      owner: "Jessica Miller, Studio Owner",
    },
    metrics: [
      { value: "4.2x", label: "Booking Inquiry Velocity" },
      { value: "0%", label: "No-Shows with Automated Reminders" },
      { value: "18 hrs", label: "Admin Time Saved Weekly" },
    ],
  },
  {
    id: "podcast-studios",
    slug: "podcast-studios",
    name: "Podcast Studios",
    tagline: "Fill Empty Booth Hours. Automate Guest Onboarding. Scale Retainers.",
    heroHeadline: "Operations OS & B2B Lead Generation for Podcast Recording Studios",
    heroSubheadline: "We help audio and video podcast studio owners fill weekday recording suites, automate multi-cam session bookings, manage guest paperwork, and upsell 24h post-production services.",
    icon: "🎙️",
    badge: "For Podcast Studios",
    image: "/assets/img/studios/podcast-studio.jpg",
    painPoints: [
      "Empty recording booths on Tuesday through Thursday burning rent and fixed overhead",
      "Disjointed scheduling tools leading to double bookings and engineer confusion",
      "Manual collection of guest waivers, microphone preferences, and timecode specs",
      "Leaving massive post-production and viral shorts editing margins on the table",
    ],
    solutions: [
      {
        title: "Multi-Suite Room Scheduling Engine",
        desc: "Dedicated calendar for each recording room with automatic 15-minute engineer buffer intervals and live equipment availability.",
        icon: "🎛️",
      },
      {
        title: "Automated Guest Release & Paperwork",
        desc: "Digital guest appearance release forms and NDA waivers auto-emailed and signed on tablet check-in prior to entering the booth.",
        icon: "📝",
      },
      {
        title: "Dynamic Rate Card & Weekday Fillers",
        desc: "Automated discount triggers for off-peak hours and targeted corporate show retainer proposals ($2,500/mo - $6,000/mo).",
        icon: "📈",
      },
      {
        title: "Wholesale Post-Production Upsell",
        desc: "Seamless one-click option for clients to add 24h multi-cam editing and 10 viral shorts at checkout—adding $290+ profit per session.",
        icon: "🎬",
      },
      {
        title: "Executive Corporate Outreach Funnel",
        desc: "Targeted B2B campaigns to local venture firms, marketing agencies, and CEOs launching brand thought-leadership shows.",
        icon: "💼",
      },
      {
        title: "Automated Cloud Stem Vault Delivery",
        desc: "Auto-expiring private download links with checksum verification sent directly to clients upon session wrap.",
        icon: "☁️",
      },
    ],
    workflows: [
      "Show Host Books Suite Online → Instant Calendar Sync with Audio Engineer → Guest Appearance NDA Auto-Signed → Studio Session Recorded → Automated Cloud Ingest → Edited Masters Delivered in 24 Hours",
    ],
    caseStudy: {
      studioName: "Apex Broadcast Collective",
      location: "Austin, TX",
      results: ["Suite utilization increased from 48% to 91%", "+$8,700/mo in post-production upsells", "8 corporate retainer shows secured"],
      quote: "StudioGrowth360 transformed our 2-room podcast studio from a chaotic hourly rental into a predictable $30k/month recurring media hub. Their GoHighLevel workflows and corporate lead generation are unbeatable.",
      owner: "David Chen, Managing Partner",
    },
    metrics: [
      { value: "91%", label: "Average Suite Utilization" },
      { value: "+$8.7k", label: "Monthly Wholesale Edit Upsell" },
      { value: "< 24h", label: "Guaranteed Turnaround SLA" },
    ],
  },
  {
    id: "yoga-studios",
    slug: "yoga-studios",
    name: "Yoga Studios",
    tagline: "Drive Class Pack Sales. Automate Memberships. Boost Retention.",
    heroHeadline: "Student Lead Generation & Membership Automation for Yoga Studios",
    heroSubheadline: "We help boutique yoga, pilates, and wellness studio owners attract local students, sell out workshops, automate recurring monthly memberships, and eliminate student churn.",
    icon: "🧘",
    badge: "For Yoga Studios",
    image: "/assets/img/studios/yoga-studio.jpg",
    painPoints: [
      "Struggling to convert trial intro offers into high-retention monthly memberships",
      "Manual class check-ins and student attendance tracking causing front-desk congestion",
      "High student drop-off after the first 30 days without automated retention check-ins",
      "Underfilled weekend workshops and specialty sound bath events",
    ],
    solutions: [
      {
        title: "Introductory Offer Conversion Funnels",
        desc: "Targeted Facebook & Instagram ads driving local students into a high-converting '$30 for 2 Weeks Unlimited' introductory funnel.",
        icon: "🧘‍♀️",
      },
      {
        title: "Automated Trial-to-Member Sequences",
        desc: "Personalized SMS & email check-ins triggered on day 3, 7, and 12 of a student's trial to guide them into an annual membership.",
        icon: "🔄",
      },
      {
        title: "Class Booking & Spot Reservation",
        desc: "Seamless mobile-friendly class scheduling integrated directly with student attendance limits and automated waitlist triggers.",
        icon: "📲",
      },
      {
        title: "Student Churn Prevention Triggers",
        desc: "Automatic alerts and 'We Miss You' offers sent when an active member hasn't attended class in over 14 consecutive days.",
        icon: "💚",
      },
      {
        title: "Workshop & Retreat Event Funnels",
        desc: "Automated registration and payment funnels that sell out specialty weekend workshops, teacher trainings, and wellness retreats.",
        icon: "✨",
      },
      {
        title: "Membership Billing & Card Updater",
        desc: "Automated dunning management that recovers failed credit card rebills via polite SMS prompts before memberships lapse.",
        icon: "💳",
      },
    ],
    workflows: [
      "Local Student Sees Intro Ad → Claims $30 Intro Pass → Welcome SMS Sent with Studio Etiquette Guide → Student Attends 1st Class → Day 7 Check-in → Day 12 Auto-Offer for Unlimited Monthly Membership",
    ],
    caseStudy: {
      studioName: "Prana Flow Wellness Space",
      location: "Denver, CO",
      results: ["142 new monthly recurring members in 90 days", "Intro trial conversion jumped from 22% to 58%", "Member churn reduced by 34%"],
      quote: "Our front desk was always overwhelmed, and we were losing members as fast as we gained them. StudioGrowth360 automated our entire student journey—from first visit to annual membership. It completely transformed our studio's cash flow.",
      owner: "Elena Rostova, Studio Founder",
    },
    metrics: [
      { value: "58%", label: "Intro Trial to Member Conversion" },
      { value: "+142", label: "New Recurring Members" },
      { value: "-34%", label: "Student Churn Reduction" },
    ],
  },
  {
    id: "craft-studios",
    slug: "craft-studios",
    name: "Arts & Crafts Studios",
    tagline: "Fill Creative Workshops. Automate Private Parties. Build Community.",
    heroHeadline: "Workshop Registration & Customer CRM for Arts & Crafts Studios",
    heroSubheadline: "We help pottery, painting, woodworking, and craft studio owners sell out weekend workshops, capture corporate team building parties, and generate predictable recurring revenue.",
    icon: "🎨",
    badge: "For Craft Studios",
    image: "/assets/img/studios/craft-studio.jpg",
    painPoints: [
      "Half-empty workshops with seats going unfilled due to lack of localized marketing",
      "Manual tracking of ticket registrations, supply counts, and dietary/space requirements",
      "Missing out on lucrative $1,500 - $4,000 corporate team-building events",
      "Lack of repeat customer follow-up after one-time pottery or painting workshops",
    ],
    solutions: [
      {
        title: "Event & Workshop Registration Funnels",
        desc: "Visual, mobile-optimized event ticket funnels with real-time seat inventory counters and group booking discounts.",
        icon: "🎟️",
      },
      {
        title: "Private Party & Corporate Inbound Funnel",
        desc: "Automated quoting and calendar reservations for corporate team-building events, birthday parties, and bridal showers.",
        icon: "🏢",
      },
      {
        title: "Automated Supply & Attendee Prep",
        desc: "Automated pre-workshop emails detailing parking, clothing recommendations, and project materials so sessions run smoothly.",
        icon: "🎨",
      },
      {
        title: "Repeat Booking & Hobbyist Retention",
        desc: "Automated post-workshop discount campaigns inviting attendees to return for intermediate classes or open-studio monthly passes.",
        icon: "🔁",
      },
      {
        title: "Seasonal Holiday Gift Card Engine",
        desc: "Automated digital gift card sales funnels tailored for Mother's Day, Valentine's Day, and holiday season revenue surges.",
        icon: "🎁",
      },
      {
        title: "Local Community Review Engine",
        desc: "Automated photo-sharing and review requests encouraging students to tag the studio on Instagram and post 5-star Google reviews.",
        icon: "⭐",
      },
    ],
    workflows: [
      "Weekend Workshop Announced → Local Social Ad Targets Craft Lovers → Instant Online Ticket Purchase with Seat Counter → Prep Email Sent → Workshop Attended → Pickup Ready SMS Sent for Kiln Items → Invite to Advanced Course",
    ],
    caseStudy: {
      studioName: "Clay & Canvas Collective",
      location: "Seattle, WA",
      results: ["Weekend workshops 100% sold out 3 weeks in advance", "14 corporate private parties booked in Q4", "+$16,200 holiday gift card revenue"],
      quote: "Before working with StudioGrowth360, we relied purely on pedestrians walking past our door. Now every single pottery workshop sells out weeks in advance, and our corporate party pipeline is completely full.",
      owner: "Marcus Vance, Founder",
    },
    metrics: [
      { value: "100%", label: "Workshop Capacity Reached" },
      { value: "+$16.2k", label: "Holiday Gift Card Revenue" },
      { value: "14", label: "Corporate Bookings / Month" },
    ],
  },
];

// WHY CHOOSE US - 8 CORE BENEFITS
export const whyChooseUs = [
  {
    icon: "🏢",
    title: "Studio-Focused Growth Solutions",
    desc: "We don't work with dentists, roofers, or generic e-commerce stores. 100% of our frameworks, CRM snapshots, and ad creatives are custom-tailored for creative and wellness studios.",
  },
  {
    icon: "⚡",
    title: "Smart Business Automation",
    desc: "Eliminate 25+ hours of weekly admin busywork. Connect your inquiry forms, booking calendars, deposit invoicing, and staff alerts into autonomous n8n workflows.",
  },
  {
    icon: "🚀",
    title: "Powerful GoHighLevel CRM",
    desc: "Replace 8+ disjointed software tools with one unified command center. Manage leads, text messages, calls, pipelines, and reviews under your own branded domain.",
  },
  {
    icon: "🎯",
    title: "More Qualified Booking Leads",
    desc: "Fill your calendar with prospects who already know your pricing, appreciate your creative space, and have their credit cards ready to place a deposit.",
  },
  {
    icon: "💬",
    title: "Automated Client Follow-ups",
    desc: "Engage prospective clients within 2 minutes of inquiry via smart SMS and email automations. Never let another hot lead go cold while you're busy running sessions.",
  },
  {
    icon: "📅",
    title: "Better Booking Management",
    desc: "Frictionless multi-room, multi-instructor, or multi-suite booking calendars with automated buffer intervals, digital liability waivers, and non-refundable deposits.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Business Operations",
    desc: "Deploy human-sounding 24/7 AI voice phone agents and website chat assistants that answer studio equipment questions and book appointments around the clock.",
  },
  {
    icon: "📈",
    title: "Scalable Growth Systems",
    desc: "Build a predictable, institutional growth engine that allows you to open second and third studio locations without your operational workload multiplying.",
  },
];

// HOW OUR AUTOMATION SYSTEM WORKS - 5 STAGES
export const automationStages = [
  {
    step: "01",
    name: "Capture",
    title: "Multi-Channel Lead Ingestion",
    headline: "Never Let Another Inbound Studio Inquiry Go Unanswered",
    desc: "Targeted Meta ads, Google Local Pack search, Instagram DMs, and website forms funnel high-intent prospects into your unified studio database.",
    trigger: "Meta Lead Ad / Website Form / Google Maps Inquiry Submitted",
    icon: "target",
    tag: "Top of Funnel",
  },
  {
    step: "02",
    name: "Qualify",
    title: "Instant 2-Minute AI Screening",
    headline: "Automated AI Lead Qualification in Under 120 Seconds",
    desc: "Automated SMS bots and AI voice agents screen prospects for session type, budget, guest count, and timeline—filtering out unqualified inquiries automatically.",
    trigger: "Two-Way AI SMS or Voice Agent Begins Conversational Screening",
    icon: "zap",
    tag: "Speed to Lead",
  },
  {
    step: "03",
    name: "Nurture",
    title: "Smart Multi-Touch Sequences",
    headline: "Showcase Your Studio Experience & Equipment Automatically",
    desc: "Personalized text and email sequences showcase your studio's portfolio, equipment list, video walkthroughs, and client testimonials to build deep trust.",
    trigger: "Dynamic Follow-Up Drip Triggered Based on Client Studio Interest",
    icon: "message",
    tag: "Value Building",
  },
  {
    step: "04",
    name: "Book & Pay",
    title: "Self-Service Deposit & Contract",
    headline: "Frictionless Online Slot Reservation & Stripe Escrow",
    desc: "Clients select their time slot on your live booking calendar, sign digital liability waivers, and pay their deposit via integrated Stripe Connect escrow.",
    trigger: "Deposit Collected via Stripe + Digital Liability Waiver Auto-Signed",
    icon: "calendar",
    tag: "Revenue Locked",
  },
  {
    step: "05",
    name: "Retain",
    title: "Automated Reviews & Re-Booking",
    headline: "Turn 1-Time Bookers into Lifetime Monthly Retainers",
    desc: "Post-session triggers request 5-star Google reviews and deploy automated 30/60/90-day win-back offers that generate predictable repeat client revenue.",
    trigger: "Post-Session QR Code Check-Out → Automated Google Review Prompt",
    icon: "star",
    tag: "Lifetime Value",
  },
];

// OUR 4-STEP CLIENT PROCESS
export const ourProcess = [
  {
    step: "STEP 01",
    title: "Discovery & Studio Audit",
    desc: "We analyze your current booking volume, software tools, customer acquisition cost, and operational bottlenecks to build your custom studio growth blueprint.",
    timeline: "Week 1",
  },
  {
    step: "STEP 02",
    title: "Blueprint & Custom Build",
    desc: "Our engineers configure your GoHighLevel CRM, design your high-converting landing pages, build your custom n8n workflows, and train your AI agents.",
    timeline: "Week 2 - 3",
  },
  {
    step: "STEP 03",
    title: "Team Training & Go-Live",
    desc: "We conduct hands-on training with your studio staff, connect your payment gateways and calendars, and launch your targeted lead generation campaigns.",
    timeline: "Week 4",
  },
  {
    step: "STEP 04",
    title: "Continuous Optimization & Scaling",
    desc: "We review weekly analytics, split-test ad creatives, optimize booking conversion rates, and fine-tune automated pipelines for maximum studio profitability.",
    timeline: "Ongoing",
  },
];

// PRICING TIERS
export const pricingPackages = [
  {
    name: "Studio Automation Starter",
    subtitle: "Ideal for boutique, single-room studios looking to automate admin and stop losing leads.",
    priceMonthly: 497,
    priceAnnual: 397,
    badge: "Foundation",
    popular: false,
    features: [
      "Complete GoHighLevel CRM Account Setup",
      "Unified Multi-Channel Inbox (SMS, Email, DMs)",
      "Automated 2-Minute Lead Response Workflows",
      "Online Booking Calendar with Buffer Intervals",
      "Automated Stripe Deposit & Invoice Processing",
      "Digital Client Liability Waiver Auto-Signing",
      "Automated Google Review Generation Engine",
      "Standard Email & Chat Support (24h SLA)",
    ],
    ctaText: "Start Starter Plan",
    planId: "starter",
  },
  {
    name: "Growth Scale Engine",
    subtitle: "Built for busy, multi-room studios ready to dominate local search and fill empty hours.",
    priceMonthly: 997,
    priceAnnual: 797,
    badge: "Most Popular",
    popular: true,
    features: [
      "Everything in Starter Automation, plus:",
      "Custom n8n Workflow Automations (Up to 10 Pipelines)",
      "High-Converting Studio Landing Page Development",
      "Meta & Google Ads Management ($1k-$3k ad spend)",
      "Dynamic Rate Card & Weekday Room Yield Optimizer",
      "AI Website Chatbot trained on your studio FAQs",
      "SMS Flash Promotion Campaigns for Off-Peak Hours",
      "Bi-Weekly Strategy & Campaign Review Calls",
      "Dedicated Studio Success Account Manager",
    ],
    ctaText: "Start Growth Engine",
    planId: "growth",
  },
  {
    name: "Enterprise Full-Stack Agency",
    subtitle: "Complete turnkey growth & operations partnership for multi-location studio franchises.",
    priceMonthly: 1997,
    priceAnnual: 1597,
    badge: "Full-Stack Partnership",
    popular: false,
    features: [
      "Everything in Growth Scale Engine, plus:",
      "Unlimited Multi-Suite & Multi-Location Routing",
      "24/7 AI Voice Phone Receptionist & Booking Agent",
      "Enterprise Corporate Retainer Outreach Funnels",
      "Full Custom Next.js Studio Website Development",
      "White-Label Client Portal & Mobile App Configuration",
      "Direct API & Specialized Studio Hardware Integrations",
      "Dedicated Slack Channel with Engineering Team",
      "1-on-1 Monthly In-Person/Zoom Growth Strategy Sprints",
    ],
    ctaText: "Book Enterprise Consultation",
    planId: "enterprise",
  },
];

// FAQS
export const agencyFaqs = [
  {
    q: "How quickly can StudioGrowth360 implement our studio automation system?",
    a: "Our standard studio onboarding and CRM deployment takes between 7 to 14 business days. We provide complete turnkey implementation—including GoHighLevel setup, booking calendar sync, SMS/email workflow buildout, and staff training—so you experience zero downtime in your daily studio operations.",
  },
  {
    q: "Do we need to switch away from our existing booking software or website?",
    a: "Not necessarily! If you love your existing website (e.g., WordPress, Squarespace, Webflow), we can embed high-converting booking widgets and connect via n8n and Webhooks. However, most studio owners choose to consolidate onto GoHighLevel because it replaces 6+ disconnected subscriptions and saves $300-$500/month.",
  },
  {
    q: "What makes StudioGrowth360 different from a generic digital marketing agency?",
    a: "Generic agencies don't understand studio operations. They don't know the difference between 4K camera ISO stems, soundproof acoustic STC ratings, darkroom chemical prep, or yoga class waitlists. We specialize exclusively in creative and wellness studios in the USA, meaning our funnels, pipelines, and ad creatives are already battle-tested.",
  },
  {
    q: "How does the 24/7 AI Voice Receptionist handle studio calls?",
    a: "Our AI voice agents are trained specifically on your studio's equipment list, hourly rates, room dimensions, parking directions, and booking policies. When prospects call, the AI answers in under 1 second with a natural, conversational human tone, answers their questions, checks your live calendar, and books their session directly on the call.",
  },
  {
    q: "How does the Lead Generation guarantee work for our studio?",
    a: "We engineer hyper-localized paid advertising campaigns on Google Search, Google Maps, and Meta (Instagram/Facebook). By targeting local creators, commercial brands, and enthusiasts in your specific metro area, we ensure you receive consistent, qualified booking inquiries rather than tire-kickers.",
  },
  {
    q: "Can you help us migrate our existing client database from HoneyBook or Mindbody?",
    a: "Yes. Our team handles complete, secure data migrations from HoneyBook, Dubsado, Mindbody, Square, Acuity, and generic spreadsheets into GoHighLevel. We clean duplicate records, preserve past booking notes, and ensure zero client data is lost.",
  },
  {
    q: "Are there long-term contracts, or can we cancel anytime?",
    a: "All of our monthly automation and growth packages operate on flexible month-to-month agreements. We believe in earning your business every single month through measurable booked revenue and hours saved.",
  },
];

// Compatibility aliases for pages and components
export const agencyServices = mainServices.map((s) => ({
  slug: s.slug,
  title: s.title,
  shortTitle: s.title.replace(" Services", "").replace(" & Client Management", ""),
  eyebrow: s.category,
  description: s.shortDesc,
  outcome: s.heroHighlight,
  services: s.coreOfferings.map((o) => `${o.title} — ${o.desc}`),
  offerings: s.coreOfferings,
  benefits: s.studioBenefits,
  deliverables: s.deliverables,
  workflow: s.sampleWorkflow,
  stats: s.stats,
  icon: s.icon,
  category: s.category,
  tagline: s.tagline,
  fullDesc: s.fullDesc,
}));

export const studioIndustries = industrySolutions.map((ind) => ({
  slug: ind.slug,
  title: ind.name,
  shortTitle: ind.name.replace(" Studios", ""),
  description: ind.heroSubheadline,
  image: ind.image,
  painPoints: ind.painPoints,
  solutions: ind.solutions.map((s) => `${s.title}: ${s.desc}`),
  rawSolutions: ind.solutions,
  workflows: ind.workflows,
  caseStudy: ind.caseStudy,
  metrics: ind.metrics,
  icon: ind.icon,
  badge: ind.badge,
  heroHeadline: ind.heroHeadline,
  tagline: ind.tagline,
}));

