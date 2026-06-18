import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  { n: "Sarah M.", c: "Pittsburgh", t: "Excellent service and professional technicians. Highly recommended." },
  { n: "Marcus L.", c: "Allegheny County", t: "Quick response and quality HVAC installation. Couldn't be happier with the work." },
  { n: "Priya R.", c: "Beaver County", t: "Reliable company with fair pricing and great customer service." },
  { n: "Daniel K.", c: "Washington County", t: "Best contractor experience I've ever had. Clean, courteous, and they explained every detail." },
  { n: "Anika T.", c: "Mt. Lebanon", t: "Installed a new HVAC + air purifier. My allergies are dramatically better. Highly recommend." },
  { n: "Roberto S.", c: "Monroeville", t: "Came out late at night for an emergency no-heat call in January. Lifesavers." },
];

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — 4.9★ from 150+ Customers | Keller Heating And Cooling LLC" },
      { name: "description", content: "Read real reviews from Keller Heating And Cooling LLC customers across Greater Pittsburgh. 4.9 star average from 150+ verified reviews." },
      { property: "og:title", content: "Keller Heating And Cooling LLC Reviews" }, { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Reviews" title="4.9★ from 150+ verified reviews" sub="Don't take our word for it — here's what your neighbors are saying." />
      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map(r => (
            <Card key={r.n} className="p-7 rounded-2xl border-border/60 hover-lift">
              <div className="flex gap-1 text-accent">{[...Array(5)].map((_,i)=><Star key={i} className="w-4 h-4 fill-current" />)}</div>
              <p className="mt-4 text-foreground/90">"{r.t}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-bold text-primary">{r.n}</div><div className="text-sm text-muted-foreground">{r.c}, PA</div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  ),
});
