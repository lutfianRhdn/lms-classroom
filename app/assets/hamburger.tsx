"use client";

import { useEffect , useState } from 'react'
import { useTheme } from 'next-themes'

export default function HamburgerIcon() {
  const [color,setColor] = useState('#FFFF')
  const { theme } = useTheme();
  useEffect(()=>{
    setColor(theme === 'dark' ? '#FFFF' : '#0000')
  },[theme])  
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h14M5 12h14M5 7h14"/>
    </svg>
  )
}
