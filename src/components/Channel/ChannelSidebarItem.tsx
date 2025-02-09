"use client";

import Link from "next/link";

export type ChannelSidebarItemProps = {
    id: string;
    name: string;
    image_icon: string;
};

const ChannelSidebarItem = ({ id, name, image_icon }: ChannelSidebarItemProps) => {
    return (
        <Link href={`/b/${id}`} className="p-2 flex items-center gap-2 hover:bg-base-200 cursor-pointer rounded-lg">
            {image_icon && <img src={image_icon} alt={id} className="w-6 h-6 object-cover rounded-lg" />}
            <h5>{name}</h5>
        </Link>
    );
};

export default ChannelSidebarItem;
