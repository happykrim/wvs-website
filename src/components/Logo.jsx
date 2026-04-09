/* Logo component using logo.svg from public folder */
export default function Logo({ className, style }) {
  return (
    <img
      className={className}
      src="/logo.svg"
      alt="Wide View Solutions logo"
      style={style}
    />
  )
}