import { motion } from "framer-motion";
import { Mic, Users, Presentation, UserPlus, HeartHandshake, MicVocal, AudioLines, ExternalLink } from "lucide-react";

const leadership = [
  {
    title: "Toastmasters Leadership",
    tagline: "Area Director - Asst. AD - President - VP",
    description:
      "Led 10+ leadership initiatives, speech contests and officer training programs, supporting 50+ members across clubs — driving engagement, leadership development and public speaking excellence.",
    icon: Mic,
    accent: "from-secondary/20 to-secondary/5",
    iconBg: "bg-secondary/15",
  },
  {
    title: "Clarion 2k26 Speech Contest",
    tagline: "Organizer",
    description:
      "Led a team of 6 to plan and execute a speech contest attracting 50+ participants across 2 competitive rounds — creating a platform for participants to build confidence and step outside their comfort zones.",
    icon: MicVocal,
    accent: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/15",
  },
  {
    title: "Voices that Inspire",
    tagline: "TCS ILP",
    description:
      "Selected as one of three employees to represent the organization in an official careers video, highlighting the early-career experience, featured on the TCS Careers website and showcased during campus recruitment campaigns.",
    icon: AudioLines,
    accent: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/15",
    link: "https://your-link-here.com",
  },
  {
    title: "Client Visits & Town Halls",
    tagline: "Executive Engagement Lead",
    description:
      "Coordinated 20+ leadership town halls and client visits — managing end-to-end stakeholder communication and event execution for seamless executive, client and employee experiences.",
    icon: Users,
    accent: "from-secondary/20 to-secondary/5",
    iconBg: "bg-secondary/15",
  },
  {
    title: "Engineering Tech Talks",
    tagline: "Tech Talk Lead",
    description:
      "Established a quarterly knowledge-sharing program — coordinating speakers, curating topics and managing execution across 8+ sessions reaching 300+ employees.",
    icon: Presentation,
    accent: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/15",
  },
  {
    title: "Freshers Workplace Experience",
    tagline: "Engagement Lead",
    description:
      "Planned immersive workplace visits for 100+ graduate hires — coordinating cross-functional stakeholders to introduce company culture, engineering practices and organizational workflows.",
    icon: UserPlus,
    accent: "from-secondary/20 to-secondary/5",
    iconBg: "bg-secondary/15",
  },
  {
    title: "Employee Engagement Programs",
    tagline: "Engagement Lead",
    description:
      "Designed and executed 15+ engagement initiatives, cultural events and awareness campaigns that strengthened collaboration and fostered an inclusive workplace culture for 500+ employees.",
    icon: HeartHandshake,
    accent: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/15",
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-muted/40 dark:bg-card/50 text-foreground">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-secondary mb-3">
            Impact · Influence · Initiative
          </p>
          <div className="flex items-end gap-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-primary dark:text-foreground">
              Leadership<br className="hidden md:block" /> Beyond the Role
            </h2>
            <div className="hidden md:block h-px bg-border flex-1 mb-3" />
            <span className="hidden md:block mb-3 shrink-0 text-xs font-mono text-muted-foreground">
              {leadership.length} initiatives
            </span>
          </div>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {leadership.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl bg-white dark:bg-background/60 border border-border hover:border-secondary/40 p-6 flex flex-col gap-4 cursor-default transition-colors duration-300 overflow-hidden shadow-sm hover:shadow-md"
              >
                {/* Subtle gradient blob */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                {/* Top row: number + icon */}
                <div className="relative flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold text-muted-foreground/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                </div>

                {/* Title */}
                <div className="relative">
                  <h3 className="font-serif font-bold text-lg leading-snug text-primary dark:text-foreground group-hover:text-secondary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-secondary/70 dark:text-secondary mt-1">
                    {item.tagline}
                  </p>
                </div>

                {/* Divider */}
                <div className="relative h-px bg-white/10 dark:bg-border" />

                {/* Description */}
                <p className="relative text-sm text-foreground/60 leading-relaxed font-light flex-1">
                  {item.description}
                </p>

                {/* Optional link */}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-secondary/80 transition-colors mt-1 w-fit"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View link
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
