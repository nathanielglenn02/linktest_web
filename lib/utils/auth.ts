export function getUserIdFromToken(token: string): number | null {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.id || null;
    } catch (err) {
        console.error('Gagal decode token:', err);
        return null;
    }
}

export function getTokenFromCookie(): string | null {
    const cookieStr = document.cookie;
    const cookies = Object.fromEntries(cookieStr.split('; ').map(c => {
        const [key, val] = c.split('=');
        return [key, decodeURIComponent(val)];
    }));
    return cookies.token || null;
}
