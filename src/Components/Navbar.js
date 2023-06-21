import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
import logo from '../Assets/logo.png'


import '../Styles/Navbar.css'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isNavOpen, setIsNavOpen] = useState(false)
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

    const togglerNav = () => {
        setIsNavOpen(!isNavOpen)
    }
    
    return (
        <nav className={`nav-outer-container ${isScrolled ? 'nav-outer-shrink' : ''}`}>
            <div className='nav-left-container'>
                <ScrollLink 
                    to='greetings'
                    smooth={true}
                    duration={500}
                    className='nav-left-link'
                >
                    <img className='nav-logo' src={logo} alt="Log" />
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
                <ScrollLink
                   to='about'
                   smooth={true}
                   duration={500}
                >
                    <button className='nav-link'>About</button>

                </ScrollLink>
                <ScrollLink
                   to='contact'
                   smooth={true}
                   duration={500}
                >
                    <button className='nav-link'>Contact</button>
                </ScrollLink>
                <button className='nav-link' onClick={() => navigate('/resume')}>Resume</button>
            </div>
        </nav>
    )
}

