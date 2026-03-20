'use client';

import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? `${styles.header} ${styles.scroll}` : styles.header}>
      <div className={styles.logo}>
        <h1><span>a</span>bhishek</h1>
      </div>

      <ul className={styles.links}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#serv">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <ul className={styles.icons}>
        <li><a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a></li>
        <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
        <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
      </ul>
    </header>
  );
}
