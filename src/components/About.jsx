
const About = () => {
  return (
    <section
      id="about"
      className="pt-20 pb-16 bg-background text-foreground px-6 md:px-12"
    >

      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Me
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-base md:text-lg">
          Learn more about my journey and what drives me as a developer
        </p>

       
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Profile Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              A dynamic and innovative{" "}
              <span className="text-purple-400 font-semibold">Frontend Developer</span>{" "}
              with a flair for crafting responsive, interactive, and visually stunning
              web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Proficient in cutting-edge technologies like{" "}
              <span className="text-pink-400 font-medium">HTML</span>,{" "}
              <span className="text-pink-400 font-medium">CSS</span>,{" "}
              <span className="text-pink-400 font-medium">JavaScript</span>, and modern
              frameworks including{" "}
              <span className="text-blue-400 font-medium">React.js</span>,{" "}
              <span className="text-blue-400 font-medium">Tailwind CSS</span>, and{" "}
              <span className="text-blue-400 font-medium">Bootstrap</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Adept at building immersive, feature-rich projects and delivering seamless
              user experiences. I thrive at the intersection of{" "}
              <span className="text-indigo-300 font-medium">creativity</span> and{" "}
              <span className="text-purple-300 font-medium">functionality</span>, always
              seeking to push the boundaries of what's possible in web development.
            </p>
          </div>

    
          <div className="space-y-4">
            <Card
              icon="💻"
              title="Clean Code"
              description="Writing maintainable and scalable code"
            />
            <Card
              icon="🎨"
              title="UI/UX Design"
              description="Creating beautiful and intuitive interfaces"
            />
            <Card
              icon="⚡"
              title="Performance"
              description="Optimizing for speed and efficiency"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ icon, title, description }) => (
  <div className="bg-black/20 rounded-xl p-6 backdrop-blur-md hover:ring-1 hover:ring-portfolio-accent transition-all">
    <div className="flex items-center gap-4">
      <div className="text-xl w-10 h-10 flex items-center justify-center rounded-lg bg-purple-800/50 text-white">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-semibold">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);

export default About;
