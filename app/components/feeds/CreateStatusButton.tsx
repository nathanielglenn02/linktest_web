'use client';

import { useState } from 'react';
import CreateStatusModal from './CreateStatusModal';

export default function CreateStatusButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
            >
                + Buat Status
            </button>
            <CreateStatusModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSuccess={() => window.location.reload()} // Refresh feed
            />
        </>
    );
}
