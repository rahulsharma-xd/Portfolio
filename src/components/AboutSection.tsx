import { motion } from "framer-motion";
import { MapPin, Phone, GraduationCap, Code2 } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { label: "Projects", value: "4+" },
    { label: "Technologies", value: "15+" },
    { label: "Semesters Trained", value: "3" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a B.Tech student at Rungta College of Engineering & Technology, Bhilai,
              passionate about building modern web applications and exploring data.
              With hands-on experience in React.js, Node.js, and data analysis using Python,
              I love turning complex problems into clean, user-friendly solutions.
            </p>
            <div className="space-y-3">
              {[
                { icon: MapPin, text: "Raipur, Chhattisgarh" },
                { icon: Phone, text: "+91 7870164841" },
                { icon: GraduationCap, text: "B.Tech (2023 – 2027)" },
                { icon: Code2, text: "Full Stack Developer" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-muted-foreground">
                  <Icon size={18} className="text-primary flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-6 text-center glow-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-gradient">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
