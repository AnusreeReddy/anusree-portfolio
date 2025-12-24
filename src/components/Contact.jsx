export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Let’s Connect</h2>
        <div className="section-line"></div>

        <p
          style={{
            textAlign: "center",
            color: "#9ca3af",
            marginBottom: "2rem"
          }}
        >
          Open to learning opportunities, internships, and entry-level roles
          related to machine learning and software development.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap"
          }}
        >
          <a href="mailto:anusreereddymarri@gmail.com">📧 Email</a>

          <a
            href="https://www.linkedin.com/in/anusree-reddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼 LinkedIn
          </a>

          <a
            href="https://github.com/AnusreeReddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
