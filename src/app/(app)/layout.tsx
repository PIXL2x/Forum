import { getChannels, getSubscribedChannels } from "@/actions/channels";
import Sidebar from "@/components/Sidebar";
import Navbar from "components/Navbar";

const MainLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const channels = await getChannels();
    const subscribed_channels = await getSubscribedChannels();

    return (
        <div className="relative">
            <Navbar />
            <Sidebar recommend_channels={channels} subscribed_channels={subscribed_channels} />
            <main className="ml-[230px] px-2 pt-10 w-[calc(100vw-230px)] flex items-center justify-center">{children}</main>
        </div>
    );
};

export default MainLayout;
