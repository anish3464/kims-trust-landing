import { Briefcase } from "lucide-react";

const openings = [
  { title: "Staff Nurse", dept: "Nursing", type: "Full-time" },
  { title: "Resident Doctor", dept: "General Medicine", type: "Full-time" },
  { title: "Lab Technician", dept: "Pathology", type: "Full-time" },
  { title: "Pharmacist", dept: "Pharmacy", type: "Full-time" },
];

const Career = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-display font-bold text-primary-foreground mb-3">Career Opportunities</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">Join our team and make a difference in healthcare.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl space-y-4">
        {openings.map((job) => (
          <div key={job.title} className="bg-card border border-border rounded-xl p-6 flex items-center justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-card-foreground">{job.title}</h3>
                <p className="text-muted-foreground text-sm">{job.dept} · {job.type}</p>
              </div>
            </div>
            <span className="text-primary font-semibold text-sm cursor-pointer hover:underline">Apply →</span>
          </div>
        ))}
        <p className="text-center text-muted-foreground text-sm mt-8">
          Send your resume to <span className="text-primary font-medium">careers@kimstrusthospital.com</span>
        </p>
      </div>
    </section>
  </div>
);

export default Career;
