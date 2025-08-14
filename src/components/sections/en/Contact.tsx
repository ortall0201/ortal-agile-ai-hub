import { motion } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/ui/glow-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Mail, Linkedin, Send, CheckCircle, AlertCircle, BarChart3 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Attempt to submit to Notion API
      const response = await fetch('/api/notion-intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'website'
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('API submission failed');
      }
    } catch (error) {
      // Fallback to mailto
      const mailtoLink = `mailto:ortalgr@gmail.com?subject=Website Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Redirecting to email client",
        description: "Please send the email to complete your message.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>Let's Connect</SectionTitle>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GlowCard>
              <h3 className="text-xl font-bold text-foreground mb-6">Get in Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-glass"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-glass"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="input-glass resize-none"
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>
                
                <GradientButton
                  variant="filled"
                  className="w-full"
                  onClick={() => {}}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send size={18} />
                      Send Message
                    </div>
                  )}
                </GradientButton>
              </form>
            </GlowCard>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <GlowCard>
              <h3 className="text-xl font-bold text-foreground mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:ortalgr@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all duration-200 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Email Me
                    </p>
                    <p className="text-muted-foreground text-sm">ortalgr@gmail.com</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/ortal-lasry-3232252b6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-all duration-200 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <Linkedin className="text-accent" size={24} />
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      Connect on LinkedIn
                    </p>
                    <p className="text-muted-foreground text-sm">Professional networking</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href="https://public.tableau.com/app/profile/ortal.lasry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-all duration-200 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <BarChart3 className="text-secondary" size={24} />
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                      Tableau Public
                    </p>
                    <p className="text-muted-foreground text-sm">Data visualizations & dashboards</p>
                  </div>
                </motion.a>
              </div>
            </GlowCard>
            
            <GlowCard>
              <h4 className="font-bold text-foreground mb-4">Quick Response Promise</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Initial response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Free 30-minute consultation call</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Tailored project proposal</span>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};