import React, { useEffect, useState} from 'react'
import myself from '../Assets/myself.jpg'
import '../Styles/About.css'

export default function About() {
    const [isScrolled, setIsScrolled] = useState(false)
        
    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.about-headline')
            const rect = element.getBoundingClientRect()
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0
            setIsScrolled(isVisible)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className='about-outer-container' id='about'>
            <h2 className={`about-headline ${isScrolled ? 'animate-scroll' : ''}`}>About</h2>
            <hr />
            <div className='about-info-container'>
                <div className='about-desciption'>
                    <p className='about-text-one'>Hello there! My name is <span className='about-span'>Sandro</span>, and I am a <span className='about-span'>Web Developer</span>. </p>
                    <p className='about-text-two'>I have always had a deep love for technology. With a background as an educated <span className='about-span'>IT Administrator</span>, I have recently made the exciting transition to become a web developer. <span className='about-span'>Coding</span> and <span className='about-span'>problem-solving</span> have become my passions. Whenever I encounter a challenge without an immediate solution, I am determined to figure it out through <span className='about-span'>perseverance</span> and <span className='about-span'>creativity</span>. I thrive on the opportunity to continuously learn and grow in the ever-evolving world of web development</p>
                </div>
                <img className='about-image' src={myself} alt="Picture of myself" />
           </div>
           <div className='about-framework-slider'>
                // Here should be the frameworks
           </div>
        </div>
  )
}
