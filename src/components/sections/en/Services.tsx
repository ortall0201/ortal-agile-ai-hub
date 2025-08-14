import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/ui/glow-card";
import { Zap, Brain, BarChart3 } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Agile Project Management",
      description: "End-to-end project lifecycle management with Scrum/Kanban methodologies, ensuring rapid delivery and continuous improvement.",
      features: ["Sprint Planning", "Team Coordination", "Stakeholder Management", "Risk Mitigation"]
    },
    {
      icon: Brain,
      title: "GenAI & Innovation",
      description: "Strategic implementation of AI technologies, from proof-of-concept to production deployment, with focus on practical business value.",
      features: ["AI Strategy", "LLM Integration", "Automation Workflows", "Innovation Labs"]
    },
    {
      icon: BarChart3,
      title: "Data & Metrics",
      description: "Data-driven decision making through comprehensive analytics, KPI tracking, and performance optimization frameworks.",
      features: ["KPI Development", "Performance Analytics", "Process Optimization", "Business Intelligence"]
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Services</SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlowCard className="h-full">
                <div className="text-center mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 mb-4">
                    <service.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="chip text-xs">
                      {feature}
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};