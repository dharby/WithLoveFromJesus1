import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-3xl font-bold mb-4">
              With Love <span className="text-secondary italic">from Jesus</span>
            </h3>
            <p className="text-primary-foreground/80 max-w-md text-lg leading-relaxed font-sans mb-8">A place where hope is made tangible. We serve children through education and support pregnant and new mothers through maternal healthcare,because every life is deeply valued.</p>
          </div>
          
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-secondary">Programs</h4>
            <ul className="space-y-4 font-sans">
              <li>
                <Link href="/school-intervention" className="text-primary-foreground/80 hover:text-white transition-colors">
                  School Intervention
                </Link>
              </li>
              <li>
                <Link href="/health-intervention" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Health Intervention
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-secondary">Connect</h4>
            <ul className="space-y-4 font-sans text-primary-foreground/80">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>Withlovefromjesus.ng@gmail.com</li>
              <li>+234 708 542 7040</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60 font-sans">
          <p>© {new Date().getFullYear()} With Love from Jesus. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
