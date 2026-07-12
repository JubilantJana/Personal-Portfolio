import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center md:text-left">
      <div className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-background border-y border-border/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">About Me</h2>
            <div className="h-px bg-border flex-1 ml-4 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
            <div className="md:col-span-8 space-y-6 text-lg text-foreground/80 leading-relaxed font-light">
              <p>
                I'm a Software Engineer with 3 years of corporate experience at Tata Consultancy Services, focused on building impactful software and continuously learning emerging technologies. My work spans full-stack development, AI-powered solutions, and process automation — turning ideas into practical, user-focused products.
              </p>
              <p>
                Beyond technology, I believe strong communication and leadership are essential to creating meaningful impact. Through public speaking, team initiatives, and leadership experiences, I've learned that the best products are built by people who understand both the system and the human behind it.
              </p>
              <p className="font-medium text-primary dark:text-white">
                I'm drawn to the intersection of engineering, artificial intelligence, and organizational leadership — and I'm actively building at that intersection every day.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col justify-center gap-10">
              <Counter end={3} suffix="+" label="Years Experience" />
              <Counter end={5} suffix="+" label="AI Projects" />
              <Counter end={500} suffix="+" label="Lives Impacted" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
