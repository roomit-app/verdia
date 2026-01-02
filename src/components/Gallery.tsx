//import f1 from "@/assets/f1.jpg";
import f2 from "@/assets/f2.jpg";
import f3 from "@/assets/f3.jpg";
import f4 from "@/assets/f4.jpg";
import f5 from "@/assets/f5.jpg";
import f6 from "@/assets/f6.jpg";
import f7 from "@/assets/f7.jpg";



const galleryImages = [
  //{ src: f1, alt: "Jardín residencial integrado en el paisaje." },
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
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Nuestros trabajos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Galería de proyectos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Espacios diseñados para integrarse con la naturaleza y mejorar la
            forma de vivirlos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-xl group cursor-pointer
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
                ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}
              `}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-card text-sm font-medium leading-snug">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
