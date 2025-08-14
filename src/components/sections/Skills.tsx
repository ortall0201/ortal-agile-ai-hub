import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Agile & PM",
      skills: ["Scrum", "Kanban", "JIRA", "Risk Management", "Stakeholder Management", "Monday", "Notion", "Trello"]
    },
    {
      title: "AI & Development",
      skills: ["LLM Integration", "Python", "API Development", "Machine Learning", "Data Analysis", "Automation", "Data Science", "Zapier", "Claude Code", "GPT", "FastAPI"]
    },
    {
      title: "Operations",
      skills: ["Docker", "CI/CD", "Cloud Platforms", "Monitoring"]
    },
    {
      title: "Tools & Platforms",
      skills: ["GitHub", "Slack", "Analytics", "GCP", "Tableau"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Skills & Expertise</SectionTitle>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-gradient-accent">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="chip hover:scale-105"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                    }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};