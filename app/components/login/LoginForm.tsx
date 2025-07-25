'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setMessage(data.error || 'Login gagal');
                return;
            }

            // Simpan token ke cookie selama 7 hari
            document.cookie = `token=${data.token}; path=/; max-age=604800`;
            document.cookie = `username=${encodeURIComponent(data.user.name)}; path=/; max-age=604800`;


            setMessage('Login berhasil!');

            // Redirect ke halaman feed
            router.push('/feeds');
        } catch (err) {
            console.error(err);
            setMessage('Terjadi kesalahan saat login');
        }
    };

    return (
        <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Login</h2>

            <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                Login
            </button>

            {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
        </form>
    );
}
