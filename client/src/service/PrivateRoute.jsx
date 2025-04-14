import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
    }, []);  // Chỉ chạy một lần khi component được mount

    // Nếu token chưa được xác định (do vẫn đang kiểm tra), có thể trả về null hoặc loading state
    if (token === null) {
        return <div>Loading...</div>;
    }

    // Nếu không có token, chuyển hướng về trang login
    return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
