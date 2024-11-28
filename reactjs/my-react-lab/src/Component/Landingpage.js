import React from 'react';
import '../styles/Landingpage.css'; // Import CSS file

function LandingPage() {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Krufter - A Digital Marketing Agency</h1>
      <p className="landing-subtitle">Fill out the form in order to Get in Touch.</p>

      <section className="services-section">
        <h2 className="services-title">
          <span className="highlight">Services</span> We Can Help You With!
        </h2>
        <p className="services-description">
          Our agency offers tailored digital marketing solutions for your online success. We help you achieve your goals with customized solutions.
        </p>
        <ul className="services-benefits">
          <li><strong>We offer digital marketing services for online success.</strong></li>
          <li><strong>Increase online visibility, build brand awareness, improve website functionality.</strong></li>
          <li><strong>Thrive online with our services.</strong></li>
          <li><strong>Customized solutions to meet your unique needs and goals.</strong></li>
        </ul>
        <div className="services-grid">
          <div className="service-card">Website Development</div>
          <div className="service-card">Graphic Designing</div>
          <div className="service-card">Search Engine Optimization (SEO)</div>
          <div className="service-card">Content Writing</div>
        </div>
        <button className="services-button">More Services</button>
      </section>

      <section className="form-section">
        <h2 className="form-title">Get In Touch</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="form-input" />
          <input type="email" placeholder="Your Email" className="form-input" />
          <input type="tel" placeholder="Your Phone Number" className="form-input" />
          <button type="submit" className="form-submit-button">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default LandingPage;
