import { useState, useEffect } from "react";
import { Play, ArrowRight, ChevronRight, X, Activity } from "lucide-react";
import { Bot, Brain, SatelliteDish, Printer, Cpu } from "lucide-react";
import humanoidBanner from "../assets/humanoid-banner.png";
import roboticsImage from "../assets/robotics.jpg";
import aimlImage from "../assets/aiml.jpg";
import iotImage from "../assets/iot.jpg";
import printingImage from "../assets/3d-printing.jpg";
import pcbImage from "../assets/pcb.jpg";
import "./../styles/Hero.css";

const domains = [
  {
    id: "robotics",
    icon: Bot,
    name: "Robotics",
    fullName: "Robotics & Automation",
    spec: "99.8% Precision • 18 Mos",
    description: "Industrial robotic manipulators, autonomous mobile robots (AMR), and intelligent ROS workflows.",
    color: "#2563eb",
    image: roboticsImage,
    duration: "18 Months",
  },
  {
    id: "aiml",
    icon: Brain,
    name: "AI & ML",
    fullName: "AI & Machine Learning",
    spec: "Real-Time Inference • 18 Mos",
    description: "Deep learning neural architectures, industrial computer vision, and predictive maintenance algorithms.",
    color: "#06b6d4",
    image: aimlImage,
    duration: "18 Months",
  },
  {
    id: "iot",
    icon: SatelliteDish,
    name: "IoT",
    fullName: "Industrial IoT Solutions",
    spec: "Edge Telemetry • 11 Mos",
    description: "Enterprise sensor arrays, MQTT cloud pipelines, and ultra-reliable industrial edge microcontrollers.",
    color: "#10b981",
    image: iotImage,
    duration: "11 Months",
  },
  {
    id: "printing",
    icon: Printer,
    name: "3D Print",
    fullName: "3D Printing & Prototyping",
    spec: "Rapid Tooling • 6 Mos",
    description: "Additive manufacturing, SLA & FDM rapid industrial enclosures, and parametric CAD mechanical engineering.",
    color: "#8b5cf6",
    image: printingImage,
    duration: "6 Months",
  },
  {
    id: "pcb",
    icon: Cpu,
    name: "PCB",
    fullName: "Electronics & PCB Design",
    spec: "Custom Hardware • 4 Mos",
    description: "Multilayer high-speed PCB schematics, component routing, firmware compilation, and sensor integration.",
    color: "#f59e0b",
    image: pcbImage,
    duration: "4 Months",
  },
];

