/*import { useState } from 'react'

export default function BrandAvatar({ src, alt, fallbackText }) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className="brand-avatar">
      <div className="brand-avatar__circle">
        {hasError ? (
          <span className="brand-avatar__fallback">{fallbackText}</span>
        ) : (
          <img src={src} alt={alt} onError={() => setHasError(true)} />
        )}
      </div>
      <span className="brand-avatar__badge" title="Verified">
        <i className="bi bi-check-lg" aria-hidden="true" />
      </span>
    </div>
  )
}*/


export default function BrandAvatar({ src, alt }) {
  return (
    <div className="brand-avatar">
      <div className="brand-avatar__circle">
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}