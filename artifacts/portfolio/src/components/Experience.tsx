import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-card/30 border-y border-border/40">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Experience</h2>
            <div className="h-px bg-border flex-1 ml-4" />
          </div>

          <div className="relative pl-8 border-l border-primary/20 dark:border-border/50 ml-4">
            {/* Timeline Dot */}
            <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-background" />

            <div className="mb-2">
              <h3 className="text-2xl font-serif font-bold text-primary dark:text-white">Software Engineer</h3>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground font-medium">
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Tata Consultancy Services (TCS)</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 2023 – Present</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Chennai, India</span>
              </div>
            </div>

            <div className="mt-8 space-y-4 text-foreground/80 leading-relaxed font-light">
              <ul className="space-y-3">
                <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-primary/40 before:rounded-full">
                  Delivered a full-stack automation platform reducing manual processing time by 40%, serving 200+ internal users.
                </li>
                <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-primary/40 before:rounded-full">
                  Built AI-powered document analysis pipeline using Python and LLM integrations, cutting review cycle from 3 days to 4 hours.
                </li>
                <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-primary/40 before:rounded-full">
                  Led cross-functional team of 8 engineers in migrating legacy monolith to microservices, improving deployment frequency by 60%.
                </li>
                <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-primary/40 before:rounded-full">
                  Designed and shipped 3 internal developer tools adopted across 500+ engineers globally.
                </li>
                <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-primary/40 before:rounded-full">
                  Mentored 6 junior engineers through structured onboarding programs and weekly technical sessions.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
