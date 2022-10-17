import "../styles/Contact.scss";

export default function Contact(): JSX.Element {
  return (
    <section className="Contact">
      <h1 data-aos="fade-left">Contact</h1>
      <div
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-anchor=".Contact h1"
        className="info"
      >
        <p>filipbodnar02@gmail.com</p>
      </div>
    </section>
  );
}
