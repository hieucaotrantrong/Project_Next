import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import Footers from "./Footers";

const CartPayPage = () => {
    const location = useLocation();
    const { cartItems, totalPrice, isMultipleItems, ...product } = location.state || {};

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState(product?.userAddress || "");
    const [isLoading, setIsLoading] = useState(false);

    // Load địa chỉ từ localStorage nếu không có trong state
    useEffect(() => {
        const savedAddress = localStorage.getItem('userAddress');
        if (savedAddress) {
            setAddress(savedAddress);
        }
    }, []);

    const handleOrder = async () => {
        if (!fullName || !phone || !address || !email) {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            alert("Số điện thoại không hợp lệ.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Email không hợp lệ.");
            return;
        }

        setIsLoading(true);

        try {
            if (isMultipleItems) {
                // Xử lý nhiều sản phẩm
                for (const item of cartItems) {
                    await axios.post("http://localhost:5000/api/orders", {
                        fullName,
                        email,
                        phone,
                        address,
                        productId: item.id,
                        productTitle: item.title,
                        productPrice: item.price,
                        quantity: item.quantity
                    });
                }
            } else {
                // Xử lý 1 sản phẩm
                await axios.post("http://localhost:5000/api/orders", {
                    fullName,
                    email,
                    phone,
                    address,
                    productId: product.id,
                    productTitle: product.title,
                    productPrice: product.price,
                });
            }

            alert("Đặt hàng thành công!");
            setFullName("");
            setEmail("");
            setPhone("");
            setAddress("");
        } catch (err) {
            console.error(err);
            alert("Đặt hàng thất bại. Vui lòng thử lại.");
        } finally {
            setIsLoading(false);
        }
    };

    const formatPrice = (price) => {
        const numPrice = Math.floor(parseFloat(price));
        return numPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    const displayData = isMultipleItems ? {
        title: `Đơn hàng (${cartItems?.length} sản phẩm)`,
        price: totalPrice,
        image: cartItems?.[0]?.image
    } : product;

    return (
        <div className="min-h-screen bg-gray-50">
            <Home />

            <div className="p-4 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">Thanh Toán Đơn Hàng</h1>

                <div className="flex gap-12">
                    {/* Hiển thị sản phẩm */}
                    <div className="w-1/2">
                        {isMultipleItems ? (
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">Danh sách sản phẩm ({cartItems?.length})</h3>
                                <div className="space-y-4 max-h-96 overflow-y-auto">
                                    {cartItems?.map((item) => (
                                        <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-20 h-20 object-contain rounded"
                                            />
                                            <div className="flex-1">
                                                <h4 className="font-medium text-sm">{item.title}</h4>
                                                <p className="text-red-600 font-bold">{formatPrice(item.price)}₫</p>
                                                <p className="text-gray-600 text-sm">Số lượng: {item.quantity}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 pt-4 border-t">
                                    <div className="flex justify-between text-xl font-bold">
                                        <span>Tổng cộng:</span>
                                        <span className="text-red-600">
                                            {formatPrice(totalPrice)}₫
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <img
                                src={product?.image}
                                alt={product?.title}
                                className="w-full rounded-lg shadow-lg"
                            />
                        )}
                    </div>

                    {/* Form thông tin */}
                    <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">
                            {isMultipleItems ? `Đơn hàng (${cartItems?.length} sản phẩm)` : product?.title}
                        </h2>

                        {!isMultipleItems && (
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-red-500 text-2xl font-bold">{formatPrice(product?.price)}₫</span>
                            </div>
                        )}

                        {/* Form nhập thông tin */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-lg font-medium mb-2">Họ và tên</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border rounded-md shadow-sm"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-3 border rounded-md shadow-sm"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium mb-2">Số điện thoại</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border rounded-md shadow-sm"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium mb-2">Địa chỉ nhận hàng</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border rounded-md shadow-sm"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>

                            <button
                                onClick={handleOrder}
                                className={`w-full ${isLoading ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-600'} text-white py-3 rounded-md text-lg`}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Đang xử lý...' : 'Xác Nhận Đặt Hàng'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footers />
        </div>
    );
};

export default CartPayPage;















