import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>© 2026 Abhishek</p>
        <div className={styles.socialIcons}>
          <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}
