import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const [authStatus, setAuthStatus] = useState('checking'); // 'checking', 'authenticated', 'unauthenticated'

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (token && token.trim() !== '') {
            setAuthStatus('authenticated');
        } else {
            setAuthStatus('unauthenticated');
        }
    }, []);

    if (authStatus === 'checking') {
        return <div>Loading...</div>;
    }

    if (authStatus === 'unauthenticated') {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;