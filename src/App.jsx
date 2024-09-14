import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Personagem from './pages/Personagem'
import Episodios from './pages/Episodios'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Personagem' element={<Personagem />}/>
        <Route path='/Episodios' element={<Episodios />}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App