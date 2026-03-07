import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import resume from "../assets/Resume.pdf";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const textToType = ["React Developer", "MERN Stack Engineer", "Frontend Developer"];
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = textToType[textIndex];
      
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % textToType.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, textToType]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const techIcons = [
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "MongoDB", icon: "🍃", color: "#47A248" },
    { name: "Express", icon: "🚀", color: "#000000" },
    { name: "JavaScript", icon: "📜", color: "#F7DF1E" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* Gradient Blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-green/15 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 rounded-full blur-[120px]" />
      
      {/* Floating Tech Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-10"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%" 
            }}
            animate={{
              y: [null, Math.random() * -100 - 50, null],
              x: [null, Math.random() * 50 - 25, null],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {techIcons[i % techIcons.length].icon}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side - Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <span className="text-accent-blue text-sm font-medium">Available for work</span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-white mb-4 leading-tight"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Danish Shaikh</span>
            </motion.h1>
            
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-secondary mb-2"
            >
              <span className="text-white">MERN Stack</span> Developer
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-text-muted text-lg mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              I build scalable full-stack web applications using modern technologies like React, Node.js and MongoDB.
            </motion.p>
            
            {/* Typing Animation */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-text-secondary text-lg">Specialized in </span>
              <span className="text-accent-blue text-lg font-semibold">
                {displayText}
              </span>
              <span className="border-r-2 border-accent-blue ml-1 animate-pulse">|</span>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-gradient-to-r from-accent-blue to-accent-cyan text-background font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/30 transition-all duration-200"
              >
                View Projects
              </motion.a>
              <motion.a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/15 transition-all duration-200 border border-white/10 backdrop-blur-sm"
              >
                <Download size={18} />
                Download Resume
              </motion.a>
              {/* <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 border border-white/10"
              >
                Contact Me
              </motion.a> */}
            </motion.div>
            
            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start mt-4">
              {[
                { icon: Github, href: "https://github.com/Danishshaikh2004" },
                { icon: Linkedin, href: "https://linkedin.com/in/danish-shaikh-3a5bb72ba" },
                { icon: Mail, href: "mailto:skhdanish.8.4.5.2@gmail.com" },
              ].map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -5, backgroundColor: "rgba(56, 189, 248, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white border border-white/10 transition-all duration-200"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Side - Animated Tech Stack */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:flex items-center justify-center order-1 lg:order-2"
          >
            {/* Main Orbit Container */}
            <div className="relative w-[420420px]">
              {/* Outerpx] h-[ Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue/20 to-accent-green/20 blur-2xl" />
              
              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-background-secondary to-background border border-white/10 flex items-center justify-center shadow-2xl">
                <span className="text-5xl">💻</span>
              </div>
              
              {/* Orbiting Icons */}
              {techIcons.map((tech, index) => {
                const angle = (index * 360) / techIcons.length;
                const radius = 160;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={tech.name}
                    className="absolute w-20 h-20 bg-background-secondary rounded-2xl flex items-center justify-center text-3xl border border-white/10 shadow-xl backdrop-blur-sm"
                    style={{
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% + ${y}px - 40px)`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {tech.icon}
                  </motion.div>
                );
              })}
              
              {/* Orbit Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] border border-dashed border-white/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] border border-white/5 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-text-muted text-sm">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full bg-accent-blue"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

