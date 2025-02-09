"use client";

import Link from "next/link";

export type ChannelMainItemProps = {
    id: string;
    name: string;
    description: string;
    image_icon: string;
};

const ChannelMainItem = ({ id, name, description, image_icon }: ChannelMainItemProps) => {
    return (
        <Link href={`/b/${id}`} className="w-[300px] p-2 bg-base-100 rounded-lg hover:bg-base-200 cursor-pointer transition-all">
            <div className="flex items-center gap-2">
                {image_icon && <img src={image_icon} alt={id} className="w-10 h-10 object-cover rounded-full" />}
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <h5>b/{id}</h5>
                </div>
            </div>
            <h6 className="mt-2">{description}</h6>
        </Link>
    );
};

export default ChannelMainItem;
