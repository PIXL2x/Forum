"use client";

import { format } from "date-fns";
import Link from "next/link";

type ChannelInfoProps = {
    id: string;
    display_name: string;
    description: string;
    created_at: string;
};

const ChannelInfo = ({ id, display_name, description, created_at }: ChannelInfoProps) => {
    return (
        <div className="mt-10 p-4 w-[256px] h-[256px] bg-base-100 rounded-2xl shadow-md">
            <Link href={`/b/${id}`}>
                <h2 className="font-semibold">{display_name}</h2>
            </Link>
            <h4 className="">b/{id}</h4>
            <h5 className="mt-2">{description}</h5>
            <h5 className="mt-2">{format(created_at, "yyyy-MM-dd")} 개설</h5>
        </div>
    );
};

export default ChannelInfo;
