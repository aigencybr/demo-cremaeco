"use client"

import { useEffect, useState } from "react"

interface SnowflakeProps {
  id: number
  size: number
  left: number
  animationDuration: number
  opacity: number
  color: string
}

interface SnowfallBackgroundProps {
  count?: number
  color?: string
  speed?: number
  minSize?: number
  maxSize?: number
  minOpacity?: number
  maxOpacity?: number
  zIndex?: number
  wind?: boolean
}

const Snowflake = ({ id, size, left, animationDuration, opacity, color }: SnowflakeProps) => {
  return (
    <div
      className="pointer-events-none absolute select-none"
      style={{
        left: `${left}%`,
        fontSize: `${size}px`,
        opacity,
        color,
        animation: `snowfall-${id} ${animationDuration}s linear infinite`,
        textShadow: "0 0 1px rgba(255,255,255,0.8)",
      }}
    >
      ❄
    </div>
  )
}

export function SnowfallBackground({
  count = 50,
  color = "#ffffff",
  speed = 1,
  minSize = 10,
  maxSize = 20,
  minOpacity = 0.3,
  maxOpacity = 0.8,
  zIndex = -1,
  wind = true,
}: SnowfallBackgroundProps) {
  const [snowflakes, setSnowflakes] = useState<SnowflakeProps[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const flakes: SnowflakeProps[] = []
    for (let i = 0; i < count; i++) {
      flakes.push({
        id: i,
        size: Math.random() * (maxSize - minSize) + minSize,
        left: Math.random() * 100,
        animationDuration: (Math.random() * 3 + 2) / speed,
        opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
        color,
      })
    }
    setSnowflakes(flakes)
  }, [count, color, speed, minSize, maxSize, minOpacity, maxOpacity])

  useEffect(() => {
    if (!mounted || snowflakes.length === 0) return
    const styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    let cssRules = ""
    snowflakes.forEach((flake) => {
      const windOffset = wind ? Math.random() * 100 - 50 : 0
      cssRules += `
        @keyframes snowfall-${flake.id} {
          0% { transform: translateY(-100vh) translateX(0px) rotate(0deg); }
          100% { transform: translateY(200vh) translateX(${windOffset}px) rotate(360deg); }
        }
      `
    })
    styleSheet.innerHTML = cssRules
    document.head.appendChild(styleSheet)
    return () => { document.head.removeChild(styleSheet) }
  }, [snowflakes, wind, mounted])

  if (!mounted) return null

  return (
    <div className="pointer-events-none overflow-hidden" style={{ zIndex }}>
      {snowflakes.map((flake) => (
        <Snowflake key={flake.id} {...flake} />
      ))}
    </div>
  )
}
