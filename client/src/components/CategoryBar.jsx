import React from 'react';
import { Link } from 'react-router-dom';

const CategoryBar = () => {
  const categories = [
    { name: 'Điện thoại', icon: 'phone' },
    { name: 'Laptop', icon: 'laptop' },
    { name: 'Tablet', icon: 'tablet' },
    { name: 'Phụ kiện', icon: 'headphones' },
    { name: 'Đồng hồ', icon: 'watch' },
    { name: 'PC, Máy in', icon: 'desktop' },
    { name: 'Máy cũ giá rẻ', icon: 'tag' },
    { name: 'Sim, thẻ cào', icon: 'sim-card' },
    { name: 'Dịch vụ tiện ích', icon: 'tool' }
  ];

  return (
    <div className="bg-white py-2 shadow-md">
      <div className="container mx-auto">
        <div className="grid grid-cols-9 gap-2">
          {categories.map((category, index) => (
            <Link key={index} to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                <i className={`fas fa-${category.icon} text-gray-600`}></i>
              </div>
              <span className="text-xs text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;