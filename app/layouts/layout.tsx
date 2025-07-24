// app/layouts/Layout.tsx

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
    children: ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="layout-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div className="main-content" style={{ flex: 1, display: 'flex' }}>
                <aside className="sidebar-left" style={{ width: 200, background: '#f4f4f4', padding: 16 }}>
                    <nav>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li><Link href="/feeds" className="text-blue-500">Feed</Link></li>
                            <li><Link href="/profiles" className="text-blue-500">Profile</Link></li>
                            <li><Link href="/messages" className="text-blue-500">Messages</Link></li>
                            <li><Link href="/connections" className="text-blue-500">Connections</Link></li>
                        </ul>
                    </nav>
                </aside>
                <main className="content" style={{ flex: 1, padding: 24 }}>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
