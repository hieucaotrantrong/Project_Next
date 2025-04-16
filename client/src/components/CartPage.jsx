import React from "react";
import CartItem from "./CartItem";

const products = [
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
    {
        id: 3,
        image: "/assets/vay.jpg",
        title: "[CHÍNH HÃNG ĐỘC QUYỀN] SMOOTHIE TẨY TẾ BÀO CHẾT DOVE",
        originalPrice: "199.000",
        price: "159.000",
        discount: 15,
        tag: "ĐANG BÁN CHẠY",
    },

    {
        id: 4,
        image: "/assets/vay.jpg",
        title: "BAO CAO SU DUREX PERFORMA KÉO DÀI THỜI GIAN",
        originalPrice: "300.000",
        price: "219.000",
        discount: 27,
        tag: "ĐANG BÁN CHẠY",
    },
    {
        id: 5,
        image: "/assets/vay.jpg",
        title: "BAO CAO SU DUREX PERFORMA KÉO DÀI THỜI GIAN",
        originalPrice: "300.000",
        price: "219.000",
        discount: 27,
        tag: "ĐANG BÁN CHẠY",
    },
    {
        id: 6,
        image: "/assets/vay.jpg",
        title: "BAO CAO SU DUREX PERFORMA KÉO DÀI THỜI GIAN",
        originalPrice: "300.000",
        price: "219.000",
        discount: 27,
        tag: "ĐANG BÁN CHẠY",
    },
    {
        id: 7,
        image: "/assets/vay.jpg",
        title: "BAO CAO SU DUREX PERFORMA KÉO DÀI THỜI GIAN",
        originalPrice: "300.000",
        price: "219.000",
        discount: 27,
        tag: "ĐANG BÁN CHẠY",
    },
    {
        id: 7,
        image: "/assets/vay.jpg",
        title: "BAO CAO SU DUREX PERFORMA KÉO DÀI THỜI GIAN",
        originalPrice: "300.000",
        price: "219.000",
        discount: 27,
        tag: "ĐANG BÁN CHẠY",
    },

];

const CartPage = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Giỏ Hàng</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default CartPage;
