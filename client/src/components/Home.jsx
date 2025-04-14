import React, { useEffect, useState } from 'react';

function Home() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    return (
        <div>
            <h2>Chào mừng đến trang Home!</h2>
            {user && (
                <p>Xin chào, {user.first_name} {user.last_name} ({user.email})</p>
            )}
        </div>
    );
}

export default Home;
