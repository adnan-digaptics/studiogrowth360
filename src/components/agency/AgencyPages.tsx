"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { AgencyLayout } from "./AgencyLayout";
import {
  mainServices,
  industrySolutions,
  whyChooseUs,
  ourProcess,
  pricingPackages,
  agencyFaqs,
  ServiceDetail,
  IndustryDetail,
} from "@/data/agency";
import ConsultationForm from "./ConsultationForm";
import AgencyCtaSection from "./AgencyCtaSection";
import AgencyFaqSection from "./AgencyFaqSection";
import AgencyTrustBar from "./AgencyTrustBar";
import { publicAsset } from "@/utils/publicAsset";
import {
  IconContainer,
  getServiceVectorIcon,
  getIndustryVectorIcon,
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconZap,
  IconLock,
} from "@/components/common/AgencyIcons";

const serviceImages: Record<string, string> = {
  'lead-generation': publicAsset('/assets/img/studios/photography-studio.jpg'),
  'n8n-automation': publicAsset('/assets/img/studios/studio-platform-hero.jpg'),
  'gohighlevel-services': publicAsset('/assets/img/studios/studio-platform-hero.jpg'),
  'crm-solutions': publicAsset('/assets/img/studios/studio-platform-hero.jpg'),
  'ai-automation': publicAsset('/assets/img/studios/podcast-studio.jpg'),
  'website-funnel-development': publicAsset('/assets/img/studios/yoga-studio.jpg'),
  'digital-marketing': publicAsset('/assets/img/studios/craft-studio.jpg'),
};

/* =========================================================================
   1. SERVICES INDEX PAGE (/services)
   ========================================================================= */
