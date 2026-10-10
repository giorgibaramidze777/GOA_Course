import { useState } from 'react'
import AddProduct from './components/AddProduct.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddProduct />
    </>
  )
}

export default App
