import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Articles from './components/Articles'

function App() {
  const [count, setCount] = useState(0)

  // <Route path="/" element{<Home />} />

  return (
    <div className="App">
      <h1>NC News!</h1>
      <Routes>
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App

