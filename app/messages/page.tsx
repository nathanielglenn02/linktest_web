import Layout from '../layouts/layout';
import styles from './message.module.css';

const MessagePage = () => {
    const messages = [
        { id: 1, from: 'Bob Johnson', content: 'Hi Alice, nice to connect with you!', timestamp: '2h ago' },
        { id: 2, from: 'Diana Prince', content: 'Are you available for a quick chat?', timestamp: '1d ago' },
    ];

    return (
        <Layout>
            <div className={styles.messageContainer}>
                <h1 className={styles.messageTitle}>Pesan</h1>
                <div className={styles.messageList}>
                    {messages.map((msg) => (
                        <div key={msg.id} className={styles.messageCard}>
                            <p className={styles.messageFrom}>{msg.from}</p>
                            <p>{msg.content}</p>
                            <p className={styles.messageTime}>{msg.timestamp}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default MessagePage;
