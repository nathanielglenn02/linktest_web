import Layout from '../layouts/layout';
import StatusCard from '../components/feeds/StatusCard';
import CreateStatusButton from '../components/feeds/CreateStatusButton';
import { fetchStatuses } from '@/lib/api/status';
import type { Status } from '@/lib/types/status';

const FeedPage = async () => {
    const statuses: Status[] = await fetchStatuses();

    return (
        <Layout>
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">Feed</h1>

                {/* Tombol buka modal create status */}
                <CreateStatusButton />

                {/* Daftar status */}
                <div className="space-y-4 mt-4">
                    {statuses.map((status) => (
                        <StatusCard key={status.id} status={status} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default FeedPage;
