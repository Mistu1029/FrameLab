import React, { useState, useEffect } from 'react'

const GUARANTEED_FALLBACK =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'

const Card = ({ elem }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(
    elem.preview_url || elem.download_url
  )

  useEffect(() => {
    setImageLoaded(false)
    setCurrentSrc(elem.preview_url || elem.download_url)
  }, [elem.id, elem.preview_url, elem.download_url])

  const handleImageError = () => {
    if (currentSrc !== elem.download_url && elem.download_url) {
      setCurrentSrc(elem.download_url)
    } else if (currentSrc !== GUARANTEED_FALLBACK) {
      setCurrentSrc(GUARANTEED_FALLBACK)
      setImageLoaded(true)
    } else {
      setImageLoaded(true)
    }
  }

  // Photographer initials for avatar
  const initials = elem.author
    ? elem.author
        .split(' ')
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'IN'

  const fullPhotoLink = elem.download_url || elem.url || currentSrc

  return (
    <article className="gallery-card">
      <a
        href={fullPhotoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="gallery-card-link"
        title={`Click to view full-resolution photo by ${elem.author}`}
      >
        <div className="gallery-image-wrapper">
          {/* Spinner placeholder while image loads */}
          {!imageLoaded && (
            <div className="image-placeholder-spinner">
              <div className="spinner" />
            </div>
          )}

          <img
            className={`gallery-img ${imageLoaded ? 'img-loaded' : 'img-loading'}`}
            src={currentSrc}
            alt={elem.title ? `${elem.title} - Photo by ${elem.author}` : `Photo by ${elem.author}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={handleImageError}
          />

          {/* Top badges: Category tag & hover view button */}
          <div className="card-top-bar">
            {elem.category ? (
              <span className="category-tag-badge">{elem.category}</span>
            ) : (
              <span className="photo-id-tag">#{elem.id}</span>
            )}
            <span className="view-action-pill" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </span>
          </div>

          {/* Bottom gradient overlay showing photo title, location, and Indian photographer name */}
          <div className="gallery-card-overlay">
            {elem.title && <h4 className="photo-title-text">{elem.title}</h4>}

            <div className="photographer-info">
              <div className="author-avatar">{initials}</div>
              <div className="author-details">
                <span className="author-role">Photographer</span>
                <h3 className="author-name">{elem.author}</h3>
                {elem.location && (
                  <span className="photo-location">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="location-icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {elem.location}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </a>
    </article>
  )
}

export default Card