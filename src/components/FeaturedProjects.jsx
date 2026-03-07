import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import conversaiImg from "../assets/conversaiImg.jpg";
import hireupImg from "../assets/hireupImg.jpg";

const projects = [
  {
    title: "BloodLink",
    description: "A MERN stack platform connecting donors, recipients, and hospitals. Features include donor verification, urgency prioritization, proximity search, hospital dashboard, and fraud detection system.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    code: "https://github.com/Danishshaikh2004/BloodLink.git",
    demo: "#",
    image: null,
    year: "2025",
  },
  {
    title: "HireUp Job Portal",
    description: "Full-stack job portal web application allowing users to search, apply, and track jobs seamlessly. Implemented Firebase Authentication for secure user and employer sign-up/login.",
    tags: ["React.js", "TailwindCSS", "Firebase Auth", "MongoDB"],
    code: "https://github.com/Danishshaikh2004/HireUp.git",
    demo: "https://hire-up-portal.vercel.app/",
    image: hireupImg,
    year: "2025",
  },
  {
    title: "ConversAI Chatbot",
    description: "AI-powered chatbot with real-time conversation capabilities. Designed a responsive UI using React.js and Tailwind CSS for seamless cross-device interaction. Uses OpenAI API for response generation.",
    tags: ["React.js", "TailwindCSS", "OpenAI API"],
    code: "https://github.com/Danishshaikh2004/ConversAI.git",
    demo: "https://conversai-portal.vercel.app/",
    image: conversaiImg,
    year: "2024",
  },
];

const FeaturedProjects = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="relative py-18 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
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
            My Work
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-4"
          >
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-text-muted text-lg sm:text-xl max-w-2xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills in MERN stack and full-stack development.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group"
            >
              <div className="relative h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-accent-blue/40 hover:bg-white/10">
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-accent-blue/20 to-accent-green/20 flex items-center justify-center">
                      <span className="text-7xl">🩸</span>
                    </div>
                  )}
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {/* Year Badge */}
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full bg-accent-blue/20 text-accent-blue border border-accent-blue/30">
                    {project.year}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold font-heading text-white mb-3 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 text-text-secondary border border-white/10 hover:border-accent-blue/30 hover:text-accent-blue transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl border border-white/10 text-white bg-white/5 hover:bg-white/10 hover:border-accent-blue/30 transition flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    {project.demo && project.demo !== "#" && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-background hover:shadow-lg hover:shadow-accent-blue/25 transition flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-accent-green/5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Danishshaikh2004?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-blue/30 transition-all duration-300"
          >
            View All Projects on GitHub
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

