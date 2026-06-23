import { useState, useEffect, useCallback } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Link } from "wouter";
import { ArrowRight, BookOpen, HeartPulse, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import heroMain from "@assets/annie-spratt-cVEOh_JJmEE-unsplash_1782214846278.jpg";
import heroSlide2 from "@assets/jeffrey-riley-dsN1oZVba48-unsplash_1782214846277.jpg";
import heroSlide3 from "@assets/joshua-oluwagbemiga-Jq0coU4cdFE-unsplash_1782214846277.jpg";
import homeImpact from "@/assets/images/home-impact.png";

const slides = [
  {
    src: heroMain,
    alt: "Joyful children gathered together",
    headline: ["Where hope is made", "tangible."],
    sub: "A social intervention NGO serving children through education and supporting new mothers through maternal health programs.",
  },
  {
    src: heroSlide2,
    alt: "A child's determined gaze",
    headline: ["Every child", "deserves a future."],
    sub: "We believe no financial barrier should stand between a child and the education that will change their life.",
  },
  {
    src: heroSlide3,
    alt: "A young girl with a steadfast look",
    headline: ["See the child.", "Change the world."],
    sub: "Scholarships, supplies, health support. Real interventions that reach the children who need them most.",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
};

const imageVariants = {
  enter: { opacity: 0, scale: 1.06 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.1, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.7, ease: "easeIn" } },
};

export default function Home() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <main className="w-full">
      {/* Hero Slideshow */}
      <section
        data-testid="section-hero"
        className="relative min-h-screen flex items-center overflow-hidden bg-foreground pt-16"
      >
        {/* Background image crossfade */}
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
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-foreground/55" />
          </motion.div>
        </AnimatePresence>

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
                    Join Our Mission <ArrowRight size={20} />
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
          <button
            data-testid="button-hero-prev"
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white/15 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2 items-center">
            {slides.map((_, i) => (
              <button
                key={i}
                data-testid={`button-slide-dot-${i}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 h-2.5 bg-secondary"
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            data-testid="button-hero-next"
            onClick={next}
            className="w-10 h-10 rounded-full bg-white/15 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Slide counter */}
        <div className="absolute top-20 right-8 z-20 text-white/50 text-sm font-mono tracking-widest select-none">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
      </section>

      {/* Impact Counters */}
      <section className="py-20 bg-primary text-primary-foreground" data-testid="section-impact">
        <div className="container mx-auto px-4 md:px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
            <StaggerItem className="flex flex-col items-center justify-center p-6">
              <AnimatedCounter value={1250} suffix="+" className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-2" />
              <p className="text-lg font-sans text-primary-foreground/90 uppercase tracking-wider font-medium">Children Served</p>
            </StaggerItem>
            <StaggerItem className="flex flex-col items-center justify-center p-6">
              <AnimatedCounter value={450} className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-2" />
              <p className="text-lg font-sans text-primary-foreground/90 uppercase tracking-wider font-medium">Scholarships Given</p>
            </StaggerItem>
            <StaggerItem className="flex flex-col items-center justify-center p-6">
              <AnimatedCounter value={890} suffix="+" className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-2" />
              <p className="text-lg font-sans text-primary-foreground/90 uppercase tracking-wider font-medium">Mothers Supported</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Our Interventions</h2>
            <p className="text-lg text-foreground/70 font-sans">
              We focus our energy where it can make the deepest impact: education for the next generation, and health for the mothers who raise them.
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
                    <h3 className="text-3xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">School Intervention</h3>
                    <p className="text-foreground/70 font-sans text-lg mb-8 leading-relaxed">
                      Transforming life trajectories through primary and secondary education scholarships, school supplies, and continuous mentorship.
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
                      Reaching mothers who would otherwise go without care. Providing antenatal support, vital health resources, and outreach to remote communities.
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

      {/* Why We Exist */}
      <section className="py-24 bg-muted overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img src={homeImpact} alt="Joyful children" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/10"></div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Why We Exist</h2>
              <div className="space-y-6 text-lg text-foreground/80 font-sans leading-relaxed">
                <p>
                  We believe that every child deserves the dignity of an education, and every mother deserves the safety of proper healthcare.
                </p>
                <p>
                  In the communities we serve, a simple scholarship is not just about books. It is about breaking a cycle. An antenatal visit is not just a checkup. It is a profound statement that a mother's life matters.
                </p>
                <p className="font-serif text-2xl text-accent italic mt-8 border-l-4 border-secondary pl-6 py-2">
                  "This work is not charity. It is love made visible."
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8">
              Be part of the story.
            </h2>
            <p className="text-xl text-foreground/70 font-sans mb-10 leading-relaxed max-w-2xl mx-auto">
              Your support translates directly into school fees, medical supplies, and hope for families who need it most.
            </p>
            <Link
              href="/contact"
              data-testid="link-cta-get-involved"
              className="bg-accent text-accent-foreground px-10 py-5 rounded-full text-xl font-bold hover:bg-primary transition-all hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-3"
            >
              Get Involved Today <ArrowRight size={24} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
