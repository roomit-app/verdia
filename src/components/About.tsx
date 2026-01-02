import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import nosotros from "@/assets/nosotros.jpg";

const features = [
  "Profesionales certificados y con experiencia",
  "Materiales y plantas de primera calidad",
  "Presupuestos transparentes sin sorpresas",
  "Garantía en todos nuestros trabajos",
  "Atención personalizada y cercana",
  "Respeto por el medio ambiente",
];

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={nosotros}
                alt="Equipo Verdia Jardinería"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden md:block">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm opacity-90">Años de Experiencia</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Sobre Nosotros
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Tu jardín, nuestra pasión
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              En Verdia Jardinería llevamos más de 15 años transformando espacios
              exteriores en auténticos paraísos verdes. Nuestro equipo de
              profesionales combina experiencia, creatividad y pasión por la
              naturaleza para ofrecerte resultados excepcionales.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Trabajamos con particulares, comunidades y empresas, adaptando
              nuestros servicios a las necesidades específicas de cada proyecto.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" asChild>
              <a href="#contacto">
                Conócenos Mejor
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
