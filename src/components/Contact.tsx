import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ContactInfoItem = {
  icon: React.ElementType;
  title: string;
  content: string;
  href?: string; // tel: o mailto:
  copyValue?: string; // si existe, mostramos botón de copiar
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
    copyValue: "+34 611 616 469",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@verdiajardineria.com",
    href: "mailto:info@verdiajardineria.com",
    copyValue: "info@verdiajardineria.com",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun - Vie: 8:00 - 18:00\nSáb: 9:00 - 14:00",
  },
];

const Contact = () => {
  const { toast } = useToast();

  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast({
        title: "Copiado",
        description: "Se ha copiado al portapapeles.",
      });
    } catch {
      toast({
        title: "No se pudo copiar",
        description: "Tu navegador bloqueó el portapapeles.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // OJO: ruta ABSOLUTA, sin ../ y sin .ts
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Si la API devuelve error, lo leemos (para depurar)
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "No se pudo enviar");
      }

      toast({
        title: "¡Mensaje enviado!",
        description: "Te responderemos lo antes posible.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      toast({
        title: "Error",
        description: err?.message || "No se pudo enviar el mensaje.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
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
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <Card key={info.title} className="border-border">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-accent-foreground" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h3>

                    <div className="flex items-start gap-2">
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

                      {info.copyValue ? (
                        <button
                          type="button"
                          onClick={() => handleCopy(info.copyValue!)}
                          className="mt-0.5 inline-flex items-center justify-center rounded-md border border-border px-2 py-1 text-xs text-foreground hover:bg-accent transition-colors"
                          aria-label={`Copiar ${info.title}`}
                          title={`Copiar ${info.title}`}
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                      ) : null}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 border-border">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nombre completo *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+34 600 000 000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe tu jardín, qué servicios necesitas, dimensiones aproximadas..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto"
                  disabled={isSending}
                >
                  {isSending ? "Enviando..." : "Enviar Mensaje"}
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
