import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import Notifications from './Notifications';

import {
    FaUser,
    FaShoppingCart,
    FaMapMarkerAlt,
    FaSearch,
} from "react-icons/fa";

export default function Home() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const handleLogout = () => {
        const confirmLogout = window.confirm('Bạn có chắc chắn muốn đăng xuất không?');
        if (confirmLogout) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/');
        }
    };
    const menuItems = [
        { icon: <img src="https://cdn.tgdd.vn/content/phonne-24x24.png" className="w-5 h-5" />, label: "Điện thoại" },
        { icon: <img src="https://cdn.tgdd.vn/content/laptop-24x24.png" className="w-5 h-5" />, label: "Laptop" },
        { icon: <img src="https://cdn.tgdd.vn/content/phu-kien-24x24.png" className="w-5 h-5" />, label: "Phụ kiện" },
        { icon: <img src="https://cdn.tgdd.vn/content/smartwatch-24x24.png" className="w-5 h-5" />, label: "Smartwatch" },
        { icon: <img src="https://cdn.tgdd.vn/content/watch-24x24.png" className="w-5 h-5" />, label: "Đồng Hồ" },
        { icon: <img src="https://cdn.tgdd.vn/content/tablet-24x24.png" className="w-5 h-5" />, label: "Tablet" },
        { icon: <img src="https://cdn.tgdd.vn/content/may-cu-24x24.png" className="w-5 h-5" />, label: "Mua máy thu cũ" },
        { icon: <img src="https://cdn.tgdd.vn/content/PC-24x24.png" className="w-5 h-5" />, label: "Màn hình, Máy in" },
        { icon: <img src="https://cdn.tgdd.vn/content/sim-24x24.png" className="w-5 h-5" />, label: "Sim, Thẻ cào" },
        { icon: <img src="https://cdn.tgdd.vn/content/tien-ich-24x24.png" className="w-5 h-5" />, label: "Dịch vụ tiện ích" },
    ];


    return (
        <div>
            {/* Header section với background vàng */}
            <header className="w-full bg-[#ffd400]">
                <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between px-4 py-2">
                    {/* Logo + Search */}
                    <div className="flex items-center flex-1 max-w-[600px]">
                        <img
                            src="./assets/logo.jpg"
                            alt="Logo"
                            className="h-8 object-contain"
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
                    <div className="flex items-center gap-6 ml-4">
                        {user ? (
                            <>
                                <Notifications />
                                <div className="flex items-center gap-2">
                                    <img
                                        src={user.avatar || 'https://i.pravatar.cc/40'}
                                        alt="avatar"
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span className="text-sm">Xin chào, {user.first_name}</span>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="text-sm hover:underline"
                                >
                                    Đăng xuất
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="flex items-center gap-1 text-sm hover:underline">
                                    <FaUser />
                                    <span>Đăng nhập</span>
                                </Link>
                                <Link to="/signup" className="text-sm hover:underline">
                                    Đăng ký
                                </Link>
                            </>
                        )}
                        <div className="flex items-center gap-1 text-sm hover:underline cursor-pointer">
                            <FaShoppingCart />
                            <span>Giỏ hàng</span>
                        </div>
                        <div className="flex items-center gap-1 bg-yellow-300 px-3 py-2 rounded-full cursor-pointer text-sm">
                            <FaMapMarkerAlt />
                            <span className="truncate max-w-[120px]">40 Đống Đa, P.K...</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Menu */}
                <div className="w-full max-w-[1280px] mx-auto px-4 py-3 text-sm font-normal">
                    <div className="flex justify-between items-center">
                        {menuItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-1 cursor-pointer hover:underline">
                                {item.icon}
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </header>
        </div>
    );
}










