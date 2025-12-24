export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="section-line"></div>

        <div className="grid-3">
          <div className="card">
            <h3>Programming</h3>
            <p className="muted">
              Python (primary), Java (OOP fundamentals)
            </p>
          </div>

          <div className="card">
            <h3>Web Development</h3>
            <p className="muted">
              HTML, CSS, JavaScript, Flask, REST-based applications
            </p>
          </div>

          <div className="card">
            <h3>Machine Learning</h3>
            <p className="muted">
              Pandas, NumPy, Scikit-learn, Feature Engineering, Time-Series
              Forecasting
            </p>
          </div>

          <div className="card">
            <h3>Databases & CS Fundamentals</h3>
            <p className="muted">
              SQL, DBMS concepts, Data Structures (Arrays, Stacks, Queues, Linked
              Lists)
            </p>
          </div>

          <div className="card">
            <h3>Tools & Platforms</h3>
            <p className="muted">
              Git, GitHub, AWS ML Foundations, MongoDB (Python Developer Associate)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
