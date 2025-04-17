import React, { useState, useEffect } from "react";
import axios from "axios";
import CartItem from "./CartItem";

const productsMock = [

];

const CartPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/products");

                const combinedProducts = [...productsMock, ...response.data];
                setProducts(combinedProducts);
            } catch (error) {
                console.error("Lỗi khi lấy sản phẩm từ API:", error);
                setProducts(productsMock);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Giỏ Hàng</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((item, index) => (
                    <CartItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default CartPage;
