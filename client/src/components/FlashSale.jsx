import React, { useRef } from 'react';
/*----------------------------------
-----------------------------------*/
export default function FlashSale() {
    const flashProducts = [
        {
            name: 'Áo ba lỗ nam',
            price: '224.000',
            sold: 14,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLcKHKjB5xod0DMsf71XTj5yq0JKVwddXCqDialmjMsdo9PFTDJdMi_hVWIy3D10htXs&usqp=CAU',
            discount: 10,
        },
        {
            name: 'Sữa rửa mặt',
            price: '104.640',
            sold: 58,
            image: 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/tin-tuc-onpage/dam-xoe-cong-chua/dam-cong-xoe-chua-big-size.jpg',
            discount: 17,
        },
        {
            name: 'Giấy in Deli',
            price: '100.000',
            sold: 'ĐANG BÁN CHẠY',
            image: 'https://tutupetti.com/wp-content/uploads/2023/08/20-08-2023-30-4.jpg',
            discount: 46,
        },
        {
            name: 'Giấy in Deli',
            price: '105.000',
            sold: 'ĐANG BÁN CHẠY',
            image: 'https://product.hstatic.net/1000133495/product/7_a3ed0c2766c54f9087d93c909e95dd9b_master.png',
            discount: 20,
        },
        {
            name: 'Giấy in Deli',
            price: '179.000',
            sold: 'ĐANG BÁN CHẠY',
            image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSVhl183dTsIyUyAoyVSSvLB1asOXYJ5mXrkv-e2ByoNIKAPxcd6rOijico9jxy7IndSWBxPk96Cqd1kGPB7rNpty4LzM2UpkgLDPeB7lKvJUtRoyFT5UvrPQ&usqp=CAc',
            discount: 25,
        },
        {
            name: 'Giấy in Deli',
            price: '287.000',
            sold: 'ĐANG BÁN CHẠY',
            image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSsQakqFw8yLDgl2dAG_WKkovv2eC7l16eGr_66sl4WqUrvkcmSqoKX_aUsq_jDafniRXzHoaX2Yyq3RFJ4YplYXOz2CBi8EYPSubj5CBeXo52D1QxQT-QO0A&usqp=CAc',
            discount: 30,
        },
        {
            name: 'Giấy in Deli',
            price: '101.000',
            sold: 'ĐANG BÁN CHẠY',
            image: 'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2025/04/ao-phong-louis-vuitton-lv-3d-monogram-1aftbj-mau-xanh-vang-size-xs-680b16a74b990-25042025115919.jpg',
            discount: 35,
        },
        {
            name: 'Giấy in Deli',
            price: '540.000',
            sold: 'ĐANG BÁN CHẠY',
            image: 'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/09/ao-phong-nam-louis-vuitton-lv-printed-cotton-tshirt-mau-trang-hoa-tiet-64fbf1ae66b07-09092023111646.jpg',
            discount: 40,
        },
        {
            name: 'Giấy in Deli',
            price: '267.000',
            sold: 'ĐANG BÁN CHẠY',
            image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT5O5znSUVqHm4GTNISFrfzHpt4KZE897oH_Qr9z_NlSs_AQhMupRsfT7-5dUk_0zcTOjv3yrjfsPfGiJyJAfZuYz8d6xJpObd83xjsZ1xW2AhsQCBOn8NP&usqp=CAc',
            discount: 80,
        },
        {
            name: 'Giấy in Deli',
            price: '467.000',
            sold: 'ĐANG BÁN CHẠY',
            image: 'data:image/jpeg;base64,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',
            discount: 26,
        },

    ];

    const productRef = useRef();

    const handleScrollLeft = () => {
        productRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const handleScrollRight = () => {
        productRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    return (
        <div className="bg-white mt-6 p-4 shadow rounded-md border border-gray-200">
            {/* Header Flash Sale */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-black-600">FLASH SALE</h2>
                    <div className="flex gap-1">
                        <span className="bg-black text-white px-2 py-1 rounded text-sm">28</span>
                        <span className="bg-black text-white px-2 py-1 rounded text-sm">4</span>
                        <span className="bg-black text-white px-2 py-1 rounded text-sm">2025</span>
                    </div>
                </div>
                <button className="text-black-500 text-sm hover:underline">Xem tất cả</button>
            </div>

            {/* Product Scroll List with buttons */}
            <div className="relative">
                <div className="flex gap-4 overflow-hidden" ref={productRef}>
                    {flashProducts.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[160px] bg-white border border-gray-200 rounded-md shadow-sm p-2 flex-shrink-0 relative"
                        >
                            {/* Discount badge */}
                            <div className="absolute top-1 right-1 bg-yellow-400 text-xs font-bold px-1 rounded">
                                -{item.discount}%
                            </div>

                            <img src={item.image} alt={item.name} className="w-full h-24 object-contain mb-2" />

                            <div className="text-red-600 font-semibold text-sm">₫ {item.price}</div>

                            <div className="bg-gradient-to-r from-orange-400 to-pink-400 text-white text-xs text-center mt-1 py-0.5 rounded-full">
                                {typeof item.sold === 'number' ? `ĐÃ BÁN ${item.sold}` : item.sold}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

