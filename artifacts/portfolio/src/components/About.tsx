import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1800;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-serif font-bold text-primary dark:text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-28 bg-white dark:bg-background">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">About</span>
          <div className="h-px bg-border flex-1" />
        </motion.div>

        {/* Main two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — heading + story */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-10">
              Engineer. Builder.<br />
              <span className="text-primary dark:text-white">Leader.</span>
            </h2>

            <div className="space-y-6 text-[1.05rem] text-foreground/75 leading-[1.85] font-light">
              <p>
                I'm a Software Engineer with 3 years of corporate experience at Tata Consultancy Services,
                focused on building impactful software and continuously learning emerging technologies. My work
                spans full-stack development, AI-powered solutions and process automation — turning ideas into
                practical, user-focused products.
              </p>
              <p>
                Beyond technology, I believe strong communication and leadership are essential to creating
                meaningful impact. Through public speaking, team initiatives and leadership experiences, I've
                learned that the best products are built by people who understand both the system and the human
                behind it.
              </p>
            </div>

            {/* Pull-quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 pl-5 border-l-2 border-secondary"
            >
              <p className="text-[1.05rem] font-medium text-primary dark:text-white leading-relaxed">
                "I'm drawn to the intersection of engineering, artificial intelligence and organizational
                leadership — and I'm actively building at that intersection every day."
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Right — stats + detail card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-10"
          >
            {/* Stat counters */}
            <div className="grid grid-cols-3 gap-6 p-8 rounded-2xl bg-[#F5F7FA] dark:bg-card border border-border/40">
              <Counter end={3} suffix="+" label="Years at TCS" />
              <Counter end={5} suffix="+" label="AI Projects" />
              <Counter end={500} suffix="+" label="Lives Impacted" />
            </div>

            {/* Detail cards */}
            <div className="space-y-4">
              {[
                {
                  label: "Current Focus",
                  value: "Technical Program Management · AI-powered product development",
                },
                {
                  label: "Based in",
                  value: "Chennai, India",
                },
                {
                  label: "Interests",
                  value: "Engineering leadership · Public speaking · AI tooling · Organisational design",
                },
                {
                  label: "Currently exploring",
                  value: "MBA programmes · Leadership roles · Emerging AI applications",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                  className="flex gap-4 py-4 border-b border-border/40 last:border-0"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground w-36 shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  <span className="text-sm text-foreground/80 leading-relaxed">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
