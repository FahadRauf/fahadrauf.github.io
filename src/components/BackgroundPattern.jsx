import "./BackgroundPattern.css";

/**
 * Fixed, full-viewport SVG pattern that sits behind every section.
 * Tile is 220x220 with hand-drawn style icons: book, pen, chart, bulb,
 * cup, pie slice, and a laptop — the sort of doodles that feel like a
 * designer's notebook. Opacity is kept low so content stays readable.
 */
export default function BackgroundPattern() {
  const stroke = "var(--mint-deeper)";
  const strokeAlt = "var(--coral)";
  const sw = 1.5;

  return (
    <svg className="bg-pattern" aria-hidden="true" role="presentation">
      <defs>
        <pattern
          id="doodle-tile"
          x="0"
          y="0"
          width="220"
          height="220"
          patternUnits="userSpaceOnUse"
        >
          {/* Book */}
          <g
            transform="translate(18 22)"
            fill="none"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 4 C2 2, 4 1, 6 1 L22 1 C24 1, 26 2, 26 4 L26 22 C26 24, 24 25, 22 25 L6 25 C4 25, 2 24, 2 22 Z" />
            <path d="M2 4 L2 22" />
            <path d="M6 6 L22 6" />
            <path d="M6 11 L18 11" />
            <path d="M6 16 L20 16" />
          </g>

          {/* Pen / fountain */}
          <g
            transform="translate(95 14) rotate(28)"
            fill="none"
            stroke={strokeAlt}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 22 L18 6" />
            <path d="M18 6 L22 2 L26 6 L22 10 Z" />
            <path d="M2 22 L-2 26 L0 20 Z" />
            <path d="M10 14 L14 18" />
          </g>

          {/* Bar chart */}
          <g
            transform="translate(160 30)"
            fill="none"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 22 L25 22" />
            <rect x="4" y="12" width="4" height="10" rx="1" />
            <rect x="11" y="6" width="4" height="16" rx="1" />
            <rect x="18" y="14" width="4" height="8" rx="1" />
          </g>

          {/* Lightbulb */}
          <g
            transform="translate(40 105)"
            fill="none"
            stroke={strokeAlt}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2 C6 2, 2 6, 2 11 C2 14, 4 16, 6 18 L6 21 L18 21 L18 18 C20 16, 22 14, 22 11 C22 6, 18 2, 12 2 Z" />
            <path d="M8 24 L16 24" />
            <path d="M9 27 L15 27" />
          </g>

          {/* Coffee cup */}
          <g
            transform="translate(120 100)"
            fill="none"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 8 L3 18 C3 22, 6 25, 10 25 L16 25 C20 25, 23 22, 23 18 L23 8 Z" />
            <path d="M3 8 L23 8" />
            <path d="M23 12 C27 12, 28 14, 28 16 C28 18, 27 20, 23 20" />
            <path d="M9 3 C9 5, 7 5, 7 3" />
            <path d="M14 3 C14 5, 12 5, 12 3" />
            <path d="M19 3 C19 5, 17 5, 17 3" />
          </g>

          {/* Pie chart */}
          <g
            transform="translate(185 120)"
            fill="none"
            stroke={strokeAlt}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="11" />
            <path d="M12 12 L12 1" />
            <path d="M12 12 L22 15" />
          </g>

          {/* Laptop */}
          <g
            transform="translate(22 175)"
            fill="none"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="22" height="14" rx="2" />
            <path d="M1 20 L27 20" />
            <path d="M11 17 L17 17" />
          </g>

          {/* Line chart squiggle */}
          <g
            transform="translate(95 175)"
            fill="none"
            stroke={strokeAlt}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 18 L7 10 L13 14 L19 4 L25 9" />
            <circle cx="7" cy="10" r="1.3" fill={strokeAlt} />
            <circle cx="13" cy="14" r="1.3" fill={strokeAlt} />
            <circle cx="19" cy="4" r="1.3" fill={strokeAlt} />
          </g>

          {/* Ruler */}
          <g
            transform="translate(160 185) rotate(-20)"
            fill="none"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="1" y="8" width="28" height="8" rx="1.5" />
            <path d="M6 8 L6 12" />
            <path d="M11 8 L11 13" />
            <path d="M16 8 L16 12" />
            <path d="M21 8 L21 13" />
            <path d="M26 8 L26 12" />
          </g>

          {/* Little spark / star */}
          <g
            transform="translate(75 62)"
            fill={strokeAlt}
            stroke={strokeAlt}
            strokeWidth="1"
            strokeLinejoin="round"
          >
            <path d="M6 0 L7.5 4.5 L12 6 L7.5 7.5 L6 12 L4.5 7.5 L0 6 L4.5 4.5 Z" />
          </g>

          {/* Tiny dots cluster */}
          <g fill={stroke}>
            <circle cx="140" cy="60" r="1.4" />
            <circle cx="146" cy="66" r="1.1" />
            <circle cx="134" cy="68" r="1.1" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#doodle-tile)" />
    </svg>
  );
}
