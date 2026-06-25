import './App.css';
import { Routes, Route } from 'react-router';

import { HeroSection } from './Components/HeroSection';
import { Order } from "./Components/Order";



function App() { 
  return (
    <>
      <Routes>
        <Route index element={<HeroSection />}></Route>
        <Route path='order' element={<Order />}></Route>
      </Routes>
      
      
      
    </>
  )
}

export default App
