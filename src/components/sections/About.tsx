import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/ui/glow-card";
import { CheckCircle } from "lucide-react";
import aiRobotImage from "@/assets/ai-robot-advanced.png";
import { useLanguage } from "@/hooks/use-language";

export const About = () => {
  const { isHebrew } = useLanguage();
  
  const highlights = isHebrew ? [
    "הובלתי פרויקטי MVP מרעיון ועד ייצור ומעבר לו",
    "מומחית במתודולוגיות Agile והובלת צוותים רב-תחומיים",
    "התמחות באינטגרציה של AI/GenAI ותהליכי אוטומציה",
    "רקורד מוכח בקבלת החלטות מונחות נתונים"
  ] : [
    "led MVP projects from concept to production and beyond",
    "Expert in Agile methodologies and cross-functional team leadership",
    "Specialized in AI/GenAI integration and automation workflows",
    "Proven track record in data-driven decision making"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-16">
          <SectionTitle>{isHebrew ? "אודות" : "About Me"}</SectionTitle>
          {/* AI Robot near title */}
          <div className="absolute -top-2 -right-4 w-32 h-32 ai-robot">
            <img 
              src={aiRobotImage} 
              alt="Advanced AI Robot" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {isHebrew 
                ? "אני מגשרת בין צוותי פיתוח לחדשנות AI, מתמחה בהפיכת קונספטים טכניים מורכבים למפות דרכים פעילות לפרויקטים. המומחיות שלי טמונה במתן POCs במהירות לMVPs מוכנים לייצור תוך הבטחת אינטגרציה חלקה של טכנולוגיות AI מתקדמות."
                : "I bridge the gap between development teams and AI innovation, specializing in transforming complex technical concepts into actionable project roadmaps. My expertise lies in rapidly delivering POCs to production-ready MVPs while ensuring seamless integration of cutting-edge AI technologies."
              }
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
            <GlowCard className="text-center about-floating-card">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gradient-accent mb-2">{isHebrew ? "5+ שנים" : "5+ Years"}</h3>
                  <p className="text-muted-foreground">{isHebrew ? "ניסיון בניהול פרויקטים" : "Project Management Experience"}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient-accent mb-2">{isHebrew ? "15+ פרויקטים" : "15+ Projects"}</h3>
                  <p className="text-muted-foreground">{isHebrew ? "נמסרו בהצלחה" : "Successfully Delivered"}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient-accent mb-2">{isHebrew ? "AI-First" : "AI-First"}</h3>
                  <p className="text-muted-foreground">{isHebrew ? "גישה לחדשנות" : "Approach to Innovation"}</p>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};