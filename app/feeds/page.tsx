
import Layout from '../layouts/layout';
import StatusCard from '../components/feeds/StatusCard';
import styles from './feed.module.css';

const mockStatuses = [
    {
        id: 1,
        user: { name: 'Alice Smith', profilePic: '/alice_pic.jpg' },
        content: 'Hello, this is my first status!',
        createdAt: '2025-07-23T12:34:00Z',
    },
    {
        id: 2,
        user: { name: 'Bob Johnson', profilePic: '/bob_pic.jpg' },
        content: 'Excited to learn Next.js with LinkTest!',
        createdAt: '2025-07-24T08:15:00Z',
    },
];

const FeedPage = () => {
    return (
        <Layout>
            <div className={styles.feedContainer}>
                <h1 className={styles.feedTitle}>LinkTest</h1>
                <div className={styles.statusList}>
                    {mockStatuses.map((status) => (
                        <StatusCard key={status.id} status={status} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default FeedPage;
