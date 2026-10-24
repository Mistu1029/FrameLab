import React from 'react'

const AmbientBackground = () => {
  // 24 falling cherry blossom petals with varied sizes, positions, and drift physics
  const petals = [
    { id: 1, left: '3%', size: 14, duration: 11, delay: -2, anim: 'A' },
    { id: 2, left: '8%', size: 11, duration: 14, delay: -8, anim: 'B' },
    { id: 3, left: '14%', size: 17, duration: 10, delay: -4, anim: 'C' },
    { id: 4, left: '19%', size: 12, duration: 16, delay: -11, anim: 'A' },
    { id: 5, left: '25%', size: 15, duration: 12, delay: -1, anim: 'B' },
    { id: 6, left: '31%', size: 10, duration: 15, delay: -6, anim: 'C' },
    { id: 7, left: '37%', size: 18, duration: 13, delay: -9, anim: 'A' },
    { id: 8, left: '42%', size: 13, duration: 17, delay: -3, anim: 'B' },
    { id: 9, left: '48%', size: 16, duration: 11, delay: -13, anim: 'C' },
    { id: 10, left: '53%', size: 12, duration: 14, delay: -5, anim: 'A' },
    { id: 11, left: '59%', size: 15, duration: 12, delay: -10, anim: 'B' },
    { id: 12, left: '64%', size: 11, duration: 18, delay: -2, anim: 'C' },
    { id: 13, left: '70%', size: 17, duration: 13, delay: -7, anim: 'A' },
    { id: 14, left: '75%', size: 13, duration: 15, delay: -12, anim: 'B' },
    { id: 15, left: '81%', size: 16, duration: 10, delay: -4, anim: 'C' },
    { id: 16, left: '86%', size: 12, duration: 16, delay: -8, anim: 'A' },
    { id: 17, left: '92%', size: 15, duration: 14, delay: -1, anim: 'B' },
    { id: 18, left: '97%', size: 10, duration: 17, delay: -14, anim: 'C' },
    { id: 19, left: '6%', size: 14, duration: 13, delay: -5, anim: 'B' },
    { id: 20, left: '22%', size: 12, duration: 11, delay: -9, anim: 'A' },
    { id: 21, left: '45%', size: 18, duration: 15, delay: -7, anim: 'C' },
    { id: 22, left: '67%', size: 13, duration: 12, delay: -3, anim: 'B' },
    { id: 23, left: '88%', size: 16, duration: 14, delay: -11, anim: 'A' },
    { id: 24, left: '94%', size: 11, duration: 16, delay: -6, anim: 'C' }
  ]

  return (
    <div className="ambient-bg-layer" aria-hidden="true">
      {/* Deep Celestial Purple Gradients */}
      <div className="ambient-glow ambient-glow-top-left" />
      <div className="ambient-glow ambient-glow-top-right" />
      <div className="ambient-glow ambient-glow-bottom-center" />

      {/* SVG Definitions for Authentic Notched Sakura Blossoms & Petals */}
      <svg width="0" height="0" className="svg-defs" aria-hidden="true">
        <defs>
          {/* Petal Gradient: Soft white highlight, blush pink body, deep rose base */}
          <linearGradient id="sakura-petal-grad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#db2777" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#f472b6" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#fbcfe8" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.98" />
          </linearGradient>

          {/* Calyx & Branch Gradient */}
          <linearGradient id="sakura-branch-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a253b" />
            <stop offset="60%" stopColor="#301526" />
            <stop offset="100%" stopColor="#1f0c1a" />
          </linearGradient>

          {/* Single Authentic Notched Sakura Petal (Heart-cleft top) */}
          <path
            id="sakura-petal"
            d="M 0,0 C -5,-10 -11,-18 -7,-26 C -3.5,-31 -1,-29 0,-25 C 1,-29 3.5,-31 7,-26 C 11,-18 5,-10 0,0 Z"
            fill="url(#sakura-petal-grad)"
          />

          {/* Full Blooming 5-Petal Sakura Flower with Golden-Tipped Pistils */}
          <g id="sakura-flower-full">
            {/* 5 Rotated Petals with Organic Overlap */}
            <g transform="rotate(0)"><use href="#sakura-petal" /></g>
            <g transform="rotate(72)"><use href="#sakura-petal" /></g>
            <g transform="rotate(144)"><use href="#sakura-petal" /></g>
            <g transform="rotate(216)"><use href="#sakura-petal" /></g>
            <g transform="rotate(288)"><use href="#sakura-petal" /></g>
            
            {/* Soft Deep Rose Core Glow */}
            <circle cx="0" cy="0" r="5" fill="#be185d" opacity="0.75" />
            
            {/* Stamen Filaments with Pollen Tips */}
            <line x1="0" y1="0" x2="-4" y2="-6" stroke="#9d174d" strokeWidth="0.8" />
            <circle cx="-4" cy="-6" r="1.1" fill="#fef08a" />
            
            <line x1="0" y1="0" x2="4" y2="-6" stroke="#9d174d" strokeWidth="0.8" />
            <circle cx="4" cy="-6" r="1.1" fill="#fef08a" />
            
            <line x1="0" y1="0" x2="-6" y2="1" stroke="#9d174d" strokeWidth="0.8" />
            <circle cx="-6" cy="1" r="1.1" fill="#fef08a" />
            
            <line x1="0" y1="0" x2="6" y2="1" stroke="#9d174d" strokeWidth="0.8" />
            <circle cx="6" cy="1" r="1.1" fill="#fef08a" />
            
            <line x1="0" y1="0" x2="-3" y2="6" stroke="#9d174d" strokeWidth="0.8" />
            <circle cx="-3" cy="6" r="1.1" fill="#fef08a" />
            
            <line x1="0" y1="0" x2="3" y2="6" stroke="#9d174d" strokeWidth="0.8" />
            <circle cx="3" cy="6" r="1.1" fill="#fef08a" />
            
            <circle cx="0" cy="0" r="2.2" fill="#fbcfe8" />
          </g>

          {/* Side-view Partial Sakura Bloom */}
          <g id="sakura-flower-side">
            <path
              d="M0,0 C-7,-8 -12,-16 -7,-24 C-3,-28 0,-26 2,-22 C5,-27 9,-25 8,-20 C12,-14 6,-7 0,0 Z"
              fill="url(#sakura-petal-grad)"
              transform="rotate(-20)"
            />
            <path
              d="M0,0 C-5,-10 -9,-18 -4,-25 C0,-29 3,-27 5,-23 C8,-27 12,-25 11,-20 C14,-14 7,-7 0,0 Z"
              fill="url(#sakura-petal-grad)"
              transform="rotate(30)"
            />
            <path
              d="M0,0 C-3,-8 -7,-14 -3,-20 C0,-23 2,-21 4,-18 C7,-21 9,-20 8,-16 C10,-11 5,-5 0,0 Z"
              fill="url(#sakura-petal-grad)"
              transform="scale(0.85)"
            />
            {/* Green calyx base */}
            <path d="M-4,1 C-1,6 1,6 4,1 C2,4 -2,4 -4,1 Z" fill="#4d5b28" />
          </g>

          {/* Sakura Bud */}
          <g id="sakura-bud">
            <path d="M-2,6 C-1,3 0,0 2,-4 C3,-1 2,4 0,7 Z" fill="#be185d" />
            <path d="M-3,5 C-1,2 1,-2 0,-5 C-2,-1 -3,3 -3,5 Z" fill="#f472b6" />
            <path d="M-3,7 C-2,10 2,10 3,7 C1,8 -1,8 -3,7 Z" fill="#365314" />
          </g>
        </defs>
      </svg>

      {/* Top-Right Cherry Blossom Branch (Main Luxurious Branch) */}
      <div className="blossom-corner blossom-top-right">
        <svg
          viewBox="0 0 380 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="blossom-svg"
        >
          {/* Main Woody Branch with Organic Taper */}
          <path
            d="M380 0 C300 20, 230 65, 160 120 C110 160, 60 195, 10 230"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Secondary Branchlets */}
          <path
            d="M260 45 C220 30, 170 25, 130 15"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M200 90 C170 125, 120 150, 75 165"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M110 160 C85 195, 50 220, 15 240"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M320 20 C290 5, 250 -5, 210 -10"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Lush Clusters of Full Sakura Blossoms */}
          <g transform="translate(260, 45) scale(1.15) rotate(15)">
            <use href="#sakura-flower-full" />
          </g>
          <g transform="translate(225, 30) scale(0.9) rotate(-35)">
            <use href="#sakura-flower-side" />
          </g>
          <g transform="translate(200, 90) scale(1.25) rotate(-10)">
            <use href="#sakura-flower-full" />
          </g>
          <g transform="translate(170, 75) scale(0.95) rotate(45)">
            <use href="#sakura-flower-full" />
          </g>
          <g transform="translate(145, 130) scale(1.1) rotate(20)">
            <use href="#sakura-flower-full" />
          </g>
          <g transform="translate(110, 160) scale(1.2) rotate(-25)">
            <use href="#sakura-flower-full" />
          </g>
          <g transform="translate(75, 165) scale(0.95) rotate(60)">
            <use href="#sakura-flower-side" />
          </g>
          <g transform="translate(60, 200) scale(1.05) rotate(12)">
            <use href="#sakura-flower-full" />
          </g>
          <g transform="translate(18, 235) scale(0.85) rotate(-15)">
            <use href="#sakura-flower-side" />
          </g>
          <g transform="translate(130, 15) scale(0.9) rotate(-40)">
            <use href="#sakura-flower-full" />
          </g>

          {/* Buds and Tiny Petal Drifts near Branch */}
          <g transform="translate(100, 8) scale(1.1) rotate(-60)">
            <use href="#sakura-bud" />
          </g>
          <g transform="translate(45, 175) scale(1) rotate(45)">
            <use href="#sakura-bud" />
          </g>
          <g transform="translate(2, 250) scale(1.1) rotate(30)">
            <use href="#sakura-bud" />
          </g>
          <g transform="translate(300, 12) scale(0.95) rotate(18)">
            <use href="#sakura-flower-side" />
          </g>
        </svg>
      </div>

      {/* Top-Left Subtle Corner Accent (Hugs edge so it never overlaps the Intro Title) */}
      <div className="blossom-corner blossom-top-left">
        <svg
          viewBox="0 0 160 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="blossom-svg"
        >
          <path
            d="M0 0 C45 15, 90 20, 135 10"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M60 12 C75 30, 95 38, 115 42"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <g transform="translate(60, 12) scale(0.9) rotate(-15)">
            <use href="#sakura-flower-full" />
          </g>
          <g transform="translate(115, 42) scale(0.8) rotate(25)">
            <use href="#sakura-flower-side" />
          </g>
          <g transform="translate(135, 10) scale(0.75) rotate(-35)">
            <use href="#sakura-bud" />
          </g>
        </svg>
      </div>

      {/* Bottom-Left Blossom Branch (Frames bottom margin away from headers) */}
      <div className="blossom-corner blossom-bottom-left">
        <svg
          viewBox="0 0 280 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="blossom-svg"
        >
          <path
            d="M0 220 C70 195, 130 155, 180 105 C215 70, 250 35, 270 0"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M130 155 C160 180, 195 200, 230 215"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <g transform="translate(130, 155) scale(1.15) rotate(-15)">
            <use href="#sakura-flower-full" />
          </g>
          <g transform="translate(170, 115) scale(1.05) rotate(30)">
            <use href="#sakura-flower-full" />
          </g>
          <g transform="translate(215, 70) scale(0.9) rotate(-45)">
            <use href="#sakura-flower-side" />
          </g>
          <g transform="translate(255, 25) scale(0.95) rotate(15)">
            <use href="#sakura-bud" />
          </g>
          <g transform="translate(195, 200) scale(0.85) rotate(45)">
            <use href="#sakura-flower-side" />
          </g>
        </svg>
      </div>

      {/* Bottom-Right Blossom Spray */}
      <div className="blossom-corner blossom-bottom-right">
        <svg
          viewBox="0 0 280 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="blossom-svg"
        >
          <path
            d="M280 220 C210 195, 150 155, 100 105 C65 70, 30 35, 10 0"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M150 155 C120 180, 85 200, 50 215"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <g transform="translate(150, 155) scale(1.2) rotate(15)">
            <use href="#sakura-flower-full" />
          </g>
          <g transform="translate(110, 115) scale(1.1) rotate(-30)">
            <use href="#sakura-flower-full" />
          </g>
          <g transform="translate(65, 70) scale(0.95) rotate(45)">
            <use href="#sakura-flower-side" />
          </g>
          <g transform="translate(25, 25) scale(1) rotate(-15)">
            <use href="#sakura-bud" />
          </g>
          <g transform="translate(85, 200) scale(0.9) rotate(-45)">
            <use href="#sakura-flower-side" />
          </g>
        </svg>
      </div>

      {/* Enhanced Falling / Drifting Sakura Blossom Petals (24 Petals Continuous Shower) */}
      <div className="falling-petals-wrapper">
        {petals.map((p) => (
          <span
            key={p.id}
            className={`petal petal-anim-${p.anim}`}
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${Math.round(p.size * 1.35)}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default AmbientBackground
