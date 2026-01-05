import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/portfolio';
import { Server, Database, Globe, Cpu, FileCode, User, Wrench } from 'lucide-react';

const skillCategories = {
  languages: { icon: FileCode, label: 'Languages', color: 'text-blue-600' },
  backend: { icon: Server, label: 'Backend & Systems', color: 'text-green-600' },
  databases: { icon: Database, label: 'Databases', color: 'text-purple-600' },
  web3: { icon: Globe, label: 'Web3 & Blockchain', color: 'text-orange-600' },
  infrastructure: { icon: Cpu, label: 'Infrastructure', color: 'text-red-600' },
  tools: { icon: Wrench, label: 'Tools & Platforms', color: 'text-gray-600' },
};

export function About() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives my passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div>
            <Card className="modern-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Main Introduction */}
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Versatile backend engineer with expertise in both Web2 and Web3 technologies. Skilled in building scalable Node.js backends, Spring Boot microservices, blockchain protocols, and secure infrastructure. Experienced in payment systems, API gateways, decentralized content access, and the intersection of traditional and blockchain-based architectures.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-base mt-4">
                    Currently pursuing B.Tech in Computer Science Engineering at Gyan Ganga College of Technology (CGPA: 7.61),
                    I specialize in creating robust backend architectures that power both conventional applications and decentralized protocols.
                  </p>
                </div>

                {/* Code Example */}
                <div className="code-block p-6 mb-8">
                  <div className="text-code-keyword">const</div>{' '}
                  <div className="text-code-variable">backendEngineer</div> = {'{'}
                  <br />
                  {'  '}skills: [<span className="text-code-string">&apos;Node.js&apos;</span>, <span className="text-code-string">&apos;Spring Boot&apos;</span>, <span className="text-code-string">&apos;Solidity&apos;</span>],
                  <br />
                  {'  '}expertise: <span className="text-code-string">&apos;Web2 ↔ Web3 Integration&apos;</span>,
                  <br />
                  {'  '}passion: <span className="text-code-function">buildBridges</span>()
                  <br />
                  {'}'};
                </div>

                {/* Expertise Areas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Web2 Expertise
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                        Node.js & Spring Boot microservices
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                        RESTful API design & rate limiting
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                        Database optimization (PostgreSQL, MongoDB)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                        AWS cloud deployments
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-purple-600 flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      Web3 Expertise
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                        Smart contracts & protocol design
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                        Decentralized content access (Lit Protocol)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                        NFT standards & IP licensing
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                        Cryptographic infrastructure
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Mission Statement */}
                <div className="bg-gradient-to-r from-primary/5 to-purple-500/5 p-4 rounded-lg border border-primary/10">
                  <p className="text-foreground font-medium text-center">
                    &ldquo;Building the bridge between traditional systems and decentralized future&rdquo;
                  </p>
                </div>

                {/* Interests */}
                <div className="pt-2">
                  <h4 className="font-semibold mb-3 text-center">Passionate About</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">System Architecture</Badge>
                    <Badge variant="secondary" className="bg-purple-500/10 text-purple-600 border-purple-500/20">Protocol Design</Badge>
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 border-blue-500/20">Scalable Backends</Badge>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">Security & Crypto</Badge>
                    <Badge variant="secondary" className="bg-orange-500/10 text-orange-600 border-orange-500/20">Innovation</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => {
              const { icon: Icon, label, color } = skillCategories[category as keyof typeof skillCategories];
              return (
                <Card key={category} className="modern-card">
                  <CardHeader>
                    <CardTitle className={`flex items-center gap-2 text-lg ${color}`}>
                      <Icon className="h-5 w-5" />
                      {label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-4">
                      {categorySkills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm">{skill.name}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-full bg-muted/50 rounded-full h-2 max-w-24">
                                <div
                                  className={`h-2 rounded-full transition-all duration-700 ${
                                    skill.level >= 4 ? 'bg-green-500' :
                                    skill.level >= 3 ? 'bg-yellow-500' : 'bg-red-500'
                                  }`}
                                  style={{ width: `${(skill.level / 5) * 100}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground min-w-8">
                                {skill.level}/5
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
