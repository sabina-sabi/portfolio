import { User, Mail, MapPin, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/portfolio/photo_portfolio.png" 
                  alt="photo Fariza FARADJI" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>


          {/* About Content */}
          <div className="animate-slide-up space-y-6">
            <h3 className="text-2xl font-bold">Bienvenue sur mon portfolio</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Étudiante en Licence 3 Informatique à CY Cergy Paris Université, je suis actuellement 
              à la recherche d'un stage de 2 à 4 mois dans les domaines de la Data, du Développement 
              ou de l'IT, à partir d'avril 2026 (éventuellement suivi d'une alternance de 2 ans à partir 
              de septembre 2026).
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              
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
                    <p className="font-medium">farizafaradji@gmail.com</p>
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
                    <p className="font-medium">Île-de-France</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* CV Download Button */}
            <div className="mt-8">
              <Button size="lg" className="w-full" asChild>
                <a href="/portfolio/CV_Fariza_FARADJI.pdf" download="CV_Fariza_FARADJI.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger mon CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
