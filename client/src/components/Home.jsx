import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import Notifications from './Notifications';
import CartPage from './CartPage';

import {
    FaUser,
    FaShoppingCart,
    FaMapMarkerAlt,
    FaSearch,
} from "react-icons/fa";

export default function Home() {
    const [user, setUser] = useState(null);
    const [showLocationModal, setShowLocationModal] = useState(false);
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedWard, setSelectedWard] = useState('');
    const [currentAddress, setCurrentAddress] = useState('');
    const [activeTab, setActiveTab] = useState('province');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }

        // Load địa chỉ đã lưu từ localStorage
        const savedAddress = localStorage.getItem('userAddress');
        if (savedAddress) {
            const displayAddress = savedAddress.length > 25 ? savedAddress.substring(0, 25) + '...' : savedAddress;
            setCurrentAddress(displayAddress);
        } else {
            setCurrentAddress('Địa chỉ của bạn');
        }

        // Load provinces on component mount
        fetchProvinces();
    }, []);

    const fetchProvinces = async () => {
        try {
            const response = await fetch('https://provinces.open-api.vn/api/p/');
            const data = await response.json();
            setProvinces(data);
        } catch (error) {
            console.error('Error fetching provinces:', error);
        }
    };

    const fetchDistricts = async (provinceCode) => {
        try {
            const response = await fetch(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`);
            const data = await response.json();
            setDistricts(data.districts || []);
            setWards([]);
        } catch (error) {
            console.error('Error fetching districts:', error);
        }
    };

    const fetchWards = async (districtCode) => {
        try {
            const response = await fetch(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`);
            const data = await response.json();
            setWards(data.wards || []);
        } catch (error) {
            console.error('Error fetching wards:', error);
        }
    };

    const handleProvinceChange = (e) => {
        const provinceCode = e.target.value;
        setSelectedProvince(provinceCode);
        setSelectedDistrict('');
        setSelectedWard('');
        if (provinceCode) {
            fetchDistricts(provinceCode);
        } else {
            setDistricts([]);
            setWards([]);
        }
    };

    const handleDistrictChange = (e) => {
        const districtCode = e.target.value;
        setSelectedDistrict(districtCode);
        setSelectedWard('');
        if (districtCode) {
            fetchWards(districtCode);
        } else {
            setWards([]);
        }
    };

    const handleWardChange = (e) => {
        setSelectedWard(e.target.value);
    };

    const handleSaveAddress = () => {
        if (selectedProvince && selectedDistrict && selectedWard) {
            const province = provinces.find(p => p.code == selectedProvince);
            const district = districts.find(d => d.code == selectedDistrict);
            const ward = wards.find(w => w.code == selectedWard);

            const newAddress = `${ward.name}, ${district.name}, ${province.name}`;
            const fullAddress = newAddress;
            const displayAddress = newAddress.length > 25 ? newAddress.substring(0, 25) + '...' : newAddress;

            setCurrentAddress(displayAddress);

            // Lưu địa chỉ đầy đủ vào localStorage
            localStorage.setItem('userAddress', fullAddress);

            setShowLocationModal(false);
        }
    };

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

    const handleSelectProvince = (province) => {
        setSelectedProvince(province.code);
        setSelectedDistrict('');
        setSelectedWard('');
        fetchDistricts(province.code);
        setActiveTab('district');
        setSearchTerm('');
    };

    const handleSelectDistrict = (district) => {
        setSelectedDistrict(district.code);
        setSelectedWard('');
        fetchWards(district.code);
        setActiveTab('ward');
        setSearchTerm('');
    };

    const handleSelectWard = (ward) => {
        setSelectedWard(ward.code);
        const province = provinces.find(p => p.code == selectedProvince);
        const district = districts.find(d => d.code == selectedDistrict);

        const newAddress = `${ward.name}, ${district.name}, ${province.name}`;
        setCurrentAddress(newAddress.length > 25 ? newAddress.substring(0, 25) + '...' : newAddress);


        localStorage.setItem('userAddress', newAddress);

        setShowLocationModal(false);
        setActiveTab('province');
        setSearchTerm('');
    };

    const getFilteredItems = () => {
        let items = [];
        if (activeTab === 'province') items = provinces;
        else if (activeTab === 'district') items = districts;
        else if (activeTab === 'ward') items = wards;

        if (searchTerm) {
            return items.filter(item => {
                const name = item.name.toLowerCase();
                const search = searchTerm.toLowerCase();

                // Tìm theo từ đầu tiên của mỗi từ
                const words = name.split(' ');
                return words.some(word => word.startsWith(search)) ||
                    name.includes(search);
            });
        }
        return items;
    };

    const getCurrentAddress = () => {
        if (selectedWard && selectedDistrict && selectedProvince) {
            const province = provinces.find(p => p.code == selectedProvince);
            const district = districts.find(d => d.code == selectedDistrict);
            return `${district?.name}, ${province?.name}`;
        }
        if (selectedDistrict && selectedProvince) {
            const province = provinces.find(p => p.code == selectedProvince);
            return province?.name;
        }
        return 'Quận 1, Hồ Chí Minh';
    };

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
                            className="h-8 object-contain cursor-pointer"
                            onClick={() => navigate('/home')}
                        />
                        <div className="relative ml-2 flex-1">
                            <div className="flex items-center bg-white rounded-full px-3 py-1">
                                <FaSearch className="text-gray-500 text-sm" />
                                <input
                                    type="text"
                                    placeholder="Bạn tìm gì..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
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
                                        className="w-8 h-8 rounded-full cursor-pointer hover:ring-2 hover:ring-blue-300"
                                        onClick={() => navigate('/profile')}
                                        title="Xem profile"
                                    />
                                    <span className="text-sm cursor-pointer" onClick={() => navigate('/profile')}>
                                        Xin chào, {user.first_name}
                                    </span>
                                </div>

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
                        <Link to="/support" className="text-sm font-semibold text-gray-900">
                            Hỗ trợ
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="text-sm hover:underline"
                        >
                            Đăng xuất
                        </button>
                        <div
                            className="flex items-center gap-1 bg-yellow-300 px-3 py-2 rounded-full cursor-pointer text-sm hover:bg-yellow-400 transition-colors"
                            onClick={() => setShowLocationModal(true)}
                        >
                            <FaMapMarkerAlt />
                            <span className="truncate max-w-[120px]">{currentAddress}</span>
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

            {/* Location Modal */}
            {showLocationModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-[600px] max-w-[90vw] max-h-[80vh] flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b">
                            <h3 className="text-xl font-bold">Chọn địa chỉ nhận hàng</h3>
                            <button
                                onClick={() => setShowLocationModal(false)}
                                className="text-gray-400 hover:text-gray-600 text-2xl"
                            >
                                ×
                            </button>
                        </div>

                        {/* Current Address */}
                        <div className="px-6 py-3 bg-gray-50 border-b">
                            <p className="text-sm text-gray-600">Địa chỉ đang chọn:</p>
                            <p className="font-medium">{getCurrentAddress()}</p>
                        </div>

                        {/* Search Box */}
                        <div className="p-6 border-b">
                            <div className="relative">
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Tìm nhanh tỉnh thành, quận huyện, phường xã"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b">
                            <button
                                onClick={() => setActiveTab('province')}
                                className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === 'province'
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-600 hover:text-gray-800'
                                    }`}
                            >
                                Tỉnh/TP
                            </button>
                            <button
                                onClick={() => setActiveTab('district')}
                                disabled={!selectedProvince}
                                className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === 'district' && selectedProvince
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-400'
                                    }`}
                            >
                                Quận/Huyện
                            </button>
                            <button
                                onClick={() => setActiveTab('ward')}
                                disabled={!selectedDistrict}
                                className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === 'ward' && selectedDistrict
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-400'
                                    }`}
                            >
                                Phường/Xã
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6">
                            <div className="grid grid-cols-2 gap-2">
                                {getFilteredItems().map((item) => (
                                    <button
                                        key={item.code}
                                        onClick={() => {
                                            if (activeTab === 'province') handleSelectProvince(item);
                                            else if (activeTab === 'district') handleSelectDistrict(item);
                                            else if (activeTab === 'ward') handleSelectWard(item);
                                        }}
                                        className="text-left p-3 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t">
                            <button
                                onClick={() => {
                                    setActiveTab('province');
                                    setSearchTerm('');
                                    setSelectedProvince('');
                                    setSelectedDistrict('');
                                    setSelectedWard('');
                                }}
                                className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                            >

                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Chỉ hiển thị kết quả tìm kiếm khi có searchQuery */}
            {searchQuery && (
                <div className="w-full max-w-[1280px] mx-auto px-4 py-6">
                    <CartPage searchQuery={searchQuery} />
                </div>
            )}
        </div>
    );
}































