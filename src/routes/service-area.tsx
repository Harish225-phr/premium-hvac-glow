import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { MapPin } from "lucide-react";

const cities = ["Pittsburgh","Aurora","Lakewood","Centennial","Boulder","Littleton","Arvada","Westminster","Thornton","Englewood","Wheat Ridge","Golden","Broomfield","Commerce City","Northglenn","Parker","Highlands Ranch","Castle Rock","Erie","Louisville"];

export const Route = createFileRoute("/service-area")({
  head: () => ({
    meta: [
      { title: "HVAC Service Area — Pittsburgh Metro & Greater Pittsburgh | Keller Heating & Cooling" },
      { name: "description", content: "Keller Heating And Cooling LLC serves 30+ cities across the Greater Pittsburgh and Pennsylvania Greater Pittsburgh. Same-day service available." },
      { property: "og:title", content: "HVAC Service Area | Keller Heating & Cooling" }, { property: "og:url", content: "/service-area" },
    ],
    links: [{ rel: "canonical", href: "/service-area" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Service Area" title="Serving the Entire Pittsburgh Metro" sub="Same-day HVAC service across 30+ Greater Pittsburgh cities and neighborhoods." />
      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {cities.map(c=> (
              <div key={c} className="flex items-center gap-2 px-4 py-3 rounded-lg bg-surface-soft hover:bg-teal/10 text-sm font-medium text-primary">
                <MapPin className="w-4 h-4 text-teal" /> {c}, PA
              </div>
            ))}
          </div>
          <div className="rounded-3xl overflow-hidden shadow-elegant aspect-square">
            <iframe title="Service map" src="https://www.google.com/maps?q=Pittsburgh,PA&output=embed" className="w-full h-full border-0" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  ),
});
