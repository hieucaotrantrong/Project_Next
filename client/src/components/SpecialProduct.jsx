import React, { useState } from 'react';

const SpecialProduct = () => {
  const flashHours = [
    { label: 'Sắp diễn ra', time: '09:00' },
    { label: 'Sắp diễn ra', time: '12:00' },
    { label: 'Sắp diễn ra', time: '15:00' },
    { label: 'Sắp diễn ra', time: '18:00' },
  ];

  const [activeIndex, setActiveIndex] = useState(2); // tab
  const [activeHourIndex, setActiveHourIndex] = useState(0); // giờ
  const [currentPage, setCurrentPage] = useState(1); // trang hiện tại
  const productsPerPage = 4; // số sản phẩm mỗi trang

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

  // Tính toán sản phẩm hiển thị trên trang hiện tại
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Tính tổng số trang
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Hàm chuyển trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-[#f5f7fa] py-6">
      {/* Nội dung khuyến mãi */}
      <div className="max-w-[1200px] mx-auto bg-white rounded-2xl p-7">

        {/* Tiêu đề */}
      <div className="text-2xl font-bold mb-4">
        <h2 className="text-2xl font-bold">Sản Phẩm Đặc Quyền</h2>
      </div>
      
        {/* Danh sách sản phẩm với nút phân trang */}
        <div className="relative max-w-[1200px]">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`absolute left-[400px] top-[180px] w-12 h-12 flex items-center justify-center rounded-full z-10 opacity-70 ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-white text-black hover:bg-gray-100 hover:opacity-100'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
            </svg>
          </button>

          <div className="flex gap-4">
            {/* Banner bên trái */}
            <div className="w-[400px] h-32 mb-2 flex-shrink-0">
                <img
                src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/e8/e1/e8e182cf81dff9d70fc9017070c848c5.png"
                alt="Banner"
                className="w-[800px] h-[430px]"
                />
            </div>

            {/* Danh sách sản phẩm bên phải */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition px-1 flex-grow">
                {currentProducts.map((product, index) => (
                <div
                    key={index}
                    className="bg-white p-4 rounded-lg border"
                >
                    <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-contain mb-2 transition-transform duration-300 ease-in-out hover:scale-105"
                    />
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
            </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`absolute right-[-15px] top-[185px] w-12 h-12 flex items-center justify-center rounded-full z-10 opacity-70 ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-white text-black hover:bg-gray-100 hover:opacity-100'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;