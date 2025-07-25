'use client';

import { useState, useEffect } from 'react';
import { createStatus } from '@/lib/api/status';
import Image from 'next/image';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
};

export default function CreateStatusModal({ isOpen, onClose, onSuccess }: Props) {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        const cookies = Object.fromEntries(
            document.cookie.split('; ').map(c => {
                const [key, val] = c.split('=');
                return [key, decodeURIComponent(val)];
            })
        );
        setUsername(cookies.username || 'Guest');
    }, []);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const token = document.cookie
                .split('; ')
                .find(row => row.startsWith('token='))
                ?.split('=')[1];

            if (!token) throw new Error('Token tidak ditemukan');

            await createStatus(content, token);
            setContent('');
            onClose();
            onSuccess?.();
        } catch (err) {
            const e = err as { message?: string };
            setError(e.message || 'Terjadi kesalahan');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-xl relative p-6">
                {/* Tombol close */}
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold">
                    ×
                </button>

                {/* Header */}
                <div className="flex items-center mb-4">
                    <Image
                        src="/profile-pic.jpg"
                        alt="User"
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                    />
                    <div className="ml-3">
                        <div className="font-semibold">{username}</div>
                        <div className="text-sm text-gray-500">Posting ke Semua orang</div>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="w-full text-lg border-none outline-none resize-none mb-2"
                        rows={4}
                        placeholder="Apa yang ingin Anda bicarakan?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />

                    {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                    {/* Ikon bawah */}
                    <div className="flex justify-between items-center mt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 disabled:opacity-50"
                        >
                            {loading ? 'Posting...' : 'Posting'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
