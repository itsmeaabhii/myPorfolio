'use client';

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">

      {/* ── Big background name text ── */}
      <p className={styles.bgText}>Hi! I&apos;m Abhishek</p>

      {/* ── Centered character with hover swap ── */}
      <div className={styles.characterWrap}>
        {/* Default: student */}
        <div className={styles.charImg} id="charDefault">
          <Image
            src="/images/img1.png"
            alt="Abhishek"
            fill
            style={{ objectFit: "contain", objectPosition: "bottom center" }}
            priority
          />
        </div>
        {/* Hover: samurai */}
        <div className={styles.charImgHover} id="charHover">
          <Image
            src="/images/img2.png"
            alt="Abhishek — samurai mode"
            fill
            style={{ objectFit: "contain", objectPosition: "bottom center" }}
            priority
          />
        </div>
      </div>

      {/* ── Buttons bottom-left ── */}
      <div className={styles.buttons}>
        <a href="#contact" className={styles.btn}>Contact</a>
        <a href="#about"   className={styles.btn}>Who I am</a>
      </div>

    </section>
  );
}
