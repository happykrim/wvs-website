/* Inline SVG logo component — replace with actual brand asset when available */
export default function Logo({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Wide View Solutions logo"
      role="img"
    >
      {/* Background circle */}
      <circle cx="24" cy="24" r="22" fill="#f0f7f2" />
      {/* Outer eye shape */}
      <path d="M6 24 Q24 6 42 24 Q24 42 6 24Z" fill="#2d6a4f" opacity="0.12" />
      {/* Iris */}
      <circle cx="24" cy="24" r="10" fill="#2d6a4f" />
      {/* Pupil */}
      <circle cx="24" cy="24" r="4.5" fill="#f0f7f2" />
      {/* Highlight */}
      <circle cx="27.5" cy="20.5" r="1.8" fill="white" opacity="0.75" />
    </svg>
  )
}
