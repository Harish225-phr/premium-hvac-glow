import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { MapPin } from "lucide-react";

const cities = ["Pittsburgh","Allegheny County","Beaver County","Washington County","Mt. Lebanon","Bethel Park","Monroeville","Cranberry Township","Wexford","Moon Township","McCandless","Ross Township","Shaler","Penn Hills","Plum","Upper St. Clair","Robinson","South Hills","North Hills","Nearby Areas"];

export const Route = createFileRoute("/service-area")({
  head: () => ({
    meta: [
      { title: "HVAC Service Area — Pittsburgh & Surrounding Areas | Keller Heating & Cooling" },
      { name: "description", content: "Keller Heating And Cooling LLC serves 30+ cities across the Greater Pittsburgh region. Same-day service available." },
      { property: "og:title", content: "HVAC Service Area | Keller Heating & Cooling" }, { property: "og:url", content: "/service-area" },
    ],
    links: [{ rel: "canonical", href: "/service-area" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Service Area" title="Serving the Greater Pittsburgh Area" sub="Reliable HVAC service across Pittsburgh, Allegheny County, Beaver County, Washington County and nearby areas." />
      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {cities.map(c=> (
              <div key={c} className="flex items-center gap-2 px-4 py-3 rounded-lg bg-surface-soft hover:bg-teal/10 text-sm font-medium text-primary">
                <MapPin className="w-4 h-4 text-teal" /> {c}, PA
              </div>
            ))}
          </div>
         <div className="rounded-3xl overflow-hidden shadow-elegant aspect-square relative">
  <iframe
    title="Keller Heating And Cooling Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.8002711232625!2d-80.33326!3d40.788404899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834656da46af8a1%3A0x875d20f8efee65c5!2sKeller%20Heating%20And%20Cooling%20LLC!5e0!3m2!1sen!2sus!4v1781763772775!5m2!1sen!2sus"
    className="absolute inset-0 w-full h-full border-0"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
        </div>
      </section>
    </>
  ),
});
