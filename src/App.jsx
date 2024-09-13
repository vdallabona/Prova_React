import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import APIRM from './pages/APIRM'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<APIRM />}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App