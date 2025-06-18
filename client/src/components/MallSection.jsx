import React from 'react';

export default function MallSection() {
    const brands = [
        { logo: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/403/511/products/o1cn01n4hg1w2ip1dgkwt3v1722759.jpg', text: 'Ưu đãi đến 50%' },
        { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UaFZ0wuZOWqs3ZbgXNKK_qai-fuJd9FgEA&s', text: 'Mua 1 tặng 1' },
        { logo: 'https://bizweb.dktcdn.net/100/502/737/products/o1cn011zqrhm28vcvdncmmx1611117.jpg?v=1725004567197', text: 'Mua là có quà' },
        { logo: 'https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m14h70o9v7ga82_tn.webp', text: 'Deli siêu sale' },
        { logo: 'https://product.hstatic.net/1000133495/product/7_a3ed0c2766c54f9087d93c909e95dd9b_master.png', text: 'Mua 1 tặng 1' },
        { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UaFZ0wuZOWqs3ZbgXNKK_qai-fuJd9FgEA&s', text: 'Mua 1 được 2' },
        { logo: 'https://down-vn.img.susercontent.com/file/vn-11134208-7r98o-m072ma3qewh9eb', text: 'Mua 1 tặng 1' },
        { logo: 'https://thoitrangbigsize.vn/wp-content/uploads/2024/12/BSX1479N.jpg', text: 'Mua là có quà' },
    ];

    return (
        <div className="bg-white mt-6 p-4 shadow rounded-md border border-gray-200">

            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 text-red-500 font-semibold">
                    <span className="text-base">LW</span>
                    <span className="text-gray-400 text-sm">| Trả hàng 15 ngày | Hàng chính hãng | Free ship</span>
                </div>
                <button className="text-red-500 text-sm hover:underline">Xem tất cả &gt;</button>
            </div>


            <div className="flex">

                <div className="w-1/4 pr-4">
                    <img
                        src="https://media.s-bol.com/D289YnGKBEGn/PB978A/550x803.jpg"
                        alt="Mall Banner"
                        className="w-full h-full object-cover rounded"
                    />
                </div>

                <div className="w-3/4 grid grid-cols-4 gap-4">
                    {brands.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center border border-gray-200 rounded-md p-2 hover:shadow-sm transition-shadow"
                        >
                            <div className="bg-white rounded-full border p-2 w-20 h-20 flex items-center justify-center">
                                <img src={item.logo} alt={item.text} className="max-w-full max-h-full object-contain" />
                            </div>
                            <p className="text-sm mt-2 text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
