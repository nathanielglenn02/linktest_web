import Layout from '../layouts/layout';
import styles from './connection.module.css';

const ConnectionPage = () => {
    const connections = [
        { id: 1, name: 'Charlie Brown', profilePic: '/charlie_pic.jpg' },
        { id: 2, name: 'Diana Prince', profilePic: '/diana_pic.jpg' },
    ];

    return (
        <Layout>
            <div className={styles.connectionContainer}>
                <h1 className={styles.connectionTitle}>Koneksi</h1>
                <div className={styles.connectionGrid}>
                    {connections.map((conn) => (
                        <div key={conn.id} className={styles.connectionCard}>
                            <img src={conn.profilePic} className={styles.connectionPic} />
                            <p className={styles.connectionName}>{conn.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default ConnectionPage;
