import React, { useState } from 'react'

const Card = ({ elem }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Use fast preview size, fallback to full download URL
  const previewUrl = `https://picsum.photos/id/${elem.id}/800/600`
  const imageSrc = imageError ? elem.download_url : previewUrl

  // Photographer initials for avatar
  const initials = elem.author
    ? elem.author
        .split(' ')
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'PH'

  return (
    <article className="gallery-card">
      <a
        href={elem.url}
        target="_blank"
        rel="noopener noreferrer"
        className="gallery-card-link"
        title={`View photo by ${elem.author} on Unsplash`}
      >
        <div className="gallery-image-wrapper">
          {/* Spinner placeholder while image is downloading */}
          {!imageLoaded && (
            <div className="image-placeholder-spinner">
              <div className="spinner" />
            </div>
          )}

          <img
            className={`gallery-img ${imageLoaded ? 'img-loaded' : 'img-loading'}`}
            src={imageSrc}
            alt={`Photo by ${elem.author}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />

          {/* Top badges: photo ID & hover view button */}
          <div className="card-top-bar">
            <span className="photo-id-tag">#{elem.id}</span>
            <span className="view-action-pill" aria-hidden="true">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </span>
          </div>

          {/* Bottom gradient overlay showing photographer name & role */}
          <div className="gallery-card-overlay">
            <div className="photographer-info">
              <div className="author-avatar">{initials}</div>
              <div className="author-details">
                <span className="author-role">Photographer</span>
                <h3 className="author-name">{elem.author}</h3>
              </div>
            </div>
          </div>
        </div>
      </a>
    </article>
  )
}

export default Card