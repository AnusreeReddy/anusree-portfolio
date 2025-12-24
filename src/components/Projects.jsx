export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Selected Projects</h2>
        <div className="section-line"></div>

        <div className="grid-3">

          <div className="card">
            <h3>EV Charging Demand Prediction</h3>
            <br></br>
            <p className="muted">
              This project focused on understanding how electric vehicle
              charging demand evolves over time rather than producing a single
              prediction.
              <br /><br />
              I analyzed historical EV adoption data to identify long-term
              growth trends, seasonal behavior, and regional variation. These
              observations guided feature selection and informed modeling
              decisions.
              <br /><br />
              Multiple approaches were evaluated to balance accuracy and
              stability, resulting in forecasts with approximately 92%
              accuracy across evaluation windows.
              <br /><br />
              <strong>Outcome:</strong> Converted raw adoption data into
              interpretable demand trends that can inform long-term
              infrastructure planning.
            </p>
          </div>

          <div className="card">
            <h3>Mood Journal Application</h3>
            <br></br>
            <p className="muted">
              Designed an application to explore how consistent personal data
              collection can reveal emotional patterns over time.
              <br /><br />
              Instead of treating mood entries independently, the project
              emphasized organizing data into daily and weekly structures to
              surface recurring emotional states.
              <br /><br />
              Simple analytical logic was used to generate reflections from
              past entries, supplemented with contextual elements such as music
              suggestions and motivational content.
              <br /><br />
              <strong>Outcome:</strong> Demonstrated how lightweight analysis
              can make personal tracking tools more reflective and meaningful.
            </p>
          </div>

          <div className="card">
            <h3>Virtual Classroom Management System</h3>
            <br></br>
            <p className="muted">
              Built a Python-based system to examine how structured data
              handling can reduce repetitive administrative tasks.
              <br /><br />
              Student records, attendance, and assessments were organized in a
              consistent format, enabling automated score calculation and
              performance summaries.
              <br /><br />
              The emphasis was on simplifying workflows rather than building a
              complex platform.
              <br /><br />
              <strong>Outcome:</strong> Showed how basic automation and clean
              program structure can improve efficiency in academic settings.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
