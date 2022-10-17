import { AnimationOnScroll } from "react-animation-on-scroll";
import "../styles/Contact.scss";

export default function Contact(): JSX.Element {
  return (
    <section className="Contact">
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <h1 className="title">Contact</h1>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce offset={50}>
        <div className="info">
          <p>filipbodnar02@gmail.com</p>
        </div>
      </AnimationOnScroll>
    </section>
  );
}
