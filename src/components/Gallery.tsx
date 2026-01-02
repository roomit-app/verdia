import f1 from "@/assets/f1.jpg";
import f2 from "@/assets/f2.jpg";
import f3 from "@/assets/f3.jpg";
import f4 from "@/assets/f4.jpg";
import f5 from "@/assets/f5.jpg";
import f6 from "@/assets/f6.jpg";
import f7 from "@/assets/f7.jpg";



const galleryImages = [
  { src: f1, alt: "Jardín residencial integrado en el paisaje." },
  { src: f2, alt: "Diseño de jardín moderno" },
  { src: f3, alt: "Zona exterior con diseño funcional" },
  { src: f4, alt: "Composición vegetal en entorno natural" },
  { src: f5, alt: "Proyecto de diseño de jardín a medida" },
  { src: f6, alt: "Acceso ajardinado con piedra natural" },
  { src: f7, alt: "Césped natural en área residencial" },



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
