import { useEffect } from 'react'
import { siteConfig } from '../data/siteConfig'

const upsertMeta = (attr, key, content) => {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

const upsertCanonical = (href) => {
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

export default function SeoMeta({
  title = siteConfig.title,
  description = siteConfig.description,
  path = '/',
}) {
  useEffect(() => {
    const url = new URL(path, siteConfig.siteUrl).href
    const image = new URL(siteConfig.ogImage, siteConfig.siteUrl).href

    document.title = title
    upsertCanonical(url)

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', siteConfig.keywords.join(', '))
    upsertMeta('name', 'theme-color', siteConfig.themeColor)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', siteConfig.siteName)
    upsertMeta('property', 'og:locale', siteConfig.locale)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', image)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', image)
  }, [title, description, path])

  return null
}