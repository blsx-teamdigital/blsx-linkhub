import SeoMeta from '../seo/SeoMeta'
import BrandProfileCard from '../features/BrandProfileCard'
import FeaturedWebsiteBanner from '../connectlinks/FeaturedWebsiteBanner'
import ConnectLinkGrid from '../connectlinks/ConnectLinkGrid'
import { brandProfile } from '../data/brandProfile'
import { featuredWebsite, connectLinks } from '../data/connectLinks'
import './ConnectPage.css'

export default function ConnectPage() {
  return (
    <main className="connect-page">
      <SeoMeta path="/" />

      <div className="connect-page__layout">
        <aside className="connect-page__profile">
          <BrandProfileCard profile={brandProfile} />
        </aside>

        <section className="connect-page__content" aria-labelledby="connect-heading">
          <h1 id="connect-heading" className="connect-page__title">
            Connect with us
          </h1>

          <div className="connect-page__featured">
            <FeaturedWebsiteBanner {...featuredWebsite} />
          </div>

          <ConnectLinkGrid links={connectLinks} />
        </section>
      </div>
    </main>
  )
}