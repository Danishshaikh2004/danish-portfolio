import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-0 bg-background border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 text-center">
        
        <div className="flex gap-6">
          <a
            href="https://github.com/Danishshaikh2004"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/danishshaikh2004"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:skhdanish.8.4.5.2@gmail.com"
            className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition"
          >
            <Mail size={20} />
          </a>
        </div>

       
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Danish Shaikh | Frontend Developer.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
