import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Link } from "wouter";
import { ArrowRight, GraduationCap, BookOpen, PenTool, Users } from "lucide-react";
import school1 from "@assets/bill-wegener-8ldqRkOk5oo-unsplash_1782214846278.jpg";
import school2 from "@/assets/images/school-2.png";

export default function SchoolIntervention() {
  return (
    <main className="w-full pt-20">
      {/* Header */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6 uppercase tracking-wider">
              <GraduationCap size={18} /> Education Program
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Empowering the <span className="text-secondary italic">next generation.</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-sans leading-relaxed">
              We provide scholarships, supplies, and support for primary and secondary education—because education changes everything.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intro & Image */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="space-y-6 text-lg text-foreground/80 font-sans leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Education is freedom.</h2>
              <p>
                In many developing communities, the cost of basic schooling forces children out of the classroom and into early labor. Our School Intervention program is built to bridge that gap.
              </p>
              <p>
                By covering tuition, providing essential learning materials, and offering ongoing mentorship, we ensure that financial hardship doesn't dictate a child's potential. We partner with local schools to identify students at highest risk of dropping out.
              </p>
            </FadeIn>
            <FadeIn direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square md:aspect-[4/3]">
                <img src={school1} alt="Sunlit classroom" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">How We Intervene</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary mb-6">
                <BookOpen size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Scholarships</h3>
              <p className="text-foreground/70 font-sans leading-relaxed">
                Full coverage of tuition fees for primary and secondary students, ensuring uninterrupted learning paths.
              </p>
            </StaggerItem>

            <StaggerItem className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <PenTool size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Supplies Program</h3>
              <p className="text-foreground/70 font-sans leading-relaxed">
                Providing uniforms, textbooks, writing materials, and bags. A child should feel dignified and prepared when they walk into a classroom.
              </p>
            </StaggerItem>

            <StaggerItem className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Mentorship</h3>
              <p className="text-foreground/70 font-sans leading-relaxed">
                Academic tracking and emotional support. We don't just pay fees; we walk alongside our students throughout their journey.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Story / Focus */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square md:aspect-[4/3]">
                <img src={school2} alt="Child reading" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="left" className="order-1 lg:order-2 space-y-6 text-lg text-foreground/80 font-sans leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">The ripple effect of a single book.</h2>
              <p>
                When a child learns to read, write, and think critically, they don't just change their own future. They uplift their family, contribute to their community, and break generational cycles of poverty.
              </p>
              <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-xl mt-8">
                <p className="font-serif italic text-xl text-primary mb-2">"Before the scholarship, I worked in the market during school hours. Now, I am top of my class in science."</p>
                <span className="text-sm font-bold text-secondary uppercase tracking-widest">— Secondary Student, Program Beneficiary</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Fund a student's future.</h2>
            <p className="text-xl text-primary-foreground/80 font-sans mb-10 leading-relaxed">
              Your partnership can keep a child in the classroom. Reach out to learn how you can sponsor a student or donate supplies.
            </p>
            <Link 
              href="/contact" 
              className="bg-secondary text-primary px-10 py-5 rounded-full text-xl font-bold hover:bg-secondary/90 transition-all hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-3"
            >
              Support a Student <ArrowRight size={24} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
