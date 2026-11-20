export default function IconBadge({ name, size = 'md' }) {
  return (
    <span className={`icon-badge icon-badge--${size}`}>
      <i className={`bi bi-${name}`} aria-hidden="true" />
    </span>
  )
}