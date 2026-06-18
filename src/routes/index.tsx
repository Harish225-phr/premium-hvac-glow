import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, Clock, BadgeCheck, Wrench, Snowflake, Flame, Wind, Sparkles, Building2, Siren, ArrowRight, Star, CheckCircle2, Calendar, ClipboardCheck, HardHat, ThumbsUp, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import heroImg from "@/assets/hero-hvac.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Keller Heating And Cooling LLC — Heating, Cooling & Air Quality Experts" },
      { name: "description", content: "Premium HVAC contractor offering AC repair, heating installation, furnace service & indoor air quality. 24/7 emergency service. Free estimates. Licensed & insured." },
      { property: "og:title", content: "Keller Heating And Cooling LLC — Heating & Cooling Experts" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a }})),
      }),
    }],
  }),
  component: HomePage,
});

const services = [
  { icon: Snowflake, title: "AC Installation", desc: "High-efficiency cooling systems sized and installed for maximum comfort and lower energy bills." },
  { icon: Wrench, title: "AC Repair", desc: "Fast, accurate diagnostics and same-day repairs on every major brand of air conditioner." },
  { icon: Flame, title: "Heating Installation", desc: "Modern, ultra-quiet heating systems with smart thermostats and pro-grade workmanship." },
  { icon: HardHat, title: "Heating Repair", desc: "Restore warmth quickly with experienced technicians and a 100% satisfaction guarantee." },
  { icon: Flame, title: "Furnace Services", desc: "Tune-ups, repairs, and replacements that keep your furnace running safely all winter." },
  { icon: Wind, title: "Duct Cleaning", desc: "Deep-clean ductwork to remove dust, allergens and contaminants for healthier air." },
  { icon: Sparkles, title: "Indoor Air Quality", desc: "UV purifiers, HEPA filtration and humidity control engineered for your home." },
  { icon: Building2, title: "Commercial HVAC", desc: "Rooftop units, RTU service, and preventative maintenance plans for businesses." },
  { icon: Siren, title: "Emergency HVAC", desc: "24/7 emergency response with no overtime fees on nights, weekends or holidays." },
];

const why = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully bonded with liability and workers comp coverage." },
  { icon: BadgeCheck, title: "Certified Technicians", desc: "NATE-certified pros with 10+ years average experience." },
  { icon: Clock, title: "Same-Day Service", desc: "Book by noon and we'll be there before sundown." },
  { icon: Siren, title: "24/7 Emergency Support", desc: "Real humans answering the phone every hour of every day." },
  { icon: ThumbsUp, title: "Upfront, Fair Pricing", desc: "Flat rates approved before any work begins." },
  { icon: ShieldCheck, title: "Warranty Protection", desc: "10-year parts & labor on qualifying installations." },
];

const process = [
  { icon: Calendar, title: "Schedule Service", desc: "Book online or by phone in under 60 seconds." },
  { icon: ClipboardCheck, title: "Expert Inspection", desc: "We assess, photograph and explain every finding." },
  { icon: Wrench, title: "Repair or Install", desc: "Pro-grade work done right the first time." },
  { icon: ShieldCheck, title: "Quality Check", desc: "Performance test + satisfaction guarantee." },
];

const reviews = [
  { name: "Sarah M.", city: "Pittsburgh, PA", text: "Our AC died during a heatwave. They had a tech here in 90 minutes and a new system running by sundown. Truly premium service.", stars: 5 },
  { name: "Marcus L.", city: "Aurora, PA", text: "Replaced our furnace and rebalanced ducts. House finally heats evenly. Honest pricing and zero pressure.", stars: 5 },
  { name: "Priya R.", city: "Lakewood, PA", text: "Annual maintenance plan has saved us thousands. The team is professional, on-time, every visit.", stars: 5 },
];

const cities = ["Pittsburgh", "Aurora", "Lakewood", "Centennial", "Boulder", "Littleton", "Arvada", "Westminster", "Thornton", "Englewood"];

const faqs = [
  { q: "Do you offer 24/7 emergency HVAC service?", a: "Yes. Our emergency line is staffed around the clock with no overtime fees on evenings, weekends or holidays." },
  { q: "Are your technicians licensed and insured?", a: "Every technician is NATE-certified, background checked, and we carry full liability and workers compensation insurance." },
  { q: "Do you provide free estimates?", a: "Yes — all replacement and installation estimates are 100% free, with no obligation." },
  { q: "What financing options are available?", a: "We offer 0% APR for 12 months and low-monthly-payment plans starting at $69/mo (on approved credit)." },
  { q: "How quickly can you respond?", a: "Same-day service when booked before noon, and most emergency calls are on-site within 2 hours." },
];

