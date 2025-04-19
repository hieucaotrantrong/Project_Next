import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const CartPayPage = () => {
    const location = useLocation();
    const product = location.state;

    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleOrder = async () => {
        if (!fullName || !phone || !address) {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            alert("Số điện thoại không hợp lệ.");
            return;
        }

        setIsLoading(true);

        try {
            const res = await axios.post("http://localhost:5000/api/orders", {
                fullName,
                phone,
                address,
                productId: product.id,
                productTitle: product.title,
                productPrice: product.price,
            });

            if (res.status === 200) {
                alert(" Đặt hàng thành công!");

                setFullName("");
                setPhone("");
                setAddress("");
            }
        } catch (err) {
            console.error(err);
            alert(" Đặt hàng thất bại. Vui lòng thử lại.");
        } finally {
            setIsLoading(false);
        }
    };

    if (!product) {
        return <p className="p-4 text-red-500">Không có sản phẩm nào được chọn.</p>;
    }

    return (
        <div className="p-4 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center"> Thanh Toán Đơn Hàng</h1>

            <div className="flex gap-12">
                {/* Phần hình ảnh sản phẩm */}
                <div className="w-1/3">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>

                {/* Phần thông tin đơn hàng */}
                <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-gray-500 text-lg line-through">
                            {product.originalPrice}₫
                        </span>
                        <span className="text-red-500 text-2xl font-bold">{product.price}₫</span>
                        <span className="text-orange-500 text-lg">-{product.discount}%</span>
                    </div>

                    {/* Form nhập thông tin */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-lg font-medium mb-2">Họ và tên</label>
                            <input
                                type="text"
                                className="w-full p-3 border rounded-md shadow-sm"
                                placeholder=""
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium mb-2">Số điện thoại</label>
                            <input
                                type="text"
                                className="w-full p-3 border rounded-md shadow-sm"
                                placeholder=""
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium mb-2">Địa chỉ nhận hàng</label>
                            <input
                                type="text"
                                className="w-full p-3 border rounded-md shadow-sm"
                                placeholder=""
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                        {/* Nút xác nhận đặt hàng */}
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
    );
};

export default CartPayPage;
