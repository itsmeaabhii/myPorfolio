'use client';

import styles from "./Contact.module.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.title}>
        <h2>Contact Me</h2>
      </div>

      <div className={styles.contactContainer}>
        {/* LEFT INFO */}
        <div className={styles.contactInfo}>
          <h3>Get In Touch</h3>
          <p>
            If you want to work together or have any question,
            feel free to contact me.
          </p>

          <div className={styles.infoItem}>
            <FaEnvelope className={styles.contactIcon} />
            <span>abhishek@example.com</span>
          </div>

          <div className={styles.infoItem}>
            <FaPhone className={styles.contactIcon} />
            <span>+91 XXXXX XXXXX</span>
          </div>

          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />
            <span>India</span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={6} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
