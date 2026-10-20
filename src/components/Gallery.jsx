import { useState } from "react";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";
import g8 from "../assets/g8.jpg";
import g9 from "../assets/g9.jpg";
import g10 from "../assets/g10.jpg";
import g11 from "../assets/g11.jpg";
import g13 from "../assets/g13.jpg";
import g14 from "../assets/g14.jpg";
import g15 from "../assets/g15.jpg";
import g16 from "../assets/g16.jpg";

import "../styles/Gallery.css";

const galleryImages = [
  { src: g1, alt: "Campus Image 1" },
  { src: g2, alt: "Campus Image 2" },
  { src: g3, alt: "Campus Image 3" },
  { src: g4, alt: "Campus Image 4" },
  { src: g5, alt: "Campus Image 5" },
  { src: g6, alt: "Campus Image 6" },
  { src: g7, alt: "Campus Image 7" },
  { src: g8, alt: "Campus Image 8" },
  { src: g9, alt: "Campus Image 9" },
  { src: g10, alt: "Campus Image 10" },
  { src: g11, alt: "Campus Image 11" },
  { src: g13, alt: "Campus Image 12" },
  { src: g14, alt: "Campus Image 13" },
  { src: g15, alt: "Campus Image 14" },
  { src: g16, alt: "Campus Image 15" },
];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);

  const imagesToShow = showAll
    ? galleryImages
    : galleryImages.slice(0, 8);

  const handleImageClick = (imageSrc) => {
    window.open(imageSrc, "_blank");
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">

        {/* Header */}
        <div className="gallery-header">
          <div className="section-badge-pill">
            <span>CAMPUS & LAB SHOWCASE</span>
          </div>
          <h2 className="gallery-title">Innovation Gallery</h2>
          <p className="gallery-subtitle">
            Explore our hands-on robotics labs, smart IoT devices, AI projects, and campus technology activities in action.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {imagesToShow.map((image, index) => (
            <div
              key={`gallery-image-${index}`}
              className="gallery-card"
              onClick={() => handleImageClick(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-image"
                loading="lazy"
              />

              <div className="gallery-overlay">
                <span>View Image</span>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="show-more-container">
          <button
            className="show-more-button"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>

      </div>
    </section>
  );
}