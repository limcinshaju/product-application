import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Data from './components/Data'
import { Route, Routes } from 'react-router-dom'
import Addproduct from './components/Addproduct'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      
      
      <Routes>
        <Route path='/p' element={<Data/>}></Route>
        <Route path='/a' element={<Addproduct/>}></Route>
      </Routes>
    </>
  )
}

export default App
