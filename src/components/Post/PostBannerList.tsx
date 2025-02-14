import PostBannerItem, { PostBannerItemProps } from "./PostBannerItem";

type PostBannerListProps = {
    posts: PostBannerItemProps[];
};

const PostBannerList = ({ posts }: PostBannerListProps) => {
    return (
        <div className="w-[916px] flex flex-col bg-base-100 shadow-md rounded-lg">
            <h2 className="font-bold p-4">인기 게시물</h2>
            <div className="border-b border-base-300"></div>
            <div className="p-4 flex items-center gap-4">
                {posts.map((post) => (
                    <PostBannerItem key={post.id} {...post} />
                ))}
            </div>
        </div>
    );
};

export default PostBannerList;
