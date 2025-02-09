export type Category = "discussions" | "questions" | "announcements" | "tips";

export type Post = {
    id: number;
    title: string;
    content: string;
    author: string;
    thumbnail: string | null;
    channel: string;
    created_at: string;
    updated_at: string;
};

export type Channel = {
    id: number;
    name: string;
    description: string;
    image_icon: string;
    image_banner: string;
    created_at: string;
    updated_at: string;
};

export type Profile = {
    id: number;
    username: string;
    avatar: string;
    created_at: string;
    updated_at: string;
};
export type Comment = {
    id: number;
    content: string;
    author: string;
    post: number;
    created_at: string;
    updated_at: string;
};
export type Subscribe = {
    profile_id: number;
    channel_id: number;
};

export type PostView = {
    id: number;
    title: string;
    category: Category;
    thumbnail: string | null;
    channel: string;
    username: string;
    comments: number;
    created_at: string;
    updated_at: string;
};
export type CommentView = {
    id: number;
    content: string;
    username: string;
    post: number;
    avatar: string;
    created_at: string;
};

export type SubscribeView = {
    id: number;
    name: string;
    image_icon: string;
    profile_id: number;
};
