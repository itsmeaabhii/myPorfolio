'use client';

import styles from "./Hero.module.css";
import UnicornScene from "unicornstudio-react";

export default function Hero() {
  return (
    <div className={styles.hero} id="hero">
      <UnicornScene
        projectId="kLM3mnmLXnAU5DHNMhUN"
        width="100%"
        height="900px"
        scale={1}
        dpi={1.5}
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.3/dist/unicornStudio.umd.js"
      />
      <div className={styles.content}>
        <div className={styles.buttn}>
          <a href="#contact">Contact</a>
          <a href="#about">Who I am</a>
        </div>
      </div>
    </div>
  );
}
