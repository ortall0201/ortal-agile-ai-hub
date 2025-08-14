import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/ui/glow-card";
import { CheckCircle } from "lucide-react";

export const About = () => {
  const highlights = [
    "Led 10+ MVP projects from concept to production",
    "Expert in Agile methodologies and cross-functional team leadership",
    "Specialized in AI/GenAI integration and automation workflows",
    "Proven track record in data-driven decision making"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I bridge the gap between development teams and AI innovation, specializing in transforming complex technical concepts into actionable project roadmaps. My expertise lies in rapidly delivering POCs to production-ready MVPs while ensuring seamless integration of cutting-edge AI technologies.
            </p>
            
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GlowCard className="text-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gradient-accent mb-2">5+ Years</h3>
                  <p className="text-muted-foreground">Project Management Experience</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient-accent mb-2">15+ Projects</h3>
                  <p className="text-muted-foreground">Successfully Delivered</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient-accent mb-2">AI-First</h3>
                  <p className="text-muted-foreground">Approach to Innovation</p>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};