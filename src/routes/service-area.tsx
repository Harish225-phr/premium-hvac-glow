import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { MapPin } from "lucide-react";

const cities = ["Denver","Aurora","Lakewood","Centennial","Boulder","Littleton","Arvada","Westminster","Thornton","Englewood","Wheat Ridge","Golden","Broomfield","Commerce City","Northglenn","Parker","Highlands Ranch","Castle Rock","Erie","Louisville"];

export const Route = createFileRoute("/service-area")({
  head: () => ({
    meta: [
      { title: "HVAC Service Area — Denver Metro & Front Range | NorthAir" },
      { name: "description", content: "NorthAir HVAC serves 30+ cities across the Denver metro and Colorado Front Range. Same-day service available." },
      { property: "og:title", content: "HVAC Service Area | NorthAir" }, { property: "og:url", content: "/service-area" },
    ],
    links: [{ rel: "canonical", href: "/service-area" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Service Area" title="Serving the Entire Denver Metro" sub="Same-day HVAC service across 30+ Front Range cities and neighborhoods." />
      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {cities.map(c=> (
              <div key={c} className="flex items-center gap-2 px-4 py-3 rounded-lg bg-surface-soft hover:bg-teal/10 text-sm font-medium text-primary">
                <MapPin className="w-4 h-4 text-teal" /> {c}, CO
              </div>
            ))}
          </div>
          <div className="rounded-3xl overflow-hidden shadow-elegant aspect-square">
            <iframe title="Service map" src="https://www.openstreetmap.org/export/embed.html?bbox=-105.30%2C39.55%2C-104.70%2C39.90&layer=mapnik" className="w-full h-full border-0" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  ),
});
