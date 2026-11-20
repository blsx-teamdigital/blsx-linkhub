export default function SocialIconList({ items }) {
  return (
    <ul className="social-icon-list">
      {items.map(({ id, icon, label, href }) => {
        const isWeb = href.startsWith('http')
        return (
          <li key={id}>
            <a
              href={href}
              aria-label={label}
              {...(isWeb ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              <i className={`bi bi-${icon}`} aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}