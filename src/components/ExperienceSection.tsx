import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "experience",
    title: "Academic Training – Data Analysis",
    org: "Rungta College of Engineering",
    period: "2023 – Present",
    points: [
      "Completed 3 semesters of training in Data Analysis using Python and SQL",
      "Performed data cleaning and visualization using Pandas, NumPy, Matplotlib",
      "Worked on real-world datasets to extract insights",
      "Built strong foundation in statistics and data interpretation",
    ],
  },
  {
    type: "education",
    title: "B.Tech",
    org: "Rungta College of Engineering & Technology, Bhilai",
    period: "2023 – 2027",
    points: [],
  },
  {
    type: "education",
    title: "12th – Narayan Karmyogi High School",
    org: "Chhattisgarh",
    period: "2021 – 2023",
    points: [],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">My journey</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-16 pb-10 last:pb-0"
            >
              {/* Dot */}
              <div className="absolute left-4 top-1 w-5 h-5 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                {item.type === "experience" ? (
                  <Briefcase size={10} className="text-primary" />
                ) : (
                  <GraduationCap size={10} className="text-primary" />
                )}
              </div>

              <div className="glass rounded-xl p-5 hover:glow-border transition-all">
                <span className="text-xs font-mono text-primary">{item.period}</span>
                <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.org}</p>
                {item.points.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {item.points.map((p) => (
                      <li key={p} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
