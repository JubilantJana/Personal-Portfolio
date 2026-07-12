import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

const roles = [
  {
    title: "Associate Technical Program Manager",
    period: "May 2026 – Present",
    achievements: [
      "Supported delivery of engineering initiatives by coordinating with 15+ cross-functional stakeholders across product, engineering and business teams to ensure timely execution",
      "Contributed to sprint planning, dependency tracking and risk management activities, helping improve delivery predictability and streamline project execution",
      "Collaborated with product managers and engineering teams to convert business requirements into actionable tasks and executable roadmaps",
    ],
  },
  {
    title: "Full Stack Developer",
    period: "Feburary 2025 – April 2026",
    achievements: [
      "Reduced development effort by 30–50% by leveraging GitHub Copilot to design and develop a full-stack assessment platform, accelerating feature delivery by 40%",
      "Accelerated assessment turnaround time from hours to minutes by integrating Gemini API to automate 100% of scoring, competency analysis and personalized growth roadmap generation, delivering instant actionable insights",
      "Enabled seamless integration and secure data exchange across platform modules by maintaining 20+ RESTful APIs secured with JWT based authentication, supporting secure access to platform resources",
    ],
  },
  {
    title: "Backend Developer",
    period: "August 2023 – January 2025",
    achievements: [
      "Developed and maintained 15+ RESTful APIs in Node.js, powering core business workflows for enterprise clients",
      "Optimised critical database queries reducing average API response time from 1.8s to 340ms across high-traffic endpoints",
      "Automated a multi-step data ingestion pipeline, eliminating 12 hours of weekly manual processing and reducing error rate by 90%",
    ],
  },
];

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

          {/* Company header */}
          <div className="flex flex-wrap items-center gap-4 mb-10 text-sm text-muted-foreground font-medium">
            <span className="flex items-center gap-1.5 text-base font-semibold text-primary dark:text-white">
              <Building2 className="w-4 h-4 text-secondary" />
              Tata Consultancy Services (TCS)
            </span> 
            
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> Chennai, India
            </span>
          </div>

          {/* Timeline */}
          <div className="relative pl-8 border-l border-primary/20 dark:border-border/50 ml-4 space-y-14">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-background" />

                <div className="mb-4">
                  <h3 className="text-xl font-serif font-bold text-primary dark:text-white">{role.title}</h3>
                  <span className="inline-flex items-center gap-1.5 mt-1.5 text-sm text-muted-foreground font-medium">
                    <Calendar className="w-3.5 h-3.5" /> {role.period}
                  </span>
                </div>

                <ul className="space-y-3 text-foreground/80 leading-relaxed font-light">
                  {role.achievements.map((item, i) => (
                    <li
                      key={i}
                      className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-primary/40 before:rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
