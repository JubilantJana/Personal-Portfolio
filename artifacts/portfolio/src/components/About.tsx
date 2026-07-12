import { motion } from "framer-motion";

const paragraphs = [
  "I'm a Software Engineer with 3 years of corporate experience at Tata Consultancy Services, focused on building impactful software and continuously learning emerging technologies. My work spans full-stack development, AI-powered solutions and process automation, turning ideas into practical, user-focused products.",
  "Beyond technology, I believe strong communication and leadership are essential to creating meaningful impact. Through public speaking, team initiatives and leadership experiences, I've learned that the best products are built by people who understand both the system and the human behind it.",
];

export function About() {
  return (
    <section id="about" className="py-28 bg-white dark:bg-background">
      <div className="container mx-auto px-6 max-w-3xl">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">About</span>
          <div className="h-px bg-border flex-1" />
        </motion.div>

        {/* Large heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-[1.1] mb-14"
        >
          Engineer.{" "}
          <span className="text-primary dark:text-white">Builder.</span>
          <br />
          Leader.
        </motion.h2>

        {/* Body paragraphs */}
        <div className="space-y-7">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              className="text-lg text-foreground/70 leading-[1.9] font-light"
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Pull-quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="mt-12 pl-6 border-l-2 border-secondary"
        >
          <p className="text-xl font-serif font-medium text-primary dark:text-white leading-[1.7]">
            "I'm drawn to the intersection of engineering, artificial intelligence and organisational
            leadership and I'm actively building at that intersection every day."
          </p>
        </motion.blockquote>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 h-px bg-border/60"
        />

      </div>
    </section>
  );
}
