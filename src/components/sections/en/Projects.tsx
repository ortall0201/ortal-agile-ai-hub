import { motion } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/ui/glow-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Search, ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      name: "RunMyDocker",
      description: "Cloud-based Docker container management platform for seamless deployment and scaling",
      category: "Ops",
      tags: ["Docker", "Cloud", "DevOps"],
      link: "https://runmydocker.com"
    },
    {
      name: "DBooster",
      description: "AI-powered SQL query optimization and database performance enhancement tool",
      category: "AI/LLM",
      tags: ["AI", "SQL", "Database"],
      link: "#"
    },
    {
      name: "Mental Health Chatbot",
      description: "Omdena collaborative project developing AI-driven mental health support system",
      category: "AI/LLM",
      tags: ["AI", "Healthcare", "NLP"],
      link: "https://github.com/OmdenaAI/agentic-based-Mental-Health-chatbot-using-Langchain-workflows/tree/team1"
    },
    {
      name: "OSINT Iran Dashboard",
      description: "Open-source intelligence dashboard for monitoring and analyzing Iranian digital landscape",
      category: "Project",
      tags: ["OSINT", "Analytics", "Monitoring"],
      link: "https://huggingface.co/spaces/ortal12345/iran-trends-tracker"
    },
    {
      name: "docs-translator",
      description: "Automated documentation translation system supporting multiple languages and formats",
      category: "AI/LLM",
      tags: ["Translation", "AI", "Documentation"],
      link: "https://docs-translator.onrender.com/"
    },
    {
      name: "Data Analysis",
      description: "Tableau Public dashboards and data analytics - interactive business insights and data stories",
      category: "Data",
      tags: ["Tableau", "Analytics", "Visualization", "Business Intelligence"],
      link: "https://public.tableau.com/app/profile/ortal.lasry/vizzes"
    }
  ];

  const filters = ["All", "AI/LLM", "Project", "Ops", "Data"];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "All" || project.category === filter;
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Projects</SectionTitle>
        
        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {filters.map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`chip transition-all duration-200 ${
                  filter === filterOption 
                    ? 'bg-primary/20 border-primary text-primary' 
                    : 'hover:bg-primary/10'
                }`}
              >
                {filterOption}
              </button>
            ))}
          </div>
          
          <div className="relative flex-1 max-w-md">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-glass pl-10"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlowCard className="h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <span className="chip text-xs">{project.category}</span>
                  {project.link !== "#" && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3">{project.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn Projects Link */}
        <div className="text-center">
          <GradientButton
            variant="outline"
            href="https://www.linkedin.com/in/ortal-lasry-3232252b6/details/projects/"
          >
            <ExternalLink size={20} />
            LinkedIn Projects ↗
          </GradientButton>
        </div>
      </div>
    </section>
  );
};