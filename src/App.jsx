// import { useState } from 'react'
// import reactLogo from './assets/react.svg' 
// import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero';
import {Counter} from './components/Counter';
import { About } from './components/About'
// import { Testimonials } from './components/Testimonials'
import { Testimonial } from './components/Testimonal';
import {FAQ} from './components/FAQ'

import Services from './components/Services';
import {Banner}  from './components/Banner';
function App() {

  return (
    <main className='overflow-x-hidden bg-[#fff] text-[#323232]'>
     <Navbar />
    <Hero/>
    <Banner/>
    <Services/>
    <About/>
    <Testimonial/>
    <FAQ/>
    </main>
  )
}

export default App
