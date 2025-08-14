import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { Github, Linkedin, ExternalLink } from "lucide-react";


export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 py-20">
      <motion.div
        className="glass-panel p-8 md:p-12 max-w-4xl w-full text-center relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Floating aurora elements */}
        <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl animate-aurora-float" />
        <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl animate-aurora-float" style={{ animationDelay: '2s' }} />

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Ortal Lasry
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          מנהלת פרויקטים טכנית | Agile & AI-Oriented
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <GradientButton
            variant="filled"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            שיחת היכרות
          </GradientButton>
          
          <GradientButton
            variant="outline"
            size="lg"
            href="https://linktr.ee/Ortal_Lasry"
          >
            <ExternalLink size={20} />
            הורדת קו״ח
          </GradientButton>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/ortal-lasry-3232252b6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </motion.a>
          
          <motion.a
            href="https://github.com/ortall0201"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} />
            <span>GitHub</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};