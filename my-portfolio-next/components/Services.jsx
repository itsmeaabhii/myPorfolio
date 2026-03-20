import styles from "./Services.module.css";
import { FaCode, FaPalette, FaLaptopCode } from "react-icons/fa";

export default function Services() {
  return (
    <div className={styles.services} id="serv">
      <div className={styles.title}>
        <h2>Services</h2>
      </div>

      <div className={styles.servicesContainer}>
        <div className={styles.serviceCard}>
          <FaCode className={styles.serviceIcon} />
          <h3>Frontend Development</h3>
          <p>I build modern and interactive websites using React, HTML, CSS, JavaScript, Node.js, PHP, MySQL and Next.js.</p>
        </div>

        <div className={styles.serviceCard}>
          <FaPalette className={styles.serviceIcon} />
          <h3>UI Design</h3>
          <p>Creating clean and modern user interfaces with focus on design and usability.</p>
        </div>

        <div className={styles.serviceCard}>
          <FaLaptopCode className={styles.serviceIcon} />
          <h3>Web Applications</h3>
          <p>Building modern web applications with dynamic features and smooth performance.</p>
        </div>
      </div>
    </div>
  );
}
