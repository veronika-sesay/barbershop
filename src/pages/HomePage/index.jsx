import React, { useState } from 'react';
import './style.css';
import scissorsImage from './img/scissors.jpg';
import evansImage from './img/evans.jpg';
import shopImage1 from './img/Barbershop_praha2025-1.jpg';
import shopImage2 from './img/Barbershop_praha2025-2.jpg';
import shopImage3 from './img/Barbershop_praha2025-3.jpg';
import shopImage4 from './img/Barbershop_praha2025-4.jpg';
import shopImage5 from './img/Barbershop_praha2025-5.jpg';
import shopImage6 from './img/Barbershop_praha2025-6.jpg';
import shopImage7 from './img/Barbershop_praha2025-7.jpg';
import shopImage8 from './img/Barbershop_praha2025-8.jpg';
import shopImage9 from './img/Barbershop_praha2025-9.jpg';
import shopImage10 from './img/Barbershop_praha2025-10.jpg';
import shopImage11 from './img/Barbershop_praha2025-11.jpg';
import shopImage12 from './img/Barbershop_praha2025-12.jpg';
import shopImage13 from './img/Barbershop_praha2025-13.jpg';
import shopImage14 from './img/Barbershop_praha2025-14.jpg';
import shopImage15 from './img/Barbershop_praha2025-15.jpg';
import shopImage16 from './img/Barbershop_praha2025-16.jpg';
import shopImage17 from './img/Barbershop_praha2025-17.jpg';
import shopImage18 from './img/Barbershop_praha2025-18.jpg';
import shopImage19 from './img/Barbershop_praha2025-19.jpg';

export const HomePage = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = [
    { src: shopImage1, alt: 'Barbershop 1' },
    { src: shopImage2, alt: 'Barbershop 2' },
    { src: shopImage3, alt: 'Barbershop 3' },
    { src: shopImage4, alt: 'Barbershop 4' },
    { src: shopImage5, alt: 'Barbershop 5' },
    { src: shopImage6, alt: 'Barbershop 6' },
    { src: shopImage7, alt: 'Barbershop 7' },
    { src: shopImage8, alt: 'Barbershop 8' },
    { src: shopImage9, alt: 'Barbershop 9' },
    { src: shopImage10, alt: 'Barbershop 10' },
    { src: shopImage11, alt: 'Barbershop 11' },
    { src: shopImage12, alt: 'Barbershop 12' },
    { src: shopImage13, alt: 'Barbershop 13' },
    { src: shopImage14, alt: 'Barbershop 14' },
    { src: shopImage15, alt: 'Barbershop 15' },
    { src: shopImage16, alt: 'Barbershop 16' },
    { src: shopImage17, alt: 'Barbershop 17' },
    { src: shopImage18, alt: 'Barbershop 18' },
    { src: shopImage19, alt: 'Barbershop 19' },
    { src: evansImage, alt: 'Evans' },
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
                  <div className="hours-time">10:00 - 19:00</div>
                </div>
                <div className="day-hours">
                  <div className="day">Tue</div>
                  <div className="hours-time">10:00 - 19:00</div>
                </div>
                <div className="day-hours">
                  <div className="day">Wed</div>
                  <div className="hours-time">10:00 - 19:00</div>
                </div>
                <div className="day-hours">
                  <div className="day">Thu</div>
                  <div className="hours-time">10:00 - 19:00</div>
                </div>
                <div className="day-hours">
                  <div className="day">Fri</div>
                  <div className="hours-time">10:00 - 19:00</div>
                </div>
                <div className="day-hours">
                  <div className="day">Sat</div>
                  <div className="hours-time">10:00 - 19:00</div>
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
          <p>
            Find us at the heart of the city, easily accessible by public
            transport and car.
          </p>
          <p className="location-address">Palackého 723/6, 110 00 Prague</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.2872873439896!2d14.420666876972545!3d50.08090787152412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9523254841cf%3A0x702a0fee3ca86f6f!2sDe%20Kubes%20Barber%20Shop!5e0!3m2!1sen!2scz!4v1774203812430!5m2!1sen!2scz"
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
