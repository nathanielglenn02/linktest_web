'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [username, setUsername] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const cookieStr = document.cookie;
        const cookies = Object.fromEntries(cookieStr.split('; ').map(c => {
            const [key, val] = c.split('=');
            return [key, decodeURIComponent(val)];
        }));

        if (cookies.username) {
            setUsername(cookies.username);
        }
    }, []);

    const handleLogout = () => {
        document.cookie = 'token=; Max-Age=0; path=/';
        document.cookie = 'username=; Max-Age=0; path=/';
        router.push('/login');
    };

    return (
        <nav className="navbar bg-gray-100 px-4 py-2 flex justify-between items-center shadow">
            <div className="logo font-bold text-xl text-gray-800">LinkTest</div>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border px-2 py-1 rounded text-gray-800"
                />
            </div>

            <div className="relative">
                <div
                    className="cursor-pointer flex items-center gap-2"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <img src="/profile-pic.jpg" alt="User" className="w-8 h-8 rounded-full" />
                    <span className="font-medium text-gray-800">{username}</span>
                </div>

                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 bg-white border rounded shadow w-32 z-50">
                        <button
                            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => router.push('/profiles')}
                        >
                            Profile
                        </button>
                        <button
                            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
