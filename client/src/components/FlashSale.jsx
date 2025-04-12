import React from 'react';

export default function FlashSale() {
    const flashProducts = [
        {
            name: 'Áo ba lỗ nam',
            price: '224.000',
            sold: 14,
            image: 'https://product.hstatic.net/1000133495/product/7_a3ed0c2766c54f9087d93c909e95dd9b_master.png',
            discount: 10,
        },
        {
            name: 'Sữa rửa mặt',
            price: '104.640',
            sold: 58,
            image: 'https://product.hstatic.net/1000133495/product/7_a3ed0c2766c54f9087d93c909e95dd9b_master.png',
            discount: 17,
        },
        {
            name: 'Giấy in Deli',
            price: '67.000',
            sold: 'ĐANG BÁN CHẠY',
            image: 'https://product.hstatic.net/1000133495/product/7_a3ed0c2766c54f9087d93c909e95dd9b_master.png',
            discount: 46,
        },
        {
            name: 'Giấy in Deli',
            price: '67.000',
            sold: 'ĐANG BÁN CHẠY',
            image: 'https://product.hstatic.net/1000133495/product/7_a3ed0c2766c54f9087d93c909e95dd9b_master.png',
            discount: 46,
        },
        {
            name: 'Giấy in Deli',
            price: '67.000',
            sold: 'ĐANG BÁN CHẠY',
            image: 'https://product.hstatic.net/1000133495/product/7_a3ed0c2766c54f9087d93c909e95dd9b_master.png',
            discount: 46,
        },
        {
            name: 'Giấy in Deli',
            price: '67.000',
            sold: 'ĐANG BÁN CHẠY',
            image: 'https://product.hstatic.net/1000133495/product/7_a3ed0c2766c54f9087d93c909e95dd9b_master.png',
            discount: 46,
        },
        {
            name: 'Giấy in Deli',
            price: '67.000',
            sold: 'ĐANG BÁN CHẠY',
            image: 'https://product.hstatic.net/1000133495/product/7_a3ed0c2766c54f9087d93c909e95dd9b_master.png',
            discount: 46,
        }
        , {
            name: 'Giấy in Deli',
            price: '67.000',
            sold: 'ĐANG BÁN CHẠY',
            image: 'https://product.hstatic.net/1000133495/product/7_a3ed0c2766c54f9087d93c909e95dd9b_master.png',
            discount: 46,
        }, {
            name: 'Giấy in Deli',
            price: '67.000',
            sold: 'ĐANG BÁN CHẠY',
            image: 'https://product.hstatic.net/1000133495/product/7_a3ed0c2766c54f9087d93c909e95dd9b_master.png',
            discount: 46,
        }

    ];

    return (
        <div className="bg-white mt-6 p-4 shadow rounded-md border border-gray-200">
            {/* Header Flash Sale */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-black-600">FLASH SALE</h2>
                    <div className="flex gap-1">
                        <span className="bg-black text-white px-2 py-1 rounded text-sm">01</span>
                        <span className="bg-black text-white px-2 py-1 rounded text-sm">14</span>
                        <span className="bg-black text-white px-2 py-1 rounded text-sm">01</span>
                    </div>
                </div>
                <button className="text-black-500 text-sm hover:underline">Xem tất cả &gt;</button>
            </div>

            {/* Product Scroll List */}
            <div className="flex overflow-x-auto gap-4">
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
    );
}
