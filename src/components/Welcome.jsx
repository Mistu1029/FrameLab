import React, { useState, useEffect } from 'react'

const Welcome = ({ onEnter }) => {
  const fullText = 'Welcome to FrameLab'
  const [displayedText, setDisplayedText] = useState('')
  const [isTypingDone, setIsTypingDone] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  // Gradual typing animation
  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(interval)
        setIsTypingDone(true)
      }
    }, 85)

    return () => clearInterval(interval)
  }, [])

  // Auto-progress bar to transition into the main page after typing completes
  useEffect(() => {
    if (!isTypingDone) return

    const startTime = Date.now()
    const duration = 2800 // 2.8 seconds countdown to main page

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)

      if (pct >= 100) {
        clearInterval(timer)
        handleEnter()
      }
    }, 40)

    return () => clearInterval(timer)
  }, [isTypingDone])

  const handleEnter = () => {
    setIsExiting(true)
    setTimeout(() => {
      onEnter()
    }, 400) // matches fade-out transition duration
  }

  return (
    <div className={`welcome-screen ${isExiting ? 'welcome-exit' : ''}`}>
      {/* Background ambient glowing orbs */}
      <div className="welcome-glow-orb orb-primary" />
      <div className="welcome-glow-orb orb-secondary" />

      {/* Top Skip Button */}
      <div className="welcome-top-bar">
        <button
          type="button"
          onClick={handleEnter}
          className="welcome-skip-btn"
          title="Skip intro and open gallery"
        >
          Skip Intro
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Central Content Box */}
      <div className="welcome-content">
        {/* Brand Aperture Icon with Golden Aura */}
        <div className="welcome-logo-badge">
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

        {/* Gradual Welcome Heading */}
        <div className="welcome-heading-wrapper">
          <h1 className="welcome-heading">
            {displayedText}
            <span
              className={`typing-cursor ${isTypingDone ? 'cursor-blink' : ''}`}
            >
              |
            </span>
          </h1>
        </div>

        {/* Subtitle fading in */}
        <p
          className={`welcome-subtitle ${
            isTypingDone ? 'subtitle-visible' : 'subtitle-hidden'
          }`}
        >
          A curated exhibition of aesthetic frames, cinematic vistas, and
          visual artistry credited to talented Indian photographers.
        </p>

        {/* Feature Badges */}
        <div
          className={`welcome-badges ${
            isTypingDone ? 'badges-visible' : 'badges-hidden'
          }`}
        >
          <span className="welcome-pill">✨ Aesthetic Curations</span>
          <span className="welcome-pill">🇮🇳 Indian Creators</span>
          <span className="welcome-pill">🎞️ High-Resolution</span>
        </div>

        {/* Action Button & Auto-countdown Progress */}
        <div
          className={`welcome-action-section ${
            isTypingDone ? 'action-visible' : 'action-hidden'
          }`}
        >
          <button
            type="button"
            onClick={handleEnter}
            className="welcome-enter-btn"
          >
            <span>Explore Gallery</span>
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Progress bar indicating automatic entrance */}
          <div className="welcome-progress-wrapper">
            <div
              className="welcome-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="welcome-auto-text">
            Entering gallery automatically...
          </span>
        </div>
      </div>
    </div>
  )
}

export default Welcome
