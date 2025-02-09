"use client";

import { Controller, useForm } from "react-hook-form";
import { createPost } from "@/actions/posts";
import PostContentEditor from "./PostContentEditor";
import { redirect } from "next/navigation";

type FormData = {
    title: string;
    content: string;
    thumbnail: string;
    category: string;
};

type PostFormProps = {
    channelid: string;
};

const PostForm = ({ channelid }: PostFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<FormData>({
        defaultValues: {
            title: "",
            content:
                "<p>내용을 입력하세요</p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>",
            thumbnail: "",
            category: "discussions",
        },
    });

    const onSubmit = async (data: FormData) => {
        await createPost(data.title, data.content, channelid, data.category, data.thumbnail);

        redirect(`/b/${channelid}`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 p-4 w-full bg-base-200 rounded-xl flex flex-col gap-2">
            <div className="w-full flex items-start gap-2">
                <div className="flex-1">
                    <input
                        type="text"
                        className="input input-bordered h-9 w-full"
                        placeholder="제목"
                        {...register("title", {
                            required: "제목을 입력해주세요.",
                        })}
                    />
                    <h5 className="text-red-500 mt-1">{errors.title?.message}</h5>
                </div>
                <div>
                    <select
                        {...register("category", {
                            required: "카테고리를 입력해주세요.",
                        })}
                        className="select-sm select select-bordered w-[100px] h-9"
                    >
                        <option value="discussions">잡담</option>
                        <option value="questions">질문</option>
                        <option value="announcements">공지</option>
                    </select>
                    <h5 className="text-red-500 mt-1">{errors.category?.message}</h5>
                </div>
            </div>
            <div>
                <Controller
                    name="thumbnail"
                    control={control}
                    render={({ field: { onChange: onThumbnailChange } }) => (
                        <Controller
                            name="content"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <PostContentEditor
                                    value={value}
                                    onChange={(newContent, newThumbnail) => {
                                        onChange(newContent);
                                        onThumbnailChange(newThumbnail);
                                    }}
                                />
                            )}
                        />
                    )}
                />

                <h5 className="text-red-500 mt-1">{errors.content?.message}</h5>
            </div>
            <button type="submit" className="btn btn-primary w-[100px] mx-auto text-lg">
                등록
            </button>
        </form>
    );
};

export default PostForm;
