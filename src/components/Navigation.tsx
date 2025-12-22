import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [onHero, setOnHero] = useState(true);

  // Detect scroll (for shadow / background)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect if hero section is visible
  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOnHero(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: "Accueil", href: "#home" },
    { label: "À propos", href: "#about" },
    { label: "Formation", href: "#education" },
    { label: "Projets", href: "#projects" },
    { label: "Expériences", href: "#experience" },
    { label: "Certificats", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-40 transition-all duration-300
          ${
            onHero
              ? "bg-transparent text-white"
              : "bg-white/95 backdrop-blur-md shadow-md text-black"
          }
        `}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className={`
                text-2xl font-bold transition-colors
                ${onHero ? "text-white" : "text-primary"}
              `}
            >
              Portfolio
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`
                    font-medium transition-colors
                    ${
                      onHero
                        ? "text-gray-200 hover:text-white"
                        : "text-gray-700 hover:text-black"
                    }
                  `}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${onHero ? "text-white" : "text-black"}`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU FULLSCREEN */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gradient-to-b from-[#0A2540] to-black md:hidden flex flex-col px-6 pt-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-blue-400">Portfolio</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-2xl"
            >
              <X />
            </button>
          </div>

          {/* Links */}
          <div className="mt-16 flex flex-col gap-8 text-center">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-2xl text-gray-200 hover:text-white transition"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
