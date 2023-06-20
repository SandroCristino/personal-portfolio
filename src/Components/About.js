import React, { useEffect, useState} from 'react'
import myself from '../Assets/myself.jpg'
import '../Styles/About.css'
import FrameworkSlider from './FrameworkSlider'

export default function About() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [scaleX, setScaleX] = useState('')
    const [prevScrollY, setPrevScrollY] = useState(0);

        
    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.about-headline')
            const rect = element.getBoundingClientRect()
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0
            setIsScrolled(isVisible)
        }

        let initialScrollPosition
        window.addEventListener('scroll', function() {
            // var pageHeight = document.documentElement.scrollHeight - window.innerHeight;
            initialScrollPosition = Math.floor((window.pageYOffset / 80) );
            console.log('Scroll position:', initialScrollPosition);
        });

        // const handleNextPage = () => {
        //     const element = document.querySelector('.about-outer-container')
        //     const rect = element.getBoundingClientRect()

        //     const center = rect.bottom
        //     const minus10 = (center * 10) / 100
        //     const plus10 = (center * 110) / 100
        //     console.log(window.pageYOffset)
        //     console.log(center)

        //     const scrollPercentage = (window.innerHeight - center) / (minus10 - plus10);
        //     console.log(scrollPercentage)

        //     const scaleXValue = 0.9 + scrollPercentage * 0.1;

        //     setScaleX(scaleXValue);
     
    const handleNextPage = () => {
        const element = document.querySelector('.about-outer-container');
        const rect = element.getBoundingClientRect();
  
        if (rect.bottom < window.innerHeight) {
        const scrollPercentage = (window.innerHeight - rect.bottom) / window.innerHeight;
        const scaleXValue = 1 - scrollPercentage * 0.1;
        setScaleX(scaleXValue);
        } else {
            setScaleX(1)
        }

    }
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('scroll', handleNextPage)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('scroll', handleNextPage)
        }
    },[])

    return (
        <div className={`about-outer-container`} style={{ transform: `scale(${scaleX})` }} id='about'>
            <h2 className={`about-headline ${isScrolled ? 'animate-scroll' : ''}`}>About</h2>
            <hr />
            <div className='about-info-container'>
                <div className='about-desciption'>
                    <p className='about-text-one'>Hello there! My name is <span className='about-span'>Sandro</span>, and I am a <span className='about-span'>Web Developer</span>. </p>
                    <p className='about-text-two'>I have always had a deep love for technology. With a background as an educated <span className='about-span'>IT Administrator</span>, I have recently made the exciting transition to become a web developer. <span className='about-span'>Coding</span> and <span className='about-span'>problem-solving</span> have become my passions. Whenever I encounter a challenge without an immediate solution, I am determined to figure it out through <span className='about-span'>perseverance</span> and <span className='about-span'>creativity</span>. I thrive on the opportunity to continuously learn and grow in the ever-evolving world of web development</p>
                </div>
                <img className='about-image' src={myself} alt="Picture of myself" />
           </div>
            <FrameworkSlider/>
            <hr />
        </div>
  )
}
