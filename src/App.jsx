import { useState } from 'react'
import './App.css'
import ToggleBtnDrkMode from './components/ui/ToggleBtnDrkMode'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/layout/Header/Header'
function App() {
 
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <>
    <Router>
      
      <div className={`${darkMode ? "dark" : "light"} bg-background `}>
        <Header/>
        <ToggleBtnDrkMode 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
    

    
     
    </>
  )
}

export default App
