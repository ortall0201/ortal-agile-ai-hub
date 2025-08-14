import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/ui/glow-card";
import { TrendingUp, Users, Clock } from "lucide-react";

export const CaseStudies = () => {
  const caseStudies = [
    {
      title: "פלטפורמת שירות לקוחות מונחית AI",
      client: "סטארט-אפ טכנולוגי",
      icon: TrendingUp,
      points: [
        "הקטנת זמן מענה ללקוחות ב-75% באמצעות ניתוב חכם",
        "השגת ציון שביעות רצון לקוחות של 94% תוך 3 חודשים",
        "יישום ספרינטים של Agile שהביא למסירת פיצ'רים מהירה יותר ב-40%"
      ]
    },
    {
      title: "מיגרציית DevOps חוצת פלטפורמות",
      client: "לקוח ארגוני",
      icon: Users,
      points: [
        "הובלת צוות של 12 מפתחים במיגרציית תשתית מורכבת",
        "הקטנת זמן פריסה מ-4 שעות ל-15 דקות",
        "הקמת צינור CI/CD שהפחית באגים בייצור ב-60%"
      ]
    }
  ];

  return (
    <section id="cases" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>מקרי בוחן</SectionTitle>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GlowCard className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20">
                    <study.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{study.title}</h3>
                    <p className="text-muted-foreground text-sm">{study.client}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {study.points.map((point, pointIndex) => (
                    <motion.div
                      key={pointIndex}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index * 0.2) + (pointIndex * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm leading-relaxed">{point}</p>
                    </motion.div>
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