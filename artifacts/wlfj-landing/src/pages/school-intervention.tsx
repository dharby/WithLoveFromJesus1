import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Link } from "wouter";
import { ArrowRight, GraduationCap, BookOpen, PenTool, Users, TrendingUp } from "lucide-react";
const school1 = "/images/classroom.jpg";
const school2 = "/images/library001.jpeg";

export default function SchoolIntervention() {
  return (
    <main className="w-full pt-16">
      {/* Header */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6 uppercase tracking-wider">
              <GraduationCap size={18} /> Education Intervention
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Removing barriers. <span className="text-secondary italic">Expanding opportunities.</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-sans leading-relaxed">
              We design and deliver evidence-based education programs that improve outcomes for children and young people across Nigeria.
            </p>
          </FadeIn>
        </div>
      </section>
      {/* Intro & Image */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="space-y-6 text-lg text-foreground/80 font-sans leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Education is the pathway out of poverty.</h2>
              <p>
                Education is one of the most powerful tools for breaking the cycle of poverty, yet for many families in Nigeria, keeping a child in school is a daily struggle. Between low incomes and the rising cost of living, parents are often forced to choose between meeting basic needs and investing in their children's education.
              </p>
              <p>
                When children miss school, lack essential learning materials, or receive an inconsistent education, the consequences extend far beyond the classroom. Society loses future engineers, teachers, doctors, entrepreneurs, and innovators whose ideas could have solved the very challenges they grew up experiencing.
              </p>
              <p>
                At With Love, From Jesus, we believe every child has the capacity to become a problem solver. Children growing up in communities understand their realities better than anyone else. With access to quality education, learning resources, mentorship, and sustained support, they can develop the knowledge and confidence to create lasting change where it is needed most.
              </p>
              <p>
                Our Education Intervention Programme removes the barriers that stand between children and opportunity. By helping children stay in school, providing the tools they need to learn, and supporting them throughout their educational journey, we are investing not only in individual futures but in stronger, more resilient communities.
              </p>
              <p>We work closely with local schools, community leaders, and families to identify students most at risk and design interventions that respond to the realities they face every day.</p>
            </FadeIn>
            <FadeIn direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square md:aspect-[4/3]">
                <img src={school1} alt="Children engaged in learning in a Nigerian classroom" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* Core Focus Areas */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">How We Intervene</h2>
          </FadeIn>
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-foreground/70 font-sans text-lg">
              Each initiative is practical, evidence-based, and designed to produce long-term educational impact.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary mb-6">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">School Fee Support</h3>
              <p className="text-foreground/70 font-sans leading-relaxed text-sm">
                Direct coverage of tuition and school registration fees for primary and secondary students in vulnerable households, ensuring uninterrupted access to learning.
              </p>
            </StaggerItem>

            <StaggerItem className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <PenTool size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">Learning Resources</h3>
              <p className="text-foreground/70 font-sans leading-relaxed text-sm">
                Provision of textbooks, writing materials, uniforms, and bags. A student who arrives prepared and dignified is a student who can focus entirely on learning.
              </p>
            </StaggerItem>

            <StaggerItem className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">Christocentric mentorship</h3>
              <p className="text-foreground/70 font-sans leading-relaxed text-sm">
                Ongoing academic tracking, guidance, and emotional support. We walk alongside our beneficiaries, not just funding their education, but investing in their development through Christocentric mentorship.
              </p>
            </StaggerItem>

            <StaggerItem className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">Outcome Tracking</h3>
              <p className="text-foreground/70 font-sans leading-relaxed text-sm">
                We monitor attendance, performance, and retention across all supported students. Measuring outcomes is how we ensure our programs remain effective and improve over time.
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
                <img src={school2} alt="Library with bookshelves" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="left" className="order-1 lg:order-2 space-y-6 text-lg text-foreground/80 font-sans leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">The multiplier effect of education.</h2>
              <p>
                When a child gains access to quality education, the impact extends far beyond that individual. Educated children grow into capable adults who drive innovation, strengthen their communities, and contribute to the lasting social change we all want to see.
              </p>
              <p>
                That is why we do not simply do charity. We design our programmes to be strategic, intentional, and future-focused. Every project is a long-term investment in human potential, creating ripple effects that benefit families, strengthen communities, and ultimately contribute to Africa's development.
              </p>
              <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-xl mt-8">
                <p className="font-serif italic text-xl text-primary mb-2">
                  "Before the support, I had to work during school hours to help my family. Now I am focused, in class, and top of my set in science."
                </p>
                <span className="text-sm font-bold text-accent uppercase tracking-widest">Secondary Student, Program Beneficiary</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* Who is Eligible */}
      <section className="py-20 bg-muted border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary">Who We Prioritise</h2>
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h4 className="font-serif text-xl font-bold text-primary mb-4">Eligibility Criteria</h4>
                <ul className="space-y-3 text-foreground/80 font-sans">
                  {[
                    "Children aged 16 and under",
                    "From financially vulnerable households",
                    "At immediate risk of dropping out of school",
                    "Enrolled or seeking enrolment in primary or secondary school",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-secondary font-bold mt-1">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h4 className="font-serif text-xl font-bold text-primary mb-4">How We Identify Beneficiaries</h4>
                <ul className="space-y-3 text-foreground/80 font-sans">
                  {[
                    "Referrals from local school administrators",
                    "Community leader and neighbourhood networks",
                    "Household vulnerability assessments",
                    "Applications reviewed by our program team",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Invest in a student's potential.</h2>
            <p className="text-xl text-primary-foreground/80 font-sans mb-10 leading-relaxed">
              Your partnership can keep a child in the classroom. Reach out to learn how you can sponsor a student, donate supplies, or collaborate with our education team.
            </p>
            <Link
              href="/contact"
              className="bg-secondary text-foreground px-10 py-5 rounded-full text-xl font-bold hover:bg-secondary/90 transition-all hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-3"
            >
              Support the Program <ArrowRight size={24} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
