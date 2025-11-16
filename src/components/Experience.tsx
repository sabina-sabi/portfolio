import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Développeur Full Stack",
      company: "Entreprise Tech ABC",
      period: "2023 - Présent",
      description: "Développement d'applications web modernes avec React et Node.js. Participation active à l'architecture et à l'optimisation des performances.",
      achievements: [
        "Amélioration des performances de 40%",
        "Migration vers une architecture microservices",
        "Mentorat de 3 développeurs juniors",
      ],
    },
    {
      title: "Développeur Frontend",
      company: "Startup Innovation XYZ",
      period: "2022 - 2023",
      description: "Création d'interfaces utilisateur réactives et accessibles. Collaboration étroite avec l'équipe UX/UI.",
      achievements: [
        "Implémentation de 50+ composants réutilisables",
        "Réduction du temps de chargement de 60%",
        "Mise en place de tests automatisés",
      ],
    },
    {
      title: "Stagiaire Développeur",
      company: "Agence Web Digital",
      period: "2021 - 2022",
      description: "Stage de fin d'études axé sur le développement web et mobile. Apprentissage des meilleures pratiques du secteur.",
      achievements: [
        "Développement de 5 sites web clients",
        "Participation aux revues de code",
        "Formation sur les méthodologies Agile",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Expériences Professionnelles</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-slide-up ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="p-6 ml-16 md:ml-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2" />
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent rounded-lg">
                        <Briefcase className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                        <p className="text-primary font-medium mb-3">{exp.company}</p>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <div className="space-y-2">
                          <p className="font-semibold text-sm">Réalisations clés :</p>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
