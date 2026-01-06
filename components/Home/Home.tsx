import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Courses from './Courses/Courses'
import Feature from './Feature/Feature'
import Review from './Review/Review'

export default function Home() {
  return (
   <div>
    <Hero />
    <About />
    <Courses />
    <Feature />
    <Review />
   </div>
  )
}
