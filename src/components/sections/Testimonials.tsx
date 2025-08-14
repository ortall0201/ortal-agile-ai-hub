import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/ui/glow-card";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Ortal's ability to translate complex AI concepts into actionable project plans is exceptional. She delivered our MVP 3 weeks ahead of schedule while maintaining the highest quality standards.",
      author: "Sarah Chen",
      role: "CTO, TechFlow Solutions",
      company: "AI Startup"
    },
    {
      quote: "Working with Ortal transformed our development process. Her Agile approach and focus on automation helped us reduce our release cycle from months to weeks.",
      author: "David Rodriguez",
      role: "Engineering Manager",
      company: "Enterprise Software"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>What Clients Say</SectionTitle>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GlowCard className="h-full relative">
                <Quote size={32} className="text-primary/30 mb-4" />
                
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    <p className="text-primary text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};