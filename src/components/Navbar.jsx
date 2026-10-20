import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, GraduationCap, Phone, Sun, Moon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logoImage from "../assets/logo-.png";
import "./../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Theme State: defaults to dark, persists in localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.setAttribute("data-theme", "dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Helper function to determine if a link is external
  const isExternalLink = (href) => {
    return (
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    );
  };

  // Helper function to handle navigation
  const handleNavigation = (href) => {
    if (isExternalLink(href)) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetId = href === "#solutions" ? "#services" : href;
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileDropdownOpen(false);
  };

  const navItems = [
    { href: "#home", label: "Home" },
    {
      href: "#services",
      label: "Solutions",
      dropdown: [
        { href: "#services", label: "Robotics & Automation" },
        { href: "#services", label: "AI & Machine Learning" },
        { href: "#services", label: "IoT Solutions" },
        { href: "#services", label: "3D Printing" },
        { href: "https://wa.me/c/918308211268", label: "Robotics Material (Shop)" },
      ],
    },
    { href: "#about", label: "About Us" },
    { href: "#vision", label: "Vision & Mission" },
    { href: "#programs", label: "Programs" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo with high-contrast badge container */}
          {/* Spatial UI Logo & Brand Emblem */}
          <div
            className="logo-container"
            onClick={scrollToTop}
            role="button"
            tabIndex={0}
            aria-label="FutureMode Technology Home"
          >
            <div className="logo-emblem">
              <img
                src={logoImage}
                alt="FutureMode Technology Logo"
                className="logo-image"
              />
            </div>
            <div className="logo-text">
              <div className="logo-title-row">
                <span className="logo-brand-future">Future</span>
                <span className="logo-brand-mode">Mode</span>
                <span className="logo-spatial-dot" aria-hidden="true"></span>
              </div>
              <span className="logo-brand-tech">TECHNOLOGY</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <nav className="nav-links" aria-label="Desktop menu">
              {navItems.map((item, index) => (
                <div
                  key={`${item.href}-${index}`}
                  className="nav-item"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className={`nav-link ${activeDropdown === item.href ? "active" : ""}`}
                    aria-expanded={item.dropdown ? activeDropdown === item.href : undefined}
                    aria-haspopup={item.dropdown ? "true" : undefined}
                  >
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown
                        className={`dropdown-icon ${activeDropdown === item.href ? "rotated" : ""}`}
                        size={15}
                        strokeWidth={2.2}
                      />
                    )}
                  </button>

                  {item.dropdown && activeDropdown === item.href && (
                    <div className="dropdown-menu">
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <button
                          key={`${dropItem.href}-${dropIndex}`}
                          onClick={() => handleNavigation(dropItem.href)}
                          className="dropdown-item"
                        >
                          <span className="dropdown-bullet"></span>
                          <span>{dropItem.label}</span>
                          {dropItem.href.startsWith("http") && (
                            <span className="shop-tag">Store</span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="nav-actions">
              {/* Dual-Icon High-Contrast Theme Switch Pill */}
              <div
                className="theme-switch-pill"
                onClick={toggleTheme}
                role="button"
                tabIndex={0}
                aria-label={theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
                title={theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
              >
                <div className={`theme-pill-option ${theme === "light" ? "active" : ""}`}>
                  <Sun size={15} strokeWidth={2} />
                  <span className="pill-txt">Light</span>
                </div>
                <div className={`theme-pill-option ${theme === "dark" ? "active" : ""}`}>
                  <Moon size={15} strokeWidth={2} />
                  <span className="pill-txt">Dark</span>
                </div>
              </div>

              {/* WhatsApp Quick Connect (Solid High-Contrast) */}
              <a
                href="https://wa.me/918308211268?text=Hello%20FutureMode%20Technology,%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-nav-btn"
                aria-label="Direct WhatsApp Chat"
                title="Chat on WhatsApp"
              >
                <FaWhatsapp size={17} />
                <span>WhatsApp</span>
              </a>

              {/* Enroll Now CTA */}
              <button
                onClick={() => handleNavigation("#programs")}
                className="enroll-btn"
                aria-label="Explore Training Programs"
              >
                <GraduationCap size={16} strokeWidth={2} />
                <span>Enroll Now</span>
              </button>
            </div>
          </div>

          {/* Mobile Actions in Header Bar */}
          <div className="mobile-actions">
            {/* Mobile Dual Theme Switch */}
            <div
              className="mobile-theme-pill"
              onClick={toggleTheme}
              role="button"
              tabIndex={0}
              aria-label="Toggle theme"
            >
              <div className={`mobile-pill-icon ${theme === "light" ? "active" : ""}`}>
                <Sun size={15} strokeWidth={2} />
              </div>
              <div className={`mobile-pill-icon ${theme === "dark" ? "active" : ""}`}>
                <Moon size={15} strokeWidth={2} />
              </div>
            </div>

            {/* Solid WhatsApp Icon */}
            <a
              href="https://wa.me/918308211268"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-wa-icon"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={19} />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-btn"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} strokeWidth={2.2} /> : <Menu size={20} strokeWidth={2.2} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="mobile-nav" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <div className="mobile-nav-backdrop" onClick={() => setIsOpen(false)}></div>
            <div className="mobile-nav-panel">
              <div className="mobile-nav-header">
                <div className="logo-container" onClick={scrollToTop}>
                  <div className="logo-emblem">
                    <img src={logoImage} alt="FutureMode Technology" className="logo-image" />
                  </div>
                  <div className="logo-text">
                    <div className="logo-title-row">
                      <span className="logo-brand-future">Future</span>
                      <span className="logo-brand-mode">Mode</span>
                      <span className="logo-spatial-dot" aria-hidden="true"></span>
                    </div>
                    <span className="logo-brand-tech">TECHNOLOGY</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mobile-close-btn"
                  aria-label="Close menu"
                >
                  <X size={20} strokeWidth={2.2} />
                </button>
              </div>

              {/* Drawer Theme Switcher */}
              <div className="mobile-drawer-theme-bar">
                <span className="drawer-theme-label">Appearance:</span>
                <div className="theme-switch-pill in-drawer" onClick={toggleTheme}>
                  <div className={`theme-pill-option ${theme === "light" ? "active" : ""}`}>
                    <Sun size={15} strokeWidth={2} />
                    <span>Light</span>
                  </div>
                  <div className={`theme-pill-option ${theme === "dark" ? "active" : ""}`}>
                    <Moon size={15} strokeWidth={2} />
                    <span>Dark</span>
                  </div>
                </div>
              </div>

              <div className="mobile-nav-links">
                {navItems.map((item, index) => (
                  <div key={`${item.href}-${index}`} className="mobile-nav-item">
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                          className="mobile-nav-link dropdown-toggle"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            size={17}
                            strokeWidth={2.2}
                            className={`mobile-chevron ${mobileDropdownOpen ? "rotated" : ""}`}
                          />
                        </button>
                        {mobileDropdownOpen && (
                          <div className="mobile-dropdown-menu">
                            {item.dropdown.map((dropItem, dropIndex) => (
                              <button
                                key={`${dropItem.href}-${dropIndex}`}
                                onClick={() => handleNavigation(dropItem.href)}
                                className="mobile-dropdown-item"
                              >
                                <span>{dropItem.label}</span>
                                {dropItem.href.startsWith("http") && (
                                  <span className="shop-tag">Store</span>
                                )}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className="mobile-nav-link"
                      >
                        {item.label}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="mobile-nav-footer">
                <a
                  href="https://wa.me/918308211268?text=Hello%20FutureMode%20Technology,%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-cta-btn whatsapp-cta"
                  onClick={() => setIsOpen(false)}
                >
                  <FaWhatsapp size={19} />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="tel:+918308211268"
                  className="mobile-cta-btn call-cta"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={17} />
                  <span>Call +91 83082 11268</span>
                </a>

                <button
                  onClick={() => handleNavigation("#programs")}
                  className="mobile-cta-btn enroll-cta"
                >
                  <GraduationCap size={18} strokeWidth={2} />
                  <span>Enroll in Program</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
