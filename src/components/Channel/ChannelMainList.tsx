"use client";

import ChannelMainItem, { ChannelMainItemProps } from "./ChannelMainItem";

type ChannelMainListProps = {
    channels: ChannelMainItemProps[];
};

const ChannelMainList = ({ channels }: ChannelMainListProps) => {
    return (
        <div className="flex gap-4 flex-wrap">
            {channels.map((channel) => (
                <ChannelMainItem key={channel.id} {...channel} />
            ))}
        </div>
    );
};

export default ChannelMainList;
