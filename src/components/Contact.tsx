import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ContactInfoItem = {
  icon: React.ElementType;
  title: string;
  content: string;
  href?: string;
};

const contactInfo: ContactInfoItem[] = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Ames, A Coruña",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+34 611 616 469",
    href: "tel:+34611616469",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@verdiajardineria.com",
    href: "mailto:info@verdiajardineria.com",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun - Vie: 8:00 - 18:00\nSáb: 9:00 - 14:00",
  },
];

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      toast({
        title: "¡Mensaje enviado!",
        description: "Te responderemos lo antes posible.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Inténtalo más tarde.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Contacto
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Solicita tu Presupuesto Gratis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cuéntanos sobre tu proyecto y te contactaremos en menos de 24 horas
            con un presupuesto personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info */}
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <Card key={info.title} className="border-border">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground whitespace-pre-line text-sm">
                      {info.href ? (
                        <a
                          href={info.href}
                          className="hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        info.content
                      )}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Formulario */}
          <Card className="lg:col-span-2 border-border">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <Textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <Button type="submit" size="lg">
                  Enviar Mensaje
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
