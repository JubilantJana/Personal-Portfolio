import { motion } from "framer-motion";
import { Code, Server, Database, Wrench, Sparkles, Workflow } from "lucide-react";
import { SiJavascript, SiReact, SiNodedotjs, SiExpress, SiPython, SiFlask, SiPostgresql, SiMongodb } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code className="w-5 h-5 text-secondary" />,
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <SiReact /> },
    ]
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5 text-secondary" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Flask", icon: <SiFlask /> },
    ]
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5 text-secondary" />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ]
  },
  {
    title: "AI Tools",
    icon: <Sparkles className="w-5 h-5 text-secondary" />,
    skills: [
      { name: "GitHub Copilot" },
      { name: "Claude Code" },
      { name: "Ollama" },
      { name: "Replit AI" },
      { name: "Lovable" },
    ]
  },
  {
    title: "Dev & Automation",
    icon: <Wrench className="w-5 h-5 text-secondary" />,
    skills: [
      { name: "VS Code" },
      { name: "Postman" },
      { name: "SonarQube" },
      { name: "Zapier" },
      { name: "n8n" },
    ]
  },
  {
    title: "Agile Tools",
    icon: <Workflow className="w-5 h-5 text-secondary" />,
    skills: [
      { name: "Jira" },
      { name: "Mural" },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Technical Expertise</h2>
            <div className="h-px bg-border flex-1 ml-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-accent/50 dark:bg-accent/20">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span 
                      key={skill.name} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted text-muted-foreground text-sm font-medium rounded-md border border-border/50"
                    >
                      {skill.icon && <span className="text-primary dark:text-white/70">{skill.icon}</span>}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
