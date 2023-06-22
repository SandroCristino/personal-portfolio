import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
import logo from '../Assets/logo.png'
import pdfFile from '../Assets/CV_SandroCristino.pdf'


import '../Styles/Navbar.css'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [startAnimation, setStartAnimation] = useState(false)
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
        if (isNavOpen) {
            setStartAnimation(true)
            setTimeout(() => {
                setIsNavOpen(false)
              }, 100); 
        } else {
            setIsNavOpen(true)
            setStartAnimation(false)
        } 
    }

    const handleResumeDownload = () => {
            // Replace 'resume.pdf' with the actual URL or path to your resume PDF file
            // const resumeURL = '../Assets/CV_SandroCristino.pdf';
  
            const link = document.createElement('a');
            link.href = pdfFile;
            link.download = 'CV_Sandro_Cristino';
            link.click();
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
            <div className={`nav-right-container ${isNavOpen ? 'open' : ''}`}>
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
                <button className='nav-link' onClick={handleResumeDownload}>
                    Resume
                  
                </button>
             
            </div>
            <div className={`nav-toggle ${isNavOpen ? 'open' : ''}`} onClick={togglerNav}>
                <div className={`nav-icon ${isNavOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {isNavOpen && (
                    <ul className={`nav-links-container ${startAnimation && 'nav-links-closing'}`}>
                        <li className='nav-list-link'>
                            <ScrollLink
                                to='projects'
                                smooth={true}
                                duration={500}
                                offset={-50}
                            >
                                <button>Portfolio</button>
                            </ScrollLink>
                        </li>
                        <li className='nav-list-link'>
                            <ScrollLink
                            to='about'
                            smooth={true}
                            duration={500}
                            >
                                <button>About</button>
                            </ScrollLink>
                        </li>
                        <li className='nav-list-link'>
                            <ScrollLink
                            to='contact'
                            smooth={true}
                            duration={500}
                            >
                                <button>Contact</button>
                            </ScrollLink>
                        </li>
                        <li className='nav-list-link'>
                            <button onClick={() => navigate('/resume')}>Resume</button>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    )
}

