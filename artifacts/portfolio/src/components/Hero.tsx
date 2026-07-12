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
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary dark:text-foreground mb-6 leading-tight">
              Hi, <br/> I'm Jana.
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/80 mb-6 max-w-2xl">
              Exploring the intersection of <br/> <span className="text-secondary">Engineering</span>, <span className="text-secondary">AI</span> and <span className="text-secondary">Leadership</span>.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto md:mx-0">
              Engineer by profession. AI-powered coder by passion. Leadership-driven by purpose.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-8 text-base h-14 bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#">Download Resume</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 text-base h-14 border-primary/20 hover:bg-accent hover:text-primary dark:border-border dark:hover:bg-accent">
                <a href="#projects">View Work</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full border border-primary/20 dark:border-white/10 scale-[1.15]" />
              <div className="absolute inset-0 rounded-full border border-secondary/30 scale-[1.07]" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent overflow-hidden shadow-xl p-2">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-muted-foreground overflow-hidden">
                  <span className="font-serif italic opacity-50">Photo Area</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
