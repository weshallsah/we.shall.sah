import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/data/portfolio';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the valuable experiences that have shaped my career.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={experience.id} className="relative modern-card">
                {/* Timeline connector */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-border" />
                )}

                <CardHeader>
                  <div className="flex items-start gap-4">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2 relative z-10" />

                    <div className="flex-1">
                      <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <span>{experience.position}</span>
                        <Badge variant="outline" className="w-fit">
                          <Calendar className="h-3 w-3 mr-1" />
                          {experience.duration}
                        </Badge>
                      </CardTitle>

                      <div className="flex items-center gap-2 text-primary font-medium mb-3">
                        <Briefcase className="h-4 w-4" />
                        {experience.company}
                      </div>

                      <CardContent className="p-0">
                        <p className="text-muted-foreground mb-4">
                          {experience.description}
                        </p>

                        {experience.technologies && (
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
