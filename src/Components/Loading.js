import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import loadingGif from '../Assets/loading.gif'
import '../Styles/Loading.css'


export default function Loading() {
  const isDownloaded = useSelector((state) => state.file.isDownloaded)
  const [headlineText, setHeadlineText] = useState('')
  const [textCollection, setTextCollection] = useState([
    'Hello',
    'Bonjour',
    'Hola',
    'Olá',
    'नमस्ते',
    'مرحبًا',
    'Hallo',
    '你好'
  ])
  const [usedText] = useState([
    'Hello',
    'Bonjour',
    'Hola',
    'Olá',
    'नमस्ते',
    'مرحبًا',
    'Hallo',
    '你好'
  ])

  // Update headline text
  useEffect(() => {
    const handleChangeText = () => {
      setTimeout(async () => {
        if (textCollection.length === 0) await setTextCollection(usedText)
        const text = await textCollection.shift()
        setHeadlineText(text)
      }, 1000)
    }

    handleChangeText()
  }, [headlineText])

  // Get random number which is not used
  // const getRandomNumber = () => {
  //   if (numberUsed.length >= textCollection.length) setNumberUsed([])

  //   let number
  //   do {
  //     number = Math.floor(Math.random() * textCollection.length);
  //     console.log(number)
  //   } while (numberUsed.includes(number))

  //   setNumberUsed((prev) => [...prev, number])

  //   return number
  // }



  return (
    <div className={`${!isDownloaded ? 'loading-outer-container' : ''}`}>
          <div className='loading-container'>
            <img src={loadingGif} alt="Loading" className='loading-item'/>
            <h1 className='loading-headline'>{headlineText}</h1>
          </div>
    </div>
  )
}
