import React from "react";
import "./index.css";
import pic1 from "./image/surg.jpg"
import pic2 from "./image/emerg.jpg"
import pic3 from "./image/prev.jpg"
import pic4 from "./image/office.jpg"


function About() {
  return (
    <div id="about" className="about-page">
      <h1 className="about-heading">About Our Veterinary Service</h1>
      <div className="card mission-card">
        <img src={pic4} alt="Mission" />
        <div className="card-content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide the highest quality veterinary care to
            pets and their owners in a compassionate and supportive environment.
            We strive to offer personalized care that meets the individual needs
            of each pet and their family.
          </p>
        </div>
      </div>

      <div className="card openness-card">
        <img src={pic1} alt="Openness" />
        <div className="card-content">
          <h2>Our Commitment to Openness</h2>
          <p>
            We believe in transparency and honesty with our clients. We will
            always provide clear and accurate information about your pet's
            condition and treatment options, and answer any questions you may
            have.
          </p>
        </div>
      </div>

      <div className="card professionalism-card">
        <img src={pic2} alt="Professionalism" />
        <div className="card-content">
          <h2>Our Commitment to Professionalism</h2>
          <p>
            Our team of veterinary professionals is dedicated to providing the
            highest quality care to your pet. We are committed to staying
            up-to-date with the latest advances in veterinary medicine, and
            using the most advanced technology to provide the best possible
            care.
          </p>
        </div>
      </div>

      <div className="card care-card">
        <img src={pic3} alt="Care" />
        <div className="card-content">
          <h2>Our Commitment to Care</h2>
          <p>
            We understand how much your pet means to you, and we are committed
            to providing the best possible care to keep them healthy and happy.
            We treat each pet as if they were our own, and will always go above
            and beyond to ensure their well-being.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
