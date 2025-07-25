const BASE_URL = 'http://localhost:5000';

export async function fetchStatuses() {
    const res = await fetch(`${BASE_URL}/status`, {
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) throw new Error('Gagal mengambil status');
    return res.json();
}

export async function createStatus(content: string, token: string) {
    const res = await fetch(`${BASE_URL}/status`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content }),
    });

    if (!res.ok) throw new Error('Gagal membuat status');
    return res.json();
}
