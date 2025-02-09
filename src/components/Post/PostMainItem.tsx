"use client";

import { categoryToText } from "@/lib/category";
import { postItemDate } from "@/lib/date";
import { Category } from "@/types/app.types";

import Link from "next/link";

export type PostMainItemProps = {
    id: string;
    title: string;
    category: Category;
    username: string;
    channel: string;
    created_at: string;
    thumbnail: string | null;
    comments: number;
};

const PostMainItem = ({ id, title, thumbnail, username, channel, category, created_at, comments }: PostMainItemProps) => {
    return (
        <Link
            href={`/b/${channel}/${id}`}
            className="relative p-4 w-full h-[80px] text-base-content flex items-center gap-4 hover:bg-base-200 trasition duration-200  "
        >
            {thumbnail ? (
                <img src={thumbnail} className="w-[60px] h-[60px] rounded-md bg-base-300 object-cover" />
            ) : (
                <div className="w-[60px] h-[60px] rounded-md bg-base-300"></div>
            )}
            <div className="flex-1 flex flex-col gap-2">
                <h3 className="font-bold line-clamp-1">{title}</h3>
                <div className="w-full flex gap-2 items-center ">
                    <h6>{categoryToText(category)}</h6>
                    <h6>•</h6>
                    <h6>u/{username}</h6>
                    <h6>•</h6>
                    <h6>{postItemDate(created_at)}</h6>
                </div>
            </div>
            <div className="w-[50px] h-[50px] bg-base-200 flex items-center justify-center rounded-md">
                <h3>{comments}</h3>
            </div>
        </Link>
    );
};

export default PostMainItem;
