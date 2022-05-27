import React from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { RiMessengerLine } from 'react-icons/ri';
import { AiOutlineSkype } from 'react-icons/ai';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dummymail@gmail.com</h5>
            <a href="mailto:pauldontas@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>uoaproject</h5>
            <a href="https://m.me/dontas.dev" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineSkype className="contact__option-icon" />
            <h4>Skype</h4>
            <h5>live:uoa</h5>
            <a href="skype:live:dontaspaul?chat" target="_blank">
              Start Chat
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
