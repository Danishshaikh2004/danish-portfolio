import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";
import Achievements from "./Achievements";
import Certifications from "./Certifications";
import Experience from "./Experience";

const education = [
  {
    title: "B.E. in Computer Engineering",
    org: "Rizvi College of Engineering, Mumbai",
    date: "2022 – 2026",
    description: "Pursuing Bachelor's degree in Computer Engineering with focus on web technologies and software development.",
  },
];

const Journey = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, marginTop: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="journey"
      className="relative py-28 bg-background overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-green/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.p
            variants={itemVariants}
            className="text-accent-blue font-medium mb-4 tracking-wide uppercase text-sm"
          >
            My Journey
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-4"
          >
            My <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-text-muted text-lg sm:text-xl max-w-2xl mx-auto"
          >
            Education, certifications, and achievements that shaped my development journey
          </motion.p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold font-heading mb-8"
          >
            <span className="gradient-text">Education</span>
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-cyan to-accent-green" />

            {education.map((edu, idx) => (
              <motion.div
                key={edu.title}
                variants={itemVariants}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan shadow-lg shadow-accent-blue/40" />
                
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.01, x: 5 }}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-blue/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-green/20 flex items-center justify-center flex-shrink-0"
                    >
                      <GraduationCap size={24} className="text-accent-blue" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg group-hover:gradient-text transition-all">
                        {edu.title}
                      </h4>
                      <p className="text-accent-cyan font-medium mt-1">{edu.org}</p>
                      <div className="flex items-center gap-2 text-text-muted text-sm mt-2">
                        <Calendar size={14} />
                        {edu.date}
                      </div>
                      <p className="text-text-secondary mt-3">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Certifications />
        <Achievements />
        <Experience />
      </div>
    </section>
  );
};

export default Journey;

