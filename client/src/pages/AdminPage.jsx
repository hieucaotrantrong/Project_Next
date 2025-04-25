import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SupportManagement from '../components/SupportManagement';
import OrderManagement from '../components/OrderManagement';

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('products');
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({
        title: '',
        originalPrice: '',
        price: '',
        discount: '',
        tag: '',
        image: '',
    });
    const [editingProduct, setEditingProduct] = useState(null);
    const [preview, setPreview] = useState('');
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmLogout = window.confirm('Bạn có chắc chắn muốn đăng xuất không?');
        if (confirmLogout) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/');
        }
    };

    const fetchProducts = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/products');
            setProducts(res.data);
        } catch (error) {
            console.error('Lỗi khi lấy sản phẩm:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Giữ nguyên các hàm xử lý sản phẩm
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingProduct) {
                await axios.put(`http://localhost:5000/api/products/${editingProduct.id}`, form);
                setEditingProduct(null);
            } else {
                await axios.post('http://localhost:5000/api/products', form);
            }
            setForm({
                title: '',
                originalPrice: '',
                price: '',
                discount: '',
                tag: '',
                image: '',
            });
            setPreview('');
            fetchProducts();
        } catch (error) {
            console.error('Lỗi khi thêm/sửa sản phẩm:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            fetchProducts();
        } catch (error) {
            console.error('Lỗi khi xoá sản phẩm:', error);
        }
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        setForm({
            title: product.title,
            originalPrice: product.originalPrice,
            price: product.price,
            discount: product.discount,
            tag: product.tag,
            image: product.image,
        });
        setPreview(product.image);
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Thêm nút đăng xuất ở đầu trang */}
            <div className="flex justify-end mb-4">
                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Đăng xuất
                </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 justify-center">
                <button
                    onClick={() => setActiveTab('products')}
                    className={`px-6 py-2 rounded-lg ${activeTab === 'products'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                >
                    🛒 Quản lý sản phẩm
                </button>
                <button
                    onClick={() => setActiveTab('orders')}
                    className={`px-6 py-2 rounded-lg ${activeTab === 'orders'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                >
                    📦 Quản lý đơn hàng
                </button>
                <button
                    onClick={() => setActiveTab('support')}
                    className={`px-6 py-2 rounded-lg ${activeTab === 'support'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                >
                    📬 Quản lý hỗ trợ
                </button>
            </div>

            {/* Content */}
            {activeTab === 'products' ? (
                <>
                    <h1 className="text-3xl font-bold mb-6 text-center">🛒 Quản lý sản phẩm</h1>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-6 rounded-lg shadow grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                    >
                        <input
                            type="text"
                            placeholder="Tên sản phẩm"
                            value={form.title}
                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                            className="border border-gray-300 rounded px-4 py-2"
                        />
                        <input
                            type="text"
                            placeholder="Giá gốc"
                            value={form.originalPrice}
                            onChange={(e) => setForm({ ...form, originalPrice: e.target.value })}
                            className="border border-gray-300 rounded px-4 py-2"
                        />
                        <input
                            type="text"
                            placeholder="Giá khuyến mãi"
                            value={form.price}
                            onChange={(e) => setForm({ ...form, price: e.target.value })}
                            className="border border-gray-300 rounded px-4 py-2"
                        />
                        <input
                            type="text"
                            placeholder="Giảm giá (%)"
                            value={form.discount}
                            onChange={(e) => setForm({ ...form, discount: e.target.value })}
                            className="border border-gray-300 rounded px-4 py-2"
                        />
                        <input
                            type="text"
                            placeholder="Tag"
                            value={form.tag}
                            onChange={(e) => setForm({ ...form, tag: e.target.value })}
                            className="border border-gray-300 rounded px-4 py-2"
                        />
                        <div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        const imagePath = `/assets/${file.name}`;
                                        setForm({ ...form, image: imagePath });

                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                            setPreview(reader.result);
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }}
                                className="border border-gray-300 rounded px-4 py-2 w-full"
                            />
                            {preview && (
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="w-24 h-24 object-cover mt-2 border rounded"
                                />
                            )}
                        </div>
                        <button
                            type="submit"
                            className="col-span-1 md:col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                        >
                            {editingProduct ? '✅ Cập nhật sản phẩm' : '➕ Thêm sản phẩm'}
                        </button>
                    </form>

                    {/* Danh sách sản phẩm */}
                    <h2 className="text-2xl font-semibold mb-4">📦 Danh sách sản phẩm</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {products.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-32 h-32 object-cover rounded mb-2 border"
                                />
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-gray-600">💰 Giá: <span className="text-green-600">{item.price} đ</span></p>
                                <p className="text-sm text-gray-500">Giá gốc: {item.originalPrice} đ</p>
                                <p className="text-sm text-gray-500">Giảm: {item.discount}%</p>
                                <p className="text-sm text-gray-500">Tag: {item.tag}</p>
                                <div className="mt-3 flex gap-2">
                                    <button
                                        onClick={() => handleEdit(item)}
                                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                                    >
                                        Sửa
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                    >
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : activeTab === 'orders' ? (
                <OrderManagement />
            ) : (
                <SupportManagement />
            )}
        </div>
    );
};

export default AdminPage;




