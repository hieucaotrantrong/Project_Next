import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import Notifications from './Notifications';

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];

const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

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

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img
                            alt=""
                            src="https://icolor.vn/wp-content/uploads/2024/08/logo-lv-1.jpg"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>

                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
                            Thông tin
                            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel className="absolute z-10 mt-3 w-screen max-w-md rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                                    >
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div>
                                            <a href={item.href} className="font-semibold text-gray-900">
                                                {item.name}
                                            </a>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <a href="#" className="text-sm font-semibold text-gray-900">Kết nối</a>
                    <Link to="/support" className="text-sm font-semibold text-gray-900">
                        Hỗ trợ
                    </Link>
                    <a href="#" className="text-sm font-semibold text-gray-900">Tải ứng dụng</a>
                </PopoverGroup>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-6">
                    {user ? (
                        <>
                            <Notifications />
                            {/* Thông tin người dùng */}
                            <div className="flex items-center space-x-2">
                                <img
                                    src={user.avatar || 'https://i.pravatar.cc/40'}
                                    alt="avatar"
                                    className="w-8 h-8 rounded-full"
                                />
                                <p>Xin chào, {user.first_name}</p>
                            </div>

                            {/*----------------------------------
                            Logout
                            -----------------------------------*/}
                            <button
                                onClick={handleLogout}
                                className="text-sm font-semibold text-gray-900 hover:underline"
                            >
                                Đăng xuất
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-sm font-semibold text-gray-900">
                                Đăng nhập <span aria-hidden="true">&rarr;</span>
                            </Link>
                            <Link to="/singin" className="text-sm font-semibold text-gray-900">
                                Đăng kí <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </>
                    )}
                </div>

            </nav>
        </header>
    );
}


