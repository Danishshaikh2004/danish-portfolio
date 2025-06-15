// App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import FeaturedProjects from "./components/FeaturedProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <Hero />
        <About />
        <Skills />
        <Journey />
        <FeaturedProjects/>
        <Contact/>
      </main>
      <Footer />
    </>
  );
}
export default App;
