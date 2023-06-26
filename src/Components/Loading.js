import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import loadingGif from '../Assets/loading.gif'
import '../Styles/Loading.css'


export default function Loading() {
  const isDownloaded = useSelector((state) => state.file.isDownloaded)
  const [headlineText, setHeadlineText] = useState('Hallo')
  const [loadingHeadlineStatus, setLoadingHeadlineStatus] = useState(false)
  const [counter, setCounter] = useState(0)
  const [statusActiv, setStatusActive] = useState(true)
  const [textCollection, setTextCollection] = useState([
    'Hello',
    'Bonjour',
    'Hola',
    'Olá',
    'नमस्ते',
    'مرحبًا',
    '你好'
  ])

  // Update headline text
  useEffect(() => {
    const handleChangeText = async () => {

      // Make text invisible
      setLoadingHeadlineStatus(true)

      // Chanegs text
      setTimeout(() => {
        setHeadlineText(textCollection[counter])
        console.log('Counter')
      }, 2000)

      // Make text visible 
      setTimeout(() => {
        setLoadingHeadlineStatus(false)
      }, 1000)

      // Set counter
      if (counter < textCollection.length) {
        setCounter(counter + 1)
      } else {
        setCounter(0)
      }
    }

    handleChangeText()
  }, [headlineText])

  // Deactivate loading layer
  useEffect(() => {
    if (isDownloaded) {
      setTimeout(() => {
        setStatusActive(false) 
      }, 1000)
    } 
  }, [isDownloaded])

  // Set counter
  useEffect(() => {
    if (counter >= textCollection.length) {
      setCounter(0);
    }
  }, [textCollection, counter]);

  return (
    <div className={`loading-outer-container ${!isDownloaded ? 'loading-active' : 'loading-inactive'} ${!statusActiv ? 'loading-container-offline' : ''}`}>
          <div className='loading-container'>
            <img src={loadingGif} alt="Loading" className='loading-item'/>
            <h1 className={` ${loadingHeadlineStatus ? 'loading-headline-active' : 'loading-headline-inactive'}`}>{headlineText}</h1>
          </div>
    </div>
  )
}
