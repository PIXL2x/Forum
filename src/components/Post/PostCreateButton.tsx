"use client";

import { useAuthStore } from "@/stores/auth";
import Link from "next/link";

type PostCreateButtonProps = {
    channelid: string;
};

const PostCreateButton = ({ channelid }: PostCreateButtonProps) => {
    const profile = useAuthStore((state) => state.profile);

    return (
        profile && (
            <Link href={`/b/${channelid}/newPost`}>
                <button className="btn btn-primary">글쓰기</button>
            </Link>
        )
    );
};

export default PostCreateButton;
