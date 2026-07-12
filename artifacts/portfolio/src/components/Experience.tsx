import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

const roles = [
  {
    title: "Associate Technical Program Manager",
    period: "2025 – 2026",
    achievements: [
      "Owned end-to-end delivery of 4 concurrent engineering programs, coordinating 30+ cross-functional stakeholders across 3 time zones.",
      "Reduced average project cycle time by 25% by introducing structured sprint cadences, risk registers, and dependency tracking frameworks.",
      "Partnered with product and business teams to translate ambiguous requirements into executable roadmaps, achieving 95% on-time delivery.",
      "Established program health dashboards adopted by senior leadership, improving visibility into delivery risk across 8 active workstreams.",
      "Facilitated quarterly planning ceremonies and retrospectives for 5 engineering pods, driving continuous process improvement.",
    ],
  },
  {
    title: "Full Stack Developer",
    period: "2024 – 2025",
    achievements: [
      "Built and shipped 2 client-facing web applications end-to-end using React and Node.js, serving 10,000+ monthly active users.",
      "Designed RESTful API layer handling 500K+ daily requests with 99.9% uptime, backed by PostgreSQL and Redis caching.",
      "Integrated AI-powered features — including intelligent search and recommendation modules — reducing user task completion time by 35%.",
      "Collaborated with UX designers to implement accessible, responsive interfaces, improving mobile engagement by 48%.",
      "Contributed to a shared component library adopted across 3 product teams, reducing front-end development time by 30%.",
    ],
  },
  {
    title: "Backend Developer",
    period: "2023 – 2024",
    achievements: [
      "Developed and maintained 15+ RESTful microservices in Python and Node.js, powering core business workflows for enterprise clients.",
      "Optimised critical database queries reducing average API response time from 1.8s to 340ms across high-traffic endpoints.",
      "Automated a multi-step data ingestion pipeline, eliminating 12 hours of weekly manual processing and reducing error rate by 90%.",
      "Wrote comprehensive unit and integration test suites achieving 85% code coverage, significantly reducing production incidents.",
      "Mentored 3 junior engineers on backend architecture best practices, code review discipline, and performance profiling techniques.",
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
