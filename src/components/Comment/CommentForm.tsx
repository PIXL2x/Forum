"use client";

import { createComment } from "@/actions/comments";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type FormData = {
    content: string;
};

type CommentFormProps = {
    postid: string;
};

const CommentForm = ({ postid }: CommentFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>();

    const router = useRouter();
    const profile = useAuthStore((state) => state.profile);

    const onSubmit = async (data: FormData) => {
        await createComment(postid, data.content);
        router.refresh();
    };

    return (
        profile && (
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 w-full flex gap-2">
                <input
                    type="text"
                    className="input input-bordered flex-1"
                    placeholder="댓글을 입력하세요."
                    {...register("content", {
                        required: "댓글을 입력해주세요.",
                    })}
                />
                {errors.content && <h5 className="text-error">{errors.content.message}</h5>}
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    댓글 작성
                </button>
            </form>
        )
    );
};

export default CommentForm;
