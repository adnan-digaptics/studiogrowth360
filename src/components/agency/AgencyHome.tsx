import Image from "next/image";
import Link from "next/link";
import { agencyServices, studioIndustries } from "@/data/agency";
import { AgencyLayout } from "./AgencyLayout";

const reasons = [
  ["Built for studios", "We shape the strategy around your classes, sessions, workshops, memberships, and client journey."],
  ["Connected systems", "Your website, CRM, calendar, and marketing should work together—not create more admin."],
  ["Human-first automation", "Automate repetitive tasks while keeping real people in control of important conversations."],
  ["A practical growth partner", "Get a clear plan, thoughtful implementation, and support that fits your goals and capacity."],
];

const faqs = [
  ["Who do you work with?", "We work with photography, podcast, yoga, and arts and crafts studios across the United States."],
  ["Do I need to use GoHighLevel or n8n already?", "No. We can help you assess your current tools, recommend a sensible setup, and connect the systems that fit your business."],
  ["Can you work with the CRM and website I already have?", "Often, yes. We start by understanding your existing setup and recommend improvements or integrations before suggesting a rebuild."],
  ["How much do your services cost?", "Pricing depends on the scope, tools, and implementation needed. We provide a clear proposal after a free discovery conversation."],
];

export default function AgencyHome() {
  return (
    <AgencyLayout>
      <main>
        <section className="sg-hero">
          <div className="sg-container sg-hero-grid">
            <div className="sg-hero-copy">
              <span className="sg-eyebrow"><span className="sg-eyebrow-dot" /> GROWTH SYSTEMS FOR CREATIVE STUDIOS</span>
              <h1>Grow Your Studio. Automate Your Business. <span>Scale Without Limits.</span></h1>
              <p>We help photography, podcast, yoga, and creative studios across the USA generate more leads, automate daily operations, manage clients, and grow with powerful CRM and AI automation solutions.</p>
              <div className="sg-button-row">
                <Link className="sg-button sg-button-primary" href="/book-consultation">Book a Free Strategy Call <span>↗</span></Link>
                <Link className="sg-button sg-button-secondary" href="/services">Explore Our Services <span>↓</span></Link>
              </div>
              <div className="sg-trust-note"><span>✓</span> Studio-focused strategy <i /> <span>✓</span> Tools that fit your workflow</div>
            </div>
            <div className="sg-hero-visual">
              <Image
                src="/assets/img/podcast/hero_podcast_studio.jpg"
                alt="Creative studio ready for a client recording session"
                width={780}
                height={650}
                priority
                sizes="(max-width: 760px) 100vw, 48vw"
              />
              <div className="sg-hero-floating">
                <span className="sg-floating-icon">↗</span>
                <div><strong>One connected system</strong><small>Leads · Bookings · Follow-ups</small></div>
              </div>
              <div className="sg-hero-image-caption"><span className="sg-status-dot" /> Built around your studio</div>
            </div>
          </div>
        </section>

        <section className="sg-trust-strip">
          <div className="sg-container sg-trust-inner">
            <span>ONE PARTNER FOR YOUR GROWTH STACK</span>
            <div><b>Lead Generation</b><i /> <b>CRM &amp; Automation</b><i /> <b>Websites &amp; Funnels</b><i /> <b>AI Workflows</b></div>
          </div>
        </section>

        <section className="sg-section sg-services-section">
          <div className="sg-container">
            <div className="sg-section-heading">
              <span className="sg-kicker">WHAT WE DO</span>
              <h2>Practical systems for every stage of studio growth.</h2>
              <p>From getting discovered to keeping clients coming back, we connect the tools and workflows that help your studio run smoothly.</p>
            </div>
            <div className="sg-service-grid">
              {agencyServices.map((service, index) => (
                <Link className="sg-service-card" href={`/${service.slug}`} key={service.slug}>
                  <span className="sg-card-index">0{index + 1}</span>
                  <h3>{service.shortTitle}</h3>
                  <p>{service.description}</p>
                  <span className="sg-card-link">Explore service <span>↗</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="sg-section sg-industries-section">
          <div className="sg-container">
            <div className="sg-section-heading sg-section-heading-row">
              <div><span className="sg-kicker">WHO WE HELP</span><h2>Your kind of studio. Your kind of growth.</h2></div>
              <Link className="sg-text-link" href="/industries-we-serve">Explore all industries <span>↗</span></Link>
            </div>
            <div className="sg-industry-grid">
              {studioIndustries.map((industry) => (
                <Link className="sg-industry-card" href={`/industries-we-serve/${industry.slug}`} key={industry.slug}>
                  <Image src={industry.image} alt={`${industry.shortTitle} studio`} width={600} height={420} sizes="(max-width: 760px) 100vw, 25vw" />
                  <span className="sg-industry-overlay" />
                  <span className="sg-industry-title">{industry.title}<i>↗</i></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="sg-section sg-why-section">
          <div className="sg-container sg-why-layout">
            <div className="sg-section-heading sg-why-heading">
              <span className="sg-kicker">WHY STUDIOGROWTH360</span>
              <h2>Growth should feel more manageable—not more complicated.</h2>
              <p>We don&apos;t just install software. We help studio owners create a joined-up growth system that fits the way they serve clients.</p>
              <Link className="sg-button sg-button-primary" href="/about">Get to know us <span>↗</span></Link>
            </div>
            <div className="sg-reason-list">
              {reasons.map(([title, description], index) => (
                <article className="sg-reason" key={title}>
                  <span className="sg-reason-number">0{index + 1}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sg-system-section">
          <div className="sg-container sg-system-layout">
            <div className="sg-system-copy">
              <span className="sg-kicker sg-kicker-light">A CONNECTED STUDIO SYSTEM</span>
              <h2>From the first inquiry to the next booking.</h2>
              <p>Bring lead capture, client details, scheduling, and follow-ups into a flow that keeps your team and clients on the same page.</p>
              <ul>
                <li><span>01</span> Make it easy for the right people to find and contact you.</li>
                <li><span>02</span> Keep every inquiry, conversation, and booking organized.</li>
                <li><span>03</span> Automate timely reminders and thoughtful follow-ups.</li>
              </ul>
              <Link className="sg-button sg-button-light" href="/crm-solutions">Explore CRM solutions <span>↗</span></Link>
            </div>
            <div className="sg-system-board" aria-label="Illustration of a connected studio growth workflow">
              <div className="sg-board-top"><span>STUDIO GROWTH FLOW</span><span className="sg-board-live"><i /> CONNECTED</span></div>
              <div className="sg-board-flow">
                <div><b className="sg-flow-symbol">↗</b><strong>New inquiry</strong><small>Website &amp; social</small></div>
                <span className="sg-flow-arrow">→</span>
                <div><b className="sg-flow-symbol">◎</b><strong>CRM follow-up</strong><small>Personalized &amp; timely</small></div>
                <span className="sg-flow-arrow">→</span>
                <div><b className="sg-flow-symbol">▣</b><strong>Booked session</strong><small>Calendar &amp; reminders</small></div>
              </div>
              <div className="sg-board-footer"><span>Automation supports your team</span><span>n8n <i>·</i> GoHighLevel <i>·</i> AI</span></div>
            </div>
          </div>
        </section>

        <section className="sg-section sg-platforms-section">
          <div className="sg-container">
            <div className="sg-section-heading">
              <span className="sg-kicker">AUTOMATION THAT FITS YOUR STACK</span>
              <h2>n8n and GoHighLevel, configured for your studio.</h2>
              <p>Bring your lead capture, CRM, email, SMS, booking, and follow-up workflows into a connected system that matches how you operate.</p>
            </div>
            <div className="sg-platform-grid">
              <article>
                <span className="sg-platform-mark">n8n</span>
                <div><h3>Flexible workflow automation</h3><p>Connect your studio&apos;s tools with custom n8n workflows, API integrations, and AI-enabled processes.</p><Link className="sg-text-link" href="/n8n-automation">Explore n8n services <span>↗</span></Link></div>
              </article>
              <article>
                <span className="sg-platform-mark sg-platform-mark-blue">GHL</span>
                <div><h3>CRM, pipelines, and follow-up</h3><p>Set up GoHighLevel to manage leads, bookings, communications, and client relationships in one place.</p><Link className="sg-text-link" href="/gohighlevel-services">Explore GoHighLevel services <span>↗</span></Link></div>
              </article>
            </div>
          </div>
        </section>

        <section className="sg-section sg-process-section">
          <div className="sg-container">
            <div className="sg-section-heading"><span className="sg-kicker">OUR PROCESS</span><h2>A thoughtful path from idea to impact.</h2></div>
            <div className="sg-process-grid">
              {[
                ["01", "Discover", "We learn how your studio works, where leads come from, and what is getting in the way."],
                ["02", "Design", "We map a practical plan around your goals, budget, tools, and client experience."],
                ["03", "Build", "We implement, connect, and test the website, CRM, automations, and integrations."],
                ["04", "Improve", "We review what is working and identify the next useful improvement together."],
              ].map(([number, title, copy]) => (
                <article className="sg-process-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="sg-section sg-home-pricing">
          <div className="sg-container sg-home-pricing-layout">
            <div><span className="sg-kicker">PRICING THAT FITS YOUR SCOPE</span><h2>Start with what your studio needs now.</h2><p>Choose a focused strategy, implementation project, or ongoing optimization. We&apos;ll scope it together and share a clear proposal before work begins.</p><Link className="sg-text-link" href="/pricing">Explore pricing options <span>↗</span></Link></div>
            <div className="sg-home-pricing-steps"><div><span>01</span><b>Strategy &amp; roadmap</b><small>Identify the right priorities.</small></div><div><span>02</span><b>Build &amp; implementation</b><small>Connect the systems you need.</small></div><div><span>03</span><b>Ongoing optimization</b><small>Improve as your studio grows.</small></div></div>
          </div>
        </section>

        <section className="sg-section sg-faq-section">
          <div className="sg-container sg-faq-layout">
            <div className="sg-section-heading"><span className="sg-kicker">COMMON QUESTIONS</span><h2>Good to know before we begin.</h2><p>Have another question? We&apos;re happy to talk through your studio&apos;s needs.</p><Link className="sg-text-link" href="/contact">Contact our team <span>↗</span></Link></div>
            <div className="sg-faq-list">
              {faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="sg-final-cta">
          <div className="sg-container sg-final-cta-inner">
            <span className="sg-kicker sg-kicker-light">READY WHEN YOU ARE</span>
            <h2>Let&apos;s make your studio easier to grow.</h2>
            <p>Tell us what you&apos;re working toward. We&apos;ll help you find the right next step—no pressure, no one-size-fits-all pitch.</p>
            <Link className="sg-button sg-button-light" href="/book-consultation">Book a Free Strategy Call <span>↗</span></Link>
          </div>
        </section>
      </main>
    </AgencyLayout>
  );
}
