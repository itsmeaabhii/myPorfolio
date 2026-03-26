import styles from "./Project.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "LiveShare",
    lang: "TypeScript",
    color: "#3178c6",
    desc: "Real-time collaborative sharing app built with TypeScript. Share content live with others instantly.",
    skills: ["TypeScript", "Next.js", "WebSockets"],
    github: "https://github.com/itsmeaabhii/LiveShare",
    live: null,
  },
  {
    title: "Java RAG System",
    lang: "Java",
    color: "#f89820",
    desc: "Retrieval-Augmented Generation system built in Java — an AI pipeline for intelligent document Q&A.",
    skills: ["Java", "RAG", "AI / LLM"],
    github: "https://github.com/itsmeaabhii/java-rag-system",
    live: null,
  },
  {
    title: "Airbnb REST API",
    lang: "Python",
    color: "#ff385c",
    desc: "Airbnb-style RESTful API built with Python. Handles listings, bookings, auth, and pricing.",
    skills: ["Python", "FastAPI", "REST API"],
    github: "https://github.com/itsmeaabhii/airbnb-api",
    live: null,
  },
  {
    title: "Chat App",
    lang: "Flutter",
    color: "#54c5f8",
    desc: "Real-time cross-platform chat application with Firebase backend — built using Flutter & Dart.",
    skills: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/itsmeaabhii/ChatApp",
    live: null,
  },
  {
    title: "Expense Tracker",
    lang: "Flutter",
    color: "#54c5f8",
    desc: "Personal finance tracker app with category tracking, charts, and daily budget alerts.",
    skills: ["Flutter", "Dart", "SQLite"],
    github: "https://github.com/itsmeaabhii/ExpenseTracker",
    live: null,
  },
  {
    title: "Weather App",
    lang: "Flutter",
    color: "#54c5f8",
    desc: "Responsive weather forecast app with real-time data, OpenWeather API integration, and a clean UI.",
    skills: ["Flutter", "Dart", "REST API"],
    github: "https://github.com/itsmeaabhii/wheatherApp",
    live: null,
  },
];

export default function Project() {
  return (
    <section className={styles.project} id="project">
      <div className={styles.title}>
        <span className={styles.eyebrow}>What I&apos;ve built</span>
        <h2>Projects</h2>
      </div>

      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            {/* Language badge */}
            <div className={styles.langBadge} style={{ background: project.color + "22", color: project.color, borderColor: project.color + "44" }}>
              <span className={styles.langDot} style={{ background: project.color }} />
              {project.lang}
            </div>

            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className={styles.skills}>
              {project.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>

            <div className={styles.btns}>
              <a href={project.github} target="_blank" rel="noreferrer" className={styles.btn}>
                <FaGithub /> GitHub
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnLive}`}>
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
