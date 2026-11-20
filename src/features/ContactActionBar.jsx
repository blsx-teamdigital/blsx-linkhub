import CopyValueButton from '../ui-kit/CopyValueButton'
import { toPhoneHref, toEmailHref } from '../hooks/Contact'

function ContactAction({ icon, label, value, href }) {
  return (
    <div className="contact-action">
      <a href={href} className="contact-action__link">
        <i className={`bi bi-${icon}`} aria-hidden="true" />
        <span className="contact-action__text">
          <strong>{label}</strong>
          <small>{value}</small>
        </span>
      </a>
      <CopyValueButton value={value} label={label} />
    </div>
  )
}

export default function ContactActionBar({ phone, email }) {
  return (
    <div className="contact-action-bar">
      <ContactAction
        icon="telephone-fill"
        label="Call Us"
        value={phone}
        href={toPhoneHref(phone)}
      />
      <ContactAction
        icon="envelope-fill"
        label="Email Us"
        value={email}
        href={toEmailHref(email)}
      />
    </div>
  )
}