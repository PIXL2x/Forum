"use client";

import { postItemDate } from "@/lib/date";

import Link from "next/link";

export type PostSimpleItemProps = {
    id: string;
    title: string;
    channel: string;
    username: string;
    created_at: string;
    comments: number;
};

const PostSimpleItem = ({ id, title, channel, username, created_at, comments }: PostSimpleItemProps) => {
    return (
        <Link
            href={`/b/${channel}/${id}`}
            className="relative p-4 w-full h-[70px] text-base-content flex items-center gap-3 hover:bg-base-200 trasition duration-200  "
        >
            <div className="flex-1 flex flex-col gap-2">
                <h4 className="font-semibold line-clamp-1">{`${title} [${comments}]`}</h4>
                <div className="w-full flex gap-2 items-center ">
                    <h6>u/{username}</h6>
                    <h6>•</h6>
                    <h6>{postItemDate(created_at)}</h6>
                </div>
            </div>
        </Link>
    );
};

export default PostSimpleItem;
