import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-white dark:bg-card border-t border-border">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-white mb-6">
            Get In Touch
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Open to discussions, opportunities and a heartfelt conversation. <br/> Let's connect!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button size="lg" className="rounded-full w-full sm:w-auto h-14 px-8 text-base gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Mail className="w-5 h-5" />
              <a href="mailto:njanashri@gmail.com">Contact me</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto h-14 px-8 text-base gap-2 border-border hover:bg-accent hover:text-primary">
              <Linkedin className="w-5 h-5" />
              <a href="https://www.linkedin.com/in/janashri-n" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto h-14 px-8 text-base gap-2 border-border hover:bg-accent hover:text-primary">
              <Github className="w-5 h-5" />
              <a href="https://github.com/JubilantJana" target="_blank" rel="noopener noreferrer">Github Profile</a>
            </Button>
          </div>

          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm font-medium bg-muted px-4 py-2 rounded-full">
            <MapPin className="w-4 h-4 text-secondary" />
            Chennai, India
          </div>
        </motion.div>
      </div>
    </section>
  );
}
