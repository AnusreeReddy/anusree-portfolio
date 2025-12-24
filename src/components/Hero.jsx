export default function Hero() {
  return (
    <section className="hero section">
      <div className="container">
        <h1>
          Hi, I’m <span style={{ color: "#60a5fa" }}>Anusree Reddy</span>
        </h1>

        <p>
          I explore data-driven problems and build applications that transform
          raw data into clear, meaningful insights using machine learning and
          structured logic.
        </p>

        <div style={{ display: "flex", gap: "1.2rem", marginTop: "2.5rem" }}>
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="\Resumes.pdf" target="_blank" className="btn btn-outline">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
