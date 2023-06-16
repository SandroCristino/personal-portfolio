import React, { useEffect, useState } from 'react'
import '../Styles/Projects.css'
import redditVideo from '../Assets/redditPresentation.mov'
import reactIcon from '../Assets/Icons/react.png'
import bootstrapIcon from '../Assets/Icons/bootstrap.png'

export default function Projects() {
    const [isScrolled, setIsScrolled] = useState(false)
        
    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.projects-headline')
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
        <div className='projects-outer-container'>
            <h2 className={`projects-headline ${isScrolled ? 'animate-scroll' : ''}`}>Projects</h2>
            <hr />
            <div className="project">
                <h3 className='project-headline'>Reddit</h3>
                <h4 className='project-subline'>Social Media Clone</h4>
                <div className='project-main'>
                    <video className='project-video' autoPlay loop muted src={redditVideo}></video>
                    <div className='project-description'>
                        <div>
                            <h5 className='project-description-headline'>Summary</h5>
                            <p className='project-description-info'>A Full Stack clone of Reddit's features and a complete redesign of the UI. Originally built with firebase, it was rebuilt using React and Bootstrap for the frontend</p>
                        </div>
                        <div>
                            <h6 className='project-description-technologie'>Technologies</h6>
                            <div className='project-description-frameworks'>
                                <img className='project-description-img' src={reactIcon} alt="React" />
                                <img className='project-description-img' src={bootstrapIcon} alt="Bootstrap" />
                            </div>
                        </div>
                        <div className='project-buttons'>
                            <div className='project-button-group'>
                                <button className='project-button'>LIVE PREVIEW</button>
                                <span class="material-symbols-outlined">arrow_circle_right</span>
                            </div>
                            <div className='project-button-group'>
                                <button className='project-button'>VIEW CODE</button>
                                <span class="material-symbols-outlined">arrow_circle_right</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}
