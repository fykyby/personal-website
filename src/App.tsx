import "./styles/App.scss";
import About from "./components/About";
import Projects from "./components/Projects";

export default function App(): JSX.Element {
  return (
    <main className="App">
      <About />
      <Projects />
    </main>
  );
}
