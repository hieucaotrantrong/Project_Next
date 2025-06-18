import React from 'react';
import { Link } from 'react-router-dom';

const ProductSlider = ({ products }) => {
  // Nếu không có sản phẩm, hiển thị skeleton loading
  if (!products || products.length === 0) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="bg-white p-3 rounded-lg shadow animate-pulse">
            <div className="w-full h-32 bg-gray-200 rounded-md mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {products.map((product, index) => (
        <Link to={`/product/${product.id}`} key={index} className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="relative">
            {product.discount && (
              <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-br-lg">
                -{product.discount}%
              </div>
            )}
            <img 
              src={product.image || "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg"} 
              alt={product.name} 
              className="w-full h-32 object-contain mb-2" 
            />
          </div>
          <h3 className="text-sm font-medium mb-1 line-clamp-2">{product.name || "iPhone 14 Pro Max"}</h3>
          <div className="flex items-center mb-1">
            <span className="text-red-600 font-bold text-sm mr-2">
              {product.price ? `${product.price.toLocaleString()}₫` : "29.990.000₫"}
            </span>
            {product.originalPrice && (
              <span className="text-gray-500 text-xs line-through">
                {product.originalPrice.toLocaleString()}₫
              </span>
            )}
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1">4.9 (89)</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductSlider;