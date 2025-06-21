import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Phần footer cuối cùng */}
      <div className="bg-white py-4 border-t">
        <div className="w-[1200px] mx-auto">
          <div className="flex justify-between">
            {/* Tổng đài hỗ trợ */}
            <div className="w-1/4">
              <h3 className="font-bold mb-3 text-base">Tổng đài hỗ trợ</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="text-sm">Gọi mua:</span>
                  <a href="tel:1900232460" className="ml-2 text-blue-600 font-medium text-sm">1900 232 460</a>
                  <span className="ml-2 text-gray-500 text-sm">(8:00 - 21:30)</span>
                </li>
                <li className="flex">
                  <span className="text-sm">Khiếu nại:</span>
                  <a href="tel:18001062" className="ml-2 text-blue-600 font-medium text-sm">1800.1062</a>
                  <span className="ml-2 text-gray-500 text-sm">(8:00 - 21:30)</span>
                </li>
                <li className="flex">
                  <span className="text-sm">Bảo hành:</span>
                  <a href="tel:1900232464" className="ml-2 text-blue-600 font-medium text-sm">1900 232 464</a>
                  <span className="ml-2 text-gray-500 text-sm">(8:00 - 21:00)</span>
                </li>
              </ul>
            </div>

            {/* Về công ty */}
            <div className="w-1/4 pl-2">
              <h3 className="font-bold mb-3 text-base">Về công ty</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500 text-sm">Giới thiệu công ty (MWG.vn)</a></li>
                <li><a href="#" className="hover:text-blue-500 text-sm">Tuyển dụng</a></li>
                <li><a href="#" className="hover:text-blue-500 text-sm">Gửi góp ý, khiếu nại</a></li>
                <li><a href="#" className="hover:text-blue-500 text-sm">Tìm siêu thị (2.956 shop)</a></li>
              </ul>
            </div>

            {/* Thông tin khác */}
            <div className="w-1/4 -ml-10">
              <h3 className="font-bold mb-3 text-base">Thông tin khác</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500 text-sm">Tích điểm Quà tặng VIP</a></li>
                <li><a href="#" className="hover:text-blue-500 text-sm">Lịch sử mua hàng</a></li>
                <li><a href="#" className="hover:text-blue-500 text-sm">Đăng ký bán hàng CTV chiết khấu cao</a></li>
                <li><a href="#" className="hover:text-blue-500 text-sm">Tìm hiểu về mua trả chậm</a></li>
                <li><a href="#" className="hover:text-blue-500 text-sm">Chính sách bảo hành</a></li>
                <li><a href="#" className="hover:text-blue-500 flex items-center text-sm">
                  Xem thêm
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a></li>
              </ul>
            </div>

            {/* Website cùng tập đoàn */}
            <div className="f-website pl-4">
              <div className="footer__logo">
                <p className="footer__logo-hd mb-3 text-base">Website cùng tập đoàn</p>
                <ul className="grid grid-cols-4 gap-2 mt-2">
                  <li className="p-1 flex items-center justify-start h-[24px]">
                    <a rel="nofollow" href="https://www.topzone.vn/" target="_blank" title="Chuỗi cửa hàng cao cấp Apple">
                      <img src="https://cdnv2.tgdd.vn/webmwg/2024/ContentMwg/images/logo_thodmx-dtv2.png" alt="logo topzone" 
                           className="h-[24px] w-[80px] object-contain rounded-md" />
                    </a>
                  </li>
                  <li className="p-1 flex items-center justify-start h-[24px]">
                    <a rel="nofollow" href="https://www.dienmayxanh.com/" target="_blank">
                      <img src="https://cdnv2.tgdd.vn/webmwg/2024/ContentMwg/images/logo_thodmx-dtv2.png" alt="logo dienmayxanh" 
                           className="h-[24px] w-[80px] object-contain rounded-md" />
                    </a>
                  </li>
                  <li className="p-1 flex items-center justify-start h-[24px]">
                    <a rel="nofollow" href="https://www.dienmayxanh.com/" target="_blank">
                      <img src="https://cdnv2.tgdd.vn/webmwg/2024/ContentMwg/images/logo_thodmx-dtv2.png" alt="logo dienmayxanh" 
                           className="h-[24px] w-[80px] object-contain rounded-md" />
                    </a>
                  </li>
                  <li className="p-1 flex items-center justify-start h-[24px]">
                    <a rel="nofollow" href="https://www.dienmayxanh.com/" target="_blank">
                      <img src="https://cdnv2.tgdd.vn/webmwg/2024/ContentMwg/images/logo_thodmx-dtv2.png" alt="logo dienmayxanh" 
                           className="h-[24px] w-[80px] object-contain rounded-md" />
                    </a>
                  </li>
                  <li className="p-1 flex items-center justify-start h-[24px]">
                    <a rel="nofollow" href="https://www.dienmayxanh.com/" target="_blank">
                      <img src="https://cdnv2.tgdd.vn/webmwg/2024/ContentMwg/images/logo_thodmx-dtv2.png" alt="logo dienmayxanh" 
                           className="h-[24px] w-[80px] object-contain rounded-md" />
                    </a>
                  </li>
                  <li className="p-1 flex items-center justify-start h-[24px]">
                    <a rel="nofollow" href="https://www.dienmayxanh.com/" target="_blank">
                      <img src="https://cdnv2.tgdd.vn/webmwg/2024/ContentMwg/images/logo_thodmx-dtv2.png" alt="logo dienmayxanh" 
                           className="h-[24px] w-[80px] object-contain rounded-md" />
                    </a>
                  </li>
                  <li className="p-1 flex items-center justify-start h-[24px]">
                    <a rel="nofollow" href="https://www.dienmayxanh.com/" target="_blank">
                      <img src="https://cdnv2.tgdd.vn/webmwg/2024/ContentMwg/images/logo_thodmx-dtv2.png" alt="logo dienmayxanh" 
                           className="h-[24px] w-[80px] object-contain rounded-md" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="f-social mt-4">
                <ul className="flex items-center gap-4">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs mr-1">f</span>
                    <span className="text-blue-600">3886.8k Fan</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white text-xs mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                      </svg>
                    </span>
                    <span className="text-blue-600">874k Đăng ký</span>
                  </li>
                  <li className="flex items-center">
                    <img src="https://cdnv2.tgdd.vn/webmwg/2024/ContentMwg/images/icon_zalo.png" alt="Zalo icon" className="w-5 h-5 mr-1" />
                    <span className="text-purple-600">Zalo TGDĐ</span>
                  </li>
                </ul>
                
                <div className="flex items-center gap-4 mt-3">
              
                  <a href="http://online.gov.vn/" target="_blank" rel="nofollow">
                    <img src="https://cdnv2.tgdd.vn/webmwg/2024/tz/images/certify-bct.png" alt="Bộ Công Thương" className="h-[24px] w-[79px]" />
                  </a>
                  <a href="https://www.dmca.com/Protection/Status.aspx" target="_blank" rel="nofollow">
                    <img src="https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=4f44c8e7-b645-4ddb-8aec-c130d0598c85https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=4f44c8e7-b645-4ddb-8aec-c130d0598c85" alt="DMCA Protected" className="h-[24px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-4 text-[12px] text-gray-600">
            <p>© 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 04/06/2020.</p>
            <p>
              Địa chỉ: 128 Trần Quang Khải, P. Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P. Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại: 028.38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Email: huynhvantot@thegioididong.com. 
              <a href="#" className="text-blue-600 ml-1">Xem chính sách sử dụng</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
























