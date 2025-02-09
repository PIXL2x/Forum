import { getChannelByID } from "@/actions/channels";
import ChannelInfo from "@/components/Channel/ChannelInfo";

const ChannelLayout = async ({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ channelid: string }>;
}>) => {
    const { channelid } = await params;
    const channel = await getChannelByID(channelid);
    return (
        <div className="relative flex gap-10">
            <div className="w-[768px]">{children}</div>
            {channel && <ChannelInfo {...channel} />}
        </div>
    );
};

export default ChannelLayout;
