/**
 * Minimal Tableau-style mark: a cross of bars, echoing the T + chart vibe
 * without infringing on the real logo. Colors adapt via currentColor.
 */
export default function TableauIcon({ size = 20, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <path d="M12 3 L12 21" />
      <path d="M3 12 L21 12" />
      <rect x="5.5" y="7" width="3" height="10" rx="0.5" />
      <rect x="15.5" y="7" width="3" height="10" rx="0.5" />
      <rect x="10.5" y="4" width="3" height="4" rx="0.5" />
      <rect x="10.5" y="16" width="3" height="4" rx="0.5" />
    </svg>
  );
}
