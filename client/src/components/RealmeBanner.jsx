
import React from 'react';
import { Link } from 'react-router-dom';

const RealmeBanner = () => {
  
  const promotions = [
    {
      id: 1,
      title: "vivo V50 Lite",
      image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/11/fe/11feb4bedec3bd178af80639c182f4e4.png",
      link: "/vivo-v50-lite"
    },
    {
      id: 2,
      title: "Đặc quyền đẳng cấp",
      image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/11/47/1147379ef1f33da2ed1f9683f33a0528.png",
      link: "/iphone-15"
    },
    {
      id: 3,
      title: "Hè nóng giá mát",
      image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/6e/19/6e19a4b80751926022a2c61dd7496b0c.png",
      link: "/gia-dung"
    },
    {
      id: 4,
      title: "Chào hè rực rỡ",
      image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/83/45/8345f560bb4adf8ac791e4fbbcab1a9e.png",
      link: "/phu-kien"
    }
  ];

  const popularSearches = [
    "iphone 16", "iphone 16 pro", "iphone 16 pro max", "Samsung Galaxy Tab S9", "Lenovo Tab M11",
    "iphone 15", "iphone 15 plus", "iphone 15 pro", "tai nghe airpods", "airpods 4", "airpods 4 anc",
    "Samsung Galaxy S24", "Samsung Galaxy S24 Ultra", "Xiaomi 14T Pro", "Xiaomi Redmi Note 13",
    "OPPO Find X7 Ultra", "OPPO Reno 12", "Vivo V30", "Vivo X100 Pro", "Realme GT 5 Pro",
    "iPad Pro M4", "iPad Air M2", "MacBook Air M3", "MacBook Pro M3 Max", "Apple Watch Series 10",
    "Samsung Galaxy Watch 7", "Galaxy Buds 3 Pro", "Sony WH-1000XM5", "Bose QuietComfort Ultra",
    "Nintendo Switch 2", "PlayStation 5 Pro", "Xbox Series X"
  ];

  return (
    <div className="container mx-auto my-4">
      {/* Banner Tuần Lễ realme */}
      <div className="mb-4 w-[1200px] mx-auto">
        <h2 className="font-semibold text-2xl mb-2">Tuần Lễ realme</h2>
        <div className="rounded-lg overflow-hidden">
          <Link to="/realme-c71">
            <img 
              src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/7a/36/7a36b849dd9af9203ff19e291fa97583.png" 
              alt="Realme C71" 
              className="w-full h-[380px] object-cover rounded-[8px]"
            />
          </Link>
        </div>
      </div>
      
      {/* Gian hàng ưu đãi */}
      <div className="mt-4 w-[1200px] mx-auto">
        <h2 className="font-semibold text-2xl mb-2">Gian hàng ưu đãi</h2>
        <div className="grid grid-cols-4 gap-4">
          {promotions.map(promo => (
            <div key={promo.id} className="rounded-lg overflow-hidden">
              <Link to={promo.link} className="block">
                <img 
                  src={promo.image} 
                  alt={promo.title} 
                  className="w-[288px] h-[467.11px] object-cover rounded-[8px]"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
     
      {/* Tin tức */}
      <div className="bg-white rounded-lg mt-8 w-[1200px] mx-auto">
        <h2 className="font-semibold text-2xl mb-1 p-4 pb-2">Mạng xã hội thegioididong.com</h2>
        <div className="grid grid-cols-4 gap-4 px-4">
          <div>
            <Link to="/coupon-promotion" className="block">
              <img 
                src="https://cdnv2.tgdd.vn/mwg-static/common/News/Thumb/1575170/3TRIEU2638858547545507070.jpg" 
                alt="Tặng phiếu mua hàng 3 triệu" 
                className="w-full h-[162px] object-cover rounded-[8px]"
              />
            </Link>
            <p className="text-sm mt-2">Mua điện thoại tại TGDĐ sẽ được tặng coupon 3 triệu mua phụ kiện và smartwatch</p>
          </div>
          
          <div>
            <Link to="/excel-tips" className="block">
              <img 
                src="https://cdnv2.tgdd.vn/mwg-static/common/Common/3-cach-chen-anh-vao-excel-tren-dien-thoai-va-may-tinh-thumbs.jpg" 
                alt="Chèn ảnh vào Excel" 
                className="w-full h-[162px] object-cover rounded-[8px]"
              />
            </Link>
            <p className="text-sm mt-2">3 cách chèn ảnh vào Excel trên máy tính, điện thoại siêu nhanh</p>
          </div>
          
          <div>
            <Link to="/trump-mobile" className="block">
              <img 
                src="https://cdnv2.tgdd.vn/mwg-static/tgdd/News/Thumb/1579054/TRU07638857595591978252.jpg" 
                alt="Trump Mobile" 
                className="w-full h-[162px] object-cover rounded-[8px]"
              />
            </Link>
            <p className="text-sm mt-2">Gia đình tổng thống Trump ra mắt mạng di động Trump Mobile và điện thoại T1 Phone</p>
          </div>
          
          <div>
            <Link to="/disk-check-software" className="block">
              <img 
                src="https://cdnv2.tgdd.vn/mwg-static/common/Common/5-phan-mem-test-o-cung-hdd-chinh-xac-nhat-tren-may-thumb.jpg" 
                alt="Phần mềm kiểm tra ổ cứng" 
                className="w-full h-[162px] object-cover rounded-[8px]"
              />
            </Link>
            <p className="text-sm mt-2">TOP 11 phần mềm kiểm tra ổ cứng SSD, HDD chính xác, nhanh chóng</p>
          </div>
        </div>
        
        <div className="flex justify-center py-4">
          <Link to="/news" className="text-blue-500 text-sm flex items-center">
            Xem thêm
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Mọi người cùng tìm kiếm */}
      <div className="bg-white rounded-lg mt-8 w-[1200px] mx-auto">
        <h2 className="font-semibold text-2xl mb-2 p-4">Mọi người cùng tìm kiếm</h2>
        <div className="flex flex-wrap gap-2 px-4 pb-4">
          {popularSearches.map((term, index) => (
            <a key={index} href="#" className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 mb-2">{term}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealmeBanner;

















