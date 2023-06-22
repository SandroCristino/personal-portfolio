import React, { useEffect, useState } from 'react'
import '../Styles/Cursor.css'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })


  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event
      setPosition({ x, y })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])


  return (
    <>
    <div
      className="cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
    <div
      className="inner-cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  </>
  )
}

export default Cursor;