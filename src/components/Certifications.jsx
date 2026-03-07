import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    icon: "☁️",
    title: "AWS Academy Cloud Foundations",
    org: "AWS Academy",
    date: "2024",
    description: "Learned cloud computing fundamentals, AWS services, and best practices for building scalable applications on AWS.",
  },
  {
    icon: "🌐",
    title: "IBM SkillsBuild Web Development Fundamentals",
    org: "IBM",
    date: "2024",
    description: "Mastered web development concepts including HTML, CSS, JavaScript, and responsive design principles.",
  },
  {
    icon: "🏆",
    title: "INDRADHANU International Grand Challenge",
    org: "INDRADHANU",
    date: "2024",
    description: "Participated in an international grand challenge showcasing innovative solutions and technical skills.",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, marginTop: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mb-16"
    >
      <motion.h3
        variants={itemVariants}
        className="text-2xl sm:text-3xl font-bold font-heading mb-8"
      >
        <span className="gradient-text">Certifications</span>
      </motion.h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <motion.div
            key={cert.title}
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-blue/40 transition-all duration-300 backdrop-blur-sm overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative">
              {/* Icon & Badge */}
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-green/20 flex items-center justify-center"
                >
                  <span className="text-2xl">{cert.icon}</span>
                </motion.div>
                <div className="flex items-center gap-1.5 text-text-muted text-xs">
                  <Calendar size={12} />
                  {cert.date}
                </div>
              </div>

              {/* Content */}
              <h4 className="text-white font-semibold mb-2 group-hover:gradient-text transition-all line-clamp-2">
                {cert.title}
              </h4>
              <p className="text-accent-cyan text-sm font-medium mb-3">{cert.org}</p>
              <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                {cert.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certifications;

