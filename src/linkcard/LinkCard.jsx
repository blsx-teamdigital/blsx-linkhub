/*import IconBadge from '../ui-kit/IconBadge'
import ArrowLinkButton from '../ui-kit/ArrowLinkButton'
import './LinkCard.css'

const isWebLink = (href) => /^https?:\/\//.test(href)

export default function LinkCard({ icon, title, subtitle, href, variant = 'default' }) {
  const size = variant === 'featured' ? 'lg' : 'md'
  const externalProps = isWebLink(href) ? { target: '_blank', rel: 'noreferrer' } : {}

  return (
    <a
      href={href}
      className={`connect-link-card connect-link-card--${variant}`}
      {...externalProps}
    >
      <IconBadge name={icon} size={size} />
      <span className="connect-link-card__text">
        <span className="connect-link-card__title">{title}</span>
        <span className="connect-link-card__subtitle">{subtitle}</span>
      </span>
      <ArrowLinkButton size={size} />
    </a>
  )
}*/



import IconBadge from '../ui-kit/IconBadge'
import ArrowLinkButton from '../ui-kit/ArrowLinkButton'
import './LinkCard.css'

const isWebLink = (href) => /^https?:\/\//.test(href)

export default function LinkCard({ icon, title, subtitle, href, variant = 'default' }) {
  const size = variant === 'featured' ? 'lg' : 'md'
  const externalProps = isWebLink(href) ? { target: '_blank', rel: 'noreferrer' } : {}
  const showIcon = variant !== 'featured' // CHANGED: featured card me icon circle nahi dikhega

  return (
    <a
      href={href}
      className={`connect-link-card connect-link-card--${variant}`}
      {...externalProps}
    >
      {showIcon && <IconBadge name={icon} size={size} />} {/* CHANGED */}
      <span className="connect-link-card__text">
        <span className="connect-link-card__title">{title}</span>
        <span className="connect-link-card__subtitle">{subtitle}</span>
      </span>
      <ArrowLinkButton size={size} />
    </a>
  )
}