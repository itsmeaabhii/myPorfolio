import styles from "./Skills.module.css";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaGitAlt, FaGithub, FaFigma, FaNodeJs, FaJava
} from "react-icons/fa";
import {
  SiUnity, SiTailwindcss, SiFirebase,
  SiMongodb, SiExpress, SiMysql, SiPhp
} from "react-icons/si";

const icons = [
  <FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />, <FaReact key="react" />,
  <FaJava key="java" />, <SiMysql key="mysql" />, <SiPhp key="php" />,
  <FaNodeJs key="node" />, <SiExpress key="express" />, <SiMongodb key="mongo" />,
  <FaGitAlt key="git" />, <FaGithub key="github" />, <FaFigma key="figma" />,
  <SiUnity key="unity" />, <SiTailwindcss key="tailwind" />, <SiFirebase key="firebase" />,
];

export default function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.skillsSlider}>
        <div className={styles.skillsTrack}>
          {icons.map((icon, i) => (
            <span key={i} className={styles.iconWrap}>{icon}</span>
          ))}
          {/* Duplicate for seamless loop */}
          {icons.map((icon, i) => (
            <span key={`dup-${i}`} className={styles.iconWrap}>{icon}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
