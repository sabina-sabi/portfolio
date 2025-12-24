import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "farizafaradji@gmail.com",
      href: "mailto:farizafaradji@gmail.com",
    },

    {
      icon: MapPin,
      label: "Localisation",
      value: "Nanterre, Île-de-France",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/fariza-faradji", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/fari-za", label: "GitHub" },
  ];

  return (
    <section id="contact" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contactez-moi</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={item.href}
                  className="flex flex-col items-center gap-4"
                  target={item.label === "Email" ? "_blank" : undefined}
                  rel={item.label === "Email" ? "noopener noreferrer" : undefined}
                >
                  <div className="p-4 bg-accent rounded-full">
                    <item.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <Card className="p-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-bold text-center mb-6">Retrouvez-moi sur</h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                </Button>
              ))}
            </div>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="mailto:farizafaradji@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Envoyer un email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
