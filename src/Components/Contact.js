import React, { useEffect, useState} from 'react'
import githubOn from '../Assets/github-on.png'
import githubOff from '../Assets/github-off.png'
import linkedinOn from '../Assets/linkedin-on.png'
import linkedinOff from '../Assets/linkedin-off.png'
import '../Styles/Contact.css'

export default function Contact() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [nameError, setNameError] = useState('')
    const [subjectError, setSubjectError] = useState('')
    const [messageError, setMessageError] = useState('')
    const [nameValid, setNameValid] = useState(false)
    const [subjectValid, setSubjectValid] = useState(false)
    const [messageValid, setMessageValid] = useState(false)
    const [githubImg, setGithubImg] = useState(githubOff)
    const [linkedinImg, setLinkedinImg] = useState(linkedinOff)

     
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

    const handleChange = (event) => {
        const inputName = event.target.name

        switch (inputName) {
            case 'name':
                setName(event.target.value)
                if (name) setNameError('')
                if (!nameError) setNameValid(true)
                break
            case 'subject':
                setSubject(event.target.value)
                if (subject) setSubjectError('')
                if (!subjectError) setSubjectValid(true)
                break
            case 'message':
                setMessage(event.target.value)
                if (message) setMessageError('')
                if (!messageError) setMessageValid(true)
                break
            default:
                console.log('Error')
        }
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()

        const mailtoLink = `mailto:sandrocristino10@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    }

    const handleInvalid = (event) => {
        event.preventDefault()

        const inputName = event.target.name

        switch (inputName) {
            case 'name':
                setNameError('Name is missing')
                setNameValid(false)
                break
            case 'subject':
                setSubjectError('Subject is missing')
                setSubjectValid(false)
                break
            case 'message':
                setMessageError('Message is missing')
                setMessageValid(false)
                break
            default:
                console.log('Error')
        }
    }

    return (
        <div className='contact-outer-container' id='contact'>
            <h2 className={`contact-headline ${isScrolled ? 'animate-scroll' : ''}`}>Contact</h2>
            <hr />
            <div className='contact-main-container'>
            <form action="" className='contact-form' onSubmit={handleOnSubmit}>
                <h3 className='contact-form-headline'>Get In Touch</h3>
                <div className='contact-form-group'>   
                    <input 
                        required
                        placeholder='Name'
                        className={`contact-form-input ${nameError && 'contact-error-box'}`}
                        type="text" 
                        name="name" 
                        id="name"
                        value={name}
                        onChange={handleChange}
                        onInvalid={handleInvalid} />
                        <span class={`contact-valid-span material-symbols-outlined ${nameValid && 'contact-span-visible'}`}>check_circle</span>
                </div>
                {nameError && <p className='contact-error-message'>{nameError}</p>}
                <div className='contact-form-group'>
                    <input 
                        required
                        placeholder='Subject'
                        className={`contact-form-input ${subjectError && 'contact-error-box'}`}
                        type="text" 
                        name="subject" 
                        id="subject"
                        value={subject}
                        onChange={handleChange} 
                        onInvalid={handleInvalid} />
                        <span class={`contact-valid-span material-symbols-outlined ${subjectValid && 'contact-span-visible'}`}>check_circle</span>
                </div>
                {subjectError && <p className='contact-error-message'>{subjectError}</p>}
                <div className='contact-form-group'>
                    <textarea 
                        required
                        placeholder='Message'
                        className={`contact-form-input ${messageError && 'contact-error-box'}`}
                        name="message" 
                        id="message" 
                        cols="30" 
                        rows="10"
                        value={message}
                        onChange={handleChange}
                        onInvalid={handleInvalid}></textarea>
                        <span class={`contact-valid-span material-symbols-outlined ${messageValid && 'contact-span-visible'}`}>check_circle</span>
                </div>
                {messageError && <p className='contact-error-message'>{messageError}</p>}
                <div className='contact-form-group project-button-group'>
                    <button className='project-button'>Send Mail</button>
                    <span class="material-symbols-outlined">arrow_circle_right</span>
                </div>                
            </form>
            <div className='contact-message-container'>
                <p className='contact-message'>Feel free to contact me for job opportunities, collaborations, questions about myself, or any other topics you'd like to discuss. I will respond to you as soon as possible!</p>
                <div className='contact-links-container'>
                    <img 
                        className='contact-link' 
                        src={linkedinImg} 
                        alt="LinkedIn" 
                        onMouseEnter={() => setLinkedinImg(linkedinOn)}
                        onMouseLeave={() => setLinkedinImg(linkedinOff)} 
                        onClick={() => window.location.href = 'https://www.linkedin.com/in/sandro-cristino-6680a3280/'}
                    />
                    <img 
                        className='contact-link' 
                        src={githubImg} 
                        alt="GitHub"
                        onMouseEnter={() => setGithubImg(githubOn)}
                        onMouseLeave={() => setGithubImg(githubOff)} 
                        onClick={() => window.location.href = 'https://github.com/SandroCristino'}
                    />
                </div>
            </div>
            </div>
            
        </div>
    )
}
