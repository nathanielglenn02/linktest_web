type StatusCardProps = {
    status: {
        id: number;
        content: string;
        createdAt: string;
        user: {
            name: string;
            profilePic: string;
        };
    };
};

const StatusCard = ({ status }: StatusCardProps) => {
    return (
        <div className="border p-4 rounded-lg shadow bg-white">
            <div className="flex items-center gap-3 mb-2">
                <img src={status.user.profilePic} alt="profile" className="w-10 h-10 rounded-full" />
                <div>
                    <p className="font-semibold">{status.user.name}</p>
                    <p className="text-xs text-gray-500">{new Date(status.createdAt).toLocaleString()}</p>
                </div>
            </div>
            <p>{status.content}</p>
        </div>
    );
};

export default StatusCard;
