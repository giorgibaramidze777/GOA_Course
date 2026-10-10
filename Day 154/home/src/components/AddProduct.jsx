import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        imageUrl: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('ახალი პროდუქტი:', formData)

        navigate('/products')
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-slate-800 text-white rounded-xl shadow-lg border border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-center text-sky-400">Add New Product</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300">Product Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter product name" className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white" />
                </div>

                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-slate-300">Price ($)</label>
                    <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required min="0" step="0.01" placeholder="Enter price" className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white"/>
                </div>

                <div>
                    <label htmlFor="imageUrl" className="block text-sm font-medium text-slate-300">Image URL</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required placeholder="https://example.com/image.jpg" className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white"/>
                </div>

                <button type="submit" className="mt-2 w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2.5 px-4 rounded-lg transition duration-200 shadow-md active:scale-98">
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default AddProduct