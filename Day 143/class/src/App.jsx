import { Routes, Route } from "react-router-dom"
import MainPage from "./components/MainPage"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/services" element={<Services/>}/>
        </Routes>
    )
}

export default App