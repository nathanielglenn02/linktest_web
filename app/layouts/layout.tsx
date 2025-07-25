// app/layouts/Layout.tsx
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import SidebarLeft from '../components/common/SidebarLeft';
import SidebarRight from '../components/common/SidebarRight';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1">
                <aside className="w-64 p-4 border-r bg-white">
                    <SidebarLeft />
                </aside>

                <main className="flex-1 p-6 bg-gray-50">
                    {children}
                </main>

                <aside className="w-72 p-4 border-l bg-white">
                    <SidebarRight />
                </aside>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
