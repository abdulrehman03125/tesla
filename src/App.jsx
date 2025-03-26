import react from 'react'
import './App.css'
import { Routes, Route } from "react-router";
import TaslaModel from './components/TeslaModel'
// import Vehicles from './pages/Vehicles';
import Navbar from './components/Navbar';
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
    <Route index element={<TaslaModel />} />
    {/* <Route path='/' element={<Vehicles/>} /> */}
    </Routes>
    </>
  )
}

export default App
