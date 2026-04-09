/* Logo component — renders public/logo.svg.
   To update the logo, replace the file at public/logo.svg. */
export default function Logo({ className }) {
  return (
    <img
      className={className}
      src="/logo.svg"
      alt="Wide View Solutions logo"
      width="48"
      height="48"
    />
  )
}
