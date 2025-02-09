"use client";

import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type PostCategorySelectorProps = {
    channelid: string;
};

const PostCategorySelector = ({ channelid }: PostCategorySelectorProps) => {
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    return (
        <div className="flex gap-2">
            <Link
                href={`/b/${channelid}?category=all&page=1`}
                className={clsx("btn btn-sm shadow-sm", category === "all" && "btn-primary")}
            >
                전체
            </Link>
            <Link
                href={`/b/${channelid}?category=discussions&page=1`}
                className={clsx("btn btn-sm shadow-sm", category === "discussions" && "btn-primary")}
            >
                잡담
            </Link>
            <Link
                href={`/b/${channelid}?category=announcements&page=1`}
                className={clsx("btn btn-sm shadow-sm", category === "reviews" && "btn-primary")}
            >
                공지
            </Link>
            <Link
                href={`/b/${channelid}?category=questions&page=1`}
                className={clsx("btn btn-sm shadow-sm", category === "questions" && "btn-primary")}
            >
                질문
            </Link>
            <Link
                href={`/b/${channelid}?category=tips&page=1`}
                className={clsx("btn btn-sm shadow-sm", category === "tips" && "btn-primary")}
            >
                팁
            </Link>
        </div>
    );
};

export default PostCategorySelector;
