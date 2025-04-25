import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderManagement = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/api/orders', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setOrders(response.data);
            setError(null);
        } catch (error) {
            console.error('Lỗi khi lấy danh sách đơn hàng:', error);
            setError('Không thể tải danh sách đơn hàng');
        }
    };

    const handleUpdateStatus = async (orderId, newStatus) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`http://localhost:5000/api/orders/${orderId}`, 
                { status: newStatus },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            fetchOrders();
        } catch (error) {
            console.error('Lỗi khi cập nhật trạng thái:', error);
        }
    };

    if (error) {
        return <div className="p-6 text-red-600">{error}</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">📦 Quản lý đơn hàng</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-3 text-left">ID</th>
                            <th className="px-4 py-3 text-left">Khách hàng</th>
                            <th className="px-4 py-3 text-left">Sản phẩm</th>
                            <th className="px-4 py-3 text-left">Giá</th>
                            <th className="px-4 py-3 text-left">Liên hệ</th>
                            <th className="px-4 py-3 text-left">Địa chỉ</th>
                            <th className="px-4 py-3 text-left">Trạng thái</th>
                            <th className="px-4 py-3 text-left">Ngày đặt</th>
                            <th className="px-4 py-3 text-left">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-3">{order.id}</td>
                                <td className="px-4 py-3">{order.full_name}</td>
                                <td className="px-4 py-3">{order.product_title}</td>
                                <td className="px-4 py-3 text-green-600">{order.product_price}đ</td>
                                <td className="px-4 py-3">{order.phone}</td>
                                <td className="px-4 py-3">{order.address}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-1 rounded text-sm ${
                                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                        order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                                        order.status === 'completed' ? 'bg-green-100 text-green-800' :
                                        'bg-red-100 text-red-800'
                                    }`}>
                                        {order.status === 'pending' ? 'Chờ xử lý' :
                                         order.status === 'processing' ? 'Đang xử lý' :
                                         order.status === 'completed' ? 'Hoàn thành' :
                                         'Đã hủy'}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    {new Date(order.created_at).toLocaleDateString('vi-VN')}
                                </td>
                                <td className="px-4 py-3">
                                    <select
                                        className="border rounded px-2 py-1"
                                        value={order.status}
                                        onChange={(e) => handleUpdateStatus(order.id, e.target.value)}
                                    >
                                        <option value="pending">Chờ xử lý</option>
                                        <option value="processing">Đang xử lý</option>
                                        <option value="completed">Hoàn thành</option>
                                        <option value="cancelled">Hủy</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderManagement;
