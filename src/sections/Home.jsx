import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import "./Home.css";

const NAME = "Fahad Rauf";

const letterVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.18 + i * 0.04, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Home() {
  const scrollTo = (id) => () => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="home" aria-labelledby="home-title">
      <div className="container home-inner">
        <div className="home-copy">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow-dot" aria-hidden />
            Hello, I&rsquo;m
          </motion.span>

          <h1 id="home-title" className="home-name" aria-label={NAME}>
            {NAME.split("").map((ch, i) => (
              <motion.span
                key={`${ch}-${i}`}
                variants={letterVariants}
                custom={i}
                initial="hidden"
                animate="show"
                className={ch === " " ? "name-space" : "name-letter"}
                aria-hidden="true"
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </h1>

          <motion.div
            className="home-role"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span className="home-role-text">
              Full-Stack Developer
              <span className="home-role-amp"> &amp; </span>
              Tableau Specialist
            </span>
            <svg
              className="home-underline"
              viewBox="0 0 380 14"
              preserveAspectRatio="none"
              aria-hidden
            >
              <motion.path
                d="M2 9 C 70 2, 150 14, 220 6 S 340 2, 378 8"
                fill="none"
                stroke="var(--coral)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.1, duration: 1.1, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>

          <motion.p
            className="home-blurb"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            Bridging the gap between data insights and functional engineering
            through elegant dashboards and real-time web applications.
          </motion.p>

          <motion.div
            className="home-ctas"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={scrollTo("projects")}
            >
              View Projects <FiArrowUpRight size={18} />
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={scrollTo("contact")}
            >
              Get in touch
            </button>
          </motion.div>
        </div>

        <motion.div
          className="home-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <svg className="blob-mask" aria-hidden width="0" height="0">
            <defs>
              <clipPath id="blob" clipPathUnits="objectBoundingBox">
                <path d="M0.82,0.14 C0.93,0.26 0.97,0.44 0.93,0.61 C0.89,0.78 0.76,0.93 0.58,0.97 C0.4,1.01 0.18,0.94 0.08,0.79 C-0.02,0.64 0.01,0.42 0.09,0.26 C0.17,0.1 0.3,0.0 0.48,0.01 C0.64,0.02 0.72,0.03 0.82,0.14 Z" />
              </clipPath>
            </defs>
          </svg>

          <div className="visual-stack">
            <div className="visual-halo" aria-hidden />
            <img
              src="/img/background.jpg"
              alt="Fahad Rauf portrait"
              className="visual-img"
              loading="eager"
            />

            {/* Floating decorations */}
            <motion.div
              className="chip chip-peach"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>Tableau</span>
            </motion.div>

            <motion.div
              className="chip chip-mint"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>React</span>
            </motion.div>

            <motion.div
              className="chip chip-coral"
              animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>Dashboards</span>
            </motion.div>

            <motion.svg
              className="squiggle"
              viewBox="0 0 80 20"
              fill="none"
              aria-hidden
              animate={{ rotate: [0, 6, 0, -6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                d="M2 10 C 10 2, 20 18, 30 10 S 50 2, 60 10 S 78 18, 78 10"
                stroke="var(--mint-deep)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </motion.svg>

            <motion.div
              className="dot-cluster"
              aria-hidden
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span /> <span /> <span />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        className="scroll-cue"
        onClick={scrollTo("about")}
        aria-label="Scroll to About"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>scroll</span>
        <FiArrowDown size={16} />
      </motion.button>
    </section>
  );
}
