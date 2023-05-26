import React from 'react'
import "@/styles/reset.css"
import "@/styles/global.css";


const RootLayout = ({children}) => {
  return (
    <html lang='tr'>
      <body className='container'>{children}</body>
    </html>
  )
}

export default RootLayout
