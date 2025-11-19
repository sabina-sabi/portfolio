import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Certificates = () => {
  const certificates = [
    {
      title: "Introduction à la Cybersécurité",
      issuer: "Cisco Networking Academy",
      date: "2024",
      description: "Formation complète sur les fondamentaux de la cybersécurité et les meilleures pratiques de protection",
      skills: ["Sécurité", "Réseaux", "Protection"],
      badge: true,
      badgeUrl: "https://www.credly.com/badges/your-badge-id",
    },
    {
      title: "Introduction à la science des données",
      issuer: "Cisco Networking Academy",
      date: "2024",
      description: "Formation aux concepts fondamentaux de la science des données et à l'analyse de données",
      skills: ["Data Science", "Analyse de données", "Python"],
      badge: true,
      badgeUrl: "https://www.credly.com/badges/your-badge-id",
    },
    {
      title: "Développement Web",
      issuer: "Formation académique",
      date: "2024",
      description: "Certification en développement web moderne avec HTML, CSS, JavaScript et PHP",
      skills: ["HTML", "CSS", "JavaScript", "PHP"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    },
    {
      title: "Google Developer Student Club (GDSC)",
      issuer: "Google",
      date: "2023",
      description: "Participation active au programme GDSC pendant 6 mois - apprentissage des technologies Google et développement de projets",
      skills: ["Google Cloud", "Développement", "Collaboration"],
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certificats & Qualifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mes certifications professionnelles et formations continues
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-accent rounded-lg">
                    <Award className="w-6 h-6 text-accent-foreground" />
                  </div>
                  {cert.badge && (
                    <Badge variant="secondary" className="text-xs">
                      Badge en ligne
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                  <CardDescription className="flex flex-col gap-1">
                    <span className="font-medium text-primary">{cert.issuer}</span>
                    <span className="text-sm">{cert.date}</span>
                  </CardDescription>
                </div>

                {cert.image && !cert.badge && (
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <p className="text-sm text-muted-foreground">{cert.description}</p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {cert.badge && (
                  <Button variant="default" size="sm" className="w-full" asChild>
                    <a href={cert.badgeUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Voir le badge
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground">
            Pour ajouter vos certificats, téléchargez les images de vos certificats PDF
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
