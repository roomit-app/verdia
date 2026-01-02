import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-6">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">
              Expertos en Jardinería desde 2010
            </span>
          </div>

         <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-card mb-6 leading-tight">
            Diseñamos y cuidamos jardines{" "}
            <span className="text-chart-2">con respeto por la tierra y atención al detalle</span>
          </h1>


          <p className="text-lg md:text-xl text-card/90 mb-8 max-w-2xl mx-auto">
            Diseño, mantenimiento y cuidado profesional de jardines.
            Creamos espacios verdes únicos que reflejan tu estilo de vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <a href="#contacto">
                Solicitar Presupuesto
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 bg-card/10 border-card/30 text-card hover:bg-card/20 hover:text-card"
            >
              <a href="#servicios">Ver Servicios</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/20">
            {[
              { number: "15+", label: "Años de Experiencia" },
              { number: "500+", label: "Proyectos Completados" },
              { number: "100%", label: "Clientes Satisfechos" },
              { number: "24/7", label: "Soporte Disponible" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
