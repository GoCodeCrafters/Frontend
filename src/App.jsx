import { useState } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
