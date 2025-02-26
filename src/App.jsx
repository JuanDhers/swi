// import { useState } from 'react'
// import reactLogo from './assets/react.svg' 
// import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero';
import { About } from './components/About'
// import { Testimonials } from './components/Testimonials'
import { Testimonial } from './components/Testimonal';
import {FAQ} from './components/FAQ';
// import GoogleCalendar from './components/GoogleCalendar';
// import Clock from './components/clock';
// import CalendarGrid from './components/CalendarGrid';
// import CustomCalendar from './components/CustomCalendar';
import EventBooking from './components/EventBooking';
import Pricing from './components/Pricing';

import Services from './components/Services';
import {Banner}  from './components/Banner';
function App() {
  // const [selectedDate, setSelectedDate] = useState("");
  return (
    <main className='overflow-x-hidden bg-[#fff] text-[#323232]'>
     <Navbar />
    <Hero/>
    <Banner/>
    <Services/>
    <About/>
    <Testimonial/>
    <Pricing/>
    {/* <GoogleCalendar/> */}
    {/* <Clock /> */}
    <EventBooking />
    <FAQ/>
    </main>
  )
}

export default App
