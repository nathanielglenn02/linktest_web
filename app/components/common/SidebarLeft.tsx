'use client';

import { useEffect, useState } from 'react';
import { getUserById } from '@/lib/api/user';
import type { User } from '@/lib/types/user';
import { getUserIdFromToken, getTokenFromCookie } from '@/lib/utils/auth';

export default function SidebarLeft() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = getTokenFromCookie();
        const userId = token ? getUserIdFromToken(token) : null;

        if (!token || !userId) return;

        getUserById(userId)
            .then(setUser)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Profil Anda</h2>
            {loading ? (
                <p>Loading...</p>
            ) : user ? (
                <div className="flex flex-col items-center text-center">
                    <img
                        src={user.profilePic || '/profile-pic.jpg'}
                        alt={user.name}
                        className="w-16 h-16 rounded-full mb-2"
                    />
                    <p className="text-md font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.skills}</p>
                    <p className="text-xs text-gray-500 mt-2">{user.email}</p>
                </div>
            ) : (
                <p className="text-red-500">Gagal memuat profil</p>
            )}
        </div>
    );
}
