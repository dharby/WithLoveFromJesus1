import { FadeIn } from "@/components/ui/fade-in";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const PHONE = "07085427040";
const PHONE_INTL = "2347085427040";
const EMAIL = "Withlovefromjesus.ng@gmail.com";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subjectEl = form.elements.namedItem("subject") as HTMLSelectElement;
    const subject = subjectEl.options[subjectEl.selectedIndex].text;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(subject + " — from " + name)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Opening your email client",
        description: "Your message has been pre-filled and is ready to send.",
      });
      form.reset();
    }, 800);
  };

  return (
    <main className="w-full pt-16">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              Let us connect.
            </h1>
            <p className="text-xl text-foreground/70 font-sans leading-relaxed">
              Whether you want to sponsor a child, support a clinic, or simply learn more about our work, we would love to hear from you.
            </p>
          </FadeIn>

          {/* Quick Contact Buttons */}
          <FadeIn className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href={`tel:${PHONE}`}
              data-testid="link-call"
              className="flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <Phone size={22} />
              Call Us
            </a>
            <a
              href={`https://wa.me/${PHONE_INTL}`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-whatsapp"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1ebe5d] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <MessageCircle size={22} />
              WhatsApp Us
            </a>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <FadeIn direction="right" className="lg:col-span-2 space-y-8">
              <div className="bg-muted p-8 rounded-2xl border border-border h-full">
                <h3 className="font-serif text-2xl font-bold text-primary mb-8">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 text-foreground/80">
                    <Mail className="text-secondary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-primary mb-1">Email</p>
                      <a href={`mailto:${EMAIL}`} className="hover:text-accent transition-colors break-all">
                        {EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 text-foreground/80">
                    <Phone className="text-secondary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-primary mb-1">Phone / WhatsApp</p>
                      <div className="flex flex-col gap-2 mt-1">
                        <a
                          href={`tel:${PHONE}`}
                          className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                        >
                          <Phone size={15} /> {PHONE}
                        </a>
                        <a
                          href={`https://wa.me/${PHONE_INTL}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#25D366] font-semibold hover:opacity-80 transition-opacity"
                        >
                          <MessageCircle size={15} /> WhatsApp: {PHONE}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 text-foreground/80">
                    <MapPin className="text-secondary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-primary mb-1">Location</p>
                      <p className="leading-relaxed">
                        Ado-Ekiti, Ekiti State<br />
                        Nigeria
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <p className="font-serif italic text-lg text-primary text-center">
                    "Love only grows when it is shared."
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="left" delay={0.2} className="lg:col-span-3">
              <div className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-lg">
                <h3 className="font-serif text-xl font-bold text-primary mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-primary">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        data-testid="input-name"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans text-foreground"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-primary">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        data-testid="input-email"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans text-foreground"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-primary">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      data-testid="select-subject"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans text-foreground"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="sponsor">Sponsor a Student</option>
                      <option value="health">Support Maternal Health</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="donate">Donate Supplies</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-primary">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      data-testid="textarea-message"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans text-foreground resize-none"
                      placeholder="How would you like to connect?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-testid="button-submit"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:bg-accent transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Opening email client..." : "Send a Message"} <Send size={20} />
                  </button>

                  <p className="text-xs text-foreground/50 text-center font-sans">
                    Clicking "Send a Message" will open your email app with this message pre-filled, ready to send to {EMAIL}
                  </p>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
