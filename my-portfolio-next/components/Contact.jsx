'use client';

import styles from "./Contact.module.css";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.title}>
        <span className={styles.eyebrow}>Let&apos;s work together</span>
        <h2>Contact Me</h2>
      </div>

      <div className={styles.contactContainer}>
        {/* LEFT INFO */}
        <div className={styles.contactInfo}>
          <h3>Get In Touch</h3>
          <p>
            Have a project in mind, want to collaborate, or just want to say hi?
            My inbox is always open — I&apos;ll get back to you promptly!
          </p>

          <div className={styles.infoItem}>
            <FaEnvelope className={styles.contactIcon} />
            <a href="mailto:abhishekprakash963@gmail.com">abhishekprakash963@gmail.com</a>
          </div>

          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />
            <span>Kalyani, West Bengal, India</span>
          </div>

          <div className={styles.socialRow}>
            <a href="https://github.com/itsmeaabhii" target="_blank" rel="noreferrer" className={styles.socialBtn}>
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/abhishek-prakash-0391402b7" target="_blank" rel="noreferrer" className={styles.socialBtn}>
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputGroup}>
            <label>Your Name</label>
            <input type="text" placeholder="Abhishek Prakash" required id="contact-name" />
          </div>
          <div className={styles.inputGroup}>
            <label>Your Email</label>
            <input type="email" placeholder="you@example.com" required id="contact-email" />
          </div>
          <div className={styles.inputGroup}>
            <label>Message</label>
            <textarea placeholder="Tell me about your project..." rows={6} required id="contact-message" />
          </div>
          <button type="submit" className={styles.submitBtn} id="contact-submit">
            Send Message <span className={styles.arrow}>→</span>
          </button>
        </form>
      </div>
    </div>
  );
}
