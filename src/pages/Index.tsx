import { Link } from "react-router-dom";
import { Heart, Brain, Baby, Eye, Bone, Stethoscope, Activity, Syringe } from "lucide-react";
import heroImg from "@/assets/hero-hospital.jpg";

const departments = [
  { name: "Cardiology", icon: Heart, desc: "Advanced cardiac care & surgery" },
  { name: "Neurology", icon: Brain, desc: "Brain & nervous system specialists" },
  { name: "Pediatrics", icon: Baby, desc: "Expert care for children" },
  { name: "Ophthalmology", icon: Eye, desc: "Complete eye care solutions" },
  { name: "Orthopedics", icon: Bone, desc: "Joint & bone specialists" },
  { name: "General Medicine", icon: Stethoscope, desc: "Comprehensive medical care" },
];

const stats = [
  { value: "25+", label: "Years of Service" },
  { value: "200+", label: "Expert Doctors" },
  { value: "50+", label: "Departments" },
  { value: "1M+", label: "Patients Served" },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="KIMS Trust Hospital Building"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background leading-tight mb-4">
              Trusted Healthcare in Kerala
            </h1>
            <p className="text-background/80 text-lg mb-8 font-body">
              Where compassion meets cutting-edge medical excellence. Your health, our commitment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/departments"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Our Departments
              </Link>
              <Link
                to="/contact"
                className="bg-background/20 backdrop-blur text-background border border-background/30 px-6 py-3 rounded-lg font-semibold hover:bg-background/30 transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">{s.value}</div>
              <div className="text-primary-foreground/70 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">Our Departments</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive specialties staffed by experienced medical professionals
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <div
                key={dept.name}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <dept.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-1">{dept.name}</h3>
                <p className="text-muted-foreground text-sm">{dept.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/departments" className="text-primary font-semibold hover:underline">
              View All Departments →
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">Why Choose KIMS Trust?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Activity, title: "State-of-the-Art Facilities", desc: "Equipped with the latest medical technology and infrastructure for accurate diagnosis and treatment." },
              { icon: Stethoscope, title: "Expert Medical Team", desc: "Our team of 200+ doctors includes nationally and internationally renowned specialists." },
              { icon: Syringe, title: "Patient-Centric Care", desc: "We prioritize patient comfort and well-being with personalized treatment plans." },
            ].map((item) => (
              <div key={item.title} className="text-center px-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-secondary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
            Need Medical Assistance?
          </h2>
          <p className="text-primary-foreground/70 mb-6 max-w-lg mx-auto">
            Our team is available 24/7. Reach out to us for appointments, emergencies, or any queries.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
