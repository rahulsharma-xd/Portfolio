import { motion } from "framer-motion";
import { ExternalLink, Github, Globe, Utensils, CloudSun, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "Built a responsive portfolio using React.js with modern UI, showcasing projects and skills. Deployed using GitHub Pages.",
    tech: ["React.js", "CSS", "GitHub Pages"],
    icon: Globe,
    color: "from-primary to-accent",
  },
  {
    title: "Weather App",
    description: "Developed a real-time weather app using JavaScript and REST API integration, displaying dynamic weather data with clean visuals.",
    tech: ["JavaScript", "API", "HTML/CSS"],
    icon: CloudSun,
    color: "from-primary to-accent",
  },
  {
    title: "Food Delivery Website",
    description: "Built a full-stack food delivery app with React.js, Node.js, and SQL. Implemented authentication and order management system.",
    tech: ["React.js", "Node.js", "SQL"],
    icon: Utensils,
    color: "from-accent to-primary",
  },
  {
    title: "Data Analysis Projects",
    description: "Performed data analysis on real-world datasets using Python. Created insightful visualizations and reports using Seaborn and Matplotlib.",
    tech: ["Python", "Pandas", "NumPy", "Seaborn"],
    icon: BarChart3,
    color: "from-primary to-accent",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">What I've built</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass rounded-xl overflow-hidden group hover:glow-border transition-all duration-300"
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${project.color}`} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-secondary">
                    <project.icon size={24} className="text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={18} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-1 rounded bg-secondary text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
