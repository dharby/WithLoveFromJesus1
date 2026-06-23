import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Link } from "wouter";
import { ArrowRight, HeartPulse, Stethoscope, Baby, Activity } from "lucide-react";
import health1 from "@assets/japazon-fonkwo-8ls3De7W4XQ-unsplash_1782214846275.jpg";
import health2 from "@/assets/images/health-2.png";

export default function HealthIntervention() {
  return (
    <main className="w-full pt-20">
      {/* Header */}
      <section className="py-20 md:py-32 bg-accent text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 font-semibold text-sm mb-6 uppercase tracking-wider">
              <HeartPulse size={18} /> Maternal Health
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Care that <span className="italic opacity-90">protects life.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-sans leading-relaxed">
              Ensuring pregnant and new mothers in remote communities receive the antenatal support and medical care they deserve.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intro & Image */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="space-y-6 text-lg text-foreground/80 font-sans leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">A mother's health is the community's health.</h2>
              <p>
                In many remote regions, the journey to a clinic is too far, too expensive, or entirely inaccessible. Preventable complications during pregnancy and childbirth remain tragically high simply due to a lack of basic care.
              </p>
              <p>
                Our Health Intervention program brings maternal healthcare directly to those who need it most. We believe that safe delivery and healthy beginnings should not be a privilege—they are a fundamental right.
              </p>
            </FadeIn>
            <FadeIn direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square md:aspect-[4/3]">
                <img src={health1} alt="Maternal health clinic care" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Our Health Initiatives</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <Stethoscope size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Antenatal Care</h3>
              <p className="text-foreground/70 font-sans leading-relaxed">
                Regular check-ups, vital monitoring, and medical supervision throughout pregnancy to ensure the safety of both mother and child.
              </p>
            </StaggerItem>

            <StaggerItem className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Activity size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Medical Supplies</h3>
              <p className="text-foreground/70 font-sans leading-relaxed">
                Provision of vitamins, supplements, safe birthing kits, and essential medications for maternal well-being.
              </p>
            </StaggerItem>

            <StaggerItem className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary mb-6">
                <Baby size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Postnatal Support</h3>
              <p className="text-foreground/70 font-sans leading-relaxed">
                Following up after birth with infant care education, immunizations guidance, and maternal recovery support.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Secondary Story / Image */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square md:aspect-[4/3]">
                <img src={health2} alt="Mother holding newborn" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="left" className="order-1 lg:order-2 space-y-6 text-lg text-foreground/80 font-sans leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Reaching the unreachable.</h2>
              <p>
                Our community outreach teams travel to remote areas where clinics do not exist. We set up mobile health stations, conduct screenings, and build trust within the community.
              </p>
              <div className="bg-accent/10 border border-accent/20 p-6 rounded-xl mt-8">
                <p className="font-serif italic text-xl text-primary mb-2">"When the mobile clinic arrived, I was able to hear my baby's heartbeat for the first time. They gave me the vitamins I couldn't afford."</p>
                <span className="text-sm font-bold text-accent uppercase tracking-widest">— New Mother, Outreach Beneficiary</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Protect a mother's journey.</h2>
            <p className="text-xl text-primary-foreground/80 font-sans mb-10 leading-relaxed">
              Your support funds medical professionals, safe birthing kits, and vital checkups. Partner with us to save lives.
            </p>
            <Link 
              href="/contact" 
              className="bg-accent text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-accent/90 transition-all hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-3"
            >
              Support Maternal Health <ArrowRight size={24} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
