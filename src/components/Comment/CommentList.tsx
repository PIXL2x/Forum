"use client";

import CommentItem, { CommentItemProps } from "./CommentItem";

type CommentListProps = {
    comments: CommentItemProps[];
};

const CommentList = ({ comments }: CommentListProps) => {
    return (
        <div>
            {comments.map((comment, i) => (
                <div key={comment.id}>
                    <CommentItem {...comment} />
                    <div className="border-b border-base-300"></div>
                </div>
            ))}
        </div>
    );
};

export default CommentList;
