import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Profile from './pages/Profile'
import Home from './pages/Home'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Profile' element={<Profile />}></Route>
    </Routes>
    </>
  )
}

export default App
