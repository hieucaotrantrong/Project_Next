import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ id, image, title, originalPrice, price, discount, tag }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-3 w-full max-w-xs">
            {/* Bọc ảnh trong Link */}
            <Link to={`/product/${id}`}>
                <img src={image} alt={title} className="rounded-md mb-3 w-full cursor-pointer hover:opacity-90 transition" />
            </Link>

            <h2 className="text-sm font-medium mb-1">{title}</h2>
            <div className="flex items-center space-x-2 mb-2">
                <span className="line-through text-gray-400 text-sm">{originalPrice}₫</span>
                <span className="text-red-500 font-semibold">{price}₫</span>
                <span className="text-orange-500 text-xs">-{discount}%</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded">{tag}</span>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-sm rounded">Mua Ngay</button>
            </div>
        </div>
    );
};

export default CartItem;
