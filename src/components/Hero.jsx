import profile from "../assets/profile.jpg";
import resume from "../assets/Resume.pdf";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[#0f051d] to-[#1a103d] text-white overflow-hidden flex items-center py-16 sm:py-24"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">

        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Danish Shaikh
            </span>{" "}
            <span className="inline-block">✨</span>
          </h1>

          <h2 className="text-xl sm:text-2xl bg-gradient-to-r from-indigo-400 to-pink-400 text-transparent bg-clip-text font-semibold">
            A Frontend Developer
          </h2>

          <p className="text-gray-300 leading-relaxed mx-auto md:mx-0 max-w-md sm:max-w-lg">
            A dynamic and innovative <span className="text-purple-400 font-semibold">Frontend Developer</span> with a flair for crafting responsive, interactive, and visually stunning web applications. I thrive at the intersection of <span className="text-indigo-300 font-semibold">creativity</span> and <span className="text-purple-300 font-semibold">functionality</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-white">📧</span>
              <a href="mailto:skhdanish.8.4.5.2@gmail.com" className="hover:text-purple-400 transition">skhdanish.8.4.5.2@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white">📱</span>
              <a href="tel:+917304220598" className="hover:text-purple-400 transition">7304220598</a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium px-6 py-3 rounded-full transition-all shadow-lg"
            >
              📩 Contact Me
            </a>
            <a
              href={resume}
              target="_blank"
              className="bg-white/10 text-white hover:bg-white/20 font-medium px-6 py-3 rounded-full transition-all shadow-lg border border-white/20"
            >
              📄 Download CV
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a
              href="https://github.com/Danishshaikh2004"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/danish-shaikh-3a5bb72ba"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:skhdanish.8.4.5.2@gmail.com"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>


        <div className="md:w-1/2 flex justify-center md:justify-end relative mt-10 md:mt-0">

          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">

            <div className="w-full h-full rounded-full border-[6px] border-purple-500 p-1 shadow-xl">
              <img
                src={profile}
                alt="Danish Shaikh"
                className="rounded-full w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full animate-float" />

            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-float delay-300" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
