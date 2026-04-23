import { motion } from "framer-motion";
import "./SectionHeading.css";

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
  accent = "coral",
}) {
  return (
    <motion.div
      className={`section-heading align-${align} accent-${accent}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">
        {title}
        <svg
          className="heading-underline"
          viewBox="0 0 240 10"
          preserveAspectRatio="none"
          aria-hidden
        >
          <motion.path
            d="M2 6 C 40 1, 90 10, 140 4 S 220 2, 238 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeInOut", delay: 0.1 }}
          />
        </svg>
      </h2>
      {sub && <p className="section-sub">{sub}</p>}
    </motion.div>
  );
}
