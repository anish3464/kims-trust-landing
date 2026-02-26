import { Building2, Target, Award } from "lucide-react";

const Profile = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-display font-bold text-primary-foreground mb-3">Hospital Profile</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">Learn about our journey, mission, and commitment to healthcare excellence.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl space-y-12">
        {[
          { icon: Building2, title: "About Us", text: "KIMS Trust Hospital is a leading multi-specialty hospital in Kerala, committed to providing affordable, accessible, and high-quality healthcare. Established with a vision to serve the community, we have grown into one of the most trusted healthcare institutions in South India." },
          { icon: Target, title: "Our Mission", text: "To provide comprehensive healthcare with compassion, integrity, and clinical excellence. We aim to make advanced medical care accessible to everyone regardless of their background." },
          { icon: Award, title: "Our Vision", text: "To be the most trusted healthcare provider in Kerala, known for innovation, quality, and patient-centered care that sets national benchmarks in medical excellence." },
        ].map((s) => (
          <div key={s.title} className="flex gap-6 items-start">
            <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0">
              <s.icon className="h-7 w-7 text-secondary-foreground" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Profile;
