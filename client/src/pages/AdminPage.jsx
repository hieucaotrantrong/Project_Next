import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
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

    // Lấy danh sách sản phẩm
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

    // Thêm hoặc sửa sản phẩm
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingProduct) {
                // Cập nhật sản phẩm
                await axios.put(`http://localhost:5000/api/products/${editingProduct.id}`, form);
                setEditingProduct(null);
            } else {
                // Thêm sản phẩm mới
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

    // Xóa sản phẩm
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            fetchProducts();
        } catch (error) {
            console.error('Lỗi khi xoá sản phẩm:', error);
        }
    };

    // Đặt form để sửa sản phẩm
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
        setPreview(product.image); // Đặt preview cho ảnh khi sửa sản phẩm
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Quản lý sản phẩm</h1>

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-8">
                <input
                    type="text"
                    placeholder="Tên sản phẩm"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="border p-2"
                />
                <input
                    type="text"
                    placeholder="Giá gốc"
                    value={form.originalPrice}
                    onChange={(e) => setForm({ ...form, originalPrice: e.target.value })}
                    className="border p-2"
                />
                <input
                    type="text"
                    placeholder="Giá khuyến mãi"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className="border p-2"
                />
                <input
                    type="text"
                    placeholder="Giảm giá (%)"
                    value={form.discount}
                    onChange={(e) => setForm({ ...form, discount: e.target.value })}
                    className="border p-2"
                />
                <input
                    type="text"
                    placeholder="Tag"
                    value={form.tag}
                    onChange={(e) => setForm({ ...form, tag: e.target.value })}
                    className="border p-2"
                />

                {/* Input để chọn ảnh và preview ảnh */}
                <div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                                const imagePath = `/assets/${file.name}`; // Lưu đường dẫn ảnh
                                setForm({ ...form, image: imagePath });

                                // Hiển thị ảnh preview
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    setPreview(reader.result);
                                };
                                reader.readAsDataURL(file);
                            }
                        }}
                        className="border p-2"
                    />
                    {preview && (
                        <img
                            src={preview}
                            alt="Preview"
                            className="w-40 h-40 object-cover mt-2 border"
                        />
                    )}
                </div>

                <button
                    type="submit"
                    className="col-span-2 bg-blue-500 text-white p-2"
                >
                    {editingProduct ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}
                </button>
            </form>

            <h2 className="text-xl font-bold mb-2">Danh sách sản phẩm</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map((item) => (
                    <div key={item.id} className="border p-4 rounded shadow">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-40 object-cover mb-2"
                        />
                        <h3 className="font-bold">{item.title}</h3>
                        <p>Giá: {item.price} đ</p>
                        <p>Giá gốc: {item.originalPrice} đ</p>
                        <p>Giảm: {item.discount}%</p>
                        <p>Tag: {item.tag}</p>
                        <button
                            onClick={() => handleEdit(item)}
                            className="bg-yellow-500 text-white p-1 mt-2 rounded"
                        >
                            Sửa
                        </button>
                        <button
                            onClick={() => handleDelete(item.id)}
                            className="bg-red-500 text-white p-1 mt-2 rounded"
                        >
                            Xóa
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPage;
