import { motion } from "framer-motion";
import { Trophy, Star, Award, Medal } from "lucide-react";

const achievements = [
  {
    title: "Gen AI Ideathon Winner",
    desc: "Designed a multi-agent AI complaint management platform, projected to reduce support handling effort by 60% through automated ticket analysis and resolution recommendations.",
    icon: Trophy
  },
  {
    title: "Enthusiastic Award",
    desc: "Managed large-scale engagement initiatives for 20,000+ participants, collaborated between stakeholders and facilitated communication training programs.",
    icon: Star
  },
  {
    title: "Special Initiative Award",
    desc: "Recognized for voluntarily leading 20+ employee engagement programs, coordinating 15+ volunteers and impacting 1,500+ employees through tech talks, engagement campaigns, and cultural events.",
    icon: Award
  },
  {
    title: "On the Spot Award",
    desc: "Recognized for orchestrating 15+ executive town halls and client visits, delivering seamless agendas, smooth transitions, and an engaging experience for 500+ employees, executives, and clients.",
    icon: Medal
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Recognition</h2>
          <div className="h-px bg-border flex-1 ml-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl flex gap-6 hover:border-primary/30 transition-colors"
            >
              <div className="shrink-0 mt-1">
                <item.icon className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-primary dark:text-white mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
