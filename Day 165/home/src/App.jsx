import { useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Home from "./components/Products"
import Products from "./components/Products"
import Cart from "./components/Cart"

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) =>
      prev.some((item) => item.id === product.id) ? prev : [...prev, product]
    )
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      <nav style={{ display: "flex", gap: '5px', padding: '5px' }}>
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartContext.Provider>
  )
}

export default App