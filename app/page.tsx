// app/page.tsx
import Link from 'next/link';
import FeedPage from './feeds/page'; // Mengimpor komponen Feed

const HomePage = () => {
    return (
        <>
            <h1 className="text-xl font-bold mb-4">Welcome to LinkTest</h1>

            {/* Halaman Feed */}
            <FeedPage />
        </>
    );
};

export default HomePage;
