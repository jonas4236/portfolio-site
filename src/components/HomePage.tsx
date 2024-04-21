import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const HomePage= () => {
  return (
    <>
      <div className="w-full">
        <NavBar />
        <Header />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
