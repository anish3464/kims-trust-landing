import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-display font-bold text-primary-foreground mb-3">Contact Us</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">We're here to help. Reach out to us anytime.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-bold text-foreground">Get in Touch</h2>
          {[
            { icon: MapPin, label: "Address", value: "KIMS Trust Hospital, Thiruvananthapuram, Kerala 695011, India" },
            { icon: Phone, label: "Phone", value: "+91 471 2941400" },
            { icon: Mail, label: "Email", value: "info@kimstrusthospital.com" },
            { icon: Clock, label: "Hours", value: "24/7 Emergency Services\nOPD: Mon-Sat 8:00 AM - 8:00 PM" },
          ].map((c) => (
            <div key={c.label} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">{c.label}</h3>
                <p className="text-muted-foreground text-sm whitespace-pre-line">{c.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send a Message</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground" />
            <input type="email" placeholder="Email Address" className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground" />
            <input type="tel" placeholder="Phone Number" className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground" />
            <textarea rows={4} placeholder="Your Message" className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none placeholder:text-muted-foreground" />
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
