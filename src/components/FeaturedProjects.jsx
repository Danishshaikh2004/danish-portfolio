import { Github, ExternalLink } from "lucide-react";
import conversaiImg from "../assets/conversaiImg.jpg";
import hireupImg from "../assets/hireupImg.jpg";
import weatherImg from "../assets/weatherImg.jpg";

const projects = [
  {
    title: "HireUp Job Portal",
    description:
      "Developed a full-stack job portal web application allowing users to search, apply, and track jobs seamlessly. Implemented Firebase Authentication for secure user and employer sign-up/login.",
    tags: ["React.js", "TailwindCSS", "Firebase Auth"],
    code: "https://github.com/Danishshaikh2004/HireUp.git",
    demo: "https://hire-up-portal.vercel.app/",
    image: hireupImg,
    year: "2025",
  },
  {
    title: "Weather Dashboard",
    description:
      "Built a modern weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features responsive design and real-time weather updates.",
    tags: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    code: "https://github.com/Danishshaikh2004/Weather-App.git",
    demo: "https://danishshaikh2004.github.io/Weather-App/",
    image: weatherImg,
    year: "2024",
  },
  {
    title: "ConversAI Chatbot",
    description:
      "Built an AI-powered chatbot with real-time conversation capabilities. Designed a responsive UI using React.js and Tailwind CSS for seamless cross-device interaction. Uses OpenAI API for response.",
    tags: ["React.js", "TailwindCSS", "OpenAI API"],
    code: "https://github.com/Danishshaikh2004/ConversAI.git",
    demo: "https://conversai-portal.vercel.app/",
    image: conversaiImg,
    year: "2024",
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-20 bg-background text-foreground px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Projects
          </span>
        </h2>

        <p className="text-gray-400 mb-10 text-base text-center sm:text-lg">
          Here are some of my recent projects that showcase my skills in frontend and fullstack development.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/20 backdrop-blur-md rounded-xl border border-white/10 hover:ring-1 hover:ring-purple-400 transform hover:scale-[1.025] transition-all duration-300 overflow-hidden"
            >
             
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  {project.year}
                </span>
              </div>

              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{project.description}</p>

       
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/10 text-xs text-white px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

       
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-md border border-white/10 text-white bg-white/5 hover:bg-white/10 transition flex items-center gap-2"
                  >
                    <Github size={16} /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm rounded-md border border-purple-500 text-purple-300 hover:bg-purple-500/10 transition flex items-center gap-2"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="text-center mt-12">
          <a
            href="https://github.com/Danishshaikh2004?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-purple-400 to-blue-400 hover:opacity-90 transition"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
