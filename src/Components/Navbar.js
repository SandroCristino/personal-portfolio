import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';


import '../Styles/Navbar.css'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        setIsScrolled(scrollTop > 0)
    }
    return (
        <nav className={`nav-outer-container ${isScrolled ? 'nav-outer-shrink' : ''}`}>
            <div className='nav-left-container'>
                <ScrollLink 
                    to='greetings'
                    smooth={true}
                    duration={500}
                >
                    <button className='nav-link' onClick={() => {navigate('/personal-portfolio')}}>Sandro Cristino</button>
                </ScrollLink>
            </div>
            <div className='nav-right-container'>
                <ScrollLink
                    to='projects'
                    smooth={true}
                    duration={500}
                    offset={-50}
                >
                    <button className='nav-link'>Portfolio</button>
                </ScrollLink>
                <button className='nav-link'>About</button>
                <button className='nav-link'>Contact</button>
                <button className='nav-link' onClick={() => navigate('/resume')}>Resume</button>
            </div>
        </nav>
    )
}

