import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "AI Complaint Management Platform",
    problem: "Enterprise support teams drowning in unstructured complaint tickets with no intelligent routing or resolution guidance.",
    solution: "Multi-agent AI system that analyzes incoming tickets, classifies intent, routes to the right team, and suggests resolution steps.",
    impact: "Projected 60% reduction in support handling effort. Won Gen AI Ideathon at TCS.",
    tech: ["Python", "LangChain", "PostgreSQL", "React"]
  },
  {
    title: "Developer Productivity Suite",
    problem: "Engineering teams lacking unified tooling for code review, knowledge sharing, and onboarding.",
    solution: "Internal platform consolidating review workflows, documentation, and guided onboarding paths in a single interface.",
    impact: "Adopted by 500+ engineers. Reduced onboarding time from 3 weeks to 5 days.",
    tech: ["Node.js", "React", "MongoDB", "Express.js"]
  },
  {
    title: "Process Automation Engine",
    problem: "High-volume manual data processing workflows creating bottlenecks and human errors in enterprise reporting.",
    solution: "Python-based automation framework with scheduled jobs, error monitoring, and stakeholder notifications.",
    impact: "40% reduction in processing time. Eliminated 95% of manual errors.",
    tech: ["Python", "Flask", "PostgreSQL", "Zapier"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Projects</h2>
          <div className="h-px bg-border flex-1 ml-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image Area Placeholder */}
              <div className="h-48 w-full bg-gradient-to-br from-primary/5 via-accent/30 to-background flex items-center justify-center border-b border-border">
                <span className="font-serif italic text-muted-foreground/50 text-sm">Project Visual</span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold font-serif mb-4 text-primary dark:text-white group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-4 text-sm mb-6 flex-1 text-foreground/80">
                  <div>
                    <span className="font-semibold block text-primary/80 dark:text-white/80 mb-1">Problem</span>
                    <p className="font-light">{project.problem}</p>
                  </div>
                  <div>
                    <span className="font-semibold block text-primary/80 dark:text-white/80 mb-1">Solution</span>
                    <p className="font-light">{project.solution}</p>
                  </div>
                  <div>
                    <span className="font-semibold block text-primary/80 dark:text-white/80 mb-1">Impact</span>
                    <p className="font-light text-secondary font-medium">{project.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 text-xs font-medium bg-muted rounded-md text-muted-foreground border border-border/50">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
                  <Button variant="outline" size="sm" className="flex-1 rounded-full h-9">
                    Case Study
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full h-9 w-9" title="GitHub">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full h-9 w-9" title="Live Demo">
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
