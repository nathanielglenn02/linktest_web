// lib/types/status.ts
export type Status = {
    id: number;
    user: {
        name: string;
        profilePic: string;
    };
    content: string;
    createdAt: string;
};
