import { FadeIn } from "@/components/ui/fade-in";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              Let's connect.
            </h1>
            <p className="text-xl text-foreground/70 font-sans leading-relaxed">
              Whether you want to sponsor a child, support a clinic, or simply learn more about our work—we would love to hear from you.
            </p>
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
                      <a href="mailto:hello@withlovefromjesus.org" className="hover:text-secondary transition-colors">
                        hello@withlovefromjesus.org
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 text-foreground/80">
                    <Phone className="text-secondary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-primary mb-1">Phone</p>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 text-foreground/80">
                    <MapPin className="text-secondary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-primary mb-1">Headquarters</p>
                      <p className="leading-relaxed">
                        123 Mission Way<br/>
                        Community District<br/>
                        City, State 12345
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-primary">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans text-foreground"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-primary">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans text-foreground"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-primary">Subject</label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans text-foreground"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="sponsor">Sponsor a Student</option>
                      <option value="health">Support Maternal Health</option>
                      <option value="volunteer">Volunteer</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-primary">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans text-foreground resize-none"
                      placeholder="How would you like to connect?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"} <Send size={20} />
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
