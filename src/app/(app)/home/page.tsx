import { getRecommendedChannels } from "@/actions/channels";
import { getRecentPostsFromChannel } from "@/actions/posts";
import PostSimpleList from "@/components/Post/PostSimpleList";

const HomePage = async () => {
    const channels = await getRecommendedChannels().then(
        async (channels) =>
            await Promise.all(
                channels.map(async (channel) => ({
                    ...channel,
                    posts: await getRecentPostsFromChannel(channel.id),
                }))
            )
    );

    return (
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {channels.map((channel) => (
                <PostSimpleList
                    key={channel.id}
                    channel_id={channel.id}
                    channel_name={channel.display_name}
                    posts={channel.posts}
                />
            ))}
        </div>
    );
};

export default HomePage;
