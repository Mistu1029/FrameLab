import React from 'react'

const AmbientBackground = () => {
  // 24 falling cherry blossom petals with varied sizes, positions, and drift physics
  const petals = [
    { id: 1, left: '3%', size: 13, duration: 12, delay: -2, anim: 'A' },
    { id: 2, left: '8%', size: 10, duration: 15, delay: -8, anim: 'B' },
    { id: 3, left: '14%', size: 15, duration: 11, delay: -4, anim: 'C' },
    { id: 4, left: '19%', size: 11, duration: 17, delay: -11, anim: 'A' },
    { id: 5, left: '25%', size: 14, duration: 13, delay: -1, anim: 'B' },
    { id: 6, left: '31%', size: 9, duration: 16, delay: -6, anim: 'C' },
    { id: 7, left: '37%', size: 16, duration: 14, delay: -9, anim: 'A' },
    { id: 8, left: '42%', size: 12, duration: 18, delay: -3, anim: 'B' },
    { id: 9, left: '48%', size: 15, duration: 12, delay: -13, anim: 'C' },
    { id: 10, left: '53%', size: 11, duration: 15, delay: -5, anim: 'A' },
    { id: 11, left: '59%', size: 14, duration: 13, delay: -10, anim: 'B' },
    { id: 12, left: '64%', size: 10, duration: 19, delay: -2, anim: 'C' },
    { id: 13, left: '70%', size: 15, duration: 14, delay: -7, anim: 'A' },
    { id: 14, left: '75%', size: 12, duration: 16, delay: -12, anim: 'B' },
    { id: 15, left: '81%', size: 15, duration: 11, delay: -4, anim: 'C' },
    { id: 16, left: '86%', size: 11, duration: 17, delay: -8, anim: 'A' },
    { id: 17, left: '92%', size: 14, duration: 15, delay: -1, anim: 'B' },
    { id: 18, left: '97%', size: 9, duration: 18, delay: -14, anim: 'C' },
    { id: 19, left: '6%', size: 13, duration: 14, delay: -5, anim: 'B' },
    { id: 20, left: '22%', size: 11, duration: 12, delay: -9, anim: 'A' },
    { id: 21, left: '45%', size: 16, duration: 16, delay: -7, anim: 'C' },
    { id: 22, left: '67%', size: 12, duration: 13, delay: -3, anim: 'B' },
    { id: 23, left: '88%', size: 15, duration: 15, delay: -11, anim: 'A' },
    { id: 24, left: '94%', size: 10, duration: 17, delay: -6, anim: 'C' }
  ]

  return (
    <div className="ambient-bg-layer" aria-hidden="true">
      {/* Deep Celestial Midnight Gradients (Matched to Welcome Screen) */}
      <div className="ambient-glow ambient-glow-top-left" />
      <div className="ambient-glow ambient-glow-top-right" />
      <div className="ambient-glow ambient-glow-bottom-center" />

      {/* SVG Definitions for Dainty Botanical Notched Sakura Blossoms */}
      <svg width="0" height="0" className="svg-defs" aria-hidden="true">
        <defs>
          {/* Petal Gradient: Soft white highlight, blush pink body, deep rose base */}
          <linearGradient id="sakura-petal-grad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#be185d" stopOpacity="0.85" />
            <stop offset="30%" stopColor="#f472b6" stopOpacity="0.95" />
            <stop offset="75%" stopColor="#fce7f3" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.98" />
          </linearGradient>

          {/* Calyx & Slender Branch Gradient */}
          <linearGradient id="sakura-branch-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a253b" />
            <stop offset="50%" stopColor="#2e1425" />
            <stop offset="100%" stopColor="#1a0916" />
          </linearGradient>

          {/* Dainty Notched Sakura Petal (Heart-cleft top, smaller delicate geometry) */}
          <path
            id="sakura-petal-sm"
            d="M 0,0 C -3.5,-7 -7.5,-12.5 -5,-18 C -2.5,-21 -0.8,-19.5 0,-17 C 0.8,-19.5 2.5,-21 5,-18 C 7.5,-12.5 3.5,-7 0,0 Z"
            fill="url(#sakura-petal-grad)"
          />

          {/* Full Blooming Dainty 5-Petal Sakura Flower with Golden-Tipped Pistils */}
          <g id="sakura-flower-full">
            <g transform="rotate(0)"><use href="#sakura-petal-sm" /></g>
            <g transform="rotate(72)"><use href="#sakura-petal-sm" /></g>
            <g transform="rotate(144)"><use href="#sakura-petal-sm" /></g>
            <g transform="rotate(216)"><use href="#sakura-petal-sm" /></g>
            <g transform="rotate(288)"><use href="#sakura-petal-sm" /></g>
            
            {/* Soft Deep Rose Core Glow */}
            <circle cx="0" cy="0" r="3.2" fill="#9d174d" opacity="0.8" />
            
            {/* Fine Stamen Filaments with Golden Pollen Tips */}
            <line x1="0" y1="0" x2="-2.8" y2="-4.2" stroke="#be185d" strokeWidth="0.6" />
            <circle cx="-2.8" cy="-4.2" r="0.8" fill="#fef08a" />
            
            <line x1="0" y1="0" x2="2.8" y2="-4.2" stroke="#be185d" strokeWidth="0.6" />
            <circle cx="2.8" cy="-4.2" r="0.8" fill="#fef08a" />
            
            <line x1="0" y1="0" x2="-4.2" y2="0.8" stroke="#be185d" strokeWidth="0.6" />
            <circle cx="-4.2" cy="0.8" r="0.8" fill="#fef08a" />
            
            <line x1="0" y1="0" x2="4.2" y2="0.8" stroke="#be185d" strokeWidth="0.6" />
            <circle cx="4.2" cy="0.8" r="0.8" fill="#fef08a" />
            
            <line x1="0" y1="0" x2="-2" y2="4.2" stroke="#be185d" strokeWidth="0.6" />
            <circle cx="-2" cy="4.2" r="0.8" fill="#fef08a" />
            
            <line x1="0" y1="0" x2="2" y2="4.2" stroke="#be185d" strokeWidth="0.6" />
            <circle cx="2" cy="4.2" r="0.8" fill="#fef08a" />
            
            <circle cx="0" cy="0" r="1.5" fill="#fce7f3" />
          </g>

          {/* Dainty Side-view Profile Bloom */}
          <g id="sakura-flower-side">
            <path
              d="M0,0 C-5,-5 -8,-11 -5,-17 C-2,-20 0,-18 1.5,-15 C3.5,-19 6.5,-17 5.5,-14 C8,-10 4,-5 0,0 Z"
              fill="url(#sakura-petal-grad)"
              transform="rotate(-20)"
            />
            <path
              d="M0,0 C-3.5,-7 -6.5,-12.5 -3,-17.5 C0,-20.5 2,-19 3.5,-16 C5.5,-19 8.5,-17 7.5,-14 C10,-10 5,-5 0,0 Z"
              fill="url(#sakura-petal-grad)"
              transform="rotate(30)"
            />
            <path
              d="M0,0 C-2,-5 -5,-10 -2,-14 C0,-16 1.5,-15 3,-12.5 C5,-14.5 6.5,-14 5.5,-11 C7,-8 3.5,-3.5 0,0 Z"
              fill="url(#sakura-petal-grad)"
              transform="scale(0.85)"
            />
            {/* Green calyx base */}
            <path d="M-3,1 C-1,4 1,4 3,1 C1.5,3 -1.5,3 -3,1 Z" fill="#3f4e1f" />
          </g>

          {/* Tiny Delicate Sakura Bud */}
          <g id="sakura-bud">
            <path d="M-1.5,4 C-0.8,2 0,0 1.5,-3 C2,-1 1.5,3 0,5 Z" fill="#9d174d" />
            <path d="M-2,3.5 C-0.8,1.5 0.8,-1.5 0,-3.5 C-1.5,-0.8 -2,2 -2,3.5 Z" fill="#f472b6" />
            <path d="M-2,5 C-1.5,7 1.5,7 2,5 C0.8,5.8 -0.8,5.8 -2,5 Z" fill="#2d3b12" />
          </g>
        </defs>
      </svg>

      {/* 1. Top-Right Sprawling Branch (Slender Twigs & Multi-Distributed Flowers like Welcome Page) */}
      <div className="blossom-corner blossom-top-right">
        <svg
          viewBox="0 0 450 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="blossom-svg"
        >
          {/* Main Trunk & Graceful Branches */}
          <path
            d="M450 0 C380 15, 310 50, 240 100 C175 145, 110 185, 40 220"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="4.2"
            strokeLinecap="round"
          />
          {/* Upper Slender Offshoot */}
          <path
            d="M340 32 C300 18, 250 12, 195 5"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M270 20 C240 5, 205 -5, 170 -12"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Middle Lateral Offshoots */}
          <path
            d="M280 72 C240 95, 195 110, 145 120"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M200 125 C165 155, 120 170, 70 180"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M135 170 C100 205, 65 230, 25 245"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          {/* Downward Tendril */}
          <path
            d="M80 200 C50 240, 25 270, 5 295"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Dainty, Distributed Cherry Blossom Flowers Across the Branch */}
          <g transform="translate(380, 15) scale(0.7) rotate(15)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(340, 32) scale(0.65) rotate(-25)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(310, 22) scale(0.75) rotate(40)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(265, 15) scale(0.6) rotate(-35)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(225, 8) scale(0.7) rotate(20)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(195, 5) scale(0.55) rotate(-50)"><use href="#sakura-bud" /></g>
          <g transform="translate(170, -12) scale(0.6) rotate(10)"><use href="#sakura-bud" /></g>

          <g transform="translate(280, 72) scale(0.75) rotate(-15)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(240, 95) scale(0.65) rotate(35)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(210, 85) scale(0.7) rotate(-40)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(175, 105) scale(0.65) rotate(25)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(145, 120) scale(0.7) rotate(-10)"><use href="#sakura-flower-full" /></g>

          <g transform="translate(200, 125) scale(0.75) rotate(15)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(165, 155) scale(0.6) rotate(-30)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(135, 145) scale(0.7) rotate(45)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(100, 165) scale(0.65) rotate(-20)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(70, 180) scale(0.6) rotate(30)"><use href="#sakura-bud" /></g>

          <g transform="translate(110, 185) scale(0.7) rotate(10)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(80, 200) scale(0.65) rotate(-45)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(50, 220) scale(0.7) rotate(25)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(25, 245) scale(0.6) rotate(-15)"><use href="#sakura-bud" /></g>
          <g transform="translate(30, 260) scale(0.65) rotate(40)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(5, 295) scale(0.55) rotate(-25)"><use href="#sakura-bud" /></g>
        </svg>
      </div>

      {/* 2. Top-Left Delicate High Edge Sprig (Stays strictly along the top rim above the title) */}
      <div className="blossom-corner blossom-top-left">
        <svg
          viewBox="0 0 200 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="blossom-svg"
        >
          <path
            d="M0 0 C55 12, 110 16, 170 8"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M75 10 C95 24, 120 30, 145 32"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <path
            d="M125 12 C145 2, 165 -2, 185 -5"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <g transform="translate(45, 8) scale(0.65) rotate(15)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(75, 10) scale(0.6) rotate(-25)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(110, 14) scale(0.7) rotate(35)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(145, 32) scale(0.6) rotate(-20)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(160, 20) scale(0.55) rotate(45)"><use href="#sakura-bud" /></g>
          <g transform="translate(170, 8) scale(0.65) rotate(-10)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(185, -5) scale(0.5) rotate(30)"><use href="#sakura-bud" /></g>
        </svg>
      </div>

      {/* 3. Middle-Right Delicate Margin Sprig (Adding distributed depth along side margin) */}
      <div className="blossom-corner blossom-mid-right">
        <svg
          viewBox="0 0 220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="blossom-svg"
        >
          <path
            d="M220 80 C180 95, 140 115, 95 145 C65 168, 40 190, 15 210"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M150 108 C120 85, 90 70, 60 55"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <g transform="translate(180, 90) scale(0.65) rotate(-20)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(150, 108) scale(0.6) rotate(30)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(115, 80) scale(0.65) rotate(-35)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(60, 55) scale(0.55) rotate(15)"><use href="#sakura-bud" /></g>
          <g transform="translate(120, 130) scale(0.7) rotate(25)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(85, 150) scale(0.6) rotate(-15)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(45, 185) scale(0.65) rotate(40)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(15, 210) scale(0.55) rotate(-30)"><use href="#sakura-bud" /></g>
        </svg>
      </div>

      {/* 4. Bottom-Left Slender Corner Branch */}
      <div className="blossom-corner blossom-bottom-left">
        <svg
          viewBox="0 0 320 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="blossom-svg"
        >
          <path
            d="M0 260 C65 230, 130 190, 185 140 C230 100, 270 60, 295 15"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="3.6"
            strokeLinecap="round"
          />
          <path
            d="M125 195 C160 215, 195 230, 235 240"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M175 148 C205 160, 240 168, 275 172"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <path
            d="M225 105 C250 85, 275 60, 290 30"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          <g transform="translate(75, 225) scale(0.7) rotate(-20)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(125, 195) scale(0.65) rotate(25)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(165, 215) scale(0.7) rotate(-35)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(205, 230) scale(0.6) rotate(45)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(235, 240) scale(0.55) rotate(-15)"><use href="#sakura-bud" /></g>

          <g transform="translate(175, 148) scale(0.75) rotate(15)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(215, 160) scale(0.65) rotate(-30)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(250, 168) scale(0.7) rotate(20)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(275, 172) scale(0.55) rotate(-40)"><use href="#sakura-bud" /></g>

          <g transform="translate(225, 105) scale(0.7) rotate(-15)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(255, 80) scale(0.65) rotate(35)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(275, 55) scale(0.6) rotate(-25)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(295, 15) scale(0.5) rotate(15)"><use href="#sakura-bud" /></g>
        </svg>
      </div>

      {/* 5. Bottom-Right Upward Willow Branch */}
      <div className="blossom-corner blossom-bottom-right">
        <svg
          viewBox="0 0 320 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="blossom-svg"
        >
          <path
            d="M320 260 C255 230, 190 185, 135 130 C90 85, 50 45, 15 5"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="3.6"
            strokeLinecap="round"
          />
          <path
            d="M190 185 C155 208, 115 225, 75 235"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M140 135 C105 150, 70 158, 30 162"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <path
            d="M95 90 C65 70, 40 45, 20 18"
            stroke="url(#sakura-branch-grad)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          <g transform="translate(245, 220) scale(0.7) rotate(20)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(190, 185) scale(0.65) rotate(-25)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(145, 208) scale(0.7) rotate(35)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(105, 225) scale(0.6) rotate(-40)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(75, 235) scale(0.55) rotate(15)"><use href="#sakura-bud" /></g>

          <g transform="translate(140, 135) scale(0.75) rotate(-15)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(100, 150) scale(0.65) rotate(30)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(65, 158) scale(0.7) rotate(-20)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(30, 162) scale(0.55) rotate(40)"><use href="#sakura-bud" /></g>

          <g transform="translate(95, 90) scale(0.7) rotate(15)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(60, 65) scale(0.65) rotate(-35)"><use href="#sakura-flower-side" /></g>
          <g transform="translate(35, 40) scale(0.6) rotate(25)"><use href="#sakura-flower-full" /></g>
          <g transform="translate(15, 5) scale(0.5) rotate(-15)"><use href="#sakura-bud" /></g>
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
