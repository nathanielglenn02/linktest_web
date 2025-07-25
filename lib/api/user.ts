import { User } from "../types/user";

const BASE_URL = 'http://localhost:5000';

export async function getAllUsers(): Promise<User[]> {
    const res = await fetch(`${BASE_URL}/user`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Gagal ambil semua user');
    return res.json();
}

export async function getUserById(id: number): Promise<User> {
    const res = await fetch(`${BASE_URL}/user/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Gagal ambil user');
    return res.json();
}

