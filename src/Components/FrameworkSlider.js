import React, { useEffect, useState } from 'react'
import Carousel from 'react-slick'
import '../Styles/FrameworkSlider.css'

export default function FrameworkSlider() {
    const [images, setImages] = useState([])

    // Import frameworkst
    useEffect(() => {
        const importAll = (r) => r.keys().map(r)
        const images = importAll(require.context('../Assets/Icons', false))
        setImages(images)
    }, [])

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: true
      
    };

 
    return (
      <Carousel className='carousel' {...settings}>
        {images.map((framework, index) => (
          <div key={index} className='framework-image-container'>
            <img className='framework-image' src={framework} alt='Framework' />
          </div>
        ))}
      </Carousel>
    )
}
