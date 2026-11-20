import LinkCard from '../linkcard/LinkCard'

export default function ConnectLinkTile({ icon, title, subtitle, href }) {
  return <LinkCard icon={icon} title={title} subtitle={subtitle} href={href} />
}