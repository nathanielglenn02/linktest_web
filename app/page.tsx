import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function HomePage() {
    const cookieStore = await cookies();
    const token = cookieStore.get('token');

    if (!token) {
        redirect('/login'); // jika belum login, arahkan ke login
    }

    redirect('/feeds'); // jika sudah login, arahkan ke feeds
}
