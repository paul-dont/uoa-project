import React from 'react';
import './footer.css';
import Data from '../../assets/sections.json';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        {Data.map(link => (
          <li key={link.name}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF className="footer__social-icon" />
        </a>
        <a href="https://intagram.com">
          <FiInstagram className="footer__social-icon" />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter className="footer__social-icon" />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Project. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
