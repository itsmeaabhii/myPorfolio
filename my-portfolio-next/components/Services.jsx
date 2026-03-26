import styles from "./Services.module.css";
import { FaCode, FaPalette, FaLaptopCode, FaRobot } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    color: "#6c63ff",
    title: "Frontend Development",
    desc: "Building modern, responsive interfaces with React, Next.js, HTML, CSS, and Tailwind that look great and perform even better.",
  },
  {
    icon: <FaPalette />,
    color: "#f472b6",
    title: "UI / UX Design",
    desc: "Crafting clean, intuitive user interfaces with a focus on usability, visual hierarchy, and seamless user journeys.",
  },
  {
    icon: <FaLaptopCode />,
    color: "#34d399",
    title: "Full-Stack Web Apps",
    desc: "End-to-end web applications with Node.js, FastAPI, MySQL, MongoDB — handling everything from APIs to deployment.",
  },
  {
    icon: <FaRobot />,
    color: "#fbbf24",
    title: "AI Integration",
    desc: "Integrating AI capabilities into apps using Google Gemini, Langchain, and RAG pipelines for intelligent, context-aware features.",
  },
];

export default function Services() {
  return (
    <div className={styles.services} id="serv">
      <div className={styles.title}>
        <span className={styles.eyebrow}>What I offer</span>
        <h2>Services</h2>
      </div>

      <div className={styles.servicesContainer}>
        {services.map((s, i) => (
          <div className={styles.serviceCard} key={i} style={{ "--accent-color": s.color }}>
            <div className={styles.iconWrap} style={{ color: s.color, background: s.color + "18", boxShadow: `0 0 30px ${s.color}20` }}>
              {s.icon}
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
