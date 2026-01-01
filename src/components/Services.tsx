import { Card, CardContent } from "@/components/ui/card";
import { Paintbrush, Scissors, Droplets, Trees } from "lucide-react";
import serviceDesign from "@/assets/service-design.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceIrrigation from "@/assets/service-irrigation.jpg";
import servicePruning from "@/assets/service-pruning.jpg";

const services = [
  {
    icon: Paintbrush,
    title: "Diseño de Jardines",
    description:
      "Creamos diseños personalizados que combinan estética y funcionalidad, adaptados a tu espacio y estilo de vida.",
    image: serviceDesign,
  },
  {
    icon: Scissors,
    title: "Mantenimiento",
    description:
      "Servicio integral de mantenimiento para mantener tu jardín siempre impecable durante todo el año.",
    image: serviceMaintenance,
  },
  {
    icon: Droplets,
    title: "Sistemas de Riego",
    description:
      "Instalación de sistemas de riego automático eficientes que ahorran agua y tiempo.",
    image: serviceIrrigation,
  },
  {
    icon: Trees,
    title: "Poda y Tratamientos",
    description:
      "Poda profesional de árboles y arbustos, tratamientos fitosanitarios y cuidado especializado.",
    image: servicePruning,
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Nuestros Servicios
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Soluciones Completas de Jardinería
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ofrecemos una gama completa de servicios profesionales para crear y
            mantener el jardín de tus sueños.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
