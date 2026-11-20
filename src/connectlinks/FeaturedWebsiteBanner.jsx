import LinkCard from '../linkcard/LinkCard';

export default function FeaturedWebsiteBanner({ icon, title, subtitle, href }) {
  return (
    <LinkCard variant="featured" icon={icon} title={title} subtitle={subtitle} href={href} />
  )
}