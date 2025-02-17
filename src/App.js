import React, { useEffect, useState } from "react";
import { fetchProducts, addProduct } from "./Services/api"; // Import API functions

function App() {
    const [products, setProducts] = useState([]); // State to store products
    const [loading, setLoading] = useState(true);

    // Fetch products when the page loads
    useEffect(() => {
        async function loadProducts() {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        }
        loadProducts();
    }, []);

    // Function to add a product
    const handleAddProduct = async () => {
        const newProduct = {
            name: "New Product",
            price: 199, // Example price
        };
        try {
            const createdProduct = await addProduct(newProduct);
            setProducts([...products, createdProduct]); // Add new product to the state
        } catch (error) {
            console.error("Failed to add product:", error);
        }
    };

    return (
        <div>
            <h1>Products List</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>{product.name} - ₹{product.price}</li>
                    ))}
                </ul>
            )}
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    );
}

export default App;

