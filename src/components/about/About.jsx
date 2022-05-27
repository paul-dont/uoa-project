import React from 'react';
import './about.css';
import Aboutbg from '../../assets/about-bg.webp';

const About = () => {
  return (
    <section id="about" className="container about__container">
      <ul className="about__category">
        <li id="water">WATER</li>
        <li id="energy">ENERGY</li>
        <li id="co2">CO2</li>
      </ul>
      <img src={Aboutbg} alt="landscape" />
    </section>
  );
};

export default About;
