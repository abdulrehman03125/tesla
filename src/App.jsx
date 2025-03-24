import react from 'react'
import './App.css'
import { Routes, Route } from "react-router";
import TaslaModel from './components/TeslaModel'
// import Footer from './pages/Footer';
function App() {

  return (
    <>
    <Routes>
    <Route index element={<TaslaModel />} />
    {/* <Route path='/TeslaModel' element={<Footer />} /> */}
    </Routes>
  {/* <TaslaModel/> */}
  {/* <Footer/> */}
    </>
  )
}

export default App
