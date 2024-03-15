import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            Welcome to Health Booker, your trusted partner in hassle-free OPD booking and healthcare management. At Health Booker, we understand the importance of convenient access to medical services, especially when it comes to outpatient care. Our platform is designed to simplify the process of booking appointments, empowering you to take control of your health with ease.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
