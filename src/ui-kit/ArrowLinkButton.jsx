export default function ArrowLinkButton({ size = 'md' }) {
  return (
    <span className={`arrow-link-button arrow-link-button--${size}`}>
      <i className="bi bi-arrow-up-right" aria-hidden="true" />
    </span>
  )
}