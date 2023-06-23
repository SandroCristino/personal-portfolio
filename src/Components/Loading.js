import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../Styles/Loading.css'


export default function Loading() {
  const isDownloaded = useSelector((state) => state.file.isDownloaded)

  useEffect(() => {
    console.log(isDownloaded)
  },[isDownloaded])
  
  return (
    <div className='loading-outer-container'>
        {!isDownloaded && (
          <div className='loading-container'>

          </div>
        )}
    </div>
  )
}
