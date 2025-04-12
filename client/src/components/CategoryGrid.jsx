export default function CategoryGrid() {
    const categories = [
        { name: 'Thời Trang Nam', img: 'https://down-vn.img.susercontent.com/file/360b4be695501be29659f3cdc35d63da' },
        { name: 'Áo LV', img: 'https://down-vn.img.susercontent.com/file/ca0429429ff9ae1fc6fd779e81f4e82a' },
        { name: 'Quần Boy Phố', img: 'https://down-vn.img.susercontent.com/file/ca0429429ff9ae1fc6fd779e81f4e82a' },
        { name: 'Váy Nữ', img: 'https://down-vn.img.susercontent.com/file/ca0429429ff9ae1fc6fd779e81f4e82a' },
        { name: 'Quần Zin', img: 'https://down-vn.img.susercontent.com/file/ca0429429ff9ae1fc6fd779e81f4e82a' },
        { name: 'Áo Hoodie', img: 'https://down-vn.img.susercontent.com/file/ca0429429ff9ae1fc6fd779e81f4e82a' },
        { name: 'Giày Dép Nam', img: 'https://down-vn.img.susercontent.com/file/ca0429429ff9ae1fc6fd779e81f4e82a' },
        { name: 'Áo thun', img: 'https://down-vn.img.susercontent.com/file/ca0429429ff9ae1fc6fd779e81f4e82a' },
        { name: 'Áo Sơ Mi', img: 'https://down-vn.img.susercontent.com/file/ca0429429ff9ae1fc6fd779e81f4e82a' },
        { name: 'Quần Đùi', img: 'https://down-vn.img.susercontent.com/file/ca0429429ff9ae1fc6fd779e81f4e82a' },
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
