import "./styles/App.scss";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App(): JSX.Element {
  useEffect(() => {
    AOS.init({
      duration: 600,
      startEvent: "load",
      easing: "ease-in-out-sine",
      once: true,
    });
  }, []);

  return (
    <main className="App">
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
