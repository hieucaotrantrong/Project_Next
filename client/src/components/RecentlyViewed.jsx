import React from 'react';
import { Link } from 'react-router-dom';

const RecentlyViewed = () => {
  // Mock data for recently viewed products
  const recentlyViewedProducts = [
    {
      id: 1,
      name: "iPhone 14 Pro Max 128GB",
      price: 26990000,
      image: "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg"
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra 5G",
      price: 23990000,
      image: "https://cdn.tgdd.vn/Products/Images/42/264060/samsung-galaxy-s23-ultra-thumb-xanh-600x600.jpg"
    },
    {
      id: 3,
      name: "OPPO Reno10 5G",
      price: 8990000,
      image: "https://cdn.tgdd.vn/Products/Images/42/306979/oppo-reno10-xanh-thumb-600x600.jpg"
    },
    {
      id: 4,
      name: "Xiaomi Redmi Note 13 Pro",
      price: 7490000,
      image: "https://cdn.tgdd.vn/Products/Images/42/307245/xiaomi-redmi-note-13-pro-xanh-thumb-600x600.jpg"
    }
  ];

  // Nếu không có sản phẩm đã xem gần đây, không hiển thị component này
  if (recentlyViewedProducts.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto my-4">
      <div className="bg-white rounded-lg p-4">
        <h2 className="text-lg font-bold mb-4">Sản phẩm đã xem</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recentlyViewedProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-20 h-20 object-contain mb-2" 
              />
              <h3 className="text-xs text-center line-clamp-2 mb-1">{product.name}</h3>
              <span className="text-red-600 text-xs font-medium">
                {product.price.toLocaleString()}₫
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;