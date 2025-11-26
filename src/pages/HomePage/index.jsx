import React, { useState } from 'react';
import './style.css';
import scissorsImage from './img/scissors.jpg';
import evansImage from './img/evans.jpg';
import shop1Image from './img/shop1.jpg';
import shop2Image from './img/shop2.jpg';
import shop3Image from './img/shop3.jpg';
import shop4Image from './img/shop4.jpg';
import shop5Image from './img/shop5.jpg';
import shop6Image from './img/shop6.jpg';

export const HomePage = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Placeholder photos - replace with your actual images
  const photos = [
    { src: evansImage, alt: 'Evans' },
    { src: shop1Image, alt: 'Barbershop interior 1' },
    { src: shop2Image, alt: 'Barbershop interior 2' },
    { src: shop3Image, alt: 'Barbershop interior 3' },
    { src: shop4Image, alt: 'Barbershop interior 4' },
    { src: shop5Image, alt: 'Barbershop interior 5' },
    { src: shop6Image, alt: 'Barbershop interior 6' },
  ];

  const toggleCard = (cardIndex) => {
    setFlippedCards((prev) => ({
      ...prev,
      [cardIndex]: !prev[cardIndex],
    }));
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToPhoto = (index) => {
    setCurrentPhotoIndex(index);
  };

  return (
    <div className="home-page">
      <section className="services-section">
        <div className="services-cards container">
          <div
            className={`service-card ${flippedCards[0] ? 'flipped' : ''}`}
            onClick={() => toggleCard(0)}
          >
            <div className="service-card-inner">
              <div className="service-card-front">
                <h3>Men's Haircuts</h3>
                <p>Professional styling and cuts for the modern gentleman</p>
              </div>
              <div className="service-card-back">
                <h3>Men's Haircuts</h3>
                <div className="pricing">
                  <div className="style">Complete styling: hair + beard</div>
                  <div className="price">900 CZK</div>
                </div>
                <div className="pricing">
                  <div className="style">Haircut</div>
                  <div className="price">600 CZK</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`service-card ${flippedCards[1] ? 'flipped' : ''}`}
            onClick={() => toggleCard(1)}
          >
            <div className="service-card-inner">
              <div className="service-card-front">
                <h3>Barber Services</h3>
                <p>Traditional barbering with attention to detail</p>
              </div>
              <div className="service-card-back">
                <h3>Barber Services</h3>
                <div className="pricing">
                  <div className="style">Beard trim/shave</div>
                  <div className="price">500 CZK</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`service-card ${flippedCards[2] ? 'flipped' : ''}`}
            onClick={() => toggleCard(2)}
          >
            <div className="service-card-inner">
              <div className="service-card-front">
                <h3>Children's Haircuts</h3>
                <p>Gentle and fun haircuts for the little ones</p>
              </div>
              <div className="service-card-back">
                <h3>Children's Haircuts</h3>
                <div className="pricing">
                  <div className="style">Kids haircut (up to 12 years)</div>
                  <div className="price">500 CZK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="booking container">
          <button>
            <a href="https://noona.app/cs/dekubesbarber">Book an Appointment</a>
          </button>
        </div>
      </section>
      <section id="hours" className="hours-section">
        <div className="container">
          <div className="hours">
            <h2 id="hours-heading">Business Hours</h2>
            <div className="hours-flex">
              <div className="hours-table">
                <div className="day-hours">
                  <div className="day">Mon</div>
                  <div className="hours-time">9:00 - 18:00</div>
                </div>
                <div className="day-hours">
                  <div className="day">Tue</div>
                  <div className="hours-time">9:00 - 18:00</div>
                </div>
                <div className="day-hours">
                  <div className="day">Wed</div>
                  <div className="hours-time">9:00 - 18:00</div>
                </div>
                <div className="day-hours">
                  <div className="day">Thu</div>
                  <div className="hours-time">9:00 - 18:00</div>
                </div>
                <div className="day-hours">
                  <div className="day">Fri</div>
                  <div className="hours-time">9:00 - 18:00</div>
                </div>
                <div className="day-hours">
                  <div className="day">Sat</div>
                  <div className="hours-time">9:00 - 18:00</div>
                </div>
                <div className="day-hours closed">
                  <div className="day">Sun</div>
                  <div className="hours-time">Closed</div>
                </div>
              </div>
              <div className="hours-image">
                <img src={scissorsImage} alt="scissors" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="photos" className="photos-section">
        <div className="container">
          <h2 id="photos-heading">Gallery</h2>
          <div className="carousel">
            <button
              className="carousel-button prev"
              onClick={prevPhoto}
              aria-label="Previous photo"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="11" className="button-bg" />
                <path
                  d="M14 16L10 12L14 8"
                  className="button-arrow"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="carousel-container">
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentPhotoIndex * 100}%)`,
                }}
              >
                {photos.map((photo, index) => (
                  <div key={index} className="carousel-slide">
                    <img src={photo.src} alt={photo.alt} />
                  </div>
                ))}
              </div>
            </div>
            <button
              className="carousel-button next"
              onClick={nextPhoto}
              aria-label="Next photo"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="11" className="button-bg" />
                <path
                  d="M10 16L14 12L10 8"
                  className="button-arrow"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="carousel-dots">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentPhotoIndex ? 'active' : ''}`}
                onClick={() => goToPhoto(index)}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="location" className="location-section">
        <div className="container">
          <h2 id="location-heading">Location</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=50.0808971,14.4232455&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Barber Shop Location"
            ></iframe>
          </div>
        </div>
      </section>
      <section id="contacts" className="contacts-section">
        <div className="container">
          <h2 id="contacts-heading">Contacts</h2>
          <div className="contact-details">
            <a href="tel:+420739819911">
              <strong>Phone:</strong> +420 739 819 911
            </a>
            <a href="mailto:dekubesbarber@gmail.com">
              <strong>Email:</strong> dekubesbarber@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
