import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Snowflake } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/service-area", label: "Service Area" },
  { to: "/reviews", label: "Reviews" },
  { to: "/financing", label: "Financing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass-card border-b border-white/40">
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg text-primary">
          <span className="inline-grid place-items-center w-10 h-10 rounded-xl gradient-primary text-white shadow-glow">
            <Snowflake className="w-5 h-5" />
          </span>
          NorthAir HVAC
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {nav.map(n => (
            <Link key={n.to} to={n.to} className="text-foreground/80 hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+15551234567" className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4 text-teal" /> (555) 123-4567
          </a>
          <Button asChild variant="cta" size="sm">
            <Link to="/contact">Free Estimate</Link>
          </Button>
        </div>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-px py-4 flex flex-col gap-3">
            {nav.map(n => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 font-medium">
                {n.label}
              </Link>
            ))}
            <a href="tel:+15551234567" className="flex items-center gap-2 font-semibold text-primary">
              <Phone className="w-4 h-4" /> (555) 123-4567
            </a>
          </div>
        </div>
      )}
    </header>
  );
}