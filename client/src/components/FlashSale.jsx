import React, { useState } from 'react';

const FlashSaleSection = () => {
  const tabs = [
    {
      label: '',
      image: 'https://cdnv2.tgdd.vn/mwg-static/common/Campaign/10/0d/100d3018ffd23afe20324b164d0412cc.png',
    },
    {
      label: '',
      image: 'https://cdnv2.tgdd.vn/mwg-static/common/Campaign/d4/17/d4177404ab82e04867a0fd79bb903450.png',
    },
    { label: 'Điện Thoại' },
    { label: 'Apple' },
    { label: 'Laptop' },
    { label: 'Phụ Kiện' },
    { label: 'Đồng Hồ' },
    { label: 'PC, Máy in' },
  ];

  const flashHours = [
    { label: 'Sắp diễn ra', time: '09:00' },
    { label: 'Sắp diễn ra', time: '12:00' },
    { label: 'Sắp diễn ra', time: '15:00' },
    { label: 'Sắp diễn ra', time: '18:00' },
  ];

  const [activeIndex, setActiveIndex] = useState(2); // tab
  const [activeHourIndex, setActiveHourIndex] = useState(0); // giờ
  const [currentPage, setCurrentPage] = useState(1); // trang hiện tại
  const productsPerPage = 12; // số sản phẩm mỗi trang

  const products = [
    {
      name: 'Samsung Galaxy M35 5G 8GB/256GB',
      price: '7.590.000đ',
      oldPrice: '8.790.000đ',
      discount: '-13%',
      image: 'https://cdn.tgdd.vn/Products/Images/42/322670/samsung-galaxy-a55-5g-blue-thumb-600x600.jpg',
      sold: 'Còn 17/20 suất',
    },
    {
      name: 'Xmobile 22.5W DX367 tích hợp Adapter sạc',
      price: '570.000đ',
      oldPrice: '800.000đ',
      discount: '-28%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/57/335544/sac-du-phong-polymer-10000mah-3in1-magnetic-pd-qc-3-0-22-5w-xmobile-dx367-thumb-1-638773088604877770-600x600.jpg',
      sold: 'Còn 13/15 suất',
    },
    {
      name: 'Chuột Có dây Gaming Rapoo V10SE',
      price: '90.000đ',
      oldPrice: '110.000đ',
      discount: '-18%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/86/339137/chuot-co-day-gaming-rapoo-v10s-070625-033053-694-600x600.jpg',
      sold: 'Còn 2/10 suất',
    },
    {
      name: 'Quạt cầm tay mini Hydrus JF-91',
      price: '370.000đ',
      oldPrice: '420.000đ',
      discount: '-11%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7922/336957/quat-cam-tay-mini-hydrus-jf-91-thumb-638808341630889023-600x600.jpg',
      sold: 'Còn 5/10 suất',
    },
    {
      name: 'Tai nghe TWS AVA+ Go P310',
      price: '220.000đ',
      oldPrice: '250.000đ',
      discount: '-12%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/54/330709/tai-nghe-bluetooth-true-wireless-ava-go-p310-081024-024322-274-600x600.jpg',
      sold: 'Còn 8/10 suất',
    },
    {
      name: 'CITIZEN 40 mm Nam BI5120-51X',
      price: '2.395.000đ',
      oldPrice: '3.685.000đ',
      discount: '-35%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7264/333111/citizen-bi5120-51x-nam-thumb-638702012942709039-600x600.jpg',
      sold: 'Còn 4/5 suất',
    },
    {
      name: 'Samsung Galaxy M35 5G 8GB/256GB',
      price: '7.590.000đ',
      oldPrice: '8.790.000đ',
      discount: '-13%',
      image: 'https://cdn.tgdd.vn/Products/Images/42/323563/samsung-galaxy-m35-5g-xanhdam-thumb-600x600.jpg',
      sold: 'Còn 17/20 suất',
    },
    {
      name: 'Xmobile 22.5W DX367 tích hợp Adapter sạc',
      price: '570.000đ',
      oldPrice: '800.000đ',
      discount: '-28%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/57/335544/sac-du-phong-polymer-10000mah-3in1-magnetic-pd-qc-3-0-22-5w-xmobile-dx367-thumb-1-638773088604877770-600x600.jpg',
      sold: 'Còn 13/15 suất',
    },
    {
      name: 'Chuột Có dây Gaming Rapoo V10SE',
      price: '90.000đ',
      oldPrice: '110.000đ',
      discount: '-18%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/86/339137/chuot-co-day-gaming-rapoo-v10s-070625-033053-694-600x600.jpg',
      sold: 'Còn 2/10 suất',
    },
    {
      name: 'Quạt cầm tay mini Hydrus JF-91',
      price: '370.000đ',
      oldPrice: '420.000đ',
      discount: '-11%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7922/336957/quat-cam-tay-mini-hydrus-jf-91-thumb-638808341630889023-600x600.jpg',
      sold: 'Còn 5/10 suất',
    },
    {
      name: 'Tai nghe TWS AVA+ Go P310',
      price: '220.000đ',
      oldPrice: '250.000đ',
      discount: '-12%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/54/330709/tai-nghe-bluetooth-true-wireless-ava-go-p310-081024-024322-274-600x600.jpg',
      sold: 'Còn 8/10 suất',
    },
    {
      name: 'CITIZEN 40 mm Nam BI5120-51X',
      price: '2.395.000đ',
      oldPrice: '3.685.000đ',
      discount: '-35%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7264/333111/citizen-bi5120-51x-nam-thumb-638702012942709039-600x600.jpg',
      sold: 'Còn 4/5 suất',
    },
    {
      name: 'Xmobile 22.5W DX367 tích hợp Adapter sạc',
      price: '570.000đ',
      oldPrice: '800.000đ',
      discount: '-28%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/57/335544/sac-du-phong-polymer-10000mah-3in1-magnetic-pd-qc-3-0-22-5w-xmobile-dx367-thumb-1-638773088604877770-600x600.jpg',
      sold: 'Còn 13/15 suất',
    },
    {
      name: 'Chuột Có dây Gaming Rapoo V10SE',
      price: '90.000đ',
      oldPrice: '110.000đ',
      discount: '-18%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/86/339137/chuot-co-day-gaming-rapoo-v10s-070625-033053-694-600x600.jpg',
      sold: 'Còn 2/10 suất',
    },
    {
      name: 'Quạt cầm tay mini Hydrus JF-91',
      price: '370.000đ',
      oldPrice: '420.000đ',
      discount: '-11%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7922/336957/quat-cam-tay-mini-hydrus-jf-91-thumb-638808341630889023-600x600.jpg',
      sold: 'Còn 5/10 suất',
    },
    {
      name: 'Tai nghe TWS AVA+ Go P310',
      price: '220.000đ',
      oldPrice: '250.000đ',
      discount: '-12%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/54/330709/tai-nghe-bluetooth-true-wireless-ava-go-p310-081024-024322-274-600x600.jpg',
      sold: 'Còn 8/10 suất',
    },
    {
      name: 'CITIZEN 40 mm Nam BI5120-51X',
      price: '2.395.000đ',
      oldPrice: '3.685.000đ',
      discount: '-35%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7264/333111/citizen-bi5120-51x-nam-thumb-638702012942709039-600x600.jpg',
      sold: 'Còn 4/5 suất',
    },
     {
      name: 'Samsung Galaxy M35 5G 8GB/256GB',
      price: '7.590.000đ',
      oldPrice: '8.790.000đ',
      discount: '-13%',
      image: 'https://cdn.tgdd.vn/Products/Images/42/322670/samsung-galaxy-a55-5g-blue-thumb-600x600.jpg',
      sold: 'Còn 17/20 suất',
    },
    {
      name: 'Xmobile 22.5W DX367 tích hợp Adapter sạc',
      price: '570.000đ',
      oldPrice: '800.000đ',
      discount: '-28%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/57/335544/sac-du-phong-polymer-10000mah-3in1-magnetic-pd-qc-3-0-22-5w-xmobile-dx367-thumb-1-638773088604877770-600x600.jpg',
      sold: 'Còn 13/15 suất',
    },
    {
      name: 'Chuột Có dây Gaming Rapoo V10SE',
      price: '90.000đ',
      oldPrice: '110.000đ',
      discount: '-18%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/86/339137/chuot-co-day-gaming-rapoo-v10s-070625-033053-694-600x600.jpg',
      sold: 'Còn 2/10 suất',
    },
    {
      name: 'Quạt cầm tay mini Hydrus JF-91',
      price: '370.000đ',
      oldPrice: '420.000đ',
      discount: '-11%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7922/336957/quat-cam-tay-mini-hydrus-jf-91-thumb-638808341630889023-600x600.jpg',
      sold: 'Còn 5/10 suất',
    },
    {
      name: 'Tai nghe TWS AVA+ Go P310',
      price: '220.000đ',
      oldPrice: '250.000đ',
      discount: '-12%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/54/330709/tai-nghe-bluetooth-true-wireless-ava-go-p310-081024-024322-274-600x600.jpg',
      sold: 'Còn 8/10 suất',
    },
    {
      name: 'CITIZEN 40 mm Nam BI5120-51X',
      price: '2.395.000đ',
      oldPrice: '3.685.000đ',
      discount: '-35%',
      image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7264/333111/citizen-bi5120-51x-nam-thumb-638702012942709039-600x600.jpg',
      sold: 'Còn 4/5 suất',
    },
    {
      name: 'Samsung Galaxy M35 5G 8GB/256GB',
      price: '7.590.000đ',
      oldPrice: '8.790.000đ',
      discount: '-13%',
      image: 'https://cdn.tgdd.vn/Products/Images/42/323563/samsung-galaxy-m35-5g-xanhdam-thumb-600x600.jpg',
      sold: 'Còn 17/20 suất',
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
      {/* Tiêu đề */}
      <div className="flex justify-between items-center mb-5 max-w-[1200px] mx-16 px-4">
        <h2 className="text-2xl font-bold">Khuyến mãi Online</h2>
      </div>

      {/* Tabs */}
      <div className="max-w-[1200px] bg-white rounded-t-2xl overflow-hidden ml-[76px]">
        <div className="max-w-[1200px] h-[62px] mx-auto flex rounded-t-lg overflow-hidden">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex-1 h-15 px-2 flex justify-center items-center border-b-[3px] transition duration-200
                ${activeIndex === index
                  ? 'bg-orange-50 border-orange-500 text-orange-500 font-semibold'
                  : 'border-transparent hover:text-orange-500'}`}
            >
              {tab.image ? (
                <img src={tab.image} alt={`tab-${index}`} className="h-11" />
              ) : (
                tab.label
              )}
            </button>
          ))}
        </div>
        <div className="border-b border-gray-200 mb-[0.2px]"></div>
      </div>

      {/* Nội dung khuyến mãi */}
      <div className="max-w-[1200px] mx-auto bg-white rounded-b-lg p-7">
        {/* Thời gian khuyến mãi */}
        <div className="flex justify-center mb-4 mt-[-10px]">
          <div className="flex gap-4 bg-[#f5f7fa] px-1 py-2 rounded-3xl">
            {flashHours.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveHourIndex(index)}
                className={`px-10 py-[5px] rounded-2xl text-center cursor-pointer transition-all duration-200 ${
                  activeHourIndex === index
                    ? 'bg-[#ecb02e] text-white shadow-md'
                    : 'text-gray-700 hover:text-[#ecb02e]'
                }`}
              >
                <div className="text-center leading-[30px]">
                  <div className="text-[15px] font-medium">{item.label}</div>
                  <div className="font-semibold">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Danh sách sản phẩm với nút phân trang */}
        <div className="relative max-w-[1200px]">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`absolute left-[-15px] top-[300px] w-12 h-12 flex items-center justify-center rounded-full z-10 opacity-70 ${
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[10px]">
            {currentProducts.map((item, index) => (
              <div
                key={index}
                onClick={() => alert(`Mua: ${item.name}`)}
                className="bg-white border rounded-lg p-3 shadow-sm text-[14px] cursor-pointer hover:shadow-md transition px-1"
              >
                <div className="relative h-33 flex items-center justify-center mb-3 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                  <div className="absolute top-1 right-1 bg-yellow-400 text-[10px] font-bold px-1 rounded">
                    {item.discount}
                  </div>
                </div>
                <div className="font-normal h-[40px] overflow-hidden text-ellipsis">
                  {item.name}
                </div>
                <div className="text-red-600 font-bold mt-1 text-[18px]">{item.price}</div>
                <div className="line-through text-gray-400 text-xs">{item.oldPrice}</div>
                <div className="mt-1 bg-yellow-100 text-xs text-gray-800 px-1 py-0.5 rounded flex items-center justify-center">
                  <span className="mr-1">🔥</span>
                  {item.sold}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`absolute right-[-15px] top-[300px] w-12 h-12 flex items-center justify-center rounded-full z-10 opacity-70 ${
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

export default FlashSaleSection;