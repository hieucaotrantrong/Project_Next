import React, { useState } from 'react';

const ProductSuggestionSection = () => {
  const [visibleProducts, setVisibleProducts] = useState(12); // Số sản phẩm hiển thị mặc định

  const products = [
    {
      name: 'Samsung Galaxy Tab A9',
      image: 'https://cdn.tgdd.vn/Products/Images/522/315390/samsung-galaxy-tab-a9-den-thumb-600x600.jpg',
      config: 'WiFi 4GB/64GB, TFT LCD, 8.7"',
      originalPrice: '3.890.000đ',
      discountedPrice: '2.690.000đ',
      discount: '30',
      quota: '100.000đ',
      rating: '4.9',
      sold: '9.5k',
    },
    {
      name: 'Dell Inspiron 15 3520 15',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/325242/dell-inspiron-15-3520-i5-n5i5052w1-thumb-638754947183265925-600x600.jpg',
      config: 'i3 1215U (N5050Z2W1), RAM 16 GB, SSD 512 GB',
      originalPrice: '16.490.000đ',
      discountedPrice: '13.490.000đ',
      discount: '18',
      quota: '100.000đ',
      rating: '4.5',
      sold: '8.8k',
    },
    {
      name: 'Dell Vostro 3520 15 1235U',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/326194/dell-vostro-3520-i5-71030559-thumb-638754955875183877-600x600.jpg',
      config: 'i5 1235U (7103059), RAM 16 GB, SSD 512 GB',
      originalPrice: '16.490.000đ',
      discountedPrice: '13.490.000đ',
      discount: '18',
      quota: '100.000đ',
      rating: '4.9',
      sold: '2.5k',
    },
    {
      name: 'Xiaomi Redmi Pad SE',
      image: 'https://cdn.tgdd.vn/Products/Images/522/315607/xiaomi-pad-se-xanh-thumb-600x600.jpg',
      config: 'WiFi 4GB/128GB, IPS LCD, 11"',
      originalPrice: '4.490.000đ',
      discountedPrice: '3.490.000đ',
      discount: '22',
      quota: '700.000đ',
      rating: '4.9',
      sold: '24.7k',
    },
    {
      name: 'Samsung Galaxy Tab A9+',
      image: 'https://cdn.tgdd.vn/Products/Images/522/317623/samsung-galaxy-a9-plus-den-thumb-600x600.jpg',
      config: '5G 4GB/64GB, TFT LCD, 11"',
      originalPrice: '7.490.000đ',
      discountedPrice: '5.990.000đ',
      discount: '20',
      quota: '1.600.000đ',
      rating: '4.9',
      sold: '21.7k',
    },
    {
      name: 'Dell Inspiron 15 3520 15',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/328944/dell-inspiron-15-3520-i5-71043883-thumb-638754980567165844-600x600.jpg',
      config: 'i5 1235U (71043883), RAM 16 GB, SSD 512 GB',
      originalPrice: '16.490.000đ',
      discountedPrice: '13.490.000đ',
      discount: '18',
      quota: '100.000đ',
      rating: '4.9',
      sold: '1.5k',
    },
    // Thêm các sản phẩm khác nếu cần để test "Xem thêm"
    {
      name: 'Product 7',
      image: 'https://cdn.tgdd.vn/Products/Images/522/325988/redmi-pad-pro-grey-thumb-1-600x600.jpg',
      config: 'Config 7',
      originalPrice: '10.000.000đ',
      discountedPrice: '8.000.000đ',
      discount: '20',
      quota: '200.000đ',
      rating: '4.8',
      sold: '5k',
    },
    {
      name: 'Product 8',
      image: 'https://cdn.tgdd.vn/Products/Images/522/320990/tcl-tab-10-gen-2-thumb-600x600.jpg',
      config: 'Config 8',
      originalPrice: '12.000.000đ',
      discountedPrice: '9.000.000đ',
      discount: '25',
      quota: '300.000đ',
      rating: '4.7',
      sold: '3k',
    },
    {
      name: 'Product 9',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/328473/dell-vostro-3530-i5-80gg93-thumb-638754980276667501-600x600.jpg',
      config: 'Config 9',
      originalPrice: '15.000.000đ',
      discountedPrice: '12.000.000đ',
      discount: '20',
      quota: '400.000đ',
      rating: '4.9',
      sold: '7k',
    },
    {
      name: 'Product 10',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/323920/hp-15-fd0234tu-i5-9q969pa-170225-105831-192-600x600.jpg',
      config: 'Config 10',
      originalPrice: '8.000.000đ',
      discountedPrice: '6.000.000đ',
      discount: '25',
      quota: '150.000đ',
      rating: '4.6',
      sold: '4k',
    },
    {
      name: 'Product 11',
      image: 'https://cdn.tgdd.vn/Products/Images/522/320989/tcl-tab-10l-gen-2-black-thumb-600x600.jpg',
      config: 'Config 11',
      originalPrice: '9.000.000đ',
      discountedPrice: '7.000.000đ',
      discount: '22',
      quota: '200.000đ',
      rating: '4.8',
      sold: '6k',
    },
    {
      name: 'Product 12',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/323920/hp-15-fd0234tu-i5-9q969pa-170225-105831-192-600x600.jpg',
      config: 'Config 12',
      originalPrice: '11.000.000đ',
      discountedPrice: '8.500.000đ',
      discount: '23',
      quota: '250.000đ',
      rating: '4.7',
      sold: '5k',
    },
    {
      name: 'Product 13',
      image: 'https://cdn.tgdd.vn/Products/Images/522/320989/tcl-tab-10l-gen-2-black-thumb-600x600.jpg',
      config: 'Config 13',
      originalPrice: '13.000.000đ',
      discountedPrice: '10.000.000đ',
      discount: '23',
      quota: '300.000đ',
      rating: '4.9',
      sold: '8k',
    },
    {
      name: 'Product 14',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/323920/hp-15-fd0234tu-i5-9q969pa-170225-105831-192-600x600.jpg',
      config: 'Config 14',
      originalPrice: '14.000.000đ',
      discountedPrice: '11.000.000đ',
      discount: '21',
      quota: '350.000đ',
      rating: '4.6',
      sold: '4k',
    },
    {
      name: 'Product 15',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/323920/hp-15-fd0234tu-i5-9q969pa-170225-105831-192-600x600.jpg',
      config: 'Config 15',
      originalPrice: '16.000.000đ',
      discountedPrice: '12.000.000đ',
      discount: '25',
      quota: '400.000đ',
      rating: '4.8',
      sold: '6k',
    },
  ];

  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 12);
  };

  const currentProducts = products.slice(0, visibleProducts);

  return (
    <div className="bg-[#f5f7fa] py-6">
      <div className="bg-white max-w-[1200px] rounded-2xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">Gợi ý cho bạn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {currentProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border"
            >
              <img src={product.image} alt={product.name} className="w-full h-32 object-contain mb-2" />
              <h3 className="text-lg text-[14px]">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.config}</p>
              <div className="text-red-600 font-bold text-xl mt-2">{product.discountedPrice}</div>
              <div className="text-gray-400 text-[12px] line-through">{product.originalPrice}</div>
              <div className="text-black">Quà {product.quota}đ</div>
              <div className="text-yellow-600 mt-1">
                ★ {product.rating} • Đã bán {product.sold}
              </div>
            </div>
          ))}
        </div>
        {visibleProducts < products.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleLoadMore}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Xem thêm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSuggestionSection;