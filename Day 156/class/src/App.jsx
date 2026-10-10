import 'react-router-dom'
import Idk1 from './components/idk1'
import Idk2 from './components/Idk2'

function App() {
  return (
    <>
       
        <Routes>
          <Route path="/Idk1/:username" element={<Idk1 />} />
          <Route path="/Idk2/:book_id" element={<Idk2 />} />
        </Routes>
    </>
  )
}

export default App
