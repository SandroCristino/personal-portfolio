import React, { useEffect, useState } from 'react'
import redditVideo from '../Assets/redditPresentation.mov'
import todoVideo from '../Assets/todoPresentation.mov'
import memoryVideo from '../Assets/memorycardPresentation.mov'
import cvPresentation from '../Assets/cvPresentation.mov'
import reactIcon from '../Assets/Icons/react.png'
import javascriptIcon from '../Assets/Icons/javascript.png'
import bootstrapIcon from '../Assets/Icons/bootstrap.png'
import '../Styles/Projects.css'

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
        <div className='projects-outer-container' id='projects'>
            <h2 className={`projects-headline ${isScrolled ? 'animate-scroll' : ''}`}>Projects</h2>
            <hr />

            {/* Project one - reddit */}
            <div className="project">
                <h3 className='project-headline'>Reddit</h3>
                <h4 className='project-subline'>Social Media Clone</h4>
                <div className='project-main'>
                    <video className='project-video' autoPlay loop muted src={redditVideo}></video>
                    <div className='project-description'>
                        <div>
                            <h5 className='project-description-headline'>Summary</h5>
                            <p className='project-description-info'>A Full Stack clone of Reddit's features and a complete redesign of the UI. Originally built with firebase, it was rebuilt using React and Bootstrap for the frontend.</p>
                        </div>
                        <div>
                            <h6 className='project-description-technologie'>Technologies</h6>
                            <div className='project-description-frameworks'>
                                <img className='project-description-img' src={reactIcon} alt="React" />
                                <img className='project-description-img' src={bootstrapIcon} alt="Bootstrap" />
                                <img className='project-description-img' src={javascriptIcon} alt="Javascript" />
                            </div>
                        </div>
                        <div className='project-buttons'>
                            <div className='project-button-group' onClick={() => window.location.href = 'https://sandrocristino.github.io/reddit_clone/'}>
                                <button className='project-button'>LIVE PREVIEW</button>
                                <span class="material-symbols-outlined">arrow_circle_right</span>
                            </div>
                            <div className='project-button-group' onClick={() => window.location.href = 'https://github.com/SandroCristino/reddit_clone'}>
                                <button className='project-button'>VIEW CODE</button>
                                <span class="material-symbols-outlined">arrow_circle_right</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            {/* Project two - todo list */}
            <div className="project">
                <h3 className='project-headline'>ToDo List</h3>
                <h4 className='project-subline'>Planner</h4>
                <div className='project-main'>
                    <video className='project-video' autoPlay loop muted src={todoVideo}></video>
                    <div className='project-description'>
                        <div>
                            <h5 className='project-description-headline'>Summary</h5>
                            <p className='project-description-info'>A Full Stack ToDo List application that allows users to create tasks, assign dates to them, sort the tasks based on various criteria, and remove tasks when necessary. Develop the application using pure JavaScript without any external frameworks or libraries.</p>
                        </div>
                        <div>
                            <h6 className='project-description-technologie'>Technologies</h6>
                            <div className='project-description-frameworks'>
                                <img className='project-description-img' src={javascriptIcon} alt="Javascript" />
                            </div>
                        </div>
                        <div className='project-buttons'>
                            <div className='project-button-group' onClick={() => window.location.href = 'https://sandrocristino.github.io/toDo_list/'}>
                                <button className='project-button'>LIVE PREVIEW</button>
                                <span class="material-symbols-outlined">arrow_circle_right</span>
                            </div>
                            <div className='project-button-group' onClick={() => window.location.href = 'https://github.com/SandroCristino/toDo_list'}>
                                <button className='project-button'>VIEW CODE</button>
                                <span class="material-symbols-outlined">arrow_circle_right</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            {/* Project three - memory_card */}
            <div className="project">
                <h3 className='project-headline'>Memory Card</h3>
                <h4 className='project-subline'>Test Your Memory</h4>
                <div className='project-main'>
                    <video className='project-video' autoPlay loop muted src={memoryVideo}></video>
                    <div className='project-description'>
                        <div>
                            <h5 className='project-description-headline'>Summary</h5>
                            <p className='project-description-info'>A Full Stack memory game with singleplayer functionality: Test your ability to remember as many cards as possible. However, be cautious, as the alignment of the cards changes after every click. Avoid clicking on the same card twice. The game is built using React and Bootstrap.</p>
                        </div>
                        <div>
                            <h6 className='project-description-technologie'>Technologies</h6>
                            <div className='project-description-frameworks'>
                                <img className='project-description-img' src={reactIcon} alt="React" />
                                <img className='project-description-img' src={bootstrapIcon} alt="Bootstrap" />
                                <img className='project-description-img' src={javascriptIcon} alt="Javascript" />
                            </div>
                        </div>
                        <div className='project-buttons'>
                            <div className='project-button-group' onClick={() => window.location.href = 'https://sandrocristino.github.io/memory_card/'}>
                                <button className='project-button'>LIVE PREVIEW</button>
                                <span class="material-symbols-outlined">arrow_circle_right</span>
                            </div>
                            <div className='project-button-group' onClick={() => window.location.href = 'https://github.com/SandroCristino/memory_card'}>
                                <button className='project-button'>VIEW CODE</button>
                                <span class="material-symbols-outlined">arrow_circle_right</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            {/* Project four - CV */}
            <div className="project">
                <h3 className='project-headline'>CV Creator</h3>
                <h4 className='project-subline'>Build your CV</h4>
                <div className='project-main'>
                    <video className='project-video' autoPlay loop muted src={cvPresentation}></video>
                    <div className='project-description'>
                        <div>
                            <h5 className='project-description-headline'>Summary</h5>
                            <p className='project-description-info'>An Easy-to-Use Full Stack CV Creator: Enter your personal information, education, and career details. The purpose behind this project was to enhance my React skills. The application was developed using React and Bootstrap.</p>
                        </div>
                        <div>
                            <h6 className='project-description-technologie'>Technologies</h6>
                            <div className='project-description-frameworks'>
                                <img className='project-description-img' src={reactIcon} alt="React" />
                                <img className='project-description-img' src={bootstrapIcon} alt="Bootstrap" />
                                <img className='project-description-img' src={javascriptIcon} alt="Javascript" />
                            </div>
                        </div>
                        <div className='project-buttons'>
                            <div className='project-button-group' onClick={() => window.location.href = 'https://sandrocristino.github.io/cv_app/'}>
                                <button className='project-button'>LIVE PREVIEW</button>
                                <span class="material-symbols-outlined">arrow_circle_right</span>
                            </div>
                            <div className='project-button-group' onClick={() => window.location.href = 'https://github.com/SandroCristino/cv_app'}>
                                <button className='project-button'>VIEW CODE</button>
                                <span class="material-symbols-outlined">arrow_circle_right</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='projects-more-container' onClick={() => window.location.href = 'https://github.com/SandroCristino/'}>
                <button className='project-more-button'>More Projects one GitHub </button>
                <span class="material-symbols-outlined">arrow_circle_right</span>
            </div>
        </div>
    )
}
