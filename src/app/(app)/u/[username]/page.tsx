import { getPostsFromUser } from "@/actions/posts";
import { getProfileFromUsername } from "@/actions/profiles";
import PostList from "@/components/Post/PostList";
import { redirect } from "next/navigation";

const UserPage = async ({ params }: { params: Promise<{ username: string }> }) => {
    const username = (await params).username;
    const profile = await getProfileFromUsername(username);

    if (!profile) {
        redirect("/home");
    }

    const posts = await getPostsFromUser(profile.id);

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-4xl">{profile.username}</h1>
            </div>
            {/* <PostList posts={posts} /> */}
        </div>
    );
};

export default UserPage;
