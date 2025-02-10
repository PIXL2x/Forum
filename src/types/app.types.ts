export type Category = "discussions" | "questions" | "announcements" | "tips";

export type Post = {
    id: number;
    title: string;
    content: string;
    category: Category;
    author_id: string;
    thumbnail_url: string | null;
    channel_id: string;
    visits: number;
    created_at: string;
    updated_at: string;
};

export type Channel = {
    id: number;
    display_name: string;
    description: string;
    icon_url: string;
    banner_url: string;
    created_at: string;
    updated_at: string;
};

export type Profile = {
    id: number;
    username: string;
    avatar_url: string;
    created_at: string;
    updated_at: string;
};
export type Comment = {
    id: number;
    content: string;
    author_id: string;
    post_id: number;
    created_at: string;
    updated_at: string;
};
export type Subscribe = {
    profile_id: number;
    channel_id: number;
};

export type PostItemView = {
    id: number;
    title: string;
    category: Category;
    thumbnail_url: string | null;
    channel_id: string;
    author_username: string;
    comments: number;
    visits: number;
    created_at: string;
    updated_at: string;
};
export type CommentItemView = {
    id: number;
    post_id: number;
    content: string;
    author_username: string;
    author_avatar_url: string;
    created_at: string;
    updated_at: string;
};

export type SubscribedChannelView = {
    profile_id: number;
    channel_id: number;
    channel_display_name: string;
    channel_icon_url: string;
};
