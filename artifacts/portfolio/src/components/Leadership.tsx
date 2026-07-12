import { motion } from "framer-motion";
import { Mic, Users, Presentation, UserPlus, HeartHandshake } from "lucide-react";

const leadership = [
  {
    title: "Toastmasters Leadership",
    tagline: "Area Director · Assistant Area Director · President · Vice President",
    description: "Led 10+ leadership initiatives, speech contests and officer training programs, supporting 50+ members across clubs while driving member engagement, leadership development and public speaking excellence.",
    icon: <Mic className="w-6 h-6 text-primary dark:text-white" />
  },
  {
    title: "Client Visits & Town Halls",
    tagline: "Executive Engagement Lead",
    description: "Coordinated 20+ leadership town halls and client visits, managing stakeholder communication and event execution to deliver seamless experiences for executives, clients and employees.",
    icon: <Users className="w-6 h-6 text-primary dark:text-white" />
  },
  {
    title: "Engineering Tech Talks",
    tagline: "Tech Talk Lead",
    description: "Established a quarterly knowledge-sharing program by coordinating speakers, curating technical topics and managing end-to-end execution — resulting in 300+ employee participants.",
    icon: <Presentation className="w-6 h-6 text-primary dark:text-white" />
  },
  {
    title: "Freshers Workplace Experience",
    tagline: "Engagement Lead",
    description: "Planned immersive workplace visits for 100+ graduate hires, coordinating cross-functional stakeholders to introduce company culture, engineering practices and organizational workflows.",
    icon: <UserPlus className="w-6 h-6 text-primary dark:text-white" />
  },
  {
    title: "Employee Engagement Programs",
    tagline: "Engagement Lead",
    description: "Designed and executed 15+ engagement initiatives, cultural events and awareness campaigns that strengthened collaboration, increased participation and fostered an inclusive workplace culture for 500+ employees.",
    icon: <HeartHandshake className="w-6 h-6 text-primary dark:text-white" />
  }
];

export function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-primary text-primary-foreground dark:bg-card/50 dark:text-foreground">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Leadership Beyond the Role</h2>
            <div className="h-px bg-white/20 dark:bg-border flex-1 ml-4" />
          </div>

          <div className="space-y-8">
            {leadership.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-white/5 dark:bg-card border border-white/10 dark:border-border hover:bg-white/10 transition-colors"
              >
                <div className="shrink-0 w-16 h-16 rounded-xl bg-white dark:bg-primary/20 flex items-center justify-center shadow-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif mb-1">{item.title}</h3>
                  <p className="text-sm font-medium text-secondary mb-3">{item.tagline}</p>
                  <p className="text-primary-foreground/80 dark:text-foreground/80 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
