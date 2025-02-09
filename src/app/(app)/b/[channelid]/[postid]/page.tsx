import { getCommentsFromPost } from "@/actions/comments";
import { getPostFromID, isPostMine } from "@/actions/posts";
import { getProfileFromId } from "@/actions/profiles";
import CommentForm from "@/components/Comment/CommentForm";
import CommentList from "@/components/Comment/CommentList";
import CopyLinkButton from "@/components/CopyLinkButton";
import PostContentView from "@/components/Post/PostContentView";
import { categoryToText } from "@/lib/category";
import { postItemDate } from "@/lib/date";
import Link from "next/link";
import { redirect } from "next/navigation";

const PostPage = async ({ params }: { params: Promise<{ postid: string }> }) => {
    const postid = (await params).postid;

    const post = await getPostFromID(postid);
    const comments = await getCommentsFromPost(postid);
    const profile = await getProfileFromId(post.author);

    if (!post) {
        redirect("/home");
    }

    return (
        <div className="mt-10 mb-20 w-full space-y-4">
            <div className="p-6 w-full bg-base-200 rounded-xl shadow-lg">
                <h3>{categoryToText(post.category)}</h3>
                <h1 className="mt-2 font-bold"> {post.title}</h1>
                <div className="mt-6 w-full flex items-center justify-between">
                    <Link href={`/u/${profile.username}`} className="flex items-center">
                        <img src={profile.avatar} className="w-10 h-10 rounded-full" alt="profile" />
                        <div className="ml-3 space-y-1">
                            <h5 className="font-semibold">{profile.username} </h5>
                            <h6> {postItemDate(post.created_at)} 작성</h6>
                        </div>
                    </Link>
                    <CopyLinkButton />
                </div>
                <div className="my-4 w-full border-b border-2 border-base-300" />
                <PostContentView value={post.content} />
            </div>
            <div className="p-6 w-full bg-base-200 rounded-xl shadow-lg">
                <h2 className="mb-2 font-semibold">댓글 {comments.length}개</h2>
                <div className="w-full border-b border-2 border-base-300" />
                {comments && <CommentList comments={comments} />}
                <CommentForm postid={postid} />
            </div>
        </div>
    );
};
export default PostPage;
