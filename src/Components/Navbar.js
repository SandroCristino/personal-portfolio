import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
                <button className='nav-link' onClick={() => {navigate('/personal-portfolio')}}>Sandro Cristino</button>
            </div>
            <div className='nav-right-container'>
                <button className='nav-link'>Portfolio</button>
                <button className='nav-link'>About</button>
                <button className='nav-link'>Contact</button>
                <button className='nav-link' onClick={() => navigate('/resume')}>Resume</button>
            </div>
        </nav>
    )
}

