import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Link } from "wouter";
import { ArrowRight, HeartPulse, Stethoscope, Baby, Activity, ShieldCheck } from "lucide-react";
import health1 from "@assets/japazon-fonkwo-8ls3De7W4XQ-unsplash_1782214846275.jpg";
import health2 from "@/assets/images/mother-baby.png";

export default function HealthIntervention() {
  return (
    <main className="w-full pt-16">
      {/* Header */}
      <section className="py-20 md:py-32 bg-accent text-accent-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 font-semibold text-sm mb-6 uppercase tracking-wider">
              <HeartPulse size={18} /> Health Intervention
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Healthier people. <span className="italic opacity-90">Stronger communities.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-sans leading-relaxed">
              We develop evidence-based health interventions that improve access to essential care, promote preventive health behaviours, and address the social determinants that keep communities vulnerable.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intro & Image */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="space-y-6 text-lg text-foreground/80 font-sans leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Health is a foundation, not a privilege.</h2>
              <p>
                In many communities, poor health is not just a personal challenge; it is a structural one. Limited access to healthcare facilities, unaffordable services, and a lack of health education create conditions where preventable illnesses flourish and vulnerable populations are most at risk.
              </p>
              <p>
                Our Health Intervention programs take a multi-pronged approach: improving direct access to care through outreach and partnerships, building health literacy within communities, and designing preventive programs that produce long-term population-level change.
              </p>
              <p>
                We work across the continuum of care, from community health education through to targeted outreach for groups facing the greatest barriers, including pregnant and new mothers in remote areas.
              </p>
            </FadeIn>
            <FadeIn direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] md:aspect-[4/3]">
                <img src={health1} alt="Community health outreach in Nigeria" className="w-full h-full object-cover object-top" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Our Health Initiatives</h2>
          </FadeIn>
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-foreground/70 font-sans text-lg">
              Each initiative targets a specific barrier to health and is designed with community input, measurable outcomes, and long-term sustainability in mind.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <Stethoscope size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">Maternal Health</h3>
              <p className="text-foreground/70 font-sans leading-relaxed text-sm">
                Antenatal care, safe delivery support, and postnatal follow-up for pregnant and new mothers in communities where access to standard clinical care is limited.
              </p>
            </StaggerItem>

            <StaggerItem className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">Preventive Care</h3>
              <p className="text-foreground/70 font-sans leading-relaxed text-sm">
                Community-based screening programs, immunisation outreach, and hygiene education initiatives designed to reduce the incidence of preventable illness at the population level.
              </p>
            </StaggerItem>

            <StaggerItem className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary mb-6">
                <Activity size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">Health Education</h3>
              <p className="text-foreground/70 font-sans leading-relaxed text-sm">
                Targeted health literacy programs that equip communities with the knowledge to make informed health decisions, recognise warning signs, and navigate available services effectively.
              </p>
            </StaggerItem>

            <StaggerItem className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-6">
                <Baby size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">Medical Outreach</h3>
              <p className="text-foreground/70 font-sans leading-relaxed text-sm">
                Mobile outreach teams that travel to communities without clinic access, providing screenings, essential supplies, vitamins, and direct medical support where it is needed most.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Social Determinants */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square md:aspect-[4/3]">
                <img src={health2} alt="A mother and newborn receiving care" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="left" className="order-1 lg:order-2 space-y-6 text-lg text-foreground/80 font-sans leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Addressing the root causes of poor health.</h2>
              <p>
                We recognise that health outcomes are deeply shaped by social and economic conditions: access to clean water, food security, housing, income, and education. Our programs are designed with this understanding at their core.
              </p>
              <p>
                Our community outreach teams operate in areas where healthcare infrastructure does not reach. We conduct screenings, build trusted relationships within communities, and design follow-up care pathways, not one-off visits.
              </p>
              <div className="bg-accent/10 border border-accent/20 p-6 rounded-xl mt-8">
                <p className="font-serif italic text-xl text-primary mb-2">
                  "When the mobile outreach team came to our area, it was the first time many of us had seen a health worker. They did not just visit; they came back."
                </p>
                <span className="text-sm font-bold text-accent uppercase tracking-widest">Community Resident, Outreach Participant</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Support healthier communities.</h2>
            <p className="text-xl text-primary-foreground/80 font-sans mb-10 leading-relaxed">
              Your partnership funds medical outreach, health education, preventive care programs, and essential supplies for communities facing the greatest barriers to healthcare.
            </p>
            <Link
              href="/contact"
              className="bg-secondary text-foreground px-10 py-5 rounded-full text-xl font-bold hover:bg-secondary/90 transition-all hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-3"
            >
              Partner With Us <ArrowRight size={24} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
