const experiences = [
  {
    role: "Frontend Developer Intern",
    org: "Suvidha Foundation",
    date: "2025",
    desc:
      "Developed responsive and interactive user interfaces using React.js and Tailwind CSS. " +
      "Implemented reusable components, managed application state with hooks, and optimized layouts for performance. " +
      "Collaborated with a remote team using Git and GitHub to deliver UI enhancements for live educational platforms.",
  },
];


const Experience = () => (
  <div className="mb-10">
    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
      Experience
    </h3>
    <div className="relative border-l border-white/10 pl-6">
      {experiences.map((item, index) => (
        <div key={index} className="mb-8 relative">
          <span className="absolute -left-[1.81rem] top-2 w-3 h-3 bg-purple-500 rounded-full" />
          <h4 className="text-white font-medium text-lg">{item.role}</h4>
          <p className="text-sm text-gray-400">{item.org}</p>
          <p className="text-sm text-gray-500 mb-2">{item.date}</p>
          <p className="text-sm text-gray-300">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
