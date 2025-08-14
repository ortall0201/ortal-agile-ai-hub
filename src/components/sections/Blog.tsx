import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/ui/glow-card";
import { Calendar, ExternalLink, ArrowRight } from "lucide-react";

export const Blog = () => {
  const posts = [
    {
      title: "מיישם AI - הגדלת פרודוקטיביות המפתחים באמצעות בינה מלאכותית",
      excerpt: "המעבר לאוטומציה מדגים את השינוי המהיר בתעשיית הטכנולוגיה. כיצד ארגונים יכולים להתכונן לעתיד של AI תוך שמירה על הון האנושי והגדלת פרודוקטיביות המפתחים?",
      date: "ינואר 2025",
      readTime: "4 דקות קריאה",
      category: "אסטרטגיית AI",
      link: "https://www.linkedin.com/posts/ortal-lasry-3232252b6_%D7%90%D7%9E%D7%93%D7%95%D7%A7%D7%A1-%D7%9E%D7%A7%D7%99%D7%9E%D7%94-%D7%97%D7%98%D7%99%D7%91%D7%AA-ai-%D7%97%D7%93%D7%A9%D7%94-%D7%95%D7%A6%D7%A4%D7%95%D7%99%D7%94-%D7%9C%D7%A4%D7%98%D7%A8-%D7%9E%D7%90%D7%95%D7%AA-activity-7361377935032745984-q8ms?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEvZ_YsB1emDVodDot_p58xC2mKHxpGR46o"
    },
    {
      title: "אזהרת טריגר למפתחים - כיצד בניתי אפליקציה ביום אחד באמצעות קלוד קוד והצגת פלטפורמת ניהול קונטיינרים חדשה",
      excerpt: "סיפור מהיר על איך הצלחתי לבנות פלטפורמה מלאה לניהול Docker containers תוך יום אחד בלבד, באמצעות כלי AI מתקדמים ושיטות פיתוח חדשניות.",
      date: "דצמבר 2024",
      readTime: "5 דקות קריאה",
      category: "DevOps & Cloud",
      link: "https://www.linkedin.com/posts/ortal-lasry-3232252b6_run-my-docker-activity-7360326837815652352-EEyY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEvZ_YsB1emDVodDot_p58xC2mKHxpGR46o"
    },
    {
      title: "מ-MVP לשוק: הרחבת פתרונות AI",
      excerpt: "לקחים שנלמדו מהובלת צוותים טכניים במחזור חיי פרויקטי AI - מהוכחת קונספט לפריסה בייצור בקנה מידה ארגוני.",
      date: "נובמבר 2024",
      readTime: "5 דקות קריאה",
      category: "Product Management",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>תובנות אחרונות</SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlowCard 
                className="h-full flex flex-col group cursor-pointer"
                onClick={() => post.link !== "#" && window.open(post.link, '_blank')}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="chip text-xs">{post.category}</span>
                  {post.link !== "#" && (
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <motion.div
                  className="flex items-center gap-2 text-primary text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 5 }}
                >
                  <span>קרא עוד</span>
                  <ArrowRight size={14} />
                </motion.div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};