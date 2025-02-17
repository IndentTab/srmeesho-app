import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const fetchProducts = async () => {
    try {
        const response = await api.get("/products/");
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const addProduct = async (productData) => {
    try {
        const response = await api.post("/products/", productData);
        return response.data;
    } catch (error) {
        console.error("Error adding product:", error);
        throw error;
    }
};
