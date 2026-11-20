import BrandAvatar from './BrandAvatar'
import SocialIconList from './SocialIconList'
import ContactActionBar from './ContactActionBar'

export default function BrandProfileCard({ profile }) {
  const { name, tagline, intro, logo, logoFallbackText, backgroundImage, phone, email, socials } =
    profile

  return (
    <aside
      className="brand-profile-card"
      style={{ '--card-bg-image': `url(${backgroundImage})` }}
    >
      <div className="brand-profile-card__frame">
        <BrandAvatar src={logo} alt={`${name} logo`} fallbackText={logoFallbackText} />

        <h1 className="brand-profile-card__name">{name}</h1>
        <p className="brand-profile-card__tagline">{tagline}</p>
        <hr className="brand-profile-card__rule" />
        <p className="brand-profile-card__intro">{intro}</p>

        <SocialIconList items={socials} />
        <ContactActionBar phone={phone} email={email} />
      </div>
    </aside>
  )
}



