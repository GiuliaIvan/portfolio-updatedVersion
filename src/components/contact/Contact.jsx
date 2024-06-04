import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bep3htd",
        "template_hc8aa9t",
        form.current,
        "30OmoGfxJxvZ9EXuk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset(); // when they send the message, refresh the page
  };

  return (
    <section id="contact">
      <h5>
        long-distance relationships
        <br />
        couldn't be easier...
      </h5>
      <h2>let's build ours</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Mail</h4>
            <h5>giuliarafaela.ivanlet@gmail.com</h5>
            <a
              href="mailto:giuliarafaela.ivanlet@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <SlSocialLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Giulia Ivan</h5>
            <a
              href="https://www.linkedin.com/in/giulia-ivan/"
              target="_blank"
              rel="noreferrer"
            >
              Let's connect
            </a>
          </article>

          <article className="contact__option">
            <FiInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>giuli_ivan</h5>
            <a
              href="https://www.instagram.com/giuli_ivan/"
              target="_blank"
              rel="noreferrer"
            >
              Follow me
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
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
