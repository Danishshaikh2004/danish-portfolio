import tailwind from "../assets/tcss.svg";
import api from "../assets/api.png"; 

const skills = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind",
    logo: tailwind,
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "C",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "API Integration",
    logo: api, 
  },
];

const Skills = () => {
  return (
    <section id="skills" className="pt-16 pb-12 bg-background text-foreground px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Skills
          </span>
        </h2>

        <p className="text-gray-400 mb-10 text-base sm:text-lg">
          Technologies and tools I work with to bring ideas to life
        </p>

        <div className="flex flex-col items-center justify-center gap-10">
          
          <div className="flex flex-wrap justify-center gap-8">
            {skills.slice(0, 6).map((skill) => (
              <SkillLogo key={skill.name} logo={skill.logo} alt={skill.name} />
            ))}
          </div>

          
          <div className="flex flex-wrap justify-center gap-8">
            {skills.slice(6, 12).map((skill) => (
              <SkillLogo key={skill.name} logo={skill.logo} alt={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillLogo = ({ logo, alt }) => (
  <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white/5 rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-xl">
    <img
      src={logo}
      alt={alt}
      className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
      title={alt}
    />
  </div>
);

export default Skills;
