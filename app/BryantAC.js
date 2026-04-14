"use client";

import { useState, useEffect, useRef } from "react";

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(20px)", transition: `all 0.7s ease ${delay}s` }}>{children}</div>;
}

const PHONE = "(512) 328-3268";

const SERVICES = [
  { title: "Electrical", items: ["Panel upgrades & replacements", "Wiring & rewiring", "Outlet & switch installation", "Ceiling fan installation", "Lighting design & install", "Generator installation", "EV charger installation", "Code compliance & inspections"] },
  { title: "Air Conditioning", items: ["AC system installation", "AC repair & diagnostics", "Ductless mini-split systems", "Thermostat installation", "Seasonal tune-ups", "Refrigerant recharge", "Duct cleaning & sealing", "Emergency AC service"] },
  { title: "Heating", items: ["Furnace installation", "Heat pump systems", "Heating system repair", "Duct installation & repair", "System maintenance plans", "Emergency heating repair"] },
];

const REVIEWS = [
  { name: "Caitlin M.", text: "I worked with Zach to get a couple breakers replaced and he was able to come out same day. He took the time to explain what was wrong and made sure he was getting me the best price possible. Trustworthy and reliable.", stars: 5 },
  { name: "Bryan H.", text: "Bryant Electric Service is awesome! Brooke is wonderful with customer service, scheduling and details. Nick came out, assessed the situation, and had everything fixed quickly.", stars: 5 },
  { name: "A.E. Davis", text: "When I needed complete, all-new wiring for my art studio, a well-equipped electrician from Bryant showed up in a very timely manner. Exceptional quality work.", stars: 5 },
  { name: "Keith B.", text: "I've been using Zack for several years now. He&apos;s done everything from installing ceiling fans to full panel upgrades. Always fair, always professional.", stars: 5 },
];

const REASONS = [
  { number: "40+", label: "Years serving Austin", detail: "Family owned and operated since 1982." },
  { number: "24/7", label: "Emergency service", detail: "Electrical emergencies don&apos;t wait. Neither do we." },
  { number: "100%", label: "Licensed & insured", detail: "Every technician is background-checked and certified." },
  { number: "0", label: "Hidden fees", detail: "Upfront pricing on every job. No surprises." },
];

