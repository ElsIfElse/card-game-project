import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import CardGamePage from './pages/CardGamePage'
import FlashCardsPull from './pages/FlashCardsPull'

function App() {


  return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path='/game' element={<CardGamePage/>}/>
          <Route path='/flashcardspull' element={<FlashCardsPull/>}/>
        </Routes>
      </Router>

  )
}

export default App
