import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Navbar } from './components/Navbar.jsx'
import './index.css'
// import { Hero } from './components/Hero.jsx'
// import { Testimonials } from './components/Testimonials.jsx'
// import { About} from './components/About.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
  </StrictMode>,
)
