import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Master en Informatique",
      institution: "Université X",
      period: "2021 - 2023",
      description: "Spécialisation en développement logiciel et intelligence artificielle",
    },
    {
      degree: "Licence en Informatique",
      institution: "Université Y",
      period: "2018 - 2021",
      description: "Formation générale en informatique et programmation",
    },
    {
      degree: "Baccalauréat Sciences",
      institution: "Lycée Z",
      period: "2017 - 2018",
      description: "Mention Très Bien",
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Parcours Académique</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

            {/* Education Items */}
            <div className="space-y-12">
              {education.map((item, index) => (
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
                        <GraduationCap className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-bold">{item.degree}</h3>
                          <span className="text-sm text-muted-foreground">{item.period}</span>
                        </div>
                        <p className="text-primary font-medium mb-2">{item.institution}</p>
                        <p className="text-muted-foreground">{item.description}</p>
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

export default Education;
