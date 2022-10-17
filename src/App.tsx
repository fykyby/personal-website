import "./styles/App.scss";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App(): JSX.Element {
  return (
    <main className="App">
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
