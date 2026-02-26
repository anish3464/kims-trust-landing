import { User } from "lucide-react";

const doctors = [
  { name: "Dr. Rajesh Kumar", specialty: "Cardiology", qualification: "MD, DM (Cardiology)" },
  { name: "Dr. Priya Menon", specialty: "Neurology", qualification: "MD, DM (Neurology)" },
  { name: "Dr. Suresh Nair", specialty: "Orthopedics", qualification: "MS (Ortho), MCh" },
  { name: "Dr. Lakshmi Devi", specialty: "Pediatrics", qualification: "MD (Pediatrics)" },
  { name: "Dr. Anil Varma", specialty: "General Surgery", qualification: "MS, FRCS" },
  { name: "Dr. Meera Krishnan", specialty: "Ophthalmology", qualification: "MS (Ophthalmology)" },
  { name: "Dr. Thomas George", specialty: "ENT", qualification: "MS (ENT)" },
  { name: "Dr. Deepa Raj", specialty: "General Medicine", qualification: "MD (Medicine)" },
];

const Doctors = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-display font-bold text-primary-foreground mb-3">Our Doctors</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">Meet our team of highly experienced medical professionals.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((doc) => (
          <div key={doc.name} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
              <User className="h-10 w-10 text-secondary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-card-foreground">{doc.name}</h3>
            <p className="text-primary text-sm font-medium mt-1">{doc.specialty}</p>
            <p className="text-muted-foreground text-xs mt-1">{doc.qualification}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Doctors;
