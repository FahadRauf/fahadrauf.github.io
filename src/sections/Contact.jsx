import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheck, FiCopy } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading.jsx";
import { EMAIL, socials } from "../data/socials.js";
import "./Contact.css";

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // fallback: do nothing; mailto below still works
    }
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title={
            <span id="contact-title">Let&rsquo;s build something together</span>
          }
          sub="Open to freelance, collaborations and full-time roles. The quickest way to reach me is email."
          align="center"
          accent="peach"
        />

        <motion.div
          className="contact-card panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="email-row">
            <a
              className="email-pill"
              href={`mailto:${EMAIL}`}
              aria-label={`Send email to ${EMAIL}`}
            >
              <span className="email-label">Email</span>
              <span className="email-address">{EMAIL}</span>
            </a>
            <button
              type="button"
              className="copy-btn"
              onClick={copyEmail}
              aria-label="Copy email to clipboard"
            >
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.span
                    key="c"
                    className="copy-state is-copied"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                  >
                    <FiCheck size={16} /> Copied
                  </motion.span>
                ) : (
                  <motion.span
                    key="i"
                    className="copy-state"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                  >
                    <FiCopy size={16} /> Copy
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          <p className="contact-note">
            Or find me on any of these — replies are usually within a day.
          </p>

          <motion.ul
            className="socials"
            variants={grid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {socials.map(({ id, label, href, Icon }) => (
              <motion.li key={id} variants={item}>
                <a
                  className="social-link"
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noreferrer noopener"
                  }
                  aria-label={label}
                >
                  <span className="social-icon">
                    <Icon size={20} />
                  </span>
                  <span className="social-name">{label}</span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <footer className="site-footer">
          <p>
            &copy; {new Date().getFullYear()} Fahad Rauf &middot; Crafted with
            care in React.
          </p>
        </footer>
      </div>
    </section>
  );
}
