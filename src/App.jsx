import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import Welcome from './components/Welcome'
import AddPhotoModal from './components/AddPhotoModal'
import AmbientBackground from './components/AmbientBackground'
import { AESTHETIC_PHOTOS, INDIAN_NAMES } from './data/photos'

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const [category, setCategory] = useState('All')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Load any previously user-added photos from localStorage
  const [customPhotos, setCustomPhotos] = useState(() => {
    try {
      const saved = localStorage.getItem('framelab_custom_photos')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const ITEMS_PER_PAGE = 12

  const categories = [
    'All',
    'Cinematic',
    'Nature',
    'Moody',
    'Street',
    'Minimal',
    'Coastal'
  ]

  const getData = async () => {
    setIsLoading(true)
    setHasError(false)

    try {
      await new Promise((r) => setTimeout(r, 160))

      // Combine user-submitted photos at the top with curated aesthetic photos
      const combinedPool = [...customPhotos, ...AESTHETIC_PHOTOS]

      const filtered =
        category === 'All'
          ? combinedPool
          : combinedPool.filter((p) => p.category === category)

      const startIndex = (index - 1) * ITEMS_PER_PAGE
      let pageItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE)

      // Infinite aesthetic paging support: dynamically generate next pages with Indian creators
      if (pageItems.length === 0 && filtered.length > 0) {
        pageItems = Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => {
          const baseItem = filtered[(startIndex + i) % filtered.length]
          const nameIdx = (startIndex + i) % INDIAN_NAMES.length
          return {
            ...baseItem,
            id: `aes-${index}-${i + 1}`,
            author: INDIAN_NAMES[nameIdx],
            url: baseItem.download_url
          }
        })
      }

      setUserData(pageItems)
    } catch (error) {
      console.error('Failed to load aesthetic gallery:', error)
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [index, category, customPhotos])

  const handleCategoryChange = (cat) => {
    if (cat !== category) {
      setCategory(cat)
      setIndex(1)
      setUserData([])
    }
  }

  const handleAddPhoto = (newPhoto) => {
    setCustomPhotos((prev) => {
      const updated = [newPhoto, ...prev]
      try {
        localStorage.setItem('framelab_custom_photos', JSON.stringify(updated))
      } catch (e) {
        console.warn('Could not save to localStorage', e)
      }
      return updated
    })
    setCategory('All')
    setIndex(1)
  }

  return (
    <>
      {/* Intro Welcome Screen with Gradual Typewriter */}
      {showWelcome && <Welcome onEnter={() => setShowWelcome(false)} />}

      {/* Add Photograph Dialog Modal */}
      <AddPhotoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPhoto={handleAddPhoto}
      />

      {/* Atmospheric Theme Background with Corner Blossoms and Ambient Photo Frames */}
      <AmbientBackground />

      <div className="gallery-app">
        {/* Top Brand Header */}
        <header className="gallery-header">
          <div className="header-container">
            <div
              className="brand-section"
              onClick={() => setShowWelcome(true)}
              style={{ cursor: 'pointer' }}
              title="Click to replay welcome intro"
            >
              <div className="brand-icon">
                <img
                  src="/cherry-camera-logo-trans.png"
                  alt="FrameLab Camera Logo"
                  className="brand-cherry-logo"
                />
              </div>
              <div className="brand-titles">
                <div className="brand-name-row">
                  <h1 className="brand-title">
                    Frame<span>Lab</span>
                  </h1>
                  <span className="gallery-badge">Aesthetic Gallery</span>
                </div>
                <p className="brand-subtitle">
                  Curated Indian Photographers & Cinematic Visuals
                </p>
              </div>
            </div>

            {/* Header Controls: Add Photo Button & Page Indicator */}
            <div className="header-stats">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="btn-add-photo"
                title="Submit your own photograph to the gallery"
              >
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Add Photo</span>
              </button>

              <div className="page-indicator-badge">
                <span className="live-dot" />
                <span>Page {index}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="gallery-main">
          {/* Intro Banner */}
          <div className="gallery-intro">
            <div>
              <h2 className="intro-title">Aesthetic Moments & Frames</h2>
              <p className="intro-desc">
                High-resolution captures by Indian photographers. Click any
                photograph to view the full-size image.
              </p>
            </div>
            <span className="intro-meta">
              {userData.length > 0
                ? `${userData.length} frames on page ${index}`
                : 'Fetching frames...'}
            </span>
          </div>

          {/* Category Filter Pills */}
          <div className="category-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-pill ${category === cat ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Error State */}
          {hasError && !isLoading && (
            <div className="error-box">
              <div className="error-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3>Unable to load gallery</h3>
              <p>Could not fetch photos. Please check your connection.</p>
              <button className="retry-btn" onClick={getData}>
                Retry Loading
              </button>
            </div>
          )}

          {/* Loading Skeletons */}
          {isLoading && (
            <div className="gallery-grid">
              {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
                <div key={i} className="skeleton-card">
                  <div className="skeleton-shimmer" />
                  <div className="skeleton-bottom">
                    <div className="skeleton-avatar" />
                    <div className="skeleton-lines">
                      <div className="skeleton-line-sm" />
                      <div className="skeleton-line-lg" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Photos Grid */}
          {!isLoading && !hasError && userData.length > 0 && (
            <div className="gallery-grid">
              {userData.map((elem) => (
                <Card key={elem.id} elem={elem} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !hasError && userData.length === 0 && (
            <div className="error-box">
              <h3>No photos found</h3>
              <p>Try switching to another category or reset filters.</p>
              <button
                className="retry-btn"
                onClick={() => handleCategoryChange('All')}
              >
                Reset Filters
              </button>
            </div>
          )}
        </main>

        {/* Floating Bottom Pagination Dock */}
        <footer className="pagination-dock">
          <div className="pagination-inner">
            <button
              type="button"
              className="pagination-btn btn-prev"
              disabled={index <= 1 || isLoading}
              onClick={() => {
                if (index > 1) {
                  setUserData([])
                  setIndex((prev) => prev - 1)
                }
              }}
            >
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Prev
            </button>

            <span className="pagination-current">
              Page <strong>{index}</strong>
            </span>

            <button
              type="button"
              className="pagination-btn btn-next"
              disabled={isLoading}
              onClick={() => {
                setUserData([])
                setIndex((prev) => prev + 1)
              }}
            >
              Next
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App