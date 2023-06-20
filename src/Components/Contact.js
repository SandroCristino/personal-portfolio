import React, { useEffect, useState} from 'react'
import '../Styles/Contact.css'

export default function Contact() {
    const [isScrolled, setIsScrolled] = useState(false)
     
    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.contact-headline')
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
        <div className='contact-outer-container' id='contact'>
            <h2 className={`contact-headline ${isScrolled ? 'animate-scroll' : ''}`}>Contact</h2>
            <hr />
        
        </div>
    )
}
