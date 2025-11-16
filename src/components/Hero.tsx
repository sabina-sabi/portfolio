import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
          Bonjour, je suis
          <span className="block mt-2 text-white">Votre Nom</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Développeur passionné | Designer créatif | Innovateur
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="secondary"
            onClick={scrollToAbout}
            className="text-lg px-8"
          >
            Découvrir mon travail
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-lg px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Me contacter
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="w-8 h-8 text-primary-foreground" />
      </div>
    </section>
  );
};

export default Hero;
