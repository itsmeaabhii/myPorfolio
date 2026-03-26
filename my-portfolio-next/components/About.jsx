'use client';

import { useState } from "react";
import styles from "./About.module.css";
import Skills from "./Skills";
import Image from "next/image";

export default function About() {
  const [flip, setFlip] = useState(false);

  return (
    <div className={styles.about} id="about">
      <div className={styles.title}>
        <span className={styles.eyebrow}>Get to know me</span>
        <h2>About Me</h2>
      </div>

      <div className={styles.content}>
        <div
          className={styles.photoCard}
          onClick={() => setFlip(!flip)}
          title="Click to flip"
        >
          <div className={flip ? `${styles.photoInner} ${styles.flip}` : styles.photoInner}>
            <div className={styles.photoFront}>
              <Image src="/images/abhishek.jpg" alt="Abhishek Prakash" fill style={{ objectFit: "cover", objectPosition: "top" }} />
            </div>
            <div className={styles.photoBack}>
              <Image src="/images/img.jpg" alt="Abhishek Prakash" fill style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
          </div>
          <p className={styles.flipHint}>click to flip</p>
        </div>

        <div className={styles.textAbout}>
          <p className={styles.hello}>Hello! 👋</p>
          <p>
            I&apos;m <strong>Abhishek Prakash</strong>, a passionate Full-Stack Developer and
            Computer Science student at <strong>IIIT Kalyani</strong>, West Bengal. I specialise
            in building modern, responsive web interfaces and intelligent AI-powered applications.
          </p>
          <p>
            My stack spans the full spectrum — from crafting pixel-perfect frontends with
            React &amp; Next.js, to building robust backends with Node.js, FastAPI, and MySQL.
            I also develop cross-platform mobile apps using <strong>Flutter &amp; Dart</strong>,
            and integrate AI capabilities using <strong>Google Gemini &amp; Langchain</strong>.
          </p>
          <p>
            I believe in clean code, smooth animations, and products that feel as good as they look.
            Always learning, always shipping. Open to exciting collaborations and projects.
          </p>

          <div className={styles.infoRow}>
            <span><strong>📍</strong> Kalyani, West Bengal</span>
            <span><strong>🎓</strong> IIIT Kalyani — CSE</span>
            <span><strong>📧</strong> abhishekprakash963@gmail.com</span>
          </div>

          <a
            href="https://github.com/itsmeaabhii"
            target="_blank"
            rel="noreferrer"
            className={styles.ghBtn}
          >
            View GitHub Profile →
          </a>
        </div>
      </div>

      <Skills />
    </div>
  );
}
