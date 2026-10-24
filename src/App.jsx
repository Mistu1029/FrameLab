import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // 12 photos per page forms a complete grid across 1, 2, 3, or 4 columns
  const ITEMS_PER_PAGE = 12

  const getData = async () => {
    setIsLoading(true)
    setHasError(false)
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${index}&limit=${ITEMS_PER_PAGE}`
      )
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setUserData(data)
    } catch (error) {
      console.error('Failed to load gallery images:', error)
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [index])

  return (
    <div className="gallery-app">
      {/* Top Header */}
      <header className="gallery-header">
        <div className="header-container">
          <div className="brand-section">
            <div className="brand-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                <circle cx="12" cy="13" r="3" />
              </svg>
            </div>
            <div className="brand-titles">
              <div className="brand-name-row">
                <h1 className="brand-title">
                  Frame<span>Lab</span>
                </h1>
                <span className="gallery-badge">Gallery View</span>
              </div>
              <p className="brand-subtitle">Curated visual showcase & creator spotlights</p>
            </div>
          </div>

          <div className="header-stats">
            <div className="page-indicator-badge">
              <span className="live-dot" />
              <span>Page {index}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Gallery Area */}
      <main className="gallery-main">
        <div className="gallery-intro">
          <div>
            <h2 className="intro-title">Featured Photographs</h2>
            <p className="intro-desc">
              Explore high-resolution captures credited directly to each photographer.
            </p>
          </div>
          <span className="intro-meta">
            {userData.length > 0 ? `${userData.length} photos loaded` : 'Fetching items...'}
          </span>
        </div>

        {/* Error State */}
        {hasError && !isLoading && (
          <div className="error-box">
            <div className="error-icon">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3>Unable to load gallery</h3>
            <p>Could not fetch photos from the server. Check your connection and try again.</p>
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

        {/* Actual Gallery Cards */}
        {!isLoading && !hasError && userData.length > 0 && (
          <div className="gallery-grid">
            {userData.map((elem) => (
              <Card key={elem.id} elem={elem} />
            ))}
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
  )
}

export default App