function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <WhyChoose />
      <Process />
      <Reviews />
      <ServiceAreas />
      <Financing />
      <BeforeAfter />
      <FAQ />
      <CTABanner />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="HVAC technician servicing a modern air conditioner" className="w-full h-full object-cover" width={1920} height={1080} fetchPriority="high" />
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>
      <div className="relative container-px mx-auto max-w-7xl pt-20 pb-28 md:pt-28 md:pb-36 text-white">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> 24/7 Emergency HVAC Service
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Comfort You Can Feel. <span className="text-gradient">Service You Can Trust.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
            Pittsburgh's premium heating, cooling & air quality experts. Same-day service, upfront pricing, and a 100% satisfaction guarantee — backed by 1,800+ five-star reviews.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="cta" size="xl">
              <a href="tel:+14126282207"><Phone className="w-5 h-5" /> Call Now: (412) 628-2207</a>
            </Button>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Get Free Estimate <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
            {[["12K+","Homes Served"],["4.9★","1,800+ Reviews"],["24/7","Emergency"]].map(([n,l])=> (
              <div key={l} className="glass-dark rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold font-display">{n}</div>
                <div className="text-xs md:text-sm text-white/70 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  const badges = ["NATE Certified", "BBB A+ Rated", "Carrier Factory Authorized", "Trane Comfort Specialist", "ENERGY STAR Partner", "Google 4.9★"];
  return (
    <section className="py-12 border-b border-border bg-surface-soft">
      <div className="container-px mx-auto max-w-7xl">
        <p className="text-center text-sm font-medium tracking-widest uppercase text-muted-foreground">Trusted, Certified & Award-Winning</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map(b => (
            <div key={b} className="glass-card rounded-xl px-4 py-4 text-center text-sm font-semibold text-primary hover-lift">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHead eyebrow="Our Services" title="Complete HVAC Solutions Under One Roof" sub="From emergency repairs to full system installs, our certified technicians handle every heating, cooling and air quality need with precision." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(s => (
            <Card key={s.title} className="hover-lift p-7 border-border/60 rounded-2xl">
              <div className="w-12 h-12 rounded-xl gradient-primary text-white grid place-items-center shadow-glow">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
              <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-teal font-semibold text-sm group">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section bg-surface-soft">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHead eyebrow="Why Choose Keller Heating & Cooling" title="The Premium Standard in HVAC Service" sub="What you get with every single visit — no exceptions." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {why.map(w => (
            <div key={w.title} className="glass-card rounded-2xl p-6 hover-lift">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-teal/10 text-teal grid place-items-center"><w.icon className="w-5 h-5" /></span>
                <h3 className="font-bold text-lg text-primary">{w.title}</h3>
              </div>
              <p className="mt-3 text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHead eyebrow="Our Process" title="Service In Four Simple Steps" sub="Transparent, fast and stress-free — from your first call to final quality check." />
        <div className="mt-14 relative grid gap-8 md:grid-cols-4">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 gradient-primary opacity-30" />
          {process.map((p, i) => (
            <div key={p.title} className="relative text-center animate-fade-up" style={{animationDelay:`${i*100}ms`}}>
              <div className="mx-auto w-16 h-16 rounded-2xl gradient-primary text-white grid place-items-center shadow-elegant relative z-10">
                <p.icon className="w-7 h-7" />
              </div>
              <div className="mt-2 text-xs font-bold text-teal tracking-widest">STEP {i+1}</div>
              <h3 className="mt-1 text-lg font-bold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section bg-surface-soft">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHead eyebrow="Reviews" title="Loved by 12,000+ Homeowners" sub="Real reviews from real customers across the Greater Pittsburgh." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map(r => (
            <Card key={r.name} className="p-7 rounded-2xl border-border/60 hover-lift">
              <div className="flex gap-1 text-accent">
                {[...Array(r.stars)].map((_,i)=><Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="mt-4 text-foreground/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-bold text-primary">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.city}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section className="section">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHead align="left" eyebrow="Service Area" title="Proudly Serving the Pittsburgh Metro" sub="Same-day service in 30+ neighborhoods across Pennsylvania's Greater Pittsburgh." />
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {cities.map(c => (
              <Link key={c} to="/service-area" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-soft hover:bg-teal/10 text-sm font-medium text-primary transition-colors">
                <MapPin className="w-4 h-4 text-teal" /> {c}
              </Link>
            ))}
          </div>
          <Button asChild variant="default" className="mt-8">
            <Link to="/service-area">View all service areas <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/3]">
          <iframe
            title="Service area map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-105.30%2C39.55%2C-104.70%2C39.90&layer=mapnik"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Financing() {
  const plans = [
    { name: "Basic Comfort", price: "$69", per: "/mo", features: ["AC or furnace repair financing", "12 mo · 0% APR", "Approved in minutes"], featured: false },
    { name: "Premium Install", price: "$129", per: "/mo", features: ["Full HVAC system replacement", "60 mo low payment", "10-yr parts & labor warranty"], featured: true },
    { name: "Maintenance Plan", price: "$19", per: "/mo", features: ["2 tune-ups per year", "15% off all repairs", "Priority dispatch"], featured: false },
  ];
  return (
    <section className="section bg-surface-soft">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHead eyebrow="Financing" title="Affordable Plans for Every Budget" sub="0% APR financing and flexible monthly payments make premium HVAC easy." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map(p => (
            <Card key={p.name} className={`p-8 rounded-2xl border-2 ${p.featured ? "border-teal shadow-elegant relative gradient-hero text-white" : "border-border/60 bg-card hover-lift"}`}>
              {p.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold gradient-accent text-accent-foreground">MOST POPULAR</span>}
              <h3 className={`text-xl font-bold ${p.featured ? "text-white" : "text-primary"}`}>{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold font-display">{p.price}</span>
                <span className={p.featured ? "text-white/70" : "text-muted-foreground"}>{p.per}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map(f => (
                  <li key={f} className="flex gap-2 text-sm"><CheckCircle2 className={`w-5 h-5 shrink-0 ${p.featured ? "text-accent" : "text-teal"}`} /> {f}</li>
                ))}
              </ul>
              <Button asChild variant={p.featured ? "cta" : "default"} className="mt-8 w-full">
                <Link to="/financing">Apply Now</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <section className="section">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHead eyebrow="Before & After" title="Real Results From Real Jobs" sub="Drag the slider to see the difference our team delivers." />
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-3xl shadow-elegant select-none">
            <img src={afterImg} alt="After HVAC service" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 overflow-hidden" style={{clipPath:`inset(0 ${100-pos}% 0 0)`}}>
              <img src={beforeImg} alt="Before HVAC service" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute top-0 bottom-0 w-1 bg-white shadow-elegant" style={{left:`${pos}%`}}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white grid place-items-center shadow-elegant">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </div>
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-semibold">BEFORE</span>
            <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-teal text-white text-xs font-semibold">AFTER</span>
            <input type="range" min={0} max={100} value={pos} onChange={e=>setPos(+e.target.value)} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section bg-surface-soft">
      <div className="container-px mx-auto max-w-4xl">
        <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" sub="Quick answers to the questions we hear most." />
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`f${i}`} className="bg-card mb-3 px-6 rounded-xl border border-border/60">
              <AccordionTrigger className="text-left font-semibold text-primary py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="section">
      <div className="container-px mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl gradient-hero text-white p-10 md:p-16 text-center shadow-elegant">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-teal/30 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold">Need HVAC Service Today?</h2>
            <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">Our emergency techs are standing by 24/7. No overtime fees. No surprises.</p>
            <Button asChild variant="cta" size="xl" className="mt-8">
              <a href="tel:+14126282207"><Phone className="w-5 h-5" /> Call (412) 628-2207 Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section bg-surface-soft" id="contact">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12">
        <div>
          <SectionHead align="left" eyebrow="Get In Touch" title="Request a Free Estimate" sub="Tell us about your project and we'll get back to you within 30 minutes during business hours." />
          <div className="mt-8 space-y-5">
            <InfoRow icon={Phone} label="Phone" value="(412) 628-2207" href="tel:+14126282207" />
            <InfoRow icon={MapPin} label="Address" value="1450 Industrial Pkwy, Pittsburgh PA 15201" />
            <InfoRow icon={Clock} label="Business Hours" value="Mon–Sun · 24/7 Emergency Service" />
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}

function LeadForm() {
  const [sent, setSent] = useState(false);
  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="glass-card rounded-3xl p-8 space-y-4">
      <h3 className="text-xl font-bold text-primary">Free Estimate</h3>
      <Input required placeholder="Full name" />
      <Input required type="tel" placeholder="Phone number" />
      <Input required type="email" placeholder="Email address" />
      <Input placeholder="Service needed (AC, heating, etc.)" />
      <Textarea placeholder="Tell us about your project" rows={4} />
      <Button type="submit" variant="cta" size="lg" className="w-full">
        {sent ? "Thanks — we'll be in touch!" : "Get My Free Estimate"}
      </Button>
      <p className="text-xs text-muted-foreground text-center">No spam. We respond within 30 minutes during business hours.</p>
    </form>
  );
}

function InfoRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const Inner = (
    <div className="flex items-start gap-4">
      <span className="w-11 h-11 rounded-xl gradient-primary text-white grid place-items-center shadow-glow shrink-0"><Icon className="w-5 h-5" /></span>
      <div className="min-w-0">
        <div className="text-sm text-muted-foreground">{label}</div>
        <div className="font-semibold text-primary truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{Inner}</a> : Inner;
}

export function SectionHead({ eyebrow, title, sub, align="center" }: { eyebrow: string; title: string; sub?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}>
      <span className="inline-block px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-bold tracking-widest uppercase">{eyebrow}</span>
      <h2 className="mt-4 text-3xl md:text-5xl font-bold text-primary">{title}</h2>
      {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}
