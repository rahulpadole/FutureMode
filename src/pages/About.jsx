import { Laptop } from "lucide-react";
import "./../styles/About.css";

// ✅ valid image from your assets folder
import aboutImage from "../assets/about.jpeg";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* HEADER */}
        <div className="about-header">
          <div className="section-badge-pill">
            <span>OUR HERITAGE & MISSION</span>
          </div>
          <h2 className="about-title">
            About Future Mode Technology
          </h2>

          <p className="about-subtitle">
            Leading the revolution in robotics and modern technology education with innovative solutions that transform learning experiences.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="about-content">

          {/* TEXT SECTION */}
          <div className="about-text-content">

            <h3 className="about-section-title">
              Pioneering Technological Excellence
            </h3>

            <p className="about-description">
              Since our inception, we have been at the forefront of technological innovation,
              developing cutting-edge curriculum and enterprise solutions that empower engineers, educators,
              and students to achieve their full potential.
            </p>

            {/* STATS */}
            <div className="stats-grid">

              <div className="stat-item">
                <div className="stat-number primary">100+</div>
                <div className="stat-label">Projects & Products</div>
              </div>

              <div className="stat-item">
                <div className="stat-number secondary">10+</div>
                <div className="stat-label">Expert Mentors</div>
              </div>

              <div className="stat-item">
                <div className="stat-number primary">99%</div>
                <div className="stat-label">Success Rate</div>
              </div>

              <div className="stat-item">
                <div className="stat-number secondary">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>

            </div>

            <div className="about-actions">
              <a href="#contact" className="about-cta-link">
                Speak With an Expert Advisor →
              </a>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="about-image-container">

            <img
              src={aboutImage}
              alt="Future Mode Technology About Section"
              className="about-image"
            />

            <div className="floating-icon">
              <Laptop className="floating-icon-svg" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}