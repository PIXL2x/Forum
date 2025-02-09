"use client";

import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import Signout from "./Signout";
import { useAuthStore } from "@/stores/auth";

const Navbar = () => {
    const profile = useAuthStore((state) => state.profile);

    return (
        <nav className="fixed z-20 w-full h-[45px] bg-base-100 flex items-center justify-between px-10">
            <Link href="/home" className="flex items-center gap-1">
                <div className="w-8 h-8 bg-primary" style={{ maskImage: "url('/logo.svg')" }}></div>
                <h1 className="text-primary font-bold">Pick</h1>
            </Link>
            <div className="hidden md:flex w-[386px] h-8 items-center justify-center">
                <div className="relative w-full h-full max-w-[600px]">
                    <input type="text" className="w-full input h-full bg-base-300" placeholder="검색" />
                    <FaSearch className="absolute right-2 top-1/2 -translate-y-1/2" />
                </div>
            </div>
            {profile ? (
                <div className="flex items-center gap-4">
                    <Link href={`/u/${profile.username}`} className="flex items-center gap-1">
                        <div className="w-8 h-8 bg-base-content" style={{ maskImage: `url(${profile.avatar_url})` }}></div>
                        <p className="text-base-content">{profile.username}</p>
                    </Link>
                    <Signout />
                </div>
            ) : (
                <Link href="/login">
                    <button className="btn btn-sm">로그인 / 가입</button>
                </Link>
            )}
        </nav>
    );
};
export default Navbar;
