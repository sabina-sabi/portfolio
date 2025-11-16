import { User, Mail, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">À propos de moi</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-primary-dark overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <User className="w-48 h-48 text-primary-foreground opacity-50" />
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="animate-slide-up space-y-6">
            <h3 className="text-2xl font-bold">Bienvenue sur mon portfolio</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Passionné par la technologie et l'innovation, je me consacre à créer
              des solutions numériques qui font la différence. Mon parcours m'a
              permis de développer des compétences solides en développement et en
              conception.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Je suis constamment à la recherche de nouveaux défis et d'opportunités
              pour apprendre et grandir professionnellement.
            </p>

            {/* Contact Info Cards */}
            <div className="grid gap-4 mt-8">
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <Mail className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">votre.email@example.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <MapPin className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Localisation</p>
                    <p className="font-medium">Votre Ville, Pays</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
