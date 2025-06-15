import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-background text-foreground">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let’s{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Connect
          </span>
        </h2>

       
        <p className="text-muted-foreground mb-16 text-base md:text-lg">
          I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
        </p>

  
        <h3 className="text-xl font-semibold mb-6">Ready to start a project?</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      
          <div className="bg-black/30 p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:ring-1 hover:ring-purple-500/50">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white shadow-lg shadow-purple-800/30">
                <Mail size={20} />
              </div>
            </div>
            <h4 className="font-semibold text-white mb-1">Email</h4>
            <p className="text-sm text-muted-foreground">skhdanish.8.4.5.2@gmail.com</p>
          </div>

        
          <div className="bg-black/30 p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:ring-1 hover:ring-blue-500/50">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white shadow-lg shadow-blue-800/30">
                <MapPin size={20} />
              </div>
            </div>
            <h4 className="font-semibold text-white mb-1">Location</h4>
            <p className="text-sm text-muted-foreground">Available for remote work</p>
          </div>
        </div>

        
        <a
          href="mailto:skhdanish.8.4.5.2@gmail.com"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 text-white font-medium hover:opacity-90 transition"
        >
          📩 Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;
