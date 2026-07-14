import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Users, Presentation, UserPlus, HeartHandshake, ChevronDown, MicVocal } from "lucide-react";

const leadership = [
  {
    title: "Toastmasters Leadership",
    tagline: "Area Director · Assistant Area Director · President · Vice President",
    description: "Led 10+ leadership initiatives, speech contests and officer training programs, supporting 50+ members across clubs while driving member engagement, leadership development and public speaking excellence.",
    icon: Mic,
  },
  {
    title: "Clarion 2k26 Speech Contest",
    tagline: "Organizer",
    description: "Led a team of 6 members to plan and execute a speech contest attracting 50+ participants across 2 competitive rounds. Enabled participants to develop public speaking skills and improve confidence by creating a supportive platform to step outside their comfort zones.",
    icon: MicVocal,
  },
  {
    title: "Client Visits & Town Halls",
    tagline: "Executive Engagement Lead",
    description: "Coordinated 20+ leadership town halls and client visits, managing stakeholder communication and event execution to deliver seamless experiences for executives, clients and employees.",
    icon: Users,
  },
  {
    title: "Engineering Tech Talks",
    tagline: "Tech Talk Lead",
    description: "Established a quarterly knowledge-sharing program by coordinating speakers, curating technical topics and managing end-to-end execution — resulting in 8+ sessions and 300+ employee participants.",
    icon: Presentation,
  },
  {
    title: "Freshers Workplace Experience",
    tagline: "Engagement Lead",
    description: "Planned immersive workplace visits for 100+ graduate hires, coordinating cross-functional stakeholders to introduce company culture, engineering practices and organizational workflows.",
    icon: UserPlus,
  },
  {
    title: "Employee Engagement Programs",
    tagline: "Engagement Lead",
    description: "Designed and executed 15+ engagement initiatives, cultural events and awareness campaigns that strengthened collaboration, increased participation and fostered an inclusive workplace culture for 500+ employees.",
    icon: HeartHandshake,
  },
];

function LeadershipItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: typeof leadership[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`border-b border-white/10 dark:border-border last:border-0`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-5 py-5 text-left group focus:outline-none"
      >
        {/* Index number */}
        <span className="shrink-0 text-xs font-mono font-semibold text-white/30 dark:text-muted-foreground w-6 text-right">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Icon */}
        <div className="shrink-0 w-9 h-9 rounded-lg bg-white/10 dark:bg-primary/15 flex items-center justify-center">
          <Icon className="w-4 h-4 text-secondary" />
        </div>

        {/* Title + tagline */}
        <div className="flex-1 min-w-0">
          <p className="font-serif font-bold text-base md:text-lg leading-tight text-white dark:text-foreground group-hover:text-secondary transition-colors">
            {item.title}
          </p>
          <p className="text-xs text-secondary/80 dark:text-secondary mt-0.5 truncate">{item.tagline}</p>
        </div>

        {/* Chevron */}
        <ChevronDown
          className={`shrink-0 w-4 h-4 text-white/40 dark:text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pl-[3.75rem] pb-5 text-sm md:text-base text-white/70 dark:text-foreground/70 leading-relaxed font-light">
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Leadership() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="leadership" className="py-24 bg-primary text-primary-foreground dark:bg-card/50 dark:text-foreground">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Leadership Beyond the Role</h2>
            <div className="h-px bg-white/20 dark:bg-border flex-1 ml-4 hidden sm:block" />
          </div>
          <p className="text-white/50 dark:text-muted-foreground text-sm mb-12">
            {leadership.length} initiatives · Click any item to expand
          </p>

          {/* Accordion list */}
          <div>
            {leadership.map((item, idx) => (
              <LeadershipItem
                key={idx}
                item={item}
                index={idx}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
