const certifications = [
  {
    icon: "📜",
    title: "React JS",
    org: "Simplilearn",
    date: "2025",
  },
  {
    icon: "📜",
    title: "Software Engineering Job Simulation",
    org: "Accenture Nordics",
    date: "2024",
  },
];

const Certifications = () => (
  <div className="mb-10">
    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
      Certifications
    </h3>
    <div className="grid sm:grid-cols-2 gap-6">
      {certifications.map((item, index) => (
        <div
          key={index}
          className="bg-black/20 p-6 rounded-xl backdrop-blur-md hover:ring-1 hover:ring-purple-400 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="text-xl w-10 h-10 flex items-center justify-center rounded-lg bg-purple-800/50 text-white">
              {item.icon}
            </div>
            <div>
              <h4 className="text-white font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.org}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Certifications;
