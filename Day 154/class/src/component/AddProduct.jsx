import { useNavigate } from "react-router-dom"

const AddProduct = () => {
    const navigate = useNavigate()

    return (
        <>
            <form onSubmit={(e) => {
                    e.preventDefault()
                    navigate('/products')
                }}>
                <input type="text" className="border" name="productName" placeholder="Product Name" required /><br /><br />
                <input type="number" className="border" name="price" placeholder="Price" required /><br /><br />
                <input type="text" className="border" name="imageUrl" placeholder="Image URL" required /><br /><br />
                <button type="submit">Add Product</button>
            </form>
        </>
    )
}

export default AddProduct