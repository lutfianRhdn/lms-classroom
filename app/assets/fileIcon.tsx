"use client";

import { useEffect , useState } from 'react'
import { useTheme } from 'next-themes'

export default function FileIcon() {
  const [color,setColor] = useState('#FFFF')
  const { theme } = useTheme();
  useEffect(()=>{
    setColor(theme === 'dark' ? '#FFFF' : '#00000')
  },[theme])  
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"/>
      <path fill={color} d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"/>
    </svg>
  )
}
