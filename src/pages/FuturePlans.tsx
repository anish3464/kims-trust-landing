import { Rocket, Building, Users, Leaf } from "lucide-react";

const plans = [
  { icon: Building, title: "New Specialty Wing", desc: "Expanding with a dedicated oncology and transplant center by 2027." },
  { icon: Rocket, title: "Telemedicine Services", desc: "Launching remote consultation services to reach rural Kerala communities." },
  { icon: Users, title: "Medical Education", desc: "Establishing a medical training institute for next-generation healthcare professionals." },
  { icon: Leaf, title: "Green Hospital Initiative", desc: "Transitioning to sustainable, eco-friendly hospital operations." },
];

const FuturePlans = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-display font-bold text-primary-foreground mb-3">Future Plans</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">Our roadmap to transform healthcare in Kerala.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl space-y-8">
        {plans.map((plan, i) => (
          <div key={plan.title} className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <plan.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">{plan.title}</h3>
              <p className="text-muted-foreground">{plan.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default FuturePlans;
