import { Link } from 'react-router-dom';

'use client'

import { useState } from 'react'
import {
    FaUser,
    FaShoppingCart,
    FaMapMarkerAlt,
    FaMobileAlt,
    FaLaptop,
    FaHeadphones,
    FaClock,
    FaTabletAlt,
    FaRedo,
    FaTv,
    FaSimCard,
    FaTools,
    FaSearch,
} from "react-icons/fa";

const menuItems = [
    { icon: <FaMobileAlt />, label: "Điện thoại" },
    { icon: <FaLaptop />, label: "Laptop" },
    { icon: <FaHeadphones />, label: "Phụ kiện" },
    { icon: <FaClock />, label: "Smartwatch" },
    { icon: <FaClock />, label: "Đồng hồ" },
    { icon: <FaTabletAlt />, label: "Tablet" },
    { icon: <FaRedo />, label: "Máy cũ, Thu cũ" },
    { icon: <FaTv />, label: "Màn hình, Máy in" },
    { icon: <FaSimCard />, label: "Sim, Thẻ cào" },
    { icon: <FaTools />, label: "Dịch vụ tiện ích" },
];

export default function Header() {
    return (
        <header className="w-full bg-[#ffd400]">
            {/* Top Header */}

            <div className="w-full max-w-[1280px] mx-auto flex items-center px-4 py-2">
                {/* Logo + Search */}
                <div className="flex items-center w-[600px]">
                    <img
                        src="./assets/logo.jpg"
                        alt="Logo"
                        className="h-10 object-contain"
                    />
                    <div className="relative ml-2 flex-1">
                        <div className="flex items-center bg-white rounded-full px-3 py-1">
                            <FaSearch className="text-gray-500 text-sm" />
                            <input
                                type="text"
                                placeholder="Bạn tìm gì..."
                                className="w-full px-2 py-1 text-sm outline-none bg-transparent"
                            />
                        </div>
                    </div>
                </div>
                {/* Account + Cart + Location */}
                <div className="flex items-center gap-14 ml-8">
                    <Link to="/login" className="flex items-center gap-1 text-sm font-normal hover:underline">
                        <FaUser />
                        Đăng nhập
                    </Link>
                    <Link to="/signup" className="text-sm font-normal hover:underline">
                        Đăng ký
                    </Link>
                    <div className="flex items-center gap-1 hover:underline cursor-pointer text-sm">
                        <FaShoppingCart />
                        Giỏ hàng
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-300 px-3 py-2 rounded-full cursor-pointer text-sm">
                        <FaMapMarkerAlt />
                        <span className="truncate max-w-[150px]">40 Đống Đa, P.Khương Thượng,...</span>
                    </div>
                </div>
            </div>

            {/* Bottom Menu */}
            <div className="w-full max-w-[1280px] mx-auto flex flex-wrap gap-9 px-4 py-2 text-sm font-normal">
                {menuItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-1 cursor-pointer hover:underline">
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </header >
    );
}
