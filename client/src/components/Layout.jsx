import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Chỉ render children, không render thêm component nào khác */}
      {children}
    </div>
  );
};

export default Layout;