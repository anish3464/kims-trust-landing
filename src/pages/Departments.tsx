import { Heart, Brain, Baby, Eye, Bone, Stethoscope, Pill, Scissors, Ear, Microscope, Siren, Waves } from "lucide-react";

const departments = [
  { name: "Cardiology", icon: Heart, desc: "Comprehensive heart care including interventional cardiology, cardiac surgery, and rehabilitation." },
  { name: "Neurology", icon: Brain, desc: "Expert treatment for neurological disorders with advanced diagnostic facilities." },
  { name: "Pediatrics", icon: Baby, desc: "Specialized healthcare for infants, children, and adolescents." },
  { name: "Ophthalmology", icon: Eye, desc: "Complete eye care from diagnostics to advanced surgical procedures." },
  { name: "Orthopedics", icon: Bone, desc: "Joint replacement, sports medicine, and spine surgery specialists." },
  { name: "General Medicine", icon: Stethoscope, desc: "Primary care and management of chronic medical conditions." },
  { name: "Pharmacy", icon: Pill, desc: "24/7 pharmacy services with a comprehensive range of medications." },
  { name: "General Surgery", icon: Scissors, desc: "Minimally invasive and conventional surgical procedures." },
  { name: "ENT", icon: Ear, desc: "Treatment for ear, nose, and throat conditions." },
  { name: "Pathology", icon: Microscope, desc: "Advanced diagnostic laboratory services." },
  { name: "Emergency Medicine", icon: Siren, desc: "Round-the-clock emergency and trauma care." },
  { name: "Physiotherapy", icon: Waves, desc: "Rehabilitation and physical therapy programs." },
];

const Departments = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-display font-bold text-primary-foreground mb-3">Our Departments</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">Comprehensive specialties delivering world-class medical care.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <div key={dept.name} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <dept.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{dept.name}</h3>
            <p className="text-muted-foreground text-sm">{dept.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Departments;
