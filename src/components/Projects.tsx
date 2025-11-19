import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Système de gestion de parking connecté",
      description: "Conception d'un système distribué avec des bornes simulées (en Python) communiquant via TCP avec un serveur applicatif (Java) relié à une base PostgreSQL. Site web pour le suivi en temps réel, la gestion et l'analyse des données.",
      technologies: ["Python", "Java", "PostgreSQL", "TCP", "Web"],
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&h=500&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Simulateur d'un système de gestion de bases de données",
      description: "Développement en Java d'un simulateur de SGBD interprétant des requêtes SQL et générant des plans d'exécution en arbre binaire, avec tests unitaires (JUnit).",
      technologies: ["Java", "SQL", "JUnit"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=500&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Site web pour la météo",
      description: "Développement d'un site web de visualisation de données météo en temps réel. Suivi des villes consultées, gestion des préférences via cookies et affichage statistique. Intégration d'APIs externes avec échanges de données aux formats XML et JSON.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "API", "XML", "JSON"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Extraction et manipulation de métadonnées d'images",
      description: "Développement en Java d'une application pour extraire et manipuler les métadonnées EXIF/XMP d'images via des bibliothèques Java.",
      technologies: ["Java", "EXIF", "XMP"],
      image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&h=500&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Mes Projets</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez une sélection de mes projets académiques et personnels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="default" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
