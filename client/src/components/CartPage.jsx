import React, { useState, useEffect } from "react";
import axios from "axios";
import CartItem from "./CartItem";

const productsMock = [

];

const CartPage = ({ searchQuery = '' }) => {
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

    // Lọc sản phẩm theo từ khóa tìm kiếm
    const filteredProducts = products.filter(product => {
        if (!searchQuery) return true;
        return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className="w-full max-w-[1280px] mx-auto px-4 py-6 min-h-screen">
            <h1 className="text-1,5xl font-bold mb-6">
                {searchQuery ? `Kết quả tìm kiếm: "${searchQuery}"` : 'Sản phẩm'}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                {filteredProducts.map((item, index) => (
                    <CartItem key={index} {...item} />
                ))}
            </div>
            {filteredProducts.length === 0 && searchQuery && (
                <p className="text-center text-gray-500 mt-8">
                    Không tìm thấy sản phẩm nào với từ khóa "{searchQuery}"
                </p>
            )}
        </div>
    );
};

export default CartPage;



