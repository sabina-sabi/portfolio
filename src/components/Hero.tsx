import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0f2e5e] to-black"
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />

      {/* Content */}
      <div className="z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Bonjour, je suis
          <span className="block mt-2 text-blue-400">
            Fariza Faradji
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Étudiante en informatique • Développement & Data
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="px-8 text-lg bg-blue-500 hover:bg-blue-600"
            onClick={() => scrollTo("#about")}
          >
            Découvrir mon profil
          </Button>

          <Button
            size="lg"
            className="px-8 text-lg bg-blue-500 hover:bg-blue-600"
            onClick={() => scrollTo("#projects")}
          >
            Voir mes projets
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="
              px-8 text-lg
              border-white/70
              text-black
              hover:bg-white
              hover:text-black
              transition
            "
            onClick={() => scrollTo("#contact")}
          >
            Me contacter
          </Button>

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition"
      >
        <ArrowDown className="w-7 h-7 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
