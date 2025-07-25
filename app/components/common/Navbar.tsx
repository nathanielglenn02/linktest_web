'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    Home,
    Users2,
    // Briefcase,
    MessageSquare,
    // Bell,
    ChevronDown,
    Search
} from 'lucide-react';

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

    const navItems = [
        { label: 'Halaman Utama', icon: <Home size={20} />, path: '/' },
        { label: 'Jaringan Saya', icon: <Users2 size={20} />, path: '/connections' },
        // { label: 'Pekerjaan', icon: <Briefcase size={20} />, path: '/jobs' },
        { label: 'Pesan', icon: <MessageSquare size={20} />, path: '/messages' },
        // { label: 'Notifikasi', icon: <Bell size={20} />, path: '/notifications', badge: 2 },
    ];

    return (
        <nav className="bg-[#7D0A0A] shadow px-6 py-2 flex justify-between items-center border-b">
            {/* Logo & Search */}
            <div className="flex items-center gap-4">
                <img src="/linkedin.png" alt="Logo" className="w-8 h-8" />
                <div className="relative">
                    <Search className="absolute left-2 top-2 text-white" size={18} />
                    <input
                        type="text"
                        placeholder="Cari"
                        className="pl-8 pr-2 py-1 border rounded-full text-sm"
                    />
                </div>
            </div>

            {/* Navigasi Tengah */}
            <div className="flex gap-6 items-center">
                {navItems.map(item => (
                    <div
                        key={item.label}
                        className="flex flex-col items-center text-sm cursor-pointer hover:text-gray-300" // biarkan text-white datang dari parent
                        onClick={() => router.push(item.path)}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>


            {/* Profil */}
            <div className="relative">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <img src="/profile-pic.jpg" alt="User" className="w-8 h-8 rounded-full" />
                    <div className="text-sm text-white">{username}</div>

                    <ChevronDown size={16} />
                </div>

                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 bg-white border rounded shadow w-32 z-50">
                        <button
                            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => {
                                setDropdownOpen(false);
                                router.push('/profiles');
                            }}
                        >
                            Profil
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
