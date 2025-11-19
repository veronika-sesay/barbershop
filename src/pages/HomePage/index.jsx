import React, { useState } from 'react';
import './style.css';
import scissorsImage from './img/scissors.jpg';

export const HomePage = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (cardIndex) => {
    setFlippedCards((prev) => ({
      ...prev,
      [cardIndex]: !prev[cardIndex],
    }));
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
          <button>Book an Appointment</button>
        </div>
      </section>
      <section id="hours" className="hours-section">
        <div className="container">
          <div className="hours">
            <h2>Business Hours</h2>
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
      <section id="location" className="location-section">
        <div className="container">
          <h2>Location</h2>
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
          <h2>Contacts</h2>
          <div className="contact-details">
            <a href="tel:+420123456789">
              <strong>Phone:</strong> +420 123 456 789
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
