import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, marginTop: "-100px" });
  const [formState, setFormState] = useState("idle"); // idle, submitting, success

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "skhdanish.8.4.5.2@gmail.com",
      href: "mailto:skhdanish.8.4.5.2@gmail.com",
      color: "from-accent-blue to-accent-cyan",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mumbai, India",
      href: null,
      color: "from-accent-green to-emerald-400",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7304220598",
      href: "tel:+917304220598",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Danishshaikh2004", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/danish-shaikh-3a5bb72ba", label: "LinkedIn" },
    { icon: Mail, href: "mailto:skhdanish.8.4.5.2@gmail.com", label: "Email" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate form submission
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-28 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-blue/10 to-accent-green/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-accent-blue font-medium mb-4 tracking-wide uppercase text-sm"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-4"
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-text-muted text-lg sm:text-xl max-w-2xl mx-auto"
          >
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
          </motion.p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold font-heading text-white mb-4">
                Contact Information
              </h3>
              <p className="text-text-muted leading-relaxed">
                Feel free to reach out to me through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group"
                >
                  <a
                    href={info.href || "#"}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg`}>
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{info.title}</h4>
                      <p className="text-text-muted text-sm">{info.value}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-medium mb-4">Follow me on</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3, backgroundColor: "rgba(56, 189, 248, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-accent-blue/30 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold font-heading text-white mb-6">
                Send a Message
              </h3>

              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-blue to-accent-green flex items-center justify-center mb-6">
                    <CheckCircle size={40} className="text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-text-muted">Thank you for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-6 px-6 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted focus:border-accent-blue/50 focus:outline-none focus:ring-1 focus:ring-accent-blue/50 transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted focus:border-accent-blue/50 focus:outline-none focus:ring-1 focus:ring-accent-blue/50 transition"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted focus:border-accent-blue/50 focus:outline-none focus:ring-1 focus:ring-accent-blue/50 transition"
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Message</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted focus:border-accent-blue/50 focus:outline-none focus:ring-1 focus:ring-accent-blue/50 transition resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={formState === "submitting"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-background font-semibold text-lg shadow-lg shadow-accent-blue/25 hover:shadow-accent-blue/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formState === "submitting" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

