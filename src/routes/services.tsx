import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "./index";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Snowflake, Flame, Wind, Sparkles, Building2, Siren, Wrench, HardHat, ArrowRight } from "lucide-react";

const services = [
  { icon: Snowflake, title: "AC Installation", desc: "High-efficiency cooling systems with smart thermostats and 10-year warranties." },
  { icon: Wrench, title: "AC Repair", desc: "Same-day diagnostics and repair for every major brand." },
  { icon: Flame, title: "Heating Installation", desc: "Quiet, energy-efficient heating tailored to your home." },
  { icon: HardHat, title: "Heating Repair", desc: "Fast restoration of comfort with a satisfaction guarantee." },
  { icon: Flame, title: "Furnace Services", desc: "Tune-ups, repairs, and safe replacements for gas, electric and oil furnaces." },
  { icon: Wind, title: "Duct Cleaning", desc: "Deep-clean ductwork to improve airflow and remove allergens." },
  { icon: Sparkles, title: "Indoor Air Quality", desc: "UV purifiers, HEPA filtration, and humidity control." },
  { icon: Building2, title: "Commercial HVAC", desc: "RTUs, split systems, and preventive maintenance plans." },
  { icon: Siren, title: "Emergency HVAC", desc: "24/7 response with no overtime fees." },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "HVAC Services — AC, Heating, Furnace & Air Quality | Keller Heating & Cooling" },
      { name: "description", content: "Complete HVAC services: AC installation & repair, heating, furnace, duct cleaning, indoor air quality and 24/7 emergency service." },
      { property: "og:title", content: "HVAC Services | Keller Heating And Cooling LLC" }, { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Services" title="Complete HVAC Solutions, Done Right." sub="Every service backed by NATE-certified technicians, flat-rate pricing, and a 100% satisfaction guarantee." />
      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(s => (
              <Card key={s.title} className="hover-lift p-7 rounded-2xl border-border/60">
                <div className="w-12 h-12 rounded-xl gradient-primary text-white grid place-items-center shadow-glow"><s.icon className="w-6 h-6" /></div>
                <h2 className="mt-5 text-xl font-bold text-primary">{s.title}</h2>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
                <Button asChild variant="ghost" className="mt-4 px-0 text-teal hover:text-teal-deep">
                  <Link to="/contact">Get a quote <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  ),
});
