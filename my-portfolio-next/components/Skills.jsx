import styles from "./Skills.module.css";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaGitAlt, FaGithub, FaFigma, FaNodeJs, FaJava, FaPython
} from "react-icons/fa";
import {
  SiUnity, SiTailwindcss, SiFirebase,
  SiMongodb, SiExpress, SiMysql, SiPhp, SiFlutter, SiNextdotjs, SiDart
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, color: "#e34f26", label: "HTML5" },
  { icon: <FaCss3Alt />, color: "#1572b6", label: "CSS3" },
  { icon: <FaJs />, color: "#f7df1e", label: "JavaScript" },
  { icon: <FaReact />, color: "#61dafb", label: "React" },
  { icon: <SiNextdotjs />, color: "#ffffff", label: "Next.js" },
  { icon: <FaNodeJs />, color: "#3c873a", label: "Node.js" },
  { icon: <SiExpress />, color: "#999999", label: "Express" },
  { icon: <FaPython />, color: "#3776ab", label: "Python" },
  { icon: <FaJava />, color: "#f89820", label: "Java" },
  { icon: <SiFlutter />, color: "#54c5f8", label: "Flutter" },
  { icon: <SiDart />, color: "#00b4ab", label: "Dart" },
  { icon: <SiMysql />, color: "#4479a1", label: "MySQL" },
  { icon: <SiMongodb />, color: "#4db33d", label: "MongoDB" },
  { icon: <SiFirebase />, color: "#ffca28", label: "Firebase" },
  { icon: <SiTailwindcss />, color: "#38bdf8", label: "Tailwind" },
  { icon: <SiPhp />, color: "#8892be", label: "PHP" },
  { icon: <FaGitAlt />, color: "#f05032", label: "Git" },
  { icon: <FaGithub />, color: "#ffffff", label: "GitHub" },
  { icon: <FaFigma />, color: "#f24e1e", label: "Figma" },
  { icon: <SiUnity />, color: "#ffffff", label: "Unity" },
];

export default function Skills() {
  return (
    <div className={styles.skillsSection}>
      <p className={styles.label}>Tech Stack</p>
      <div className={styles.skillsSlider}>
        <div className={styles.skillsTrack}>
          {[...skills, ...skills].map((s, i) => (
            <span key={i} className={styles.iconWrap} title={s.label} style={{ color: s.color }}>
              {s.icon}
              <span className={styles.tooltip}>{s.label}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
