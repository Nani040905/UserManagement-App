import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pb-20">
            {/* component placeholder */}
            <Outlet /> 
        </main>
        <Footer />
    </div>
  )
}

export default RootLayout