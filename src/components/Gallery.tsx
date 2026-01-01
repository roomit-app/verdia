import heroGarden from "@/assets/hero-garden.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceIrrigation from "@/assets/service-irrigation.jpg";
import servicePruning from "@/assets/service-pruning.jpg";

const galleryImages = [
  { src: heroGarden, alt: "Jardín con camino de piedra" },
  { src: serviceDesign, alt: "Diseño de jardín moderno" },
  { src: serviceMaintenance, alt: "Mantenimiento de jardines" },
  { src: serviceIrrigation, alt: "Sistema de riego automático" },
  { src: servicePruning, alt: "Poda profesional de árboles" },
  { src: heroGarden, alt: "Jardín paisajístico" },
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Nuestros Trabajos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Galería de Proyectos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Descubre algunos de nuestros proyectos más destacados y déjate
            inspirar para tu próximo jardín.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className={index === 0 ? "aspect-square" : "aspect-square"}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-card font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
