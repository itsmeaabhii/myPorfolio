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
        <h2>About Me</h2>
      </div>

      <div className={styles.content}>
        <div
          className={styles.photoCard}
          onClick={() => setFlip(!flip)}
        >
          <div className={flip ? `${styles.photoInner} ${styles.flip}` : styles.photoInner}>
            <div className={styles.photoFront}>
              <Image src="/images/img.jpg" alt="Profile - Front" fill style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.photoBack}>
              <Image src="/images/img2.jpg" alt="Profile - Back" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>

        <div className={styles.textAbout}>
          <p>
            Hi, I&rsquo;m Abhishek, a passionate Frontend Developer and Computer Science student.
            I enjoy building modern, responsive, and interactive web interfaces that provide
            a great user experience. I focus on clean design, smooth animations, and writing
            efficient code using modern web technologies. I&rsquo;m always learning new tools and
            improving my skills to create better digital products. My goal is to combine
            creativity with technology to build websites that are both beautiful and functional.
          </p>
        </div>
      </div>

      <Skills />
    </div>
  );
}
