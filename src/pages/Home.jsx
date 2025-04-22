import React from 'react'
import Hero from '../features/hero/Hero'
import Lawyers from '../features/lawyers/Lawyers'

const Home = () => {
  return (
    <div className='mx-3'>
        <Hero />
        <Lawyers />
    </div>
  )
}

export default Home