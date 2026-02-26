import { Image } from "lucide-react";

const galleryItems = [
  "Hospital Main Building",
  "ICU Facility",
  "Operation Theatre",
  "Patient Rooms",
  "Diagnostic Lab",
  "Pharmacy",
  "Reception Area",
  "Garden & Exterior",
];

const Gallery = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-display font-bold text-primary-foreground mb-3">Gallery</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">A glimpse into our world-class facilities.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryItems.map((item) => (
          <div key={item} className="aspect-square bg-secondary rounded-xl flex flex-col items-center justify-center gap-3 hover:bg-secondary/80 transition-colors">
            <Image className="h-8 w-8 text-secondary-foreground/50" />
            <span className="text-secondary-foreground text-sm font-medium text-center px-2">{item}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-muted-foreground text-sm mt-8">More images coming soon.</p>
    </section>
  </div>
);

export default Gallery;
