import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gradient mb-4">Ortal Lasry</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Technical Project Manager specializing in Agile methodologies and AI-oriented solutions. 
              Bridging the gap between innovation and execution.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "#about", label: "About" },
                { href: "#services", label: "Services" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-3">
              <motion.a
                href="https://www.linkedin.com/in/ortal-lasry-3232252b6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                <Linkedin size={18} />
                <span className="text-sm">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://github.com/ortall0201"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                <Github size={18} />
                <span className="text-sm">GitHub</span>
              </motion.a>
              <motion.a
                href="mailto:ortalgr@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                <Mail size={18} />
                <span className="text-sm">Email</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            © {currentYear} Ortal Lasry. Made with <Heart size={14} className="text-red-500" /> and modern tech.
          </p>
          <p className="text-muted-foreground text-xs">
            Built with React, TypeScript & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};