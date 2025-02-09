"use client";

import Link from "next/link";
import ChannelSidebarList from "./Channel/ChannelSidebarList";
import { FaHome } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { ChannelSidebarItemProps } from "./Channel/ChannelSidebarItem";
import { useAuthStore } from "@/stores/auth";

type SidebarProps = {
    recommend_channels: ChannelSidebarItemProps[];
    subscribed_channels: ChannelSidebarItemProps[];
};

const Sidebar = ({ recommend_channels, subscribed_channels }: SidebarProps) => {
    const profile = useAuthStore((state) => state.profile);

    return (
        <div className="pt-[60px] px-4 fixed z-10 w-[230px] flex flex-col gap-2 h-screen bg-base-100">
            <div className="flex flex-col w-full">
                <Link href="/home" className="h-10 p-2 flex items-center gap-2 w-full hover:bg-base-200 rounded-lg">
                    <FaHome size={20} />
                    <h5>홈페이지</h5>
                </Link>
                <Link href="/channels" className="h-10 p-2 flex items-center gap-2 w-full hover:bg-base-200 rounded-lg">
                    <FaMagnifyingGlass size={20} />
                    <h5>채널 탐색</h5>
                </Link>
            </div>
            {profile && (
                <>
                    <hr className="w-full border-t border-base-300" />
                    <h5 className="mt-2 ml-2 text-left font-bold">구독 채널</h5>
                    {subscribed_channels.length > 0 ? (
                        <ChannelSidebarList channels={subscribed_channels} />
                    ) : (
                        <h6 className="my-2 text-center">구독한 채널이 없습니다.</h6>
                    )}
                </>
            )}
            <hr className="w-full border-t border-base-300" />
            <h5 className="mt-2 ml-2 text-left font-bold">추천 채널</h5>
            <ChannelSidebarList channels={recommend_channels} />
        </div>
    );
};

export default Sidebar;
