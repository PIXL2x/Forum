"use client";

import { postItemDate } from "@/lib/date";
import Link from "next/link";

export type CommentItemProps = {
    id: string;
    username: string;
    content: string;
    created_at: string;
    avatar: string;
};

const CommentItem = ({ username, content, created_at, avatar }: CommentItemProps) => {
    return (
        <div className="w-full py-4 flex items-center gap-4">
            <Link href={`/u/${username}`}>
                <img src={avatar} alt={username} className="w-10 h-10 rounded-full" />
            </Link>
            <div className="space-y-1">
                <div className="flex items-center gap-2">
                    <h5 className="font-semibold">{username}</h5>
                    <h6>•</h6>
                    <h6>{postItemDate(created_at)}</h6>
                </div>
                <h4>{content}</h4>
            </div>
        </div>
    );
};

export default CommentItem;
