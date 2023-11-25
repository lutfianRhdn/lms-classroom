"use client";
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
export default function HomeIcon() {
  const [color,setColor] = useState('#FFFF')
  const { theme } = useTheme();
  useEffect(()=>{
    setColor(theme === 'dark' ? '#FFFF' : '#00000')
  },[theme])
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d="M12 3s-6.186 5.34-9.643 8.232A1.041 1.041 0 0 0 2 12a1 1 0 0 0 1 1h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1a.98.98 0 0 0-.383-.768C18.184 8.34 12 3 12 3z"/>
    </svg>
  )
}
