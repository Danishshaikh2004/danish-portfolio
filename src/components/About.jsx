import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Zap, Users, TrendingUp, Award } from "lucide-react";

const About = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cards = [
    { 
      icon: Code, 
      title: "Clean Code", 
      description: "Writing maintainable, scalable, and well-documented code",
      gradient: "from-accent-blue to-accent-cyan"
    },
    { 
      icon: Palette, 
      title: "UI/UX Design", 
      description: "Creating beautiful, intuitive, and user-friendly interfaces",
      gradient: "from-accent-green to-emerald-400"
    },
    { 
      icon: Zap, 
      title: "Performance", 
      description: "Optimizing applications for speed and efficiency",
      gradient: "from-blue-500 to-cyan-500"
    },
  ];

  const stats = [
    { number: "2+", label: "Years Experience", icon: TrendingUp },
    { number: "15+", label: "Projects Completed", icon: Users },
    { number: "10+", label: "Technologies", icon: Award },
  ];

  return (
    <section id="about" className="relative py-28 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-blue/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-green/10 rounded-full blur-[150px]" />
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
          <motion.p variants={itemVariants} className="text-accent-blue font-medium mb-4 tracking-wide uppercase text-sm">
            About Me
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Get to Know <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-text-muted text-lg max-w-2xl mx-auto">
            Learn more about my journey and what I bring to the table
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Profile */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold font-heading text-white">
                Profile Summary
              </h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                Motivated <span className="text-accent-blue font-medium">MERN Stack Developer</span> skilled in building modern scalable full-stack applications using MongoDB, Express.js, React.js, and Node.js.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Strong foundation in frontend engineering with expertise in responsive UI, API integration, and component-driven development. Passionate about creating user-centric products and continuously learning new technologies.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-accent-blue" />
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                    {stat.number}
                  </div>
                  <div className="text-text-muted text-xs">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Cards */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="space-y-4">
            {cards.map((card, index) => (
              <motion.div 
                key={card.title} 
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-blue/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold group-hover:gradient-text transition-all">
                      {card.title}
                    </h4>
                    <p className="text-text-muted text-sm mt-1">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

