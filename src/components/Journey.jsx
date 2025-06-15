import Achievements from "./Achievements";
import Certifications from "./Certifications";
import Experience from "./Experience";
const education = [
  {
    title: "B.E. in Computer Engineering",
    org: "Rizvi College of Engineering, Mumbai",
    date: "2022 – Present",
  },
  {
    title: "HSC Science",
    org: "RD & SH National College, Mumbai",
    date: "2022",
  },
  {
    title: "SSC",
    org: "Purushottam High School, Mumbai",
    date: "2020",
  },
];

const Journey = () => (
  <section
    id="journey"
    className="py-20 bg-background text-foreground px-6 md:px-12"
  >
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
        My{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          Journey
        </span>
      </h2>

      <p className="text-gray-400 mb-10 text-base text-center sm:text-lg">
        Education, certifications, and achievements that shaped my development
        journey
      </p>

   
      <div className="mb-10">
  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">Education</h3>
  <div className="relative border-l border-white/10 pl-6">
    {education.map((item, index) => (
      <div key={index} className="mb-8 relative">
        <span className="absolute -left-[1.81rem] top-2 w-3 h-3 bg-purple-500 rounded-full" />
        <h4 className="text-white font-medium text-lg">{item.title}</h4>
        <p className="text-sm text-gray-400">{item.org}</p>
        <p className="text-sm text-gray-500">{item.date}</p>
      </div>
    ))}
  </div>
</div>


      <Certifications />
      <Achievements />
      <Experience />
    </div>
  </section>
);

export default Journey;
