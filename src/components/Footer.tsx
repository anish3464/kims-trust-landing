import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-display text-xl font-bold mb-4">KIMS Trust Hospital</h3>
        <p className="text-primary-foreground/70 text-sm leading-relaxed">
          Providing world-class healthcare services with compassion and trust in the heart of Kerala.
        </p>
      </div>
      <div>
        <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {["Profile", "Departments", "Doctors", "Services", "Career", "Contact Us"].map((l) => (
            <Link key={l} to={`/${l.toLowerCase().replace(" ", "-").replace("us", "")}`} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              {l}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-display text-lg font-semibold mb-4">Contact Info</h4>
        <div className="space-y-3 text-sm text-primary-foreground/70">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
            <span>KIMS Trust Hospital, Thiruvananthapuram, Kerala, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0" />
            <span>+91 471 2941400</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0" />
            <span>info@kimstrusthospital.com</span>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/50">
      © {new Date().getFullYear()} KIMS Trust Hospital. All rights reserved.
    </div>
  </footer>
);

export default Footer;
