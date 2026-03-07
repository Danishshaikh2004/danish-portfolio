import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    role: "MERN Stack Developer Intern",
    org: "Coding Bits Pvt. Ltd.",
    location: "Remote",
    date: "2025",
    desc: "Collaborated with developers to build production-ready MERN applications. Worked on APIs, authentication, role-based access, and real-time data updates. Built reusable UI components and optimized frontend performance. Integrated backend services and Firebase. Used Git and GitHub for version control.",
    skills: ["React.js", "Node.js", "MongoDB", "Firebase", "Git"],
  },
  {
    role: "Frontend Developer Intern",
    org: "Suvidha Foundation",
    location: "Remote",
    date: "2025",
    desc: "Developed responsive and interactive user interfaces using React.js and Tailwind CSS. Implemented reusable components, managed application state with hooks, and optimized layouts for performance. Collaborated with a remote team using Git and GitHub to deliver UI enhancements for live educational platforms.",
    skills: ["React.js", "TailwindCSS", "JavaScript", "Git"],
  },
];

const Experience = () => {
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
        <span className="gradient-text">Experience</span>
      </motion.h3>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-cyan to-accent-green" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.role}
            variants={itemVariants}
            className="relative pl-16 sm:pl-20 pb-10 last:pb-0"
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 sm:left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan shadow-lg shadow-accent-blue/40" />
            
            {/* Content Card */}
            <motion.div
              whileHover={{ scale: 1.01, x: 8 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-blue/30 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="w-4 h-4 text-accent-blue" />
                    <h4 className="text-white font-semibold text-lg group-hover:gradient-text transition-all">
                      {exp.role}
                    </h4>
                  </div>
                  <p className="text-accent-cyan font-medium ml-6">{exp.org}</p>
                </div>
                <div className="flex items-center gap-3 text-text-muted text-sm">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {exp.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-text-secondary leading-relaxed mb-4 ml-6">
                {exp.desc}
              </p>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 ml-6">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-text-secondary border border-white/10 hover:border-accent-blue/30 hover:text-accent-blue transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;

