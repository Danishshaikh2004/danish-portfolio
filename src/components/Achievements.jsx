import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy } from "lucide-react";

const achievements = [
  {
    icon: "🏆",
    title: "Debugging Blitz Winner",
    org: "Institute Level - 2024",
    desc: "IEEE, College Event: Secured 1st place by efficiently resolving complex code issues under time pressure.",
  },
  {
    icon: "🏆",
    title: "Tech Chase Runner-Up",
    org: "Institute Level - 2025",
    desc: "Tech Chase, College Event: Secured 2nd place in a 3-round team-based challenge testing problem-solving and technical skills.",
  },
];

const Achievements = () => {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mb-12"
    >
      <motion.h3
        variants={itemVariants}
        className="text-2xl sm:text-3xl font-bold mb-8"
      >
        <span className="gradient-text">Achievements</span>
      </motion.h3>

      <div className="grid sm:grid-cols-2 gap-6">
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.title}
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            className="glass-card p-6 hover:border-purple-500/30 transition-all group"
          >
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-600/20 to-orange-600/20 flex items-center justify-center flex-shrink-0"
              >
                <span className="text-2xl">{achievement.icon}</span>
              </motion.div>
              <div>
                <h4 className="text-white font-semibold group-hover:gradient-text transition-all">
                  {achievement.title}
                </h4>
                <p className="text-yellow-400 text-sm mt-1">{achievement.org}</p>
                <p className="text-gray-400 text-sm mt-2">{achievement.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements;

