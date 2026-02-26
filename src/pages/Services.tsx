import { Ambulance, Clock, FlaskConical, Bed, HeartPulse, Pill } from "lucide-react";

const services = [
  { name: "24/7 Emergency", icon: Ambulance, desc: "Round-the-clock emergency services with fully equipped ambulances." },
  { name: "Outpatient Services", icon: Clock, desc: "Comprehensive outpatient consultations across all specialties." },
  { name: "Diagnostic Lab", icon: FlaskConical, desc: "State-of-the-art laboratory with advanced diagnostic equipment." },
  { name: "Inpatient Care", icon: Bed, desc: "Comfortable rooms with dedicated nursing care and monitoring." },
  { name: "Intensive Care", icon: HeartPulse, desc: "Modern ICU facilities with 24/7 critical care specialists." },
  { name: "Pharmacy", icon: Pill, desc: "In-house pharmacy with a wide range of medicines available 24/7." },
];

const Services = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-display font-bold text-primary-foreground mb-3">Our Services</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">Comprehensive healthcare services designed for your well-being.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.name} className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">{s.name}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Services;
