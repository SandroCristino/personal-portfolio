import React, { useEffect, useState } from 'react'
import '../Styles/GreetingsPage.css'


export default function GreetingsPage() {
    const [swayOffset, setSwayOffset] = useState({ x: 0, y: 0 })
    const [roaming, setRoaming] = useState({ x: 0, y: 0})
    const [images, setImages] = useState([])

    useEffect(() => {

        // Import icons
        const importAll = (r) => r.keys().map(r)
        const images = importAll(require.context('../Assets/Icons', false))
        setImages(images)

        const intervalId = setInterval(() => {
            const offsetX = Math.sin(Date.now() / 1000) * 20;
            const offsetY = Math.cos(Date.now() / 1000) * 10;
            setRoaming({ x: offsetX, y: offsetY });
        }, 10);
      
          return () => clearInterval(intervalId);
    }, [])

    const handleMouseMove = (event) => {
        const swayStrength = 80
        const offsetX = (event.clientX - window.innerWidth / 2) / swayStrength
        const offsetY = (event.clientY - window.innerHeight / 2) / swayStrength
        setSwayOffset({ x: offsetX, y: offsetY })
    }

    return (
        <div className='greet-outer-container' id='greetings' onMouseMove={handleMouseMove}>
            <div 
            className='greet-inner-container'   
            style={{ transform: `translate3d(${swayOffset.x}px, ${swayOffset.y}px, 0) rotateY(${swayOffset.x}deg) rotateX(${swayOffset.y}deg)`}}>
                <p className='greet-text'>Sandro Cristino</p>
                <p className='greet-text'>Full Stack Web Developer.</p>
            </div>
            <div>
            {images.map((image, index) => (
                    <img 
                    key={index}
                    src={image} 
                    alt={`Planet${index + 1}`}
                    style={{ transform: `translate3d(${roaming.x}px, ${roaming.y}px, 0) rotateY(${roaming.x}deg) rotateX(${roaming.y}deg)`}}
                    className={`greet-planet greet-planet-${index + 1}`}/>
            ))}
            </div>
       
        </div>
    ) 
}