export default function Hero() {
  const [activeDomain, setActiveDomain] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleExploreClick = () => {
    const targetSection = document.querySelector("#services") || document.querySelector("#programs");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleWatchDemoClick = () => {
    setIsVideoModalOpen(true);
  };

  // Auto-cycle through domains every 4.5s unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveDomain((prev) => (prev + 1) % domains.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = domains[activeDomain];
  const CurrentIcon = current.icon;

  const closeModal = () => setSelectedProgram(null);

  return (
    <section className="hero-section" id="home">
      {/* Ambient background glow */}
      <div className="hero-bg-glow"></div>

      <div className="hero-container">
        <div className="hero-grid">
          {/* ── Left Column: Value Proposition ─────────────── */}
          <div className="hero-main">
            {/* Live Status Badge */}
            <div className="hero-badge">
              <span className="hero-badge-pulse"></span>
              <span className="hero-badge-text">FutureMode Technology • Industrial Automation & AI</span>
            </div>

            {/* Fluid Golden-Ratio Headline */}
            <h1 className="hero-title">
              <span className="hero-title-line">Advanced Technology</span>
              <span className="hero-title-line accent-gradient">Solutions for</span>
              <span className="hero-title-line">Modern Businesses</span>
            </h1>

            {/* Value Description */}
            <p className="hero-description">
              We engineer intelligent robotics, custom AI/ML integrations, IoT ecosystems,
              and precision manufacturing to accelerate industrial growth and empower modern engineers.
            </p>

            {/* Metrics Capsule Strip */}
            <div className="hero-stats-strip">
              <div className="stat-pill">
                <span className="stat-num">50+</span>
                <span className="stat-txt">Projects Delivered</span>
              </div>
              <div className="stat-dot"></div>
              <div className="stat-pill">
                <span className="stat-num">15+</span>
                <span className="stat-txt">Industry Partners</span>
              </div>
              <div className="stat-dot"></div>
              <div className="stat-pill">
                <span className="stat-num">99.8%</span>
                <span className="stat-txt">Precision Rate</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-actions">
              <button onClick={handleExploreClick} className="hero-btn primary-btn">
                <span>Explore Solutions</span>
                <ArrowRight size={17} />
              </button>
              <button onClick={handleWatchDemoClick} className="hero-btn secondary-btn">
                <Play size={16} className="play-icon" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* ── Right Column: Compact Holographic Showcase Card ──────── */}
          <div
            className="hero-showcase"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="showcase-card">
              {/* Visual Frame */}
              <div className="showcase-visual-frame">
                <img
                  src={humanoidBanner}
                  alt="FutureMode Humanoid Robotics & AI Innovation"
                  className="showcase-image"
                />
                <div className="showcase-image-overlay"></div>

                {/* Top HUD Chips */}
                <div className="showcase-hud-top">
                  <div className="hud-pill live-pill">
                    <span className="hud-pulse-dot"></span>
                    <span>AI Neural Core Active</span>
                  </div>
                  <div className="hud-pill spec-pill">
                    <Activity size={12} />
                    <span>Industry 4.0 Standard</span>
                  </div>
                </div>

                {/* Domain Selector Chips (Overlay inside frame) */}
                <div className="domain-tabs-row">
                  {domains.map((d, index) => {
                    const DIcon = d.icon;
                    const isActive = index === activeDomain;
                    return (
                      <button
                        key={d.id}
                        className={`domain-tab-btn ${isActive ? "active" : ""}`}
                        onClick={() => setActiveDomain(index)}
                        aria-label={`View ${d.fullName}`}
                      >
                        <DIcon size={13} />
                        <span>{d.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Interactive Spec Strip */}
              <div
                className="showcase-spec-strip"
                onClick={() => setSelectedProgram(current)}
                role="button"
                tabIndex={0}
                title="Click to view detailed specs"
              >
                <div className="spec-strip-left">
                  <div className="spec-icon-box" style={{ color: current.color }}>
                    <CurrentIcon size={18} />
                  </div>
                  <div className="spec-info">
                    <div className="spec-title-row">
                      <span className="spec-name">{current.fullName}</span>
                      <span className="spec-badge">{current.spec}</span>
                    </div>
                    <p className="spec-desc">{current.description}</p>
                  </div>
                </div>
                <button className="spec-expand-btn" aria-label="View domain details">
                  <span>Details</span>
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="modal-close-button" aria-label="Close modal">
              <X size={20} />
            </button>
            <img
              src={selectedProgram.image}
              alt={selectedProgram.fullName}
              className="modal-image"
            />
            <div className="modal-header">
              <div className="modal-icon" style={{ color: selectedProgram.color }}>
                {selectedProgram.icon && <selectedProgram.icon size={26} />}
              </div>
              <h3 className="modal-title">{selectedProgram.fullName}</h3>
            </div>
            <p className="modal-description">{selectedProgram.description}</p>
            <div className="modal-duration">
              Duration: <strong>{selectedProgram.duration}</strong> • Benchmark: <strong>{selectedProgram.spec}</strong>
            </div>
            <button
              onClick={() => {
                closeModal();
                handleExploreClick();
              }}
              className="modal-explore-btn"
            >
              Explore Full Curriculum & Details
            </button>
          </div>
        </div>
      )}

      {/* Video Demo Modal */}
      {isVideoModalOpen && (
        <div className="modal-overlay" onClick={() => setIsVideoModalOpen(false)}>
          <div className="modal-content video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="modal-close-button"
              aria-label="Close video demo"
            >
              <X size={20} />
            </button>
            <div className="video-player-container">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/bkiXZuJEfm4?autoplay=1"
                title="FutureMode Technology Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-modal-footer">
              <h3 className="video-modal-title">FutureMode Technology — Innovation In Action</h3>
              <a
                href="https://youtu.be/bkiXZuJEfm4?si=JfqKjclGj5et6I9Y"
                target="_blank"
                rel="noopener noreferrer"
                className="video-external-btn"
              >
                Watch on YouTube ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}