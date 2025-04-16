import React, { useState, useEffect } from "react";
import axios from "axios";
import CartItem from "./CartItem";

// Sản phẩm mẫu (mock sẵn)
const productsMock = [
    {
        id: 1,
        image: "/assets/vay.jpg",
        title: "KEM PHỤC HỒI LA ROCHE-POSAY CICAPLAST BAUME B5+",
        originalPrice: "699.000",
        price: "578.000",
        discount: 13,
        tag: "ĐÃ BÁN 20",
    },
    {
        id: 2,
        image: "/assets/vay.jpg",
        title: "NƯỚC TẨY TRANG LÀM SẠCH SÂU DỊU NHẸ CHO MỌI LOẠI DA",
        originalPrice: "199.000",
        price: "145.000",
        discount: 17,
        tag: "ĐÃ BÁN 149",
    },

];

const CartPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/products");
                // Gộp sản phẩm mock và sản phẩm từ API
                const combinedProducts = [...productsMock, ...response.data];
                setProducts(combinedProducts);
            } catch (error) {
                console.error("Lỗi khi lấy sản phẩm từ API:", error);
                setProducts(productsMock); // Nếu lỗi thì chỉ hiển thị mock
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
