import { getRecommendedChannelsWithPosts } from "@/actions/channels";
import PostSimpleList from "@/components/Post/PostSimpleList";

const HomePage = async () => {
    const channels = await getRecommendedChannelsWithPosts();

    return (
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {channels.map((channel) => (
                <PostSimpleList key={channel.id} channel_id={channel.id} channel_name={channel.name} posts={channel.posts} />
            ))}
        </div>
    );
};

export default HomePage;
