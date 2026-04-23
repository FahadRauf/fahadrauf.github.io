import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import "./ProjectCard.css";

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

export default function ProjectCard({ project }) {
  const { title, image, blurb, tags, links, kind, kindLabel } = project;
  const [imgOk, setImgOk] = useState(true);

  return (
    <motion.article
      className={`project-card kind-${kind}`}
      variants={item}
      layout
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <div className="project-media">
        {imgOk ? (
          <img
            src={image}
            alt={`${title} preview`}
            onError={() => setImgOk(false)}
            loading="lazy"
          />
        ) : (
          <ProjectPlaceholder title={title} kind={kind} />
        )}
        <span className={`project-badge badge-${kind}`}>{kindLabel}</span>
      </div>

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-blurb">{blurb}</p>

        <ul className="project-tags" aria-label="Technologies">
          {tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-actions">
          {links.live && (
            <a
              className="btn btn-primary"
              href={links.live}
              target="_blank"
              rel="noreferrer noopener"
            >
              View Live <FiExternalLink size={16} />
            </a>
          )}
          {links.repo && (
            <a
              className="btn btn-outline"
              href={links.repo}
              target="_blank"
              rel="noreferrer noopener"
            >
              View Code <FiGithub size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectPlaceholder({ title, kind }) {
  const color = kind === "dev" ? "var(--coral)" : "var(--mint-deep)";
  return (
    <div className="project-placeholder" role="img" aria-label={title}>
      <svg viewBox="0 0 300 180" width="100%" height="100%" aria-hidden>
        <defs>
          <linearGradient id="ph-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--peach-soft)" />
            <stop offset="100%" stopColor="var(--mint-soft)" />
          </linearGradient>
        </defs>
        <rect width="300" height="180" fill="url(#ph-bg)" />
        <g
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="150" cy="80" r="30" />
          <path d="M90 140 Q150 100 210 140" />
          <path d="M60 160 L240 160" />
        </g>
      </svg>
      <span className="placeholder-label">Screenshot coming soon</span>
    </div>
  );
}
