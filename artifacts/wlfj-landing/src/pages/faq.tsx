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
      question: "Who is eligible for the School Intervention program?",
      answer: "We focus on children aged 16 and under from highly vulnerable households who are at immediate risk of dropping out of school due to financial constraints. Beneficiaries are identified through community leaders, local school partnerships, and household assessments."
    },
    {
      question: "What does a scholarship cover?",
      answer: "A full scholarship covers annual tuition fees. The program often extends to cover essential school supplies including uniforms, textbooks, and writing materials, depending on the specific needs of the student."
    },
    {
      question: "Where are the Maternal Health programs located?",
      answer: "Our maternal health initiatives operate primarily in remote and developing community areas where access to standard healthcare facilities is limited or nonexistent. We utilize both local clinic partnerships and mobile outreach teams."
    },
    {
      question: "Can I donate physical items instead of money?",
      answer: "Yes. For the School Intervention program, we gladly accept new or gently used textbooks, backpacks, and stationery. For the Health Intervention program, we accept sealed vitamins, clean baby clothes, and sanitary supplies. Please contact us to coordinate physical donations."
    },
    {
      question: "How is the organization funded?",
      answer: "With Love from Jesus relies entirely on the generosity of individual donors, corporate partners, and grants from those who believe in making hope tangible through action. One hundred percent of designated program funds go directly to the beneficiaries."
    },
    {
      question: "Can I volunteer with the NGO?",
      answer: "Absolutely. We are always looking for medical professionals for our health outreach, teachers or mentors for our education programs, and general volunteers for administrative and event support. Reach out via our Contact page to get involved."
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
            <p className="text-xl text-foreground/70 font-sans">
              Learn more about how our programs work and how you can be part of the mission.
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
