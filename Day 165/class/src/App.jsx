import { useState, createContext } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Settings from './components/Settings.jsx'

const DarkModeContext = createContext()
const LanguageContext = createContext()

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState('en')

  return (
    <>
     <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode ({darkMode ? 'ON' : 'OFF'})</button>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </DarkModeContext.Provider>
    <LanguageContext.Provider value={[language, setLanguage]}>
      <Route path="/settings" element={<Settings />} />
    </LanguageContext.Provider>
    {/* 3. Language Context

შექმენი:

/home -> <Home />
/about -> <About />
/settings -> <Settings />

App.jsx-ში:

[language, setLanguage]

მნიშვნელობა შეიძლება იყოს:

"en"
"ka"

ყველა კომპონენტმა უნდა გამოიყენოს ეს Context.

მაგალითად Home-ში:

en → Welcome
ka → მოგესალმებით

Settings-ში შექმენი ორი ღილაკი:

English
ქართული

რომლებიც შეცვლიან language-ს. */}
    </>
  )
}

export default App