export function ServicesIndexPage() {
  return (
    <AgencyLayout>
      <div className="sg_page_header py-5 position-relative overflow-hidden" style={{ background: "#0A192F" }}>
        <div className="container position-relative py-5 text-center" style={{ zIndex: 2 }}>
          <div className="sg_badge_electric mb-3">
            <span>FULL-STACK STUDIO SERVICES</span>
          </div>
          <h1 className="text-white font-weight-bold mb-3" style={{ fontSize: "clamp(32px, 4.5vw, 54px)", lineHeight: 1.15 }}>
            Automate, Attract, &amp; Scale Your Studio Business
          </h1>
          <p className="text-secondary font-size-17 max-w-750 mx-auto mb-4" style={{ color: "#CBD5E1", lineHeight: 1.6 }}>
            Explore our 7 dedicated digital growth and operational automation offerings engineered exclusively for creative and wellness studios across the United States.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
            <Link href="/book-consultation" className="sg_btn_primary font-size-14 py-3 px-4 w-100 w-sm-auto justify-content-center text-center">
              <span>Book a Free Strategy Call →</span>
            </Link>
            <Link
              href="/pricing"
              className="sg_btn_secondary font-size-14 py-3 px-4 w-100 w-sm-auto justify-content-center text-center"
              style={{ background: '#FFFFFF', color: '#0F172A', borderColor: '#FFFFFF', fontWeight: 700 }}
            >
              <span style={{ color: '#0F172A', fontWeight: 700 }}>View Packages &amp; Pricing</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row g-4 align-items-stretch">
            {mainServices.map((srv, idx) => {
              const isFlagship = idx === 0;

              return (
                <div key={srv.id} className={isFlagship ? "col-12" : "col-12 col-lg-6"}>
                  <div className="p-4 p-xl-5 rounded-4 h-100 bg-white border d-flex flex-column justify-content-between shadow-sm overflow-hidden position-relative">
                    {isFlagship ? (
                      /* Flagship Horizontal Split Layout */
                      <div className="row g-4 align-items-center">
                        <div className="col-12 col-lg-7">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <IconContainer size={48} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)" radius="12px">
                              {getServiceVectorIcon(srv.slug, 24, "#0066FF")}
                            </IconContainer>
                            <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary border font-size-11 px-3 py-1 font-weight-bold" style={{ color: "#0066FF" }}>
                              FLAGSHIP · {srv.category}
                            </span>
                          </div>

                          <h2 className="text-dark font-size-26 font-weight-bold mb-2">
                            <Link href={`/${srv.slug}`} className="text-decoration-none text-dark hover-primary">
                              {srv.title}
                            </Link>
                          </h2>

                          <div className="font-size-14 font-weight-bold text-primary mb-3" style={{ color: "#0066FF" }}>
                            {srv.tagline}
                          </div>

                          <p className="text-secondary font-size-15 mb-4" style={{ lineHeight: "1.7" }}>
                            {srv.shortDesc}
                          </p>

                          <div className="font-size-12 font-weight-bold text-uppercase text-dark mb-2" style={{ letterSpacing: "0.5px" }}>
                            Included Deliverables:
                          </div>
                          <div className="row g-2 mb-4">
                            {srv.coreOfferings.slice(0, 4).map((off, oIdx) => (
                              <div key={oIdx} className="col-12 col-sm-6 font-size-13 text-secondary d-flex align-items-start gap-2">
                                <span className="text-primary font-weight-bold" style={{ color: "#0066FF" }}>✓</span>
                                <span className="text-dark font-weight-medium">{off.title}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="col-12 col-lg-5">
                          <div className="sg_img_16_10 shadow-sm border" style={{ borderColor: "#E2E8F0" }}>
                            <img
                              src={serviceImages[srv.slug]}
                              alt={srv.title}
                              className="sg_img_cover"
                            />
                            <div className="position-absolute" style={{ inset: 0, background: "linear-gradient(to top, rgba(10, 25, 47, 0.75) 0%, transparent 60%)" }}></div>
                            <div className="position-absolute bottom-0 start-0 p-3 d-flex align-items-center justify-content-between w-100">
                              <span className="badge rounded-pill bg-primary text-white font-size-11 px-3 py-1 font-weight-bold" style={{ backgroundColor: "#0066FF" }}>
                                3.4x Average ROAS
                              </span>
                              <span className="badge rounded-pill bg-dark bg-opacity-75 text-white font-size-11 px-2 py-1 font-monospace">
                                Flagship Machine
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Standard Service Card */
                      <div>
                        {serviceImages[srv.slug] && (
                          <div className="sg_img_16_10 mb-4 border" style={{ borderColor: "#E2E8F0" }}>
                            <img
                              src={serviceImages[srv.slug]}
                              alt={srv.title}
                              className="sg_img_cover"
                            />
                            <div className="position-absolute" style={{ inset: 0, background: "linear-gradient(to top, rgba(10, 25, 47, 0.75) 0%, transparent 60%)" }}></div>
                            <div className="position-absolute bottom-0 start-0 p-3 d-flex align-items-center justify-content-between w-100">
                              <span className="badge rounded-pill bg-primary text-white font-size-11 px-3 py-1 font-weight-bold" style={{ backgroundColor: "#0066FF" }}>
                                {srv.category}
                              </span>
                              <span className="badge rounded-pill bg-dark bg-opacity-75 text-white font-size-10 px-2 py-1 font-monospace">
                                0{idx + 1} / 07
                              </span>
                            </div>
                          </div>
                        )}

                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <IconContainer size={44} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)" radius="12px">
                            {getServiceVectorIcon(srv.slug, 22, "#0066FF")}
                          </IconContainer>
                          <span className="font-monospace font-size-12 text-secondary">0{idx + 1} / 07</span>
                        </div>

                        <h2 className="text-dark font-size-22 font-weight-bold mb-2">
                          <Link href={`/${srv.slug}`} className="text-decoration-none text-dark hover-primary">
                            {srv.title}
                          </Link>
                        </h2>

                        <div className="font-size-13 font-weight-bold text-primary mb-3" style={{ color: "#0066FF" }}>
                          {srv.tagline}
                        </div>

                        <p className="text-secondary font-size-14 mb-4" style={{ lineHeight: "1.65" }}>
                          {srv.shortDesc}
                        </p>

                        <div className="font-size-12 font-weight-bold text-uppercase text-dark mb-2" style={{ letterSpacing: "0.5px" }}>
                          Included Deliverables:
                        </div>
                        <div className="row g-2 mb-4">
                          {srv.coreOfferings.slice(0, 4).map((off, oIdx) => (
                            <div key={oIdx} className="col-12 col-sm-6 font-size-13 text-secondary d-flex align-items-start gap-2">
                              <span className="text-primary font-weight-bold" style={{ color: "#0066FF" }}>✓</span>
                              <span className="text-dark font-weight-medium">{off.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                      <Link href={`/${srv.slug}`} className="text-decoration-none font-weight-bold font-size-14 text-primary d-flex align-items-center gap-1" style={{ color: "#0066FF" }}>
                        <span>View Service Details &amp; Systems</span>
                        <span>→</span>
                      </Link>
                      <span className="font-monospace font-size-12 text-secondary">0{idx + 1} / 07</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AgencyTrustBar />
      <AgencyCtaSection />
    </AgencyLayout>
  );
}

/* =========================================================================
   2. INDIVIDUAL SERVICE DETAIL PAGE
   ========================================================================= */
export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = mainServices.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) return null;

  // Other related services for the bottom navigation
  const otherServices = mainServices.filter((s) => s.slug !== slug);

  // Workflow steps parsed from service.sampleWorkflow
  const workflowSteps = service.sampleWorkflow.split("→").map((st) => st.trim());

  // Service-specific FAQs
  const serviceFaqs = [
    {
      q: `How long does the turnkey setup for ${service.title} take?`,
      a: `Our standard deployment timeline is 7 to 14 business days. We handle the full architecture, API credentials, copywriting, and testing without interrupting your studio's daily booking operations.`,
    },
    {
      q: `Will this integrate with my existing software and studio website?`,
      a: `Yes. We natively integrate with Google Calendar, Stripe, QuickBooks, Twilio, Mindbody, Acuity, HoneyBook, Next.js, WordPress, and custom websites through direct API webhooks and n8n connectors.`,
    },
    {
      q: `Do I have to sign a long-term contract or agency retainer?`,
      a: `No. All our studio growth systems and management partnerships operate on month-to-month agreements. You retain full 100% ownership of your accounts, snapshots, client data, and workflows.`,
    },
    {
      q: `What kind of technical support do we receive after going live?`,
      a: `You get direct access to our US-based GoHighLevel and n8n automation engineers via a private Slack or WhatsApp channel with guaranteed 4-hour response SLAs.`,
    },
  ];

  return (
    <AgencyLayout>
      {/* 1. Split High-Impact Hero Section */}
      <div className="sg_page_header py-5 position-relative overflow-hidden" style={{ background: "#0A192F" }}>
        {/* Subtle Background Pattern & Glow */}
        <div
          className="position-absolute"
          style={{
            inset: 0,
            backgroundImage: "radial-gradient(circle at 80% 20%, rgba(0, 102, 255, 0.18) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        ></div>

        <div className="container position-relative py-4 py-lg-5" style={{ zIndex: 2 }}>
          <div className="row g-4 g-lg-5 align-items-center">
            {/* Left: Headline, Value Proposition & CTAs */}
            <div className="col-12 col-lg-7">
              {/* Breadcrumb Navigation */}
              <div className="d-flex align-items-center gap-2 font-size-12 mb-3 text-secondary" style={{ color: "#94A3B8" }}>
                <Link href="/" className="text-decoration-none text-secondary hover-primary">Home</Link>
                <span>/</span>
                <Link href="/services" className="text-decoration-none text-secondary hover-primary">Services</Link>
                <span>/</span>
                <span style={{ color: "#38BDF8" }}>{service.title}</span>
              </div>

              {/* Status Pill Badge */}
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: "rgba(0, 102, 255, 0.2)", border: "1px solid rgba(56, 189, 248, 0.4)" }}>
                <span className="sg_live_pulse" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00E676" }}></span>
                <span className="font-monospace font-size-11 font-weight-bold text-uppercase" style={{ color: "#38BDF8", letterSpacing: "0.8px" }}>
                  TURNKEY SETUP IN 7-14 DAYS · ZERO DOWNTIME
                </span>
              </div>

              <h1 className="text-white font-weight-bold mb-3" style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.15 }}>
                {service.title}
              </h1>

              <div className="font-size-18 font-weight-bold mb-3" style={{ color: "#38BDF8" }}>
                {service.tagline}
              </div>

              <p className="font-size-16 mb-4" style={{ color: "#CBD5E1", lineHeight: "1.75", maxWidth: "680px" }}>
                {service.fullDesc}
              </p>

              {/* CTAs */}
              <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-3 mb-4">
                <Link href="/book-consultation" className="sg_btn_primary font-size-14 py-3 px-4 shadow-lg w-100 w-sm-auto justify-content-center text-center">
                  <span>Schedule Free Architecture Call →</span>
                </Link>
                <a href="#deliverables" className="sg_btn_secondary font-size-14 py-3 px-4 w-100 w-sm-auto justify-content-center text-center" style={{ background: "rgba(255, 255, 255, 0.08)", color: "#FFFFFF", borderColor: "rgba(255, 255, 255, 0.2)" }}>
                  <span>Explore System Blueprint ↓</span>
                </a>
              </div>

              {/* Trust Signals Strip */}
              <div className="d-flex flex-wrap align-items-center gap-2 gap-md-4 pt-3 border-top border-secondary border-opacity-25 font-size-12 text-secondary" style={{ color: "#94A3B8" }}>
                <span className="d-flex align-items-center gap-1 text-white">
                  <span className="text-success font-weight-bold">✓</span>
                  <span>Certified GoHighLevel &amp; n8n Engineers</span>
                </span>
                <span className="opacity-50">·</span>
                <span className="d-flex align-items-center gap-1 text-white">
                  <span className="text-success font-weight-bold">✓</span>
                  <span>Month-to-Month Flexibility</span>
                </span>
                <span className="opacity-50 d-none d-md-inline">·</span>
                <span className="d-flex align-items-center gap-1 text-white d-none d-md-inline">
                  <span className="text-success font-weight-bold">✓</span>
                  <span>350+ US Studios Powered</span>
                </span>
              </div>
            </div>

            {/* Right: Dedicated Ultra HD Studio Facility Visual Card */}
            <div className="col-12 col-lg-5">
              <div className="rounded-4 overflow-hidden shadow-lg border position-relative" style={{ borderColor: "rgba(56, 189, 248, 0.35)", background: "#0F172A" }}>
                <div className="sg_img_16_10 position-relative">
                  <img
                    src={serviceImages[service.slug] || publicAsset("/assets/img/studios/studio-platform-hero.jpg")}
                    alt={service.title}
                    className="sg_img_cover"
                  />
                  <div
                    className="position-absolute"
                    style={{
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(10, 25, 47, 0.2) 0%, rgba(10, 25, 47, 0.88) 100%)",
                    }}
                  ></div>

                  {/* Single Clean Bottom Overlay (Zero Top-Bottom Collision) */}
                  <div className="position-absolute bottom-0 start-0 p-3 w-100 text-white">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="badge rounded-pill bg-primary text-white font-size-11 px-3 py-1 font-weight-bold" style={{ backgroundColor: "#0066FF" }}>
                        {service.category}
                      </span>
                      <span className="badge rounded-pill bg-dark bg-opacity-75 text-white font-size-10 px-2 py-1 font-monospace">
                        USA Production System
                      </span>
                    </div>
                    <div className="d-flex align-items-baseline gap-2">
                      <span className="font-size-22 font-weight-bold" style={{ color: "#38BDF8" }}>
                        {service.stats[0]?.metric || "3.4x"}
                      </span>
                      <span className="font-size-12" style={{ color: "#CBD5E1" }}>
                        {service.stats[0]?.label || "Average Performance Lift"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-Card Info Strip */}
                <div className="p-3 text-white border-top border-secondary border-opacity-25" style={{ background: "rgba(0, 0, 0, 0.35)" }}>
                  <div className="d-flex align-items-center justify-content-between font-size-12">
                    <span className="font-monospace" style={{ color: "#94A3B8" }}>Architecture:</span>
                    <span className="font-weight-bold text-white">Turnkey GoHighLevel + n8n Sync</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Quantitative Impact Metrics Ribbon */}
      <section className="py-4 bg-white border-bottom shadow-sm">
        <div className="container">
          <div className="row g-3 justify-content-center">
            {service.stats.map((st, idx) => (
              <div key={idx} className="col-6 col-lg-3">
                <div className="p-3 rounded-3 text-center border h-100" style={{ background: "#F8FAFC", borderColor: "#E2E8F0" }}>
                  <div className="font-monospace font-weight-bold mb-1" style={{ fontSize: "28px", color: "#0066FF" }}>
                    {st.metric}
                  </div>
                  <div className="font-size-12 text-dark font-weight-bold">{st.label}</div>
                  <div className="font-size-11 text-secondary mt-1">Verified Studio Benchmark</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive 4-Stage Implementation Pipeline (Roadmap) */}
      <section className="py-5 bg-white border-bottom">
        <div className="container py-3">
          <div className="text-center max-w-750 mx-auto mb-5">
            <div className="sg_badge_electric mb-2">
              <span>HOW WE DEPLOY THIS SYSTEM</span>
            </div>
            <h2 className="sg_agency_title font-size-26 font-size-md-36 mb-2">
              The 4-Stage Implementation Roadmap
            </h2>
            <p className="sg_agency_desc mx-auto font-size-15">
              From initial technical audit to turnkey go-live in 7 to 14 business days—with zero operational downtime for your studio.
            </p>
          </div>

          <div className="row g-3 align-items-stretch">
            {[
              {
                step: "01",
                time: "Days 1 - 3",
                title: "Studio Audit & Data Mapping",
                desc: "We analyze your intake forms, rates, equipment lists, and current calendars to design a custom automation blueprint.",
                tag: "Discovery Phase",
              },
              {
                step: "02",
                time: "Days 4 - 8",
                title: "Custom Architecture Build",
                desc: "Engineers configure GoHighLevel pipelines, custom n8n logic nodes, Twilio phone routing, and Stripe escrow hooks.",
                tag: "Engineering Phase",
              },
              {
                step: "03",
                time: "Days 9 - 11",
                title: "Stress Testing & Staff Training",
                desc: "We simulate 50+ test inquiries and appointments, verify webhooks, and train your studio front-desk team via live video.",
                tag: "QA & Onboarding",
              },
              {
                step: "04",
                time: "Day 12+",
                title: "Turnkey Go-Live & Support",
                desc: "Full production launch with real-time Slack/WhatsApp engineer support and weekly attribution reporting.",
                tag: "Live Execution",
              },
            ].map((st, sIdx) => (
              <div key={sIdx} className="col-12 col-sm-6 col-lg-3">
                <div className="p-4 rounded-4 h-100 border d-flex flex-column justify-content-between shadow-sm transition-all" style={{ background: "#F8FAFC", borderColor: "#E2E8F0" }}>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span className="font-monospace font-weight-bold font-size-18 text-primary" style={{ color: "#0066FF" }}>
                        {st.step}
                      </span>
                      <span className="badge rounded-pill bg-white text-dark border font-size-10 px-2 py-1">
                        {st.time}
                      </span>
                    </div>
                    <h3 className="font-size-16 font-weight-bold text-dark mb-2">
                      {st.title}
                    </h3>
                    <p className="font-size-13 text-secondary mb-0" style={{ lineHeight: "1.6" }}>
                      {st.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-top mt-3 font-size-11 font-monospace text-primary font-weight-bold" style={{ color: "#0066FF" }}>
                    {st.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Specialized Core Capabilities (Bento Grid) */}
      <section id="deliverables" className="py-5 bg-light">
        <div className="container py-4">
          <div className="text-center max-w-750 mx-auto mb-5">
            <div className="sg_badge_electric mb-2">
              <span>SPECIALIZED CAPABILITIES</span>
            </div>
            <h2 className="sg_agency_title font-size-26 font-size-md-36 mb-2">
              What We Deliver for Your Studio
            </h2>
            <p className="sg_agency_desc mx-auto font-size-15">
              Every deliverable is engineered specifically for studio operations, tested in real production environments, and integrated with your team&apos;s daily routine.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {service.coreOfferings.map((offering, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div className="p-4 p-xl-4 rounded-4 h-100 bg-white border shadow-sm d-flex flex-column justify-content-between transition-all" style={{ borderColor: "#E2E8F0" }}>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <IconContainer size={42} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)" radius="10px">
                        {getServiceVectorIcon(service.slug, 20, "#0066FF")}
                      </IconContainer>
                      <span className="badge rounded-pill bg-light text-primary border font-monospace font-size-11 px-2 py-1 font-weight-bold" style={{ color: "#0066FF" }}>
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-dark font-size-18 font-weight-bold mb-2">
                      {offering.title}
                    </h3>

                    <p className="text-secondary font-size-13 mb-0" style={{ lineHeight: "1.65" }}>
                      {offering.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-top mt-3 d-flex align-items-center justify-content-between font-size-11">
                    <span className="text-success font-weight-bold">✓ Production Tested</span>
                    <span className="text-secondary font-monospace">Turnkey Included</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Live Architecture Visualizer: The Automated Studio Lifecycle */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container py-3">
          <div className="rounded-4 p-4 p-xl-5 border shadow-sm" style={{ background: "#0A192F", borderColor: "rgba(0, 102, 255, 0.3)" }}>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25">
              <div>
                <div className="d-flex align-items-center gap-2 mb-1">
                  <span className="sg_live_pulse" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00E676" }}></span>
                  <span className="text-white font-size-15 font-weight-bold font-monospace">
                    AUTOMATED WORKFLOW ARCHITECTURE
                  </span>
                </div>
                <div className="font-size-13 text-secondary" style={{ color: "#94A3B8" }}>
                  End-to-end data lifecycle engineered for {service.title}
                </div>
              </div>
              <span className="badge rounded-pill bg-primary text-white font-size-11 px-3 py-1 font-weight-bold font-monospace" style={{ backgroundColor: "#0066FF" }}>
                GHL + n8n Synced
              </span>
            </div>

            {/* Visual Step-by-Step Sequence */}
            <div className="row g-3 align-items-center mb-4">
              {workflowSteps.map((step, sIdx) => (
                <React.Fragment key={sIdx}>
                  <div className="col-12 col-md">
                    <div className="p-3 rounded-3 text-center h-100" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.12)" }}>
                      <div className="font-monospace font-size-10 font-weight-bold mb-1" style={{ color: "#38BDF8" }}>
                        STEP 0{sIdx + 1}
                      </div>
                      <div className="font-size-12 font-weight-bold text-white">
                        {step}
                      </div>
                    </div>
                  </div>
                  {sIdx < workflowSteps.length - 1 && (
                    <div className="col-auto d-none d-md-block text-center text-secondary opacity-75 font-size-16" style={{ color: "#38BDF8" }}>
                      →
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 p-3 rounded-3" style={{ background: "rgba(0, 0, 0, 0.3)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div className="font-size-12 text-secondary" style={{ color: "#CBD5E1" }}>
                ⚡ Auto-executes in under 2 seconds · Full attribution logged to your master studio CRM dashboard.
              </div>
              <span className="badge bg-success bg-opacity-25 text-success font-size-11 font-monospace">
                Active Webhook Loop
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Benefits & Deliverables Split Section */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row g-4 g-lg-5 align-items-stretch">
            {/* Left: Measurable Studio Benefits */}
            <div className="col-12 col-lg-6">
              <div className="p-4 p-xl-5 rounded-4 h-100 bg-white border shadow-sm d-flex flex-column justify-content-between" style={{ borderColor: "#E2E8F0" }}>
                <div>
                  <div className="sg_badge_electric mb-3">
                    <span>MEASURABLE BUSINESS IMPACT</span>
                  </div>
                  <h3 className="sg_agency_title font-size-24 font-size-md-32 mb-3">
                    Why Studio Operators Choose This System
                  </h3>
                  <p className="text-secondary font-size-14 mb-4" style={{ lineHeight: "1.7" }}>
                    {service.heroHighlight}
                  </p>

                  <div className="d-flex flex-column gap-3 mb-4">
                    {service.studioBenefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="d-flex align-items-start gap-3 p-3 rounded-3" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                          style={{ width: "22px", height: "22px", background: "#0066FF", color: "#FFFFFF", fontSize: "12px", fontWeight: "bold" }}
                        >
                          ✓
                        </div>
                        <div className="font-size-14 text-dark font-weight-medium" style={{ lineHeight: "1.5" }}>
                          {benefit}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-top d-flex align-items-center gap-2 font-size-13 text-primary font-weight-bold" style={{ color: "#0066FF" }}>
                  <span>● Guaranteed zero disruption to active clients</span>
                </div>
              </div>
            </div>

            {/* Right: Everything Included in Turnkey Setup */}
            <div className="col-12 col-lg-6">
              <div className="p-4 p-xl-5 rounded-4 h-100 bg-white border shadow-sm d-flex flex-column justify-content-between" style={{ borderColor: "#E2E8F0" }}>
                <div>
                  {/* Studio Image Header */}
                  {serviceImages[service.slug] && (
                    <div className="sg_img_16_10 mb-4 border" style={{ borderColor: "#E2E8F0" }}>
                      <img
                        src={serviceImages[service.slug]}
                        alt={service.title}
                        className="sg_img_cover"
                      />
                      <div className="position-absolute" style={{ inset: 0, background: "linear-gradient(to top, rgba(10, 25, 47, 0.75) 0%, transparent 60%)" }}></div>
                      <div className="position-absolute bottom-0 start-0 p-3">
                        <span className="badge rounded-pill bg-primary text-white font-size-11 px-3 py-1 font-weight-bold" style={{ backgroundColor: "#0066FF" }}>
                          Turnkey Studio System
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="font-size-12 font-monospace font-weight-bold text-uppercase text-primary mb-2" style={{ color: "#0066FF", letterSpacing: "1px" }}>
                    SYSTEM DELIVERABLES
                  </div>
                  <h3 className="text-dark font-size-22 font-weight-bold mb-3">
                    Everything Included in Setup
                  </h3>
                  <p className="text-secondary font-size-13 mb-4">
                    We handle architecture, copywriting, workflow building, API testing, and staff training with zero operational downtime.
                  </p>

                  <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2 mb-4">
                    {service.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="d-flex align-items-start gap-2 font-size-14 text-dark font-weight-medium">
                        <span className="text-success font-weight-bold">✔</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-top font-size-12 text-secondary font-monospace">
                  Direct US Engineer Dedicated Slack / WhatsApp Channel
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Who In Your Studio Benefits Matrix */}
      <section className="py-5 bg-white border-top">
        <div className="container py-3">
          <div className="text-center max-w-750 mx-auto mb-5">
            <div className="sg_badge_electric mb-2">
              <span>TEAM &amp; CLIENT ALIGNMENT</span>
            </div>
            <h2 className="sg_agency_title font-size-26 font-size-md-36 mb-2">
              Who Wins in Your Studio
            </h2>
            <p className="sg_agency_desc mx-auto font-size-15">
              Our systems are engineered so every stakeholder experiences less friction and faster results.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-md-4">
              <div className="p-4 rounded-4 h-100 border bg-light shadow-sm d-flex flex-column justify-content-between">
                <div>
                  <div className="font-size-28 mb-3">👑</div>
                  <h3 className="font-size-18 font-weight-bold text-dark mb-2">For the Studio Owner</h3>
                  <p className="font-size-13 text-secondary mb-3" style={{ lineHeight: "1.6" }}>
                    Frees up 15–20 hours per week of admin busywork, eliminates missed revenue, and establishes predictable monthly cash flow.
                  </p>
                </div>
                <div className="font-size-12 text-primary font-weight-bold" style={{ color: "#0066FF" }}>
                  → High-Leverage Growth
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-4 rounded-4 h-100 border bg-light shadow-sm d-flex flex-column justify-content-between">
                <div>
                  <div className="font-size-28 mb-3">🎧</div>
                  <h3 className="font-size-18 font-weight-bold text-dark mb-2">For Studio Staff &amp; Engineers</h3>
                  <p className="font-size-13 text-secondary mb-3" style={{ lineHeight: "1.6" }}>
                    Clear calendar buffers, pre-signed guest NDAs and waivers, automated equipment lists, and zero double-booking chaos.
                  </p>
                </div>
                <div className="font-size-12 text-primary font-weight-bold" style={{ color: "#0066FF" }}>
                  → Frictionless Operations
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-4 rounded-4 h-100 border bg-light shadow-sm d-flex flex-column justify-content-between">
                <div>
                  <div className="font-size-28 mb-3">⭐</div>
                  <h3 className="font-size-18 font-weight-bold text-dark mb-2">For Clients &amp; Artists</h3>
                  <p className="font-size-13 text-secondary mb-3" style={{ lineHeight: "1.6" }}>
                    Instant &lt; 2-minute booking responses, 1-click mobile self-scheduling, automated directions, and seamless Stripe deposit receipts.
                  </p>
                </div>
                <div className="font-size-12 text-primary font-weight-bold" style={{ color: "#0066FF" }}>
                  → 5-Star VIP Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Direct Service FAQ Accordion */}
      <section className="py-5 bg-light border-top">
        <div className="container py-3">
          <div className="text-center max-w-750 mx-auto mb-5">
            <div className="sg_badge_electric mb-2">
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="sg_agency_title font-size-26 font-size-md-36 mb-2">
              Common Questions About {service.title}
            </h2>
            <p className="sg_agency_desc mx-auto font-size-15">
              Clear, transparent answers so you can make an informed decision for your studio facility.
            </p>
          </div>

          <div className="max-w-850 mx-auto d-flex flex-column gap-3 mb-4">
            {serviceFaqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;

              return (
                <div
                  key={fIdx}
                  className="rounded-4 bg-white border shadow-sm overflow-hidden transition-all"
                  style={{ borderColor: isOpen ? "#0066FF" : "#E2E8F0" }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-100 text-start p-4 bg-transparent border-0 d-flex align-items-center justify-content-between gap-3"
                    style={{ cursor: "pointer" }}
                  >
                    <span className="font-size-16 font-weight-bold text-dark">
                      {faq.q}
                    </span>
                    <span
                      className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                      style={{
                        width: "28px",
                        height: "28px",
                        background: isOpen ? "#0066FF" : "#F1F5F9",
                        color: isOpen ? "#FFFFFF" : "#1E293B",
                        fontSize: "14px",
                        fontWeight: "bold",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 font-size-14 text-secondary border-top pt-3" style={{ lineHeight: "1.7" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Global Consultation Booking Section */}
      <section className="py-5 bg-white border-top">
        <div className="container py-4">
          <div className="row g-4 g-lg-5 align-items-center">
            <div className="col-12 col-lg-5">
              <div className="sg_badge_electric mb-3">
                <span>GET STARTED WITH {service.title.toUpperCase()}</span>
              </div>
              <h2 className="sg_agency_title font-size-26 font-size-md-38 mb-3">
                Ready to Implement This System in Your Studio?
              </h2>
              <p className="sg_agency_desc mb-4">
                Schedule a 30-minute discovery call with our studio automation architects. We&apos;ll audit your current process, share a live interactive demo, and give you a clear, fixed proposal.
              </p>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-2 font-size-14 text-dark font-weight-medium">
                  <span className="text-success font-weight-bold">✓</span>
                  <span>Turnkey setup completed in 7-14 business days</span>
                </div>
                <div className="d-flex align-items-center gap-2 font-size-14 text-dark font-weight-medium">
                  <span className="text-success font-weight-bold">✓</span>
                  <span>Direct GoHighLevel &amp; n8n engineer support</span>
                </div>
                <div className="d-flex align-items-center gap-2 font-size-14 text-dark font-weight-medium">
                  <span className="text-success font-weight-bold">✓</span>
                  <span>Month-to-month flexibility with zero lock-in</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="rounded-4 bg-white border shadow-sm overflow-hidden">
                <iframe
                  src="https://links.360growthlab.com/widget/form/0uj8HMiNVA3wVuQXaSZe"
                  style={{ width: "100%", height: "824px", border: "none", borderRadius: "8px" }}
                  id="inline-0uj8HMiNVA3wVuQXaSZe"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Schedule my free consultation call Adnan khan - Services Page"
                  data-height="824"
                  data-layout-iframe-id="inline-0uj8HMiNVA3wVuQXaSZe"
                  data-form-id="0uj8HMiNVA3wVuQXaSZe"
                  data-cookie-consent="true"
                  data-cookie-consent-provider="auto"
                  title="Schedule my free consultation call Adnan khan - Services Page"
                />
                <Script
                  src="https://links.360growthlab.com/js/form_embed.js"
                  strategy="afterInteractive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Related Studio Growth Systems Navigation */}
      <section className="py-5 bg-light border-top">
        <div className="container py-4">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
            <div>
              <div className="sg_badge_electric mb-2">
                <span>EXPLORE OTHER SYSTEMS</span>
              </div>
              <h3 className="sg_agency_title font-size-22 font-size-md-28 mb-0">
                Other Studio Growth &amp; Automation Services
              </h3>
            </div>
            <Link href="/services" className="text-primary font-size-14 font-weight-bold text-decoration-none d-flex align-items-center gap-1" style={{ color: "#0066FF" }}>
              <span>View All 7 Services</span>
              <span>→</span>
            </Link>
          </div>

          <div className="row g-3">
            {otherServices.slice(0, 3).map((os) => (
              <div key={os.id} className="col-12 col-md-4">
                <div className="p-4 rounded-4 bg-white border h-100 d-flex flex-column justify-content-between shadow-sm transition-all" style={{ borderColor: "#E2E8F0" }}>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <IconContainer size={40} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)" radius="10px">
                        {getServiceVectorIcon(os.slug, 20, "#0066FF")}
                      </IconContainer>
                      <span className="badge rounded-pill bg-light text-primary border font-size-11 px-2 py-1 font-weight-bold" style={{ color: "#0066FF" }}>
                        {os.category}
                      </span>
                    </div>

                    <h4 className="font-size-17 font-weight-bold text-dark mb-1">
                      <Link href={`/${os.slug}`} className="text-decoration-none text-dark hover-primary">
                        {os.title}
                      </Link>
                    </h4>

                    <p className="font-size-13 text-secondary mb-3" style={{ lineHeight: "1.6" }}>
                      {os.shortDesc}
                    </p>
                  </div>

                  <Link
                    href={`/${os.slug}`}
                    className="text-primary font-size-13 font-weight-bold text-decoration-none d-inline-flex align-items-center gap-1 pt-2 border-top"
                    style={{ color: "#0066FF" }}
                  >
                    <span>Explore Blueprint</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AgencyCtaSection />
    </AgencyLayout>
  );
}

/* =========================================================================
   3. INDUSTRIES WE SERVE INDEX PAGE (/industries-we-serve)
   ========================================================================= */
export function IndustriesIndexPage() {
  return (
    <AgencyLayout>
      <div className="sg_page_header py-5 position-relative overflow-hidden" style={{ background: "#0A192F" }}>
        <div className="container position-relative py-5 text-center" style={{ zIndex: 2 }}>
          <div className="sg_badge_electric mb-3">
            <span>WHO WE HELP</span>
          </div>
          <h1 className="text-white font-weight-bold mb-3" style={{ fontSize: "clamp(32px, 4.5vw, 54px)", lineHeight: 1.15 }}>
            Purpose-Built Growth Systems for Creative Studios
          </h1>
          <p className="text-secondary font-size-17 max-w-750 mx-auto mb-4" style={{ color: "#CBD5E1", lineHeight: 1.6 }}>
            We specialize exclusively in 4 American studio verticals: Photography, Podcast, Yoga, and Arts &amp; Crafts. Our systems understand your session formats, booking cycles, and day-to-day operations.
          </p>
        </div>
      </div>

      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row g-4 align-items-stretch">
            {industrySolutions.map((ind, idx) => (
              <div key={ind.id} className="col-12 col-lg-6">
                <div className="p-4 p-xl-5 rounded-4 h-100 bg-white border d-flex flex-column justify-content-between shadow-sm position-relative overflow-hidden">
                  <div>
                    {/* Photorealistic Studio Image Showcase */}
                    <div className="sg_img_16_10 mb-4 border" style={{ borderColor: "#E2E8F0" }}>
                      <img
                        src={ind.image}
                        alt={ind.name}
                        className="sg_img_cover"
                        style={{ transition: "transform 0.4s ease" }}
                      />
                      <div className="position-absolute" style={{ inset: 0, background: "linear-gradient(to top, rgba(10, 25, 47, 0.75) 0%, rgba(10, 25, 47, 0.1) 60%, transparent 100%)" }}></div>
                      <div className="position-absolute bottom-0 start-0 p-3 d-flex align-items-center justify-content-between w-100">
                        <span className="badge rounded-pill bg-primary text-white font-size-12 px-3 py-1 font-weight-bold" style={{ backgroundColor: "#0066FF" }}>
                          {ind.badge}
                        </span>
                        <span className="badge rounded-pill bg-dark bg-opacity-75 text-white font-size-11 px-2 py-1">
                          USA Studio Solution
                        </span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <IconContainer size={44} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)" radius="12px">
                        {getIndustryVectorIcon(ind.slug, 22, "#0066FF")}
                      </IconContainer>
                      <span className="font-monospace font-size-12 text-secondary">0{idx + 1} / 04</span>
                    </div>

                    <h2 className="text-dark font-size-24 font-weight-bold mb-2">
                      <Link href={`/${ind.slug}`} className="text-decoration-none text-dark hover-primary">
                        {ind.name}
                      </Link>
                    </h2>

                    <div className="font-size-13 font-weight-bold text-primary mb-3" style={{ color: "#0066FF" }}>
                      {ind.tagline}
                    </div>

                    <p className="text-secondary font-size-14 mb-4" style={{ lineHeight: "1.65" }}>
                      {ind.heroSubheadline}
                    </p>

                    <div className="font-size-12 font-weight-bold text-uppercase text-dark mb-2" style={{ letterSpacing: "0.5px" }}>
                      Key Studio Solutions:
                    </div>
                    <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2 mb-4">
                      {ind.solutions.slice(0, 3).map((sol, sIdx) => (
                        <li key={sIdx} className="d-flex align-items-start gap-2 font-size-13 text-secondary">
                          <span className="text-primary font-weight-bold" style={{ color: "#0066FF" }}>✓</span>
                          <span className="text-dark font-weight-medium">{sol.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                    <Link href={`/${ind.slug}`} className="text-decoration-none font-weight-bold font-size-14 text-primary d-flex align-items-center gap-1" style={{ color: "#0066FF" }}>
                      <span>Explore {ind.name} Solutions</span>
                      <span>→</span>
                    </Link>
                    <span className="font-monospace font-size-12 text-secondary">0{idx + 1} / 04</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AgencyCtaSection />
    </AgencyLayout>
  );
}

/* =========================================================================
   4. INDIVIDUAL INDUSTRY DETAIL PAGE
   ========================================================================= */
export function IndustryDetailPage({ slug }: { slug: string }) {
  const industry = industrySolutions.find((i) => i.slug === slug);
  if (!industry) return null;

  return (
    <AgencyLayout>
      <div className="sg_page_header py-5 position-relative overflow-hidden" style={{ background: "#0A192F" }}>
        {/* Cinematic Studio Photo Background */}
        <div
          className="position-absolute"
          style={{
            inset: 0,
            backgroundImage: `url(${industry.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.18,
            filter: "saturate(1.2) contrast(1.1)",
          }}
        ></div>
        <div
          className="position-absolute"
          style={{
            inset: 0,
            background: "linear-gradient(180deg, rgba(10, 25, 47, 0.8) 0%, #0A192F 100%)",
          }}
        ></div>
        <div className="container position-relative py-5" style={{ zIndex: 2 }}>
          <div className="max-w-950 mx-auto text-center">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: "rgba(0, 102, 255, 0.2)", border: "1px solid rgba(56, 189, 248, 0.4)" }}>
              <span>{getIndustryVectorIcon(industry.slug, 18, "#38BDF8")}</span>
              <span className="font-monospace font-size-11 font-weight-bold text-uppercase" style={{ color: "#38BDF8", letterSpacing: "1px" }}>
                {industry.name.toUpperCase()} SOLUTIONS
              </span>
            </div>

            <h1 className="text-white font-weight-bold mb-3" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", lineHeight: 1.15 }}>
              {industry.heroHeadline}
            </h1>

            <p className="text-secondary font-size-17 mx-auto mb-4" style={{ color: "#CBD5E1", lineHeight: 1.7, maxWidth: "800px" }}>
              {industry.heroSubheadline}
            </p>

            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
              <Link href="/book-consultation" className="sg_btn_primary font-size-14 py-3 px-4 w-100 w-sm-auto justify-content-center text-center">
                <span>Book a Free Studio Strategy Call →</span>
              </Link>
              <Link
                href="/pricing"
                className="sg_btn_secondary font-size-14 py-3 px-4 w-100 w-sm-auto justify-content-center text-center"
                style={{ background: '#FFFFFF', color: '#0F172A', borderColor: '#FFFFFF', fontWeight: 700 }}
              >
                <span style={{ color: '#0F172A', fontWeight: 700 }}>View Pricing Packages</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Bar */}
      <section className="py-4 bg-white border-bottom">
        <div className="container">
          <div className="row g-3 justify-content-center">
            {industry.metrics.map((m, idx) => (
              <div key={idx} className="col-6 col-md-3 text-center">
                <div className="font-monospace font-weight-bold" style={{ fontSize: "28px", color: "#0066FF" }}>
                  {m.value}
                </div>
                <div className="font-size-13 text-secondary font-weight-medium">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points vs Solutions */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row g-4 g-lg-5">
            {/* Common Bottlenecks */}
            <div className="col-12 col-lg-5">
              <div className="p-4 rounded-4 bg-white border shadow-sm h-100">
                <div className="sg_badge_electric mb-3" style={{ background: "rgba(239, 68, 68, 0.1)", color: "#EF4444", borderColor: "rgba(239, 68, 68, 0.3)" }}>
                  <span>COMMON STUDIO BOTTLENECKS</span>
                </div>
                <h3 className="text-dark font-size-22 font-weight-bold mb-3">
                  What Holds Most {industry.name} Back
                </h3>
                <div className="d-flex flex-column gap-3">
                  {industry.painPoints.map((pain, idx) => (
                    <div key={idx} className="d-flex align-items-start gap-2 font-size-14 text-secondary">
                      <span className="text-danger font-weight-bold">✕</span>
                      <span className="text-dark font-weight-medium">{pain}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Turnkey Solutions */}
            <div className="col-12 col-lg-7">
              <div className="sg_badge_electric mb-3">
                <span>ENGINEERED FIXES</span>
              </div>
              <h3 className="sg_agency_title font-size-24 font-size-md-32 mb-4">
                How StudioGrowth360 Solves Them
              </h3>

              <div className="d-flex flex-column gap-3">
                {industry.solutions.map((sol, idx) => (
                  <div key={idx} className="p-4 rounded-4 bg-white border shadow-sm">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="text-primary font-weight-bold" style={{ color: "#0066FF" }}>✓</span>
                      <h4 className="text-dark font-size-18 font-weight-bold mb-0">
                        {sol.title}
                      </h4>
                    </div>
                    <p className="text-secondary font-size-14 mb-0" style={{ lineHeight: "1.6" }}>
                      {sol.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Case Study Spotlight */}
      <section className="py-5 bg-white border-top">
        <div className="container py-4">
          <div className="p-4 p-xl-5 rounded-4 border shadow-sm position-relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A192F 0%, #0F172A 100%)", color: "#FFFFFF" }}>
            <div className="row g-4 align-items-center">
              {/* Studio Facility Photo */}
              <div className="col-12 col-lg-5">
                <div className="sg_img_16_10 shadow" style={{ border: "1px solid rgba(255, 255, 255, 0.15)" }}>
                  <img
                    src={industry.image}
                    alt={industry.caseStudy.studioName}
                    className="sg_img_cover"
                  />
                  <div className="position-absolute" style={{ inset: 0, background: "linear-gradient(to top, rgba(10, 25, 47, 0.85) 0%, transparent 60%)" }}></div>
                  <div className="position-absolute bottom-0 start-0 p-3 text-white">
                    <span className="badge rounded-pill bg-primary text-white font-size-11 px-3 py-1 font-weight-bold" style={{ backgroundColor: "#0066FF" }}>
                      {industry.name} Case Study
                    </span>
                    <div className="font-size-12 text-white font-weight-bold mt-1">{industry.caseStudy.studioName} · {industry.caseStudy.location}</div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-7">
                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: "rgba(0, 102, 255, 0.2)", border: "1px solid rgba(56, 189, 248, 0.4)" }}>
                  <span className="font-size-12 font-monospace font-weight-bold text-uppercase" style={{ color: "#38BDF8" }}>
                    PROVEN CLIENT RESULTS · {industry.caseStudy.location.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-white font-size-24 font-size-md-30 font-weight-bold mb-3">
                  &ldquo;{industry.caseStudy.quote}&rdquo;
                </h3>
                <div className="font-size-14 font-weight-bold text-white mb-4" style={{ color: "#38BDF8" }}>
                  — {industry.caseStudy.owner}
                </div>

                <div className="p-3 rounded-3" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  <div className="font-size-11 font-monospace font-weight-bold text-uppercase text-secondary mb-2" style={{ color: "#94A3B8" }}>
                    DOCUMENTED RESULTS
                  </div>
                  <div className="d-flex flex-wrap gap-3">
                    {industry.caseStudy.results.map((res, rIdx) => (
                      <div key={rIdx} className="d-flex align-items-center gap-2 font-size-13 font-weight-bold" style={{ color: "#00E676" }}>
                        <span>✓</span>
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Booking */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row g-4 g-lg-5 align-items-center">
            <div className="col-12 col-lg-5">
              <div className="sg_badge_electric mb-3">
                <span>SCHEDULE STRATEGY CALL</span>
              </div>
              <h2 className="sg_agency_title font-size-26 font-size-md-36 mb-3">
                Let&apos;s Build Your {industry.name} Growth Engine
              </h2>
              <p className="sg_agency_desc mb-4">
                Connect with our studio team for a free 30-minute consultation. We&apos;ll walk through our pre-built GoHighLevel snapshots and n8n automations designed specifically for {industry.name.toLowerCase()}.
              </p>
            </div>
            <div className="col-12 col-lg-7">
              <ConsultationForm
                industrySlug={industry.slug}
                industryName={industry.name}
                badgeText={`TAILORED FOR ${industry.name.toUpperCase()}`}
                source={`Industry Page: ${industry.name}`}
              />
            </div>
          </div>
        </div>
      </section>

      <AgencyCtaSection />
    </AgencyLayout>
  );
}

/* =========================================================================
   5. ABOUT US PAGE (/about)
   ========================================================================= */
export function AboutPage() {
  return (
    <AgencyLayout>
      <div className="sg_page_header py-5 position-relative overflow-hidden" style={{ background: "#0A192F" }}>
        <div className="container position-relative py-5 text-center" style={{ zIndex: 2 }}>
          <div className="sg_badge_electric mb-3">
            <span>ABOUT STUDIOGROWTH360</span>
          </div>
          <h1 className="text-white font-weight-bold mb-3" style={{ fontSize: "clamp(32px, 4.5vw, 54px)", lineHeight: 1.15 }}>
            Your All-in-One Studio Growth, CRM &amp; Automation Partner
          </h1>
          <p className="text-secondary font-size-17 max-w-750 mx-auto mb-4" style={{ color: "#CBD5E1", lineHeight: 1.6 }}>
            Brand Tagline: <strong className="text-white">Automate. Grow. Scale.</strong> We provide CRM solutions, business automation, AI automation, lead generation, and digital growth services to studios across the United States.
          </p>
          <Link href="/book-consultation" className="sg_btn_primary font-size-14 py-3 px-4 w-100 w-sm-auto justify-content-center text-center d-inline-flex">
            <span>Meet with Our Studio Team →</span>
          </Link>
        </div>
      </div>

      {/* Mission & Story */}
      <section className="py-5 bg-white">
        <div className="container py-4 py-lg-5">
          <div className="row g-4 g-lg-5 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="sg_badge_electric mb-3">
                <span>WHO WE ARE</span>
              </div>
              <h2 className="sg_agency_title font-size-28 font-size-md-40 mb-3">
                Built Exclusively for Studio Owners in the USA
              </h2>
              <p className="text-secondary font-size-15 mb-3" style={{ lineHeight: "1.7" }}>
                StudioGrowth360 was founded with one clear mission: to help creative and wellness studio owners eliminate manual administrative busywork, generate more qualified leads, and build scalable, profitable businesses.
              </p>
              <p className="text-secondary font-size-15 mb-4" style={{ lineHeight: "1.7" }}>
                Generic software companies sell generic tools. Generic marketing agencies run disconnected ads. We provide complete, integrated growth systems that connect your marketing, lead capture, CRM pipeline, multi-room calendars, client communications, and payments into one seamless machine.
              </p>

              <div className="d-flex flex-column gap-2 mb-4">
                <div className="d-flex align-items-center gap-2 font-size-14 text-dark font-weight-medium">
                  <span className="text-primary font-weight-bold" style={{ color: "#0066FF" }}>✓</span>
                  <span>Headquartered in Oakbrook Terrace, IL, serving clients nationwide</span>
                </div>
                <div className="d-flex align-items-center gap-2 font-size-14 text-dark font-weight-medium">
                  <span className="text-primary font-weight-bold" style={{ color: "#0066FF" }}>✓</span>
                  <span>Specialized in Photography, Podcast, Yoga, and Arts &amp; Crafts facilities</span>
                </div>
                <div className="d-flex align-items-center gap-2 font-size-14 text-dark font-weight-medium">
                  <span className="text-primary font-weight-bold" style={{ color: "#0066FF" }}>✓</span>
                  <span>Certified GoHighLevel Partners &amp; n8n Automation Engineers</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="position-relative overflow-hidden rounded-4 border shadow-sm" style={{ border: "1px solid #E2E8F0" }}>
                <div className="sg_img_16_10" style={{ borderRadius: "16px 16px 0 0" }}>
                  <img
                    src={publicAsset("/assets/img/studios/studio-platform-hero.jpg")}
                    alt="StudioGrowth360 Platform Operations"
                    className="sg_img_cover"
                  />
                  <div className="position-absolute" style={{ inset: 0, background: "linear-gradient(to top, rgba(10, 25, 47, 0.85) 0%, rgba(10, 25, 47, 0.2) 60%, transparent 100%)" }}></div>
                  <div className="position-absolute bottom-0 start-0 p-4 text-white">
                    <span className="badge rounded-pill bg-primary text-white font-size-11 px-3 py-1 mb-2 font-weight-bold" style={{ backgroundColor: "#0066FF" }}>
                      USA STUDIO INFRASTRUCTURE
                    </span>
                    <h4 className="text-white font-size-20 font-weight-bold mb-1">
                      Engineered for Creative &amp; Wellness Facilities
                    </h4>
                    <p className="font-size-13 text-secondary mb-0" style={{ color: "#CBD5E1" }}>
                      Centralizing CRM, n8n automations, and AI receptionists under one roof.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-light border-top">
                  <h3 className="text-dark font-size-18 font-weight-bold mb-3">
                    Our Core Operational Beliefs
                  </h3>
                  <div className="d-flex flex-column gap-3">
                    <div className="p-3 bg-white rounded-3 border">
                      <div className="font-size-14 font-weight-bold text-dark mb-1">
                        1. Clarity Over Complexity
                      </div>
                      <div className="font-size-13 text-secondary">
                        We never recommend tools you don&apos;t need. We select only the integrations that measurably save time or generate revenue.
                      </div>
                    </div>
                    <div className="p-3 bg-white rounded-3 border">
                      <div className="font-size-14 font-weight-bold text-dark mb-1">
                        2. Human-First Automation
                      </div>
                      <div className="font-size-13 text-secondary">
                        Repetitive admin tasks should be automated, but your studio&apos;s unique creative touch and client relationships remain front and center.
                      </div>
                    </div>
                    <div className="p-3 bg-white rounded-3 border">
                      <div className="font-size-14 font-weight-bold text-dark mb-1">
                        3. Long-Term Partnership
                      </div>
                      <div className="font-size-13 text-secondary">
                        We operate on month-to-month agreements and earn your trust every 30 days through transparent attribution and responsive support.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Studio Verticals Photorealistic Gallery */}
      <section className="py-5 bg-light border-top border-bottom">
        <div className="container py-4">
          <div className="text-center max-w-700 mx-auto mb-5">
            <div className="sg_badge_electric mb-2">
              <span>SPECIALIZED VERTICALS</span>
            </div>
            <h2 className="sg_agency_title font-size-26 font-size-md-36 mb-2">
              Deep Domain Expertise Across 4 Studio Sectors
            </h2>
            <p className="sg_agency_desc font-size-15">
              Each studio type has distinct booking mechanics, client journeys, and revenue models.
            </p>
          </div>

          <div className="row g-4">
            {industrySolutions.map((ind) => (
              <div key={ind.id} className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 border-0 rounded-4 shadow-sm overflow-hidden bg-white d-flex flex-column">
                  <div className="sg_img_16_10" style={{ borderRadius: "16px 16px 0 0" }}>
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="sg_img_cover"
                    />
                    <div className="position-absolute" style={{ inset: 0, background: "linear-gradient(to top, rgba(10, 25, 47, 0.7) 0%, transparent 60%)" }}></div>
                    <div className="position-absolute bottom-0 start-0 p-3">
                      <span className="badge rounded-pill bg-primary text-white font-size-11 px-2 py-1">
                        {ind.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-3 d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                      <h4 className="font-size-16 font-weight-bold text-dark mb-2">
                        {ind.name}
                      </h4>
                      <p className="font-size-13 text-secondary mb-3" style={{ lineHeight: 1.5 }}>
                        {ind.tagline}
                      </p>
                    </div>
                    <Link
                      href={`/${ind.slug}`}
                      className="text-decoration-none font-size-13 font-weight-bold text-primary d-inline-flex align-items-center gap-1"
                      style={{ color: "#0066FF" }}
                    >
                      <span>Explore Systems</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AgencyTrustBar />
      <AgencyCtaSection />
    </AgencyLayout>
  );
}

/* =========================================================================
   6. PRICING PAGE (/pricing)
   ========================================================================= */
export function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <AgencyLayout>
      <div className="sg_page_header py-5 position-relative overflow-hidden" style={{ background: "#0A192F" }}>
        <div className="container position-relative py-5 text-center" style={{ zIndex: 2 }}>
          <div className="sg_badge_electric mb-3">
            <span>TRANSPARENT STUDIO PACKAGES</span>
          </div>
          <h1 className="text-white font-weight-bold mb-3" style={{ fontSize: "clamp(32px, 4.5vw, 54px)", lineHeight: 1.15 }}>
            Simple, Transparent Packages Built for Studios
          </h1>
          <p className="text-secondary font-size-17 max-w-750 mx-auto mb-4" style={{ color: "#CBD5E1", lineHeight: 1.6 }}>
            Every package is designed to pay for itself with just one or two booked studio sessions per month. Month-to-month flexibility with zero cancellation penalties.
          </p>

          {/* Billing Switch */}
          <div className="d-inline-flex align-items-center gap-2 p-1 rounded-pill bg-white border shadow-sm">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className="btn btn-sm rounded-pill px-3 py-1 font-size-13 border-0"
              style={{
                background: !isAnnual ? "#0066FF" : "transparent",
                color: !isAnnual ? "#FFFFFF" : "#64748B",
                fontWeight: !isAnnual ? 700 : 500,
              }}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className="btn btn-sm rounded-pill px-3 py-1 font-size-13 border-0 d-flex align-items-center gap-2"
              style={{
                background: isAnnual ? "#0066FF" : "transparent",
                color: isAnnual ? "#FFFFFF" : "#64748B",
                fontWeight: isAnnual ? 700 : 500,
              }}
            >
              <span>Annual Billing</span>
              <span className="badge rounded-pill bg-success text-white font-size-10 px-2 py-1">Save 20%</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row g-4 align-items-stretch mb-5">
            {pricingPackages.map((pkg, idx) => {
              const price = isAnnual ? pkg.priceAnnual : pkg.priceMonthly;
              return (
                <div key={idx} className="col-12 col-lg-4">
                  <div
                    className="p-4 p-xl-5 rounded-4 h-100 d-flex flex-column justify-content-between position-relative transition-all"
                    style={{
                      background: pkg.popular ? "#FFFFFF" : "#FFFFFF",
                      border: pkg.popular ? "2px solid #0066FF" : "1px solid #E2E8F0",
                      boxShadow: pkg.popular ? "0 12px 36px rgba(0, 102, 255, 0.12)" : "0 4px 12px rgba(0, 0, 0, 0.03)",
                    }}
                  >
                    {pkg.popular && (
                      <div
                        className="position-absolute font-monospace font-size-11 font-weight-bold text-uppercase px-3 py-1 rounded-pill text-white"
                        style={{ top: "-12px", left: "50%", transform: "translateX(-50%)", background: "#0066FF", letterSpacing: "1px" }}
                      >
                        MOST POPULAR FOR US STUDIOS
                      </div>
                    )}

                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="badge rounded-pill bg-light text-primary border font-size-11 px-3 py-1 font-weight-bold" style={{ color: "#0066FF" }}>
                          {pkg.badge}
                        </span>
                      </div>

                      <h3 className="text-dark font-size-22 font-weight-bold mb-2">
                        {pkg.name}
                      </h3>

                      <p className="text-secondary font-size-13 mb-4" style={{ lineHeight: "1.5" }}>
                        {pkg.subtitle}
                      </p>

                      <div className="d-flex align-items-baseline gap-1 mb-4">
                        <span className="font-monospace font-weight-bold" style={{ fontSize: "40px", color: "#0F172A", lineHeight: 1 }}>
                          ${price}
                        </span>
                        <span className="text-secondary font-size-14 font-weight-medium">
                          / month {isAnnual && <span className="text-success font-size-12">(billed annually)</span>}
                        </span>
                      </div>

                      <div className="font-size-12 font-weight-bold text-uppercase text-dark mb-3" style={{ letterSpacing: "0.5px" }}>
                        What&apos;s Included:
                      </div>

                      <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2 mb-4">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="d-flex align-items-start gap-2 font-size-13 text-secondary">
                            <span className="text-primary font-weight-bold" style={{ color: "#0066FF", flexShrink: 0 }}>✓</span>
                            <span className="text-dark font-weight-medium">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-top">
                      <Link
                        href="/book-consultation"
                        className={`w-100 py-3 px-4 rounded-pill font-size-14 font-weight-bold text-center text-decoration-none d-block transition-all ${pkg.popular ? "sg_btn_primary justify-content-center" : "btn btn-outline-dark"
                          }`}
                      >
                        <span>{pkg.ctaText} →</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AgencyFaqSection />
      <AgencyCtaSection />
    </AgencyLayout>
  );
}

/* =========================================================================
   7. CONTACT PAGE (/contact)
   ========================================================================= */
export function ContactPage() {
  return (
    <AgencyLayout>
      <div className="sg_page_header py-5 position-relative overflow-hidden" style={{ background: "#0A192F" }}>
        <div className="container position-relative py-5 text-center" style={{ zIndex: 2 }}>
          <div className="sg_badge_electric mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="text-white font-weight-bold mb-3" style={{ fontSize: "clamp(32px, 4.5vw, 54px)", lineHeight: 1.15 }}>
            Contact StudioGrowth360
          </h1>
          <p className="text-secondary font-size-17 max-w-750 mx-auto mb-4" style={{ color: "#CBD5E1", lineHeight: 1.6 }}>
            Have a question about our GoHighLevel CRM setup, n8n automations, or lead generation campaigns? Our studio specialists are here to help.
          </p>
        </div>
      </div>

      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row g-4 g-lg-5">
            {/* Contact Details */}
            <div className="col-12 col-lg-5">
              <div className="p-4 p-xl-5 rounded-4 bg-white border shadow-sm h-100">
                <div className="sg_badge_electric mb-3">
                  <span>USA HEADQUARTERS</span>
                </div>
                <h2 className="text-dark font-size-24 font-weight-bold mb-3">
                  Direct Agency Contact
                </h2>
                <p className="text-secondary font-size-14 mb-4" style={{ lineHeight: "1.65" }}>
                  We are based in Illinois and support photography, podcast, yoga, and craft studios across all 50 US states.
                </p>

                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex align-items-start gap-3">
                    <IconContainer size={40} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.15)">
                      <IconMapPin size={20} color="#0066FF" />
                    </IconContainer>
                    <div>
                      <div className="font-size-13 text-secondary font-weight-medium">Office Location</div>
                      <div className="font-size-14 font-weight-bold text-dark">
                        1S280 Summit Ave Unit E2 Suite 1B<br />
                        Oakbrook Terrace, IL 60181
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <IconContainer size={40} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.15)">
                      <IconPhone size={20} color="#0066FF" />
                    </IconContainer>
                    <div>
                      <div className="font-size-13 text-secondary font-weight-medium">Direct Phone</div>
                      <a href="tel:7737579417" className="font-size-14 font-weight-bold text-primary text-decoration-none">
                        (773) 757-9417
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <IconContainer size={40} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.15)">
                      <IconMail size={20} color="#0066FF" />
                    </IconContainer>
                    <div>
                      <div className="font-size-13 text-secondary font-weight-medium">Inquiry Email</div>
                      <a href="mailto:grow@360growthlab.com" className="font-size-14 font-weight-bold text-primary text-decoration-none">
                        grow@360growthlab.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-top">
                  <div className="d-flex flex-column gap-1 font-size-12 text-secondary">
                    <div className="d-flex align-items-center gap-2">
                      <IconClock size={14} color="#64748B" />
                      <span>Business Hours: Monday – Friday, 8:00 AM – 6:00 PM CST</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <IconZap size={14} color="#0066FF" />
                      <span>24/7 Monitoring for Live Studio Automation Pipelines</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="col-12 col-lg-7">
              <div className="rounded-4 bg-white border shadow-sm overflow-hidden">
                <iframe
                  src="https://links.360growthlab.com/widget/form/VIlWqgaF3g08lXt1CNNz"
                  style={{ width: "100%", height: "824px", border: "none", borderRadius: "8px" }}
                  id="inline-VIlWqgaF3g08lXt1CNNz"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Schedule my free consultation call Adnan khan"
                  data-height="824"
                  data-layout-iframe-id="inline-VIlWqgaF3g08lXt1CNNz"
                  data-form-id="VIlWqgaF3g08lXt1CNNz"
                  data-cookie-consent="true"
                  data-cookie-consent-provider="auto"
                  title="Schedule my free consultation call Adnan khan"
                />
                <Script
                  src="https://links.360growthlab.com/js/form_embed.js"
                  strategy="afterInteractive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AgencyCtaSection />
    </AgencyLayout>
  );
}

/* =========================================================================
   8. CONSULTATION PAGE (/book-consultation)
   ========================================================================= */
export function ConsultationPage() {
  return (
    <AgencyLayout>
      <div className="sg_page_header py-5 position-relative overflow-hidden" style={{ background: "#0A192F" }}>
        <div className="container position-relative py-5 text-center" style={{ zIndex: 2 }}>
          <div className="sg_badge_electric mb-3">
            <span>100% FREE · NO SALES PRESSURE</span>
          </div>
          <h1 className="text-white font-weight-bold mb-3" style={{ fontSize: "clamp(32px, 4.5vw, 54px)", lineHeight: 1.15 }}>
            Book a Free 30-Minute Studio Growth Consultation
          </h1>
          <p className="text-secondary font-size-17 max-w-750 mx-auto mb-0" style={{ color: "#CBD5E1", lineHeight: 1.6 }}>
            Meet directly with a studio automation architect. We&apos;ll audit your current lead generation, booking calendar, and client retention setup, then outline an exact blueprint to scale.
          </p>
        </div>
      </div>

      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row g-4 g-lg-5">
            {/* Call Agenda */}
            <div className="col-12 col-lg-5">
              <div className="p-4 p-xl-5 rounded-4 bg-white border shadow-sm h-100">
                <div className="sg_badge_electric mb-3">
                  <span>WHAT WE&apos;LL COVER ON THE CALL</span>
                </div>
                <h2 className="text-dark font-size-22 font-weight-bold mb-3">
                  A Practical Strategy Session Focused on Your Numbers
                </h2>
                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex align-items-start gap-3">
                    <span className="badge rounded-circle bg-primary text-white p-2 font-size-12">1</span>
                    <div>
                      <div className="text-dark font-size-14 font-weight-bold">Current Tool Stack Audit</div>
                      <div className="text-secondary font-size-13">Inspect your booking forms, calendars, and spreadsheets for friction and data leaks.</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <span className="badge rounded-circle bg-primary text-white p-2 font-size-12">2</span>
                    <div>
                      <div className="text-dark font-size-14 font-weight-bold">Lead Generation Analysis</div>
                      <div className="text-secondary font-size-13">Review your local Google Search visibility, social ads, and inbound lead response speed.</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <span className="badge rounded-circle bg-primary text-white p-2 font-size-12">3</span>
                    <div>
                      <div className="text-dark font-size-14 font-weight-bold">Custom n8n &amp; CRM Architecture</div>
                      <div className="text-secondary font-size-13">Map out an exact automation flow to save 20+ hours of manual weekly admin work.</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <span className="badge rounded-circle bg-primary text-white p-2 font-size-12">4</span>
                    <div>
                      <div className="text-dark font-size-14 font-weight-bold">Clear ROI &amp; Revenue Projection</div>
                      <div className="text-secondary font-size-13">Calculate your exact projected return on investment before spending a single dollar.</div>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-3 border bg-light text-secondary font-size-12 d-flex align-items-center gap-2">
                  <IconLock size={15} color="#64748B" className="flex-shrink-0" />
                  <span>Zero commitment required. If you choose not to work with us, the roadmap and architectural diagram are yours to keep.</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="col-12 col-lg-7">
              <div className="rounded-4 bg-white border shadow-sm overflow-hidden">
                <iframe
                  src="https://links.360growthlab.com/widget/form/qKMHvYMB0yNp0pyVjytp"
                  style={{ width: "100%", height: "824px", border: "none", borderRadius: "8px" }}
                  id="inline-qKMHvYMB0yNp0pyVjytp"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Schedule my free consultation call Adnan khan - Book Free Consultant Page"
                  data-height="824"
                  data-layout-iframe-id="inline-qKMHvYMB0yNp0pyVjytp"
                  data-form-id="qKMHvYMB0yNp0pyVjytp"
                  data-cookie-consent="true"
                  data-cookie-consent-provider="auto"
                  title="Schedule my free consultation call Adnan khan - Book Free Consultant Page"
                />
                <Script
                  src="https://links.360growthlab.com/js/form_embed.js"
                  strategy="afterInteractive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AgencyTrustBar />
      <AgencyCtaSection />
    </AgencyLayout>
  );
}
