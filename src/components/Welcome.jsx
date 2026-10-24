import React, { useState, useEffect } from 'react'

const Welcome = ({ onEnter }) => {
  const fullText = 'Welcome to FrameLab'
  const [displayedText, setDisplayedText] = useState('')
  const [isTypingDone, setIsTypingDone] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  // Default to rotated layout (-90deg) as requested
  const [rotationAngle, setRotationAngle] = useState(-90)

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
    }, 80)

    return () => clearInterval(interval)
  }, [])

  // Auto-progress bar to transition into the main page after typing completes
  useEffect(() => {
    if (!isTypingDone) return

    const startTime = Date.now()
    const duration = 3200 // 3.2 seconds countdown to main page

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
    }, 450)
  }

  const toggleRotation = () => {
    setRotationAngle((prev) => {
      if (prev === -90) return 90
      if (prev === 90) return 0
      return -90
    })
  }

  return (
    <div className={`welcome-screen ${isExiting ? 'welcome-exit' : ''}`}>
      {/* Animated Pinterest Video Background in Rotated Layout */}
      <div className="welcome-video-container">
        <video
          className="welcome-bg-video"
          style={{ transform: `translate(-50%, -50%) rotate(${rotationAngle}deg)` }}
          src="https://v1.pinimg.com/videos/mc/720p/26/eb/58/26eb580680e3ea369620cd82bdd6621f.mp4"
          poster="https://i.pinimg.com/736x/5b/84/a5/5b84a560b74185e7045fa979090f3bd4.jpg"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dark ethereal gradient overlay for optimal text contrast */}
        <div className="welcome-video-scrim" />
      </div>

      {/* Ambient Violet Glowing Orbs */}
      <div className="welcome-glow-orb orb-primary" />
      <div className="welcome-glow-orb orb-secondary" />

      {/* Top Controls: Rotation Toggle & Skip Button */}
      <div className="welcome-top-bar">
        <button
          type="button"
          onClick={toggleRotation}
          className="welcome-rotate-btn"
          title="Toggle video rotation layout (-90°, 90°, Portrait)"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path
              d="M4 12v-2a8 8 0 0 1 14.93-4M20 12v2a8 8 0 0 1-14.93 4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="m18 2 3 3-3 3M6 22l-3-3 3-3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Rotated ({rotationAngle === 0 ? 'Normal' : `${rotationAngle}°`})</span>
        </button>

        <button
          type="button"
          onClick={handleEnter}
          className="welcome-skip-btn"
          title="Skip intro and enter gallery"
        >
          <span>Enter Gallery</span>
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
        {/* Brand Aperture Icon with Luminous Violet Aura */}
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

        {/* Gradual Welcome Heading with Typewriter */}
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

        {/* Elegant Editorial Subtitle */}
        <p
          className={`welcome-subtitle ${
            isTypingDone ? 'subtitle-visible' : 'subtitle-hidden'
          }`}
        >
          Immerse in nocturnal serenity and blooming floral aesthetics.
          A sanctuary of visual poetics credited to visionaries across India.
        </p>

        {/* Feature Badges */}
        <div
          className={`welcome-badges ${
            isTypingDone ? 'badges-visible' : 'badges-hidden'
          }`}
        >
          <span className="welcome-pill">🌸 Ethereal Night Blooms</span>
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
            <span>Explore Visual Sanctuary</span>
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
