import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Application Web E-commerce",
      description: "Plateforme complète de commerce en ligne avec panier, paiements sécurisés et gestion des stocks",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Application Mobile de Gestion",
      description: "App mobile pour la gestion de tâches et projets avec synchronisation en temps réel",
      technologies: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Système de Recommandation IA",
      description: "Algorithme d'apprentissage automatique pour recommandations personnalisées",
      technologies: ["Python", "TensorFlow", "FastAPI"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=500&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Dashboard Analytics",
      description: "Interface de visualisation de données avec graphiques interactifs et rapports automatisés",
      technologies: ["Vue.js", "D3.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
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
