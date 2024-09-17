import React from 'react'
import Navbar from './components/Navbar'
import { UpdateFollower } from 'react-mouse-follower'
import Hero from './components/Hero'
import Service from './components/Service'
import Banner from './components/Banner'
import BannerText from './components/BannerText'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <main className='overflow-x-hidden'>
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "white",
            zIndex: 999,
            followSpeed: 1.5
          }}
        >
          <Navbar />
          <Hero />
          <UpdateFollower
            mouseOptions={{
              backgroundColor: "black",
              zIndex: 999,
              followSpeed: 1.5
            }}
          >
            <Service />
          </UpdateFollower>
          <Banner/>
          <BannerText/>
          <Blogs/>
          <Footer/>
        </UpdateFollower>
      </main>
    </>
  )
}
