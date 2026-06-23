import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Home, GraduationCap, HeartPulse, HelpCircle, Mail, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoSrc from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/school-intervention", label: "School Intervention", icon: GraduationCap },
  { href: "/health-intervention", label: "Health Intervention", icon: HeartPulse },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
  { href: "/contact", label: "Contact Us", icon: Mail },
];

export function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Top bar: logo left, hamburger right */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-background/90 backdrop-blur-md border-b border-border/40 shadow-sm">
        <Link href="/" data-testid="link-logo" className="flex items-center group">
          <img src={logoSrc} alt="With Love from Jesus" className="h-12 w-auto object-contain transition-opacity group-hover:opacity-85" />
        </Link>

        <button
          data-testid="button-open-nav"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          className="w-11 h-11 rounded-full flex items-center justify-center bg-primary text-primary-foreground hover:bg-accent transition-all duration-200 hover:shadow-lg hover:scale-105"
        >
          <Menu size={20} />
        </button>
      </header>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Right Sidebar Panel */}
      <AnimatePresence>
        {open && (
          <motion.aside
            key="sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-[300px] max-w-[85vw] z-50 bg-background shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Sidebar header */}
            <div className="flex items-center justify-between px-7 py-6 border-b border-border/60">
              <Link href="/" className="flex items-center">
                <img src={logoSrc} alt="With Love from Jesus" className="h-11 w-auto object-contain" />
              </Link>
              <button
                data-testid="button-close-nav"
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-foreground/50 hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Close navigation"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 px-5 py-7 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const Icon = link.icon;
                const isActive = location === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`flex items-center gap-4 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 group ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-foreground/70 hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-muted text-foreground/50 group-hover:bg-primary/10 group-hover:text-primary"
                      }`}>
                        <Icon size={18} />
                      </span>
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Footer CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="px-6 pb-8 pt-4 border-t border-border/60"
            >
              <Link
                href="/contact"
                data-testid="link-nav-get-involved"
                className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground px-6 py-3.5 rounded-xl text-base font-semibold hover:bg-accent/90 transition-all hover:shadow-lg"
              >
                Get Involved <ArrowRight size={18} />
              </Link>
              <p className="text-xs text-foreground/40 text-center mt-4 font-sans leading-relaxed">
                Serving children and mothers<br />through education and health
              </p>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
