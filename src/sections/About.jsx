import { motion } from "framer-motion";
import {
  FiBarChart2,
  FiCode,
  FiPenTool,
  FiPieChart,
} from "react-icons/fi";
import SectionHeading from "../components/SectionHeading.jsx";
import "./About.css";

const skills = [
  {
    title: "Data Visualization",
    blurb:
      "Turning raw numbers into clear, beautiful stories that invite exploration.",
    Icon: FiPieChart,
    accent: "coral",
  },
  {
    title: "Tableau",
    blurb:
      "Crafting interactive dashboards with thoughtful filters, layouts and color.",
    Icon: FiBarChart2,
    accent: "mint",
  },
  {
    title: "Full-Stack Development",
    blurb:
      "Shipping real-time React and Node apps end-to-end, from API to pixel.",
    Icon: FiCode,
    accent: "peach",
  },
  {
    title: "UI / UX Design",
    blurb:
      "Composing elegant interfaces where rhythm, type and whitespace do the work.",
    Icon: FiPenTool,
    accent: "coral",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          eyebrow="About me"
          title={<span id="about-title">The Journey</span>}
          sub="A quick look at who I am and how I work."
          align="center"
          accent="mint"
        />

        <div className="about-grid">
          <motion.div
            className="about-card panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span className="about-badge">Computer Science Graduate</span>

            <p className="about-p">
              With a Bachelor&rsquo;s degree in Computer Science, my journey in
              tech quickly led me to a passion for creating data
              visualizations. I thrive on transforming raw data into insightful
              visuals using Tableau.
            </p>

            <p className="about-p">
              My visualizations are inspired by the beauty and colors of the
              world and things around me. My affinity for aesthetics is
              mirrored in my projects embodying my love for elegant,
              eye-catching design. As I merge the worlds of data and frontend
              development, I am excited to continue refining and expanding my
              skills.
            </p>

            <div className="about-meta">
              <div className="meta-stat">
                <span className="meta-num">6+</span>
                <span className="meta-label">Shipped projects</span>
              </div>
              <div className="meta-sep" aria-hidden />
              <div className="meta-stat">
                <span className="meta-num">4</span>
                <span className="meta-label">Tableau dashboards</span>
              </div>
              <div className="meta-sep" aria-hidden />
              <div className="meta-stat">
                <span className="meta-num">∞</span>
                <span className="meta-label">Curiosity</span>
              </div>
            </div>
          </motion.div>

          <motion.ul
            className="skills-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {skills.map(({ title, blurb, Icon, accent }) => (
              <motion.li
                key={title}
                className={`skill-card accent-${accent}`}
                variants={item}
                whileHover={{ y: -4 }}
              >
                <span className="skill-icon" aria-hidden>
                  <Icon size={22} />
                </span>
                <h3 className="skill-title">{title}</h3>
                <p className="skill-blurb">{blurb}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
