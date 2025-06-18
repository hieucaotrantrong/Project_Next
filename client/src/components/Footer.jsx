import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Main Footer Links */}
      <div className="container mx-auto px-4 py-6 grid grid-cols-4 gap-4 text-sm">
        {/* Tổng đài hỗ trợ */}
        <div>
          <h3 className="font-bold mb-3">Tổng đài hỗ trợ</h3>
          <ul className="space-y-2">
            <li className="flex">
              <span>Gọi mua:</span>
              <a href="tel:1900232460" className="ml-2 text-blue-600 font-medium">1900 232 460</a>
              <span className="ml-2 text-gray-500">(8:00 - 21:30)</span>
            </li>
            <li className="flex">
              <span>Khiếu nại:</span>
              <a href="tel:18001062" className="ml-2 text-blue-600 font-medium">1800.1062</a>
              <span className="ml-2 text-gray-500">(8:00 - 21:30)</span>
            </li>
            <li className="flex">
              <span>Bảo hành:</span>
              <a href="tel:1900232464" className="ml-2 text-blue-600 font-medium">1900 232 464</a>
              <span className="ml-2 text-gray-500">(8:00 - 21:00)</span>
            </li>
          </ul>
        </div>

        {/* Về công ty */}
        <div>
          <h3 className="font-bold mb-3">Về công ty</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500">Giới thiệu công ty (MWG.vn)</a></li>
            <li><a href="#" className="hover:text-blue-500">Tuyển dụng</a></li>
            <li><a href="#" className="hover:text-blue-500">Gửi góp ý, khiếu nại</a></li>
            <li><a href="#" className="hover:text-blue-500">Tìm siêu thị (2.956 shop)</a></li>
          </ul>
        </div>

        {/* Thông tin khác */}
        <div>
          <h3 className="font-bold mb-3">Thông tin khác</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500">Tích điểm Quà tặng VIP</a></li>
            <li><a href="#" className="hover:text-blue-500">Lịch sử mua hàng</a></li>
            <li><a href="#" className="hover:text-blue-500">Đăng ký bán hàng CTV chiết khấu cao</a></li>
            <li><a href="#" className="hover:text-blue-500">Tìm hiểu về mua trả chậm</a></li>
            <li><a href="#" className="hover:text-blue-500">Chính sách bảo hành</a></li>
            <li>
              <button className="flex items-center hover:text-blue-500">
                Xem thêm
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </li>
          </ul>
        </div>

        {/* Website cùng tập đoàn */}
        <div>
          <h3 className="font-bold mb-3">Website cùng tập đoàn</h3>
          <div className="grid grid-cols-2 gap-2">
            <a href="#" className="bg-black text-white px-2 py-1 rounded flex items-center justify-center">
              <span className="text-xs">topzone</span>
            </a>
            <a href="#" className="bg-blue-500 text-white px-2 py-1 rounded flex items-center justify-center">
              <span className="text-xs">Điện máy xanh</span>
            </a>
            <a href="#" className="bg-green-500 text-white px-2 py-1 rounded flex items-center justify-center">
              <span className="text-xs">Bách hóa xanh</span>
            </a>
            <a href="#" className="bg-green-400 text-white px-2 py-1 rounded flex items-center justify-center">
              <span className="text-xs">Nhà thuốc</span>
            </a>
            <a href="#" className="bg-red-500 text-white px-2 py-1 rounded flex items-center justify-center">
              <span className="text-xs">AVA Kids</span>
            </a>
            <a href="#" className="bg-yellow-500 text-white px-2 py-1 rounded flex items-center justify-center">
              <span className="text-xs">Nhà thuốc</span>
            </a>
            <a href="#" className="bg-orange-500 text-white px-2 py-1 rounded flex items-center justify-center">
              <span className="text-xs">4K Farm</span>
            </a>
            <a href="#" className="bg-blue-600 text-white px-2 py-1 rounded flex items-center justify-center">
              <span className="text-xs">Thế giới di động</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="mt-4 flex space-x-2">
            <a href="#" className="flex items-center">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">f</div>
              <span className="ml-1 text-xs">3886.8k Fan</span>
            </a>
            <a href="#" className="flex items-center">
              <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center">Y</div>
              <span className="ml-1 text-xs">874k Đăng ký</span>
            </a>
            <a href="#" className="flex items-center">
              <div className="bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center">Z</div>
              <span className="ml-1 text-xs">Zalo TGDĐ</span>
            </a>
          </div>

          {/* Certifications */}
          <div className="mt-2 flex space-x-2">
            <a href="#" className="border border-gray-300 rounded p-1">
              <div className="text-blue-600 text-xs">DMCA</div>
            </a>
            <a href="#" className="border border-gray-300 rounded p-1">
              <div className="text-red-600 text-xs">sCAN</div>
            </a>
            <a href="#" className="border border-gray-300 rounded p-1">
              <div className="bg-black text-white text-xs px-1">PROTECTED</div>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-100 py-4 text-xs text-gray-600">
        <div className="container mx-auto px-4">
          <p>© 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 04/06/2020.</p>
          <p>Địa chỉ: 128 Trần Quang Khải, P. Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P. Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại: 028.38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Email: huynhvantot@thegioididong.com. Xem chính sách sử dụng</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


