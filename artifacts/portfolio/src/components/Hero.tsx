import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-96 h-96 bg-primary rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -left-20 w-[30rem] h-[30rem] bg-secondary rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16 max-w-3xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left min-w-0"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary dark:text-foreground mb-5 leading-tight">
              Hi, <br/> I'm Jana.
            </h1>
            <h2 className="text-lg md:text-xl font-medium text-foreground/80 mb-8">
              Exploring the intersection of <br/> <span className="text-secondary">Engineering</span>, <span className="text-secondary">AI</span> and <span className="text-secondary">Leadership</span>.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-8 text-base h-14 bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#">Download Resume</a>
              </Button>
              {/* <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 text-base h-14 border-primary/20 hover:bg-accent hover:text-primary dark:border-border dark:hover:bg-accent">
                <a href="#projects">View Work</a>
              </Button> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0 flex flex-col items-center gap-6"
          >
            <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <div className="absolute inset-0 rounded-full border border-primary/20 dark:border-white/10 scale-[1.15]" />
              <div className="absolute inset-0 rounded-full border border-secondary/30 scale-[1.07]" />
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-xl p-2">
                <img
                  src="/janashri.jpg"
                  alt="Janashri"
                  className="w-full h-full rounded-full object-cover object-top"
                />
              </div>
            </div>

            {/* Tagline below photo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-px w-8 bg-secondary/60 inline-block" />
                <span>Engineer by profession</span>
                <span className="h-px w-8 bg-secondary/60 inline-block" />
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                <span className="h-px w-8 bg-primary/20 inline-block" />
                <span>AI-powered coder by passion</span>
                <span className="h-px w-8 bg-primary/20 inline-block" />
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-px w-8 bg-secondary/60 inline-block" />
                <span>Leadership-driven by purpose</span>
                <span className="h-px w-8 bg-secondary/60 inline-block" />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
