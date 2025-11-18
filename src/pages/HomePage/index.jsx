import './style.css';
import scissorsImage from './img/scissors.jpg';

export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="services-section">
        <div className="services-cards container">
          <div className="service-card">
            <div></div>
            <h3>Men's Haircuts</h3>
            <p>Professional styling and cuts for the modern gentleman</p>
          </div>
          <div className="service-card">
            <h3>Barber Services</h3>
            <p>Traditional barbering with attention to detail</p>
          </div>
          <div className="service-card">
            <h3>Children's Haircuts</h3>
            <p>Gentle and fun haircuts for the little ones</p>
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
              src={`https://www.google.com/maps/embed?pb=${
                import.meta.env.VITE_GOOGLE_MAPS_API_KEY
              }`}
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
    </div>
  );
};
