import LinkCard from '../linkcard/LinkCard'
import './ConnectLinkGrid.css'

export default function ConnectLinkGrid({ links }) {
  return (
    <ul className="connect-link-grid">
      {links.map((link) => (
        <li key={link.title} className="connect-link-grid__item">
          <LinkCard {...link} />
        </li>
      ))}
    </ul>
  )
}