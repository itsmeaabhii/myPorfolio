import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.brand}>
          <span className={styles.logo}><span>a</span>bhishek</span>
          <p>Full-Stack Developer · AI Integration · Flutter</p>
        </div>

        <div className={styles.links}>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#project">Projects</a>
          <a href="#serv">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={styles.socialIcons}>
          <a href="https://github.com/itsmeaabhii" target="_blank" rel="noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-prakash-0391402b7" target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/aabhish.ekh" target="_blank" rel="noreferrer" title="Instagram">
            <FaInstagram />
          </a>
          <a href="https://x.com/_abhishek_2203" target="_blank" rel="noreferrer" title="Twitter/X">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Abhishek Prakash · Made with <FaHeart className={styles.heart} /> · IIIT Kalyani</p>
      </div>
    </footer>
  );
}
