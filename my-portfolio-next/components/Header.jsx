'use client';

import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scroll : ""}`}>
      <div className={styles.logo}>
        <a href="#hero"><span>a</span>bhishek</a>
      </div>

      {/* Desktop Nav */}
      <ul className={styles.links}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#serv">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Social Icons */}
      <ul className={styles.icons}>
        <li>
          <a href="https://github.com/itsmeaabhii" target="_blank" rel="noreferrer" title="GitHub">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/abhishek-prakash-0391402b7" target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/aabhish.ekh" target="_blank" rel="noreferrer" title="Instagram">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://x.com/_abhishek_2203" target="_blank" rel="noreferrer" title="Twitter/X">
            <FaTwitter />
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile Drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}>
        <ul>
          <li><a href="#hero" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#project" onClick={closeMenu}>Projects</a></li>
          <li><a href="#serv" onClick={closeMenu}>Services</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <div className={styles.drawerIcons}>
          <a href="https://github.com/itsmeaabhii" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/abhishek-prakash-0391402b7" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/aabhish.ekh" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://x.com/_abhishek_2203" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
      </div>
    </header>
  );
}