export default function BryantAC() {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [hoveredReason, setHoveredReason] = useState(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const red = "#C41E2A";
  const redDark = "#A01820";
  const navy = "#1B2A4A";
  const navyLight = "#243656";
  const dark = "#111820";
  const gray = "#6B7280";
  const light = "#F7F7F5";
  const serif = "'Instrument Serif', Georgia, serif";
  const sans = "'Figtree', sans-serif";

  return (
    <div style={{ fontFamily: sans, background: "#fff", color: dark, minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(196,30,42,0.15); }
        a { text-decoration: none; }
      `}</style>

      {/* ── EMERGENCY BAR ── */}
      <div style={{ background: red, color: "#fff", textAlign: "center", padding: "11px 16px", fontSize: "13px", fontWeight: 600, letterSpacing: "0.5px", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff", display: "inline-block", animation: "pulse 2s infinite" }} />
        24/7 Emergency Service Available
        <span style={{ margin: "0 8px", opacity: 0.4 }}>|</span>
        <a href={`tel:${PHONE}`} style={{ color: "#fff", fontWeight: 700, borderBottom: "1px solid rgba(255,255,255,0.4)" }}>{PHONE}</a>
        <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
      </div>

      {/* ── NAV ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled ? "#eee" : "#eee"}`,
        height: "70px", display: "flex", alignItems: "center", justifyContent: "center",
        padding: "0 40px", transition: "all 0.3s ease",
      }}>
        <div style={{ maxWidth: "1140px", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="/bryant-logo.png" alt="Bryant AC & Electric" style={{ height: "44px", objectFit: "contain" }} />
          </a>
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            {["Services", "About", "Reviews"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{ color: gray, fontSize: "14px", fontWeight: 500, transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = navy} onMouseLeave={e => e.target.style.color = gray}>{l}</a>
            ))}
            <a href={`tel:${PHONE}`} style={{ background: navy, color: "#fff", padding: "10px 24px", borderRadius: "6px", fontSize: "14px", fontWeight: 600, transition: "all 0.2s" }}
              onMouseEnter={e => e.target.style.background = red} onMouseLeave={e => e.target.style.background = navy}>
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: navy, position: "relative", overflow: "hidden" }}>
        {/* Diagonal accent */}
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "45%", background: `linear-gradient(135deg, transparent 0%, rgba(196,30,42,0.08) 100%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: "-5%", bottom: "-10%", width: "400px", height: "400px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.04)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: "5%", bottom: "0%", width: "250px", height: "250px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.03)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "100px 40px 120px", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "640px" }}>
            <Reveal>
              <div style={{ display: "inline-block", background: "rgba(196,30,42,0.15)", border: "1px solid rgba(196,30,42,0.25)", padding: "6px 16px", borderRadius: "4px", marginBottom: "24px" }}>
                <span style={{ color: red, fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase" }}>Family Owned Since 1982</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 style={{ fontFamily: serif, fontSize: "clamp(42px, 5.5vw, 68px)", fontWeight: 400, lineHeight: 1.08, color: "#fff", marginBottom: "24px" }}>
                Keep Austin<br />
                <span style={{ color: red }}>wired.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p style={{ fontSize: "18px", lineHeight: 1.75, color: "rgba(255,255,255,0.55)", maxWidth: "480px", marginBottom: "36px" }}>
                Over 40 years of trusted electrical, AC, and heating service for Austin homeowners and businesses. Licensed pros, upfront pricing, and work we stand behind.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a href="#contact" style={{ background: red, color: "#fff", padding: "16px 36px", fontSize: "15px", fontWeight: 600, borderRadius: "6px", transition: "all 0.3s", boxShadow: "0 4px 20px rgba(196,30,42,0.3)" }}
                  onMouseEnter={e => { e.target.style.background = redDark; e.target.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.target.style.background = red; e.target.style.transform = "none"; }}>
                  Schedule Service
                </a>
                <a href={`tel:${PHONE}`} style={{ color: "#fff", padding: "16px 36px", fontSize: "15px", fontWeight: 600, border: "1.5px solid rgba(255,255,255,0.15)", borderRadius: "6px", transition: "all 0.3s" }}
                  onMouseEnter={e => e.target.style.borderColor = "rgba(255,255,255,0.4)"} onMouseLeave={e => e.target.style.borderColor = "rgba(255,255,255,0.15)"}>
                  {PHONE}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div style={{ display: "flex", gap: "28px", marginTop: "48px" }}>
                {["Licensed & Insured", "Upfront Pricing", "Same-Day Service"].map((item, i) => (
                  <span key={i} style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: red }} />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHY BRYANT ── */}
      <section style={{ background: light, borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {REASONS.map((r, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  onMouseEnter={() => setHoveredReason(i)}
                  onMouseLeave={() => setHoveredReason(null)}
                  style={{
                    padding: "48px 28px",
                    borderRight: i < 3 ? "1px solid #e5e5e5" : "none",
                    cursor: "default",
                    transition: "all 0.3s ease",
                    background: hoveredReason === i ? "#fff" : "transparent",
                  }}
                >
                  <p style={{ fontFamily: serif, fontSize: "40px", color: hoveredReason === i ? red : navy, transition: "color 0.3s", marginBottom: "4px" }}>{r.number}</p>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: dark, marginBottom: "8px" }}>{r.label}</p>
                  <p style={{ fontSize: "13px", lineHeight: 1.6, color: gray }}>{r.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ maxWidth: "1140px", margin: "0 auto", padding: "100px 40px" }}>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px" }}>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: red, marginBottom: "12px" }}>Services</p>
              <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: navy }}>What we do</h2>
            </div>
            <a href={`tel:${PHONE}`} style={{ fontSize: "14px", fontWeight: 600, color: navy, borderBottom: `2px solid ${red}`, paddingBottom: "4px" }}>
              Request a quote
            </a>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "0" }}>
          {/* Tabs */}
          <div style={{ borderRight: "1px solid #eee" }}>
            {SERVICES.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "20px 24px",
                  background: activeService === i ? light : "transparent",
                  border: "none",
                  borderLeft: `3px solid ${activeService === i ? red : "transparent"}`,
                  cursor: "pointer",
                  fontFamily: sans,
                  fontSize: "16px",
                  fontWeight: activeService === i ? 700 : 500,
                  color: activeService === i ? navy : gray,
                  transition: "all 0.3s ease",
                }}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ padding: "20px 0 20px 48px" }}>
            <Reveal key={activeService}>
              <h3 style={{ fontSize: "24px", fontWeight: 700, color: navy, marginBottom: "24px" }}>{SERVICES[activeService].title} Services</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
                {SERVICES[activeService].items.map((item, i) => (
                  <div key={i} style={{
                    padding: "16px 0",
                    borderBottom: "1px solid #f0f0f0",
                    display: "flex", alignItems: "center", gap: "12px",
                  }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: red, flexShrink: 0 }} />
                    <span style={{ fontSize: "15px", color: dark }}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" style={{
                display: "inline-block", marginTop: "32px",
                background: navy, color: "#fff", padding: "14px 32px",
                fontSize: "14px", fontWeight: 600, borderRadius: "6px",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => e.target.style.background = red}
                onMouseLeave={e => e.target.style.background = navy}>
                Schedule {SERVICES[activeService].title} Service
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: navy }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "100px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <Reveal>
            <div style={{
              aspectRatio: "4/3", borderRadius: "12px",
              background: `linear-gradient(135deg, ${navyLight} 0%, ${dark} 100%)`,
              position: "relative", overflow: "hidden",
              display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "24px", padding: "36px",
            }}>
              <img src="/bryant-logo.png" alt="Bryant AC & Electric" style={{ width: "200px", objectFit: "contain" }} />
              <div style={{ textAlign: "center" }}>
                <p style={{ fontFamily: serif, fontSize: "56px", color: red, marginBottom: "8px" }}>1982</p>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", letterSpacing: "1px", textTransform: "uppercase" }}>Serving Austin families</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: red, marginBottom: "16px" }}>About Us</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 style={{ fontFamily: serif, fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: "24px" }}>
                Three generations. One standard.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p style={{ fontSize: "16px", lineHeight: 1.85, color: "rgba(255,255,255,0.5)", marginBottom: "20px" }}>
                Bryant AC & Electric has been keeping Austin homes safe and comfortable since 1982. What started as a one-truck electrical shop has grown into a full-service HVAC and electrical company, but the approach has never changed: show up on time, diagnose honestly, price fairly, and do the job right.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p style={{ fontSize: "16px", lineHeight: 1.85, color: "rgba(255,255,255,0.5)" }}>
                Every technician on our team is licensed, background-checked, and trained to treat your home like their own. We are not a franchise and we are not a call center. When you call Bryant, you get Bryant.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" style={{ maxWidth: "1140px", margin: "0 auto", padding: "100px 40px" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: red, marginBottom: "12px" }}>Reviews</p>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 400, color: navy, marginBottom: "8px" }}>What Austin says about us</h2>
            <p style={{ fontSize: "15px", color: gray }}>5.0 stars across 50+ Google reviews</p>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
          {REVIEWS.map((r, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{
                padding: "36px", background: light, borderRadius: "12px",
                border: "1px solid #eee",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(196,30,42,0.2)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.04)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#eee"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
                  {Array(r.stars).fill(0).map((_, j) => (
                    <span key={j} style={{ color: red, fontSize: "14px" }}>&#9733;</span>
                  ))}
                </div>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: dark, marginBottom: "20px" }}>
                  "{r.text}"
                </p>
                <p style={{ fontSize: "14px", fontWeight: 700, color: navy }}>{r.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section style={{ background: light, borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "64px 40px", textAlign: "center" }}>
          <Reveal>
            <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: red, marginBottom: "12px" }}>Service Area</p>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 400, color: navy, marginBottom: "28px" }}>Proudly serving greater Austin</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", maxWidth: "700px", margin: "0 auto" }}>
              {["Downtown Austin", "South Austin", "North Austin", "East Austin", "West Lake Hills", "Lakeway", "Cedar Park", "Round Rock", "Pflugerville", "Bee Cave", "Dripping Springs", "Kyle", "Buda", "Georgetown"].map((area, i) => (
                <span key={i} style={{ background: "#fff", border: "1px solid #e5e5e5", color: dark, padding: "8px 18px", borderRadius: "6px", fontSize: "13px", fontWeight: 500 }}>
                  {area}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA / CONTACT ── */}
      <section id="contact" style={{ background: navy }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "100px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <Reveal>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: red, marginBottom: "16px" }}>Get in Touch</p>
              <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: "#fff", lineHeight: 1.15, marginBottom: "24px" }}>
                Need an electrician<br />or HVAC tech?
              </h2>
              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", marginBottom: "36px" }}>
                Call us directly or fill out the form. We respond within 30 minutes during business hours and offer same-day emergency service.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href={`tel:${PHONE}`} style={{
                  background: red, color: "#fff", padding: "16px 36px",
                  fontSize: "16px", fontWeight: 700, borderRadius: "6px",
                  boxShadow: "0 4px 20px rgba(196,30,42,0.3)",
                  transition: "all 0.3s",
                }}>
                  {PHONE}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {[
                { label: "Phone", value: PHONE },
                { label: "Hours", value: "Mon-Fri: 7am - 6pm\nEmergency: 24/7" },
                { label: "Service Area", value: "Austin & surrounding areas\nWithin 30 miles of downtown" },
                { label: "License", value: "TECL #22809\nTACLB #00042137E" },
              ].map((item, i) => (
                <div key={i} style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none", paddingBottom: i < 3 ? "24px" : 0 }}>
                  <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "8px" }}>{item.label}</p>
                  {item.value.split("\n").map((line, j) => (
                    <p key={j} style={{ fontSize: "16px", color: "#fff", lineHeight: 1.6 }}>{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: dark, padding: "48px 40px 32px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="/bryant-logo.png" alt="Bryant AC & Electric" style={{ height: "36px", objectFit: "contain" }} />
          </div>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
            &copy; 2026 Bryant AC & Electric. Austin, TX. All rights reserved.
          </p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
            Website by <span style={{ color: red, fontWeight: 600 }}>Resite</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
