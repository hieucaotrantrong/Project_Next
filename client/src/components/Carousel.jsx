import React from 'react';
import { TECarousel, TECarouselItem } from 'tw-elements-react';
import { Truck, Shirt } from 'lucide-react';

export default function Carousel() {
    return (
        <div className="w-full px-10 py-6">
            <div className="flex items-start justify-between gap-4">
                {/*----------------------------------
                -----------------------------------*/}
                <div className="w-1/4">
                    <div className="flex items-start gap-3 mb-2">
                        <Truck className="text-blue-600" />
                        <div>
                            <h2 className="text-lg font-semibold">Ưu đãi hôm nay</h2>
                            <p className="text-sm text-gray-600">Miễn phí ship toàn quốc</p>
                        </div>
                    </div>

                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Flash Sale</li>
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Freeship</li>
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Đổi trả 7 ngày</li>
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Flash Sale</li>
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Freeship</li>
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Đổi trả 7 ngày</li>
                    </ul>

                </div>
                {/*----------------------------------- 
                Slider bar
                --------------------------------------*/}
                <div className="w-1/2">
                    <TECarousel ride="carousel" showIndicators showControls>
                        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                            <TECarouselItem itemID={1} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                                <img src="https://img.freepik.com/premium-vector/beautiful-merry-christmas-snowflake-banner-template_1035-15756.jpg" className="w-full max-h-64 object-contain" alt="Slide 1" />
                            </TECarouselItem>
                            <TECarouselItem itemID={2} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                                <img src="https://img.freepik.com/premium-vector/beautiful-merry-christmas-snowflake-banner-template_1035-15756.jpg" className="w-full max-h-64 object-contain" alt="Slide 2" />
                            </TECarouselItem>
                            <TECarouselItem itemID={3} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                                <img src="https://lh5.googleusercontent.com/EV0mJCsYUlXoBxuF5q2BRi6_tAfhwd5pkC-WXBczb8KHJPWYO2uZbYLZX-wCb1x0SGQFeIRRD7msEDMZNbu3xeHPEBqiho1-56qAeJ_iUBmaG9nc8p-53hio_MQRk_K-zaJ1gjvt88tqbQ7_LveP1q5NfJc715hJKnWYhhxmGR24lZ9EXAhnQCvx8_qH" className="w-full max-h-64 object-contain" alt="Slide 3" />
                            </TECarouselItem>
                        </div>
                    </TECarousel>
                </div>
                <div className="w-1/4 text-right">
                    <div className="flex justify-end items-start gap-3 mb-2">
                        <div>
                            <h2 className="text-lg font-semibold">100% Cotton</h2>
                            <p className="text-sm text-gray-600">Thoáng mát, dễ chịu</p>
                        </div>
                        <Shirt className="text-green-600" />
                    </div>
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Hàng chính hãng</li>
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Nhập khẩu</li>
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Thời Trang Mới</li>
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Phong cách</li>
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Đặt ngay</li>
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Hoàn tiền 100%</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
