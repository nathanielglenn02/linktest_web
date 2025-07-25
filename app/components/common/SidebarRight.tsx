const SidebarRight = () => {
    const news = [
        { title: 'AI di Indonesia berkembang pesat', time: '1 jam lalu' },
        { title: 'Startup lokal raih pendanaan besar', time: '3 jam lalu' },
        { title: 'Tips wawancara kerja 2025', time: '5 jam lalu' },
        { title: 'Kebijakan kerja hybrid makin populer', time: '1 hari lalu' },
        { title: 'LinkedIn rilis fitur baru', time: '2 hari lalu' },
    ];

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Berita Terkini</h2>
            <ul className="space-y-3">
                {news.map((item, idx) => (
                    <li key={idx}>
                        <p className="text-sm font-medium text-gray-800">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.time}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarRight;
