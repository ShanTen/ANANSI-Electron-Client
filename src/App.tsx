import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/electron-vite.animate.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SensorConsole from './Pages/SensorConsole';


function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center'>
        <a href="https://electron-vite.github.io" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="space-x-4">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => {window.location.href = '/sentrix';}} >
          Go to Sensor Console
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


function App(){
    return (<Router>
      <Routes>
        <Route path="/"  element={<SensorConsole />} />
        <Route path="/sentrix" element={<SensorConsole />} />
      </Routes>
    </Router>)
}


export default App
