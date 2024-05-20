import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Contatti from './components/Contatti';
import Curriculum from './components/Curriculum';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import About from './components/About';



export default function App(): JSX.Element {
 
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={ <HomePage />} />
        <Route path='about' element={ <About />} />
        <Route path='/contatti' element={ <Contatti />} />
        <Route path='/cv' element={ <Curriculum />} />
        <Route path='*' element={ <NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}


