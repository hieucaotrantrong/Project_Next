export default function CategoryGrid() {
    const categories = [
        { name: 'Áo sơ mi nữ', img: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/403/511/products/o1cn01n4hg1w2ip1dgkwt3v1722759.jpg' },
        { name: 'Áo LV', img: 'https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_M/louis-vuitton--HQN63WAUR650_PM2_Front%20view.jpg?wid=750&hei=870' },
        { name: 'Quần Jean', img: 'https://bizweb.dktcdn.net/100/502/737/products/o1cn01yuiewj2lm7iae8nvx2105279-7c9920f1-f0ea-4d64-863f-ced24db29558.jpg?v=1737172591900' },
        { name: 'Váy Nữ', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UaFZ0wuZOWqs3ZbgXNKK_qai-fuJd9FgEA&s' },
        { name: 'Quần Cọc', img: 'https://down-vn.img.susercontent.com/file/vn-11134208-7r98o-m072ma3qewh9eb' },
        { name: 'Áo Hoodie', img: 'https://bizweb.dktcdn.net/100/461/076/products/ebffa6912e179449cd069-1733823684883.jpg?v=1733825573297' },
        { name: 'Giày Nam', img: 'https://yeepvn.sgp1.digitaloceanspaces.com/2023/03/vn-11134201-23020-v8bfhbczmynv5c.jpg' },
        { name: 'Áo thun', img: 'https://thoitrangbigsize.vn/wp-content/uploads/2024/12/BSX1479N.jpg' },
        { name: 'Áo Sơ Mi', img: 'https://product.hstatic.net/200000690725/product/52676411040_14a9edf7fb_k_274a9ee91f644bb497574ddf187a898a_master.jpg' },
        { name: 'Váy Công Chúa', img: 'https://bizweb.dktcdn.net/100/502/737/products/o1cn011zqrhm28vcvdncmmx1611117.jpg?v=1725004567197' },
    ];

    return (
        <div className="bg-white p-4 rounded-md shadow border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">DANH MỤC</h2>
            <div className="grid grid-cols-5 gap-4">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center border border-gray-200 p-4 rounded-md hover:scale-105 transition-transform cursor-pointer"
                    >
                        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                            <img src={cat.img} alt={cat.name} className="w-10 h-10 object-contain" />
                        </div>
                        <p className="text-sm mt-2">{cat.name}</p>
                    </div>
                ))}
            </div>

        </div>

    );
}
