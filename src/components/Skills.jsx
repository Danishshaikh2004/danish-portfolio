import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import tailwind from "../assets/tcss.svg";
import api from "../assets/api.png";

const skills = {
  frontend: [
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", logo: tailwind },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  ],
  backend: [
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  ],
  tools: [
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "REST APIs", logo: api },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ],
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, marginTop: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const skillCategories = [
    { title: "Frontend", skills: skills.frontend, icon: "🎨" },
    { title: "Backend", skills: skills.backend, icon: "⚙️" },
    { title: "Tools", skills: skills.tools, icon: "🛠️" },
  ];

  return (
    <section id="skills" className="relative py-28 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-green/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 grid-bg opacity-50" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            My Expertise
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-4"
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-text-muted text-lg sm:text-xl max-w-2xl mx-auto"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Category Header */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 mb-10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-green/20 flex items-center justify-center text-2xl">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
              </motion.div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="group"
                  >
                    <div className="relative p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-blue/40 transition-all duration-300 backdrop-blur-sm">
                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-blue/10 to-accent-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Skill Icon */}
                      <div className="relative flex flex-col items-center gap-3">
                        <motion.img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-10 h-10 object-contain"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <span className="text-text-secondary text-xs font-medium text-center group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-3 gap-6"
        >
          {[
            { number: "2+", label: "Years Experience" },
            { number: "15+", label: "Projects Built" },
            { number: "10+", label: "Technologies" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-text-muted text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default Skills;

