import { FadeIn } from "@/components/ui/fade-in";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What does With Love from Jesus (WLFJ) do?",
      answer: "WLFJ is a nonprofit organisation that designs and delivers evidence-informed education and health interventions to reduce poverty and expand opportunity in underserved communities. We focus on two primary areas: removing barriers to quality education for children and young people, and improving access to essential healthcare for communities that are most at risk. Our work is rooted in Nigeria, with a long-term vision of expanding across Africa."
    },
    {
      question: "Who is eligible for the Education Intervention program?",
      answer: "We prioritise children aged 16 and under from financially vulnerable households who are at risk of dropping out of school or who cannot access quality education due to cost. Beneficiaries are identified through community leaders, local school partnerships, and household vulnerability assessments conducted by our program team."
    },
    {
      question: "What does the education support cover?",
      answer: "Our education program provides school fee support (tuition coverage), essential learning resources including textbooks, writing materials, uniforms, and bags, as well as ongoing mentorship and academic tracking. The specific support provided is tailored to each student's needs and the context of their school and community."
    },
    {
      question: "Who does the Health Intervention program serve?",
      answer: "Our health programs serve underserved communities with limited access to healthcare, including pregnant and new mothers, children, and families in remote or low-income areas. We focus particularly on groups facing the greatest structural barriers to care, including those in communities without nearby health facilities."
    },
    {
      question: "What health services does WLFJ provide?",
      answer: "Our health initiatives include maternal healthcare (antenatal, delivery support, and postnatal care), preventive care programs such as screenings and immunisation outreach, community health education, and mobile outreach to remote areas. We also provide essential medical supplies and work to connect communities with available health systems."
    },
    {
      question: "What makes WLFJ's approach different from traditional charity?",
      answer: "We are not delivering short-term relief. Every program we run is evidence-informed, designed based on an understanding of the structural barriers communities face, and built to produce measurable, sustainable outcomes. We measure what we do, learn from the evidence, and continuously improve our interventions. Our goal is lasting change, not one-off support."
    },
    {
      question: "How can I partner with or support WLFJ?",
      answer: "There are several ways to partner with us: financial donations to support our programs, sponsoring a specific student or health initiative, donating supplies (textbooks, stationery, medical supplies), volunteering your professional skills (medical, educational, administrative), or exploring strategic partnerships and collaborations. Reach out through our Contact page to discuss how you can get involved."
    },
    {
      question: "Can I donate physical items instead of money?",
      answer: "Yes. For the Education program, we accept new or gently used textbooks, backpacks, and stationery. For the Health program, we accept sealed vitamins, clean baby supplies, and sanitary materials. Please contact us before sending any physical donations so we can coordinate logistics and ensure your contribution reaches the right place."
    },
    {
      question: "How does WLFJ ensure transparency and accountability?",
      answer: "We are committed to transparency in how we operate and report our impact. We track program outcomes, measure beneficiary progress, and document how resources are used. Designated program funds go directly to beneficiaries and program delivery. We are happy to share information with partners and supporters about how their contributions are being used."
    },
    {
      question: "What is WLFJ's long-term vision?",
      answer: "We envision communities across Nigeria and ultimately across Africa where every individual, regardless of socioeconomic background, has access to the education, healthcare, and opportunities they need to thrive. We are building toward that vision one evidence-informed intervention at a time, starting with the communities in Ado-Ekiti, Ekiti State."
    }
  ];

  return (
    <main className="w-full pt-16 min-h-[80vh] flex flex-col">
      <section className="py-20 bg-muted flex-grow">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <HelpCircle size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              Common Questions
            </h1>
            <p className="text-xl text-foreground/70 font-sans leading-relaxed max-w-2xl mx-auto">
              Learn more about who we are, how our programs work, and how you can play a part in expanding opportunity in underserved communities.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-card rounded-2xl shadow-sm border border-border p-6 md:p-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-serif text-xl text-primary hover:text-accent py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 font-sans text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-16 text-center">
            <p className="text-foreground/70 font-sans mb-6">
              Have a question that is not answered here?
            </p>
            <Link
              href="/contact"
              className="text-primary font-bold hover:text-accent transition-colors underline underline-offset-4"
            >
              Reach out to our team
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
