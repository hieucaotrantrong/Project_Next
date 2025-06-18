import React from 'react';
import { Link } from 'react-router-dom';

const PromotionGallery = () => {
  // Giữ lại dữ liệu nhưng không hiển thị phần mạng xã hội
  const socialPosts = [
    {
      id: 1,
      title: "3 cách tải video trên YouTube về máy tính không những nhanh mà chất lượng còn cao",
      image: "https://cdn.tgdd.vn/Files/2023/12/14/1561106/cach-tai-video-youtube-ve-may-tinh-1-171223-800x450.jpg",
      link: "/youtube-download"
    },
    // Các mục khác...
  ];

  // Trả về null để không hiển thị gì cả
  return null;
};

export default PromotionGallery;

