const products = [
  { id: 1, name: "Phone" },
  { id: 2, name: "Laptop" },
  { id: 3, name: "Mouse" },
];

function Products({ cart, addToCart }) {
  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => {
        const inCart = cart.some((item) => item.id === product.id)
        return (
          <div key={product.id} style={{ marginBottom: '15px' }}>
            <span style={{ marginRight: '12px' }}>{product.name}</span>
            <button onClick={() => addToCart(product)} >
              {inCart ? "Added" : "Add to cart"}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Products
