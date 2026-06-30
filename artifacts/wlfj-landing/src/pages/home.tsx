import { useState, useEffect, useCallback } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Link } from "wouter";
import { ArrowRight, BookOpen, HeartPulse, ChevronLeft, ChevronRight, Target, TrendingUp, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import heroMain from "@assets/annie-spratt-cVEOh_JJmEE-unsplash_1782214846278.jpg";
import heroSlide2 from "@assets/jeffrey-riley-dsN1oZVba48-unsplash_1782214846277.jpg";
import heroSlide3 from "@assets/joshua-oluwagbemiga-Jq0coU4cdFE-unsplash_1782214846277.jpg";
import heroSlide4 from "@assets/doug-linstedt-jEEYZsaxbH4-unsplash_1782246534743.jpg";
import heroSlide5 from "@assets/fatima-yusuf-9gj4I78mcoM-unsplash_1782246534745.jpg";
import homeImpact from "@/assets/images/kids-playing.png";

const slides = [
  {
    src: heroMain,
    alt: "Children in a Nigerian community",
    headline: ["Expanding opportunity.", "Building futures."],
    sub: "WLFJ designs and delivers evidence-based education and health interventions across Nigeria and Africa.",
  },
  {
    src: heroSlide4,
    alt: "Students attentively learning in a Nigerian classroom",
    headline: ["Education removes", "structural barriers."],
    sub: "We remove the financial and systemic obstacles that prevent children from accessing quality education through scholarships, resources, and Christocentric mentorship.",
  },
  {
    src: heroSlide5,
    alt: "A young African mother holding her newborn baby",
    headline: ["Health is a", "foundation, not a privilege."],
    sub: "Our health interventions improve access to essential care, promote healthier communities, and address the social determinants that keep families vulnerable.",
  },
  {
    src: heroSlide2,
    alt: "A child with a determined gaze",
    headline: ["Every child deserves", "an opportunity."],
    sub: "We believe that socioeconomic background should never determine a child's ability to learn, grow, and reach their full potential.",
  },
  {
    src: heroSlide3,
    alt: "A young girl with a steadfast look",
    headline: ["Evidence-based.", "Community-centred."],
    sub: "Every program begins with understanding community needs. We measure outcomes, learn from our work, and continuously improve our effectiveness.",
  },
];

const allImages = [heroMain, heroSlide2, heroSlide3, heroSlide4, heroSlide5];

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
  exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
};

const imageVariants = {
  enter: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.0, ease: "easeOut" as const } },
  exit: { opacity: 0, transition: { duration: 0.6, ease: "easeIn" as const } },
};

const beams = [
  { left: "8%",  duration: 11, delay: 0 },
  { left: "32%", duration: 15, delay: 4 },
  { left: "62%", duration: 13, delay: 7.5 },
  { left: "82%", duration: 10, delay: 2 },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);
  const goTo = useCallback((idx: number) => setCurrent(idx), []);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <main className="w-full">
      {/* Hero Slideshow */}
      <section data-testid="section-hero" className="relative min-h-screen flex items-center overflow-hidden bg-foreground pt-16">

        {/* Eagerly preload all hero images */}
        <div className="hidden" aria-hidden="true">
          {allImages.map((src, i) => (
            <img key={i} src={src} alt="" fetchPriority={i === 0 ? "high" : "low"} />
          ))}
        </div>

        {/* Slide background */}
        <AnimatePresence mode="sync">
          <motion.div
            key={`bg-${current}`}
            variants={imageVariants}
            initial="enter"
            animate="visible"
            exit="exit"
            className="absolute inset-0 z-0"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              fetchPriority="high"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-foreground/55" />
          </motion.div>
        </AnimatePresence>

        {/* Animated light beams */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {beams.map((beam, i) => (
            <motion.div
              key={i}
              className="absolute top-0 bottom-0 w-14 md:w-20"
              style={{
                left: beam.left,
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.055) 30%, rgba(255,255,255,0.055) 70%, transparent 100%)",
                transform: "skewX(-18deg)",
              }}
              animate={{ x: ["-50vw", "60vw"] }}
              transition={{
                duration: beam.duration,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: beam.delay,
              }}
            />
          ))}
        </div>

        {/* Text content */}
        <div className="container mx-auto px-4 md:px-16 relative z-20 py-24">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div key={`text-${current}`} className="space-y-6">
                <motion.h1
                  custom={0}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.08]"
                >
                  {slide.headline[0]}{" "}
                  <motion.span
                    custom={1}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-secondary italic block md:inline"
                  >
                    {slide.headline[1]}
                  </motion.span>
                </motion.h1>

                <motion.p
                  custom={2}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-lg md:text-xl text-white/80 font-sans max-w-2xl leading-relaxed"
                >
                  {slide.sub}
                </motion.p>

                <motion.div
                  custom={3}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-wrap gap-4 pt-2"
                >
                  <Link
                    href="/contact"
                    data-testid="link-hero-join"
                    className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent transition-all hover:-translate-y-1 hover:shadow-lg inline-flex items-center gap-2"
                  >
                    Partner With Us <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/school-intervention"
                    data-testid="link-hero-programs"
                    className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center gap-2"
                  >
                    Our Programs
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex items-center justify-center gap-6">
          <button onClick={prev} className="w-10 h-10 rounded-full bg-white/15 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all" aria-label="Previous slide">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2 items-center">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-2.5 bg-secondary" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full bg-white/15 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all" aria-label="Next slide">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="absolute top-20 right-8 z-20 text-white/50 text-sm font-mono tracking-widest select-none">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
      </section>

      {/* Impact Counters */}
      <section className="py-20 bg-primary text-primary-foreground" data-testid="section-impact">
        <div className="container mx-auto px-4 md:px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
            <StaggerItem className="flex flex-col items-center justify-center p-6">
              <AnimatedCounter value={140} suffix="+" className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-2" />
              <p className="text-lg font-sans text-primary-foreground/90 uppercase tracking-wider font-medium">Beneficiaries Reached</p>
            </StaggerItem>
            <StaggerItem className="flex flex-col items-center justify-center p-6">
              <AnimatedCounter value={70} suffix="+" className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-2" />
              <p className="text-lg font-sans text-primary-foreground/90 uppercase tracking-wider font-medium">Students Supported</p>
            </StaggerItem>
            <StaggerItem className="flex flex-col items-center justify-center p-6">
              <AnimatedCounter value={1} className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-2" />
              <p className="text-lg font-sans text-primary-foreground/90 uppercase tracking-wider font-medium">Health Intervention</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Our Approach</h2>
            <p className="text-lg text-foreground/70 font-sans leading-relaxed">
              We combine compassion with evidence, designing practical interventions that are measurable, sustainable, and responsive to the real needs of the communities we serve.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <StaggerItem className="text-center p-8">
              <div className="w-16 h-16 bg-secondary/15 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">Evidence-Based</h3>
              <p className="text-foreground/70 font-sans leading-relaxed">
                Every program is designed with existing evidence at its core. We work with a Human-Centered Design approach that identifies structural barriers, evaluates what has worked, prototypes our own programs, and then we iterate, integrate, and build interventions around proven approaches.
              </p>
            </StaggerItem>
            <StaggerItem className="text-center p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-6">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">Outcome-Focused</h3>
              <p className="text-foreground/70 font-sans leading-relaxed">
                We measure what matters. Our programs track actual results such as school retention rates, student performance metrics, improved health outcomes and their ripple effects so that we can continuously improve our efficiency.
              </p>
            </StaggerItem>
            <StaggerItem className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">Community-Centred</h3>
              <p className="text-foreground/70 font-sans leading-relaxed">
                We begin by listening. Every intervention is co-designed with community input, responsive to local realities, culture, and the priorities of the people we serve.
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* Programs */}
          <FadeIn className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Focus Areas</h2>
            <p className="text-lg text-foreground/70 font-sans">
              As an organisation, we focus on SDGs 3 and 4 (good health and well-being and quality education). Shortening the distance between children in communities and the four walls of a classroom, and the distance between pregnant mothers and a fully fitted hospital for antenatal appointments.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <FadeIn direction="right">
              <Link href="/school-intervention" className="group block h-full" data-testid="link-program-school">
                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                  <div className="p-8 md:p-12 flex-1">
                    <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                      <BookOpen size={32} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">Education Intervention</h3>
                    <p className="text-foreground/70 font-sans text-lg mb-8 leading-relaxed">
                      We remove barriers that prevent children and young people from accessing quality education by providing full-ride scholarships covering: school fee support, textbooks and notebooks, school uniforms, informal learning resources, mentorship, and other educational initiatives that produce measurable educational outcomes.
                    </p>
                    <div className="inline-flex items-center text-primary font-bold gap-2 group-hover:gap-4 transition-all">
                      Explore Program <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <Link href="/health-intervention" className="group block h-full" data-testid="link-program-health">
                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                  <div className="p-8 md:p-12 flex-1">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <HeartPulse size={32} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">Health Intervention</h3>
                    <p className="text-foreground/70 font-sans text-lg mb-8 leading-relaxed">
                      We develop health interventions that improve access to essential healthcare while promoting healthier communities through health education, preventive care, medical outreach, and programs that address the social determinants of health.
                    </p>
                    <div className="inline-flex items-center text-primary font-bold gap-2 group-hover:gap-4 transition-all">
                      Explore Program <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-muted overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img src={homeImpact} alt="Nigerian children in their community" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/10"></div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">Our Vision</h2>
              <div className="space-y-6 text-lg text-foreground/80 font-sans leading-relaxed">
                <p>
                  We envision communities where every individual, regardless of socioeconomic background, has access to the education, healthcare, and opportunities they need to thrive.
                </p>
                <p>
                  Starting in Nigeria, our mission is to grow across Africa. We believe that meaningful, lasting change is achieved by addressing the structural barriers that limit people's ability to learn, stay healthy, and reach their full potential.
                </p>
                <p>
                  We are not delivering short-term relief. We are designing sustainable systems that communities can own, build on, and carry forward.
                </p>
                <p className="font-serif text-2xl text-accent italic mt-8 border-l-4 border-secondary pl-6 py-2">
                  "Compassion plus evidence equals change that lasts."
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Who We Serve</h2>
            <p className="text-xl text-foreground/70 font-sans mb-8 leading-relaxed max-w-3xl mx-auto">
              WLFJ serves children, families, and communities facing barriers to education, healthcare, and economic opportunity. We prioritize reaching those whose circumstances place them at greatest risk of being left behind.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
              {[
                { label: "Children & Young People", desc: "Ages 16 and under facing barriers to quality education, school dropout risk, or financial hardship." },
                { label: "Pregnant & New Mothers", desc: "Women in areas with limited access to antenatal care, safe delivery, and postnatal support." },
                { label: "Communities in Need", desc: "Families in remote or low-income communities across Nigeria where structural barriers remain highest." },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-muted p-6 rounded-2xl border border-border">
                  <h4 className="font-serif text-lg font-bold text-primary mb-3">{label}</h4>
                  <p className="text-foreground/70 font-sans text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
              Partner with us.
            </h2>
            <p className="text-xl text-primary-foreground/80 font-sans mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether through donations, volunteering, or strategic collaboration, your involvement drives real, measurable change in the communities that need it most.
            </p>
            <Link
              href="/contact"
              data-testid="link-cta-get-involved"
              className="bg-secondary text-foreground px-10 py-5 rounded-full text-xl font-bold hover:bg-secondary/90 transition-all hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-3"
            >
              Get Involved <ArrowRight size={24} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
