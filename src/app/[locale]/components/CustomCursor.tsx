'use client'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hoverState, setHoverState] = useState<'contact' | 'slider' | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove', handleMouseMove)

    // Use event delegation for contact links and slider
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target?.closest('.contact-link')) {
        setHoverState('contact')
      } else if (target?.closest('.slider-container')) {
        setHoverState('slider')
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.relatedTarget as HTMLElement
      if (!target?.closest('.contact-link') && !target?.closest('.slider-container')) {
        setHoverState(null)
      } else if (target?.closest('.contact-link')) {
        setHoverState('contact')
      } else if (target?.closest('.slider-container')) {
        setHoverState('slider')
      }
    }

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  const isHovering = hoverState !== null
  const cursorText = hoverState === 'contact' ? "Let's Chat" : hoverState === 'slider' ? 'Drag' : ''

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {isHovering && cursorText && (
        <div
          className="cursor-text"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          {cursorText}
        </div>
      )}
    </>
  )
}
