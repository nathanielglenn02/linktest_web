import Layout from '../layouts/layout';
import styles from './profile.module.css';

const ProfilePage = () => {
    const user = {
        name: 'Alice Smith',
        email: 'alice.smith@example.com',
        profilePic: '/alice_pic.jpg',
        skills: 'React, TypeScript, Node.js',
        location: 'Surabaya, Indonesia',
    };

    return (
        <Layout>
            <div className={styles.profileContainer}>
                <img src={user.profilePic} alt="" className={styles.profilePic} />
                <h2 className={styles.profileName}>{user.name}</h2>
                <p className={styles.profileLocation}>{user.location}</p>
                <p className={styles.profileInfo}><strong>Email:</strong> {user.email}</p>
                <p className={styles.profileInfo}><strong>Skills:</strong> {user.skills}</p>
            </div>
        </Layout>
    );
};

export default ProfilePage;
