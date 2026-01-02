import { Facebook, Instagram, Twitter, Linkedin, Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-2xl font-bold">
                Verdia<span className="text-primary">Jardinería</span>
              </span>
            </div>
            <p className="text-background/70 max-w-md">
              Transformamos espacios exteriores en jardines de ensueño. Más de 15
              años creando belleza natural para hogares y empresas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {["Inicio", "Servicios", "Nosotros", "Galería", "Contacto"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-background/70 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              {[
                "Diseño de Jardines",
                "Mantenimiento",
                "Sistemas de Riego",
                "Poda Profesional",
                "Tratamientos",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} Verdia Jardinería. Todos los derechos reservados.
          </p>

          <div className="flex gap-4">
            {[
             // { icon: Facebook, href: "#" },
              { icon: Instagram, href: "https://www.instagram.com/verdiajardineria/" },
             // { icon: Twitter, href: "#" },
              //{ icon: Linkedin, href: "#" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors group"
              >
                <Icon className="w-5 h-5 text-background/70 group-hover:text-primary-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
