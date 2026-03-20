import styles from "./Project.module.css";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Website",
    img: "/images/Cleveroad.jpg",
    desc: "Modern online store with product filtering, cart, and payment system.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    img: "/images/Capture d'écran 2025-10-22 182207.png",
    desc: "Personal portfolio to showcase my design and coding projects.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Weather App",
    img: "/images/Weather Forecast Dashboard.jpg",
    desc: "Responsive app showing real-time weather data using API integration.",
    skills: ["HTML", "CSS", "API"],
  },
  {
    title: "Blog Website",
    img: "/images/WordPress dashboard design concept.jpg",
    desc: "Clean and simple blogging platform with markdown support.",
    skills: ["HTML", "Tailwind", "JavaScript"],
  },
  {
    title: "Game Landing Page",
    img: "/images/Game Dashboard Design.jpg",
    desc: "Landing page for a game with animations and parallax effects.",
    skills: ["HTML", "CSS", "GSAP"],
  },
  {
    title: "Task Manager",
    img: "/images/Task manager app.jpg",
    desc: "Task tracking web app with CRUD features and clean UI.",
    skills: ["HTML", "CSS", "JS"],
  },
];

export default function Project() {
  return (
    <section className={styles.project} id="project">
      <div className={styles.title}>
        <h2>Projects</h2>
      </div>

      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <div className={styles.imgWrapper}>
              <Image
                src={project.img}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className={styles.skills}>
              {project.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>

            <div className={styles.btns}>
              <a href="#" className={styles.btn}>
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="#" className={styles.btn}>
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
