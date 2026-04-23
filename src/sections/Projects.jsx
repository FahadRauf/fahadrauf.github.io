import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";
import "./Projects.css";

const filters = [
  { id: "all", label: "All" },
  { id: "dev", label: "Web & App" },
  { id: "viz", label: "Tableau Viz" },
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.kind === filter),
    [filter]
  );

  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title={<span id="projects-title">Projects</span>}
          sub="A mix of full-stack builds and interactive Tableau dashboards."
          align="center"
          accent="coral"
        />

        <div className="filter-bar" role="tablist" aria-label="Project filters">
          {filters.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              className={`filter-chip ${filter === f.id ? "is-active" : ""}`}
              onClick={() => setFilter(f.id)}
            >
              {filter === f.id && (
                <motion.span
                  layoutId="filter-pill"
                  className="filter-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="filter-label">{f.label}</span>
            </button>
          ))}
        </div>

        <motion.div
          className="projects-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          layout
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
