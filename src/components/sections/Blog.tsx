import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/ui/glow-card";
import { Calendar, ExternalLink, ArrowRight } from "lucide-react";

export const Blog = () => {
  const posts = [
    {
      title: "Building AI-First Project Management Workflows",
      excerpt: "How integrating AI tools into Agile methodologies can accelerate delivery and improve team productivity.",
      date: "December 2024",
      readTime: "5 min read",
      category: "AI & Project Management",
      link: "#"
    },
    {
      title: "From POC to Production: Scaling AI Projects",
      excerpt: "A practical guide to successfully transitioning AI proof-of-concepts into production-ready solutions.",
      date: "November 2024",
      readTime: "7 min read",
      category: "AI Development",
      link: "#"
    },
    {
      title: "Documentation Translation Made Simple",
      excerpt: "Introducing docs-translator: an open-source tool for automating multilingual documentation workflows.",
      date: "October 2024",
      readTime: "4 min read",
      category: "Open Source",
      link: "https://docs-translator.onrender.com/"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Latest Insights</SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlowCard className="h-full flex flex-col group cursor-pointer">
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
                  <span>Read more</span>
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