"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Youtube from "@tiptap/extension-youtube";
import Image from "@tiptap/extension-image";
import { useRef } from "react";
import { FaBold, FaImage, FaItalic, FaRedo, FaStrikethrough, FaUndo, FaYoutube } from "react-icons/fa";
import { TbH1, TbH2, TbH3, TbH4 } from "react-icons/tb";
import { clsx } from "clsx";
import { addImage } from "@/actions/assets";

type PostContentEditorProps = {
    value: string;
    onChange: (content: string, thumbnail: string) => void;
};

const PostContentEditor = ({ value, onChange }: PostContentEditorProps) => {
    let thumbnail = "";

    const editor = useEditor({
        extensions: [StarterKit, Image, Youtube],
        content: value,
        autofocus: true,
        immediatelyRender: false,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML(), thumbnail);
        },
        editorProps: {
            attributes: {
                class: "focus:outline-none",
            },
        },
    });

    const imageInput = useRef<HTMLInputElement>(null);

    const handleImageUpload = async () => {
        if (!editor) {
            return;
        }

        const file = imageInput.current?.files?.[0];
        if (!file) {
            console.log("No file selected");
            return;
        }

        const src = await addImage(file, "posts");
        if (!src) {
            console.log("Error uploading image");
            return;
        }

        thumbnail = src;
        onChange(editor.getHTML(), thumbnail);

        editor.chain().focus().setImage({ src }).run();
    };

    const handleAddYoutube = () => {
        if (!editor) {
            return;
        }

        const url = prompt("유튜브 URL을 입력해주세요.");
        if (!url) {
            return;
        }

        editor.commands.setYoutubeVideo({
            src: url,
            width: 640,
            height: 480,
        });
    };

    if (!editor) {
        return null;
    }

    return (
        <div>
            <div className="w-full h-10 rounded-b bg-base-300 rounded-box flex px-10">
                <button
                    type="button"
                    title="실행취소"
                    onClick={() => editor.chain().focus().undo().run()}
                    className={clsx("w-10 h-full flex items-center justify-center hover:bg-base-200 transition-all")}
                >
                    <FaUndo size={20} />
                </button>
                <button
                    type="button"
                    title="다시실행"
                    onClick={() => editor.chain().focus().redo().run()}
                    className={clsx("w-10 h-full flex items-center justify-center hover:bg-base-200 transition-all")}
                >
                    <FaRedo size={20} />
                </button>
                <div className="mx-2 w-0.5 h-full bg-base-200" />
                <button
                    type="button"
                    title="큰글씨"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    disabled={!editor.can().chain().focus().toggleHeading({ level: 1 }).run()}
                    className={clsx("w-10 h-full flex items-center justify-center hover:bg-base-200 transition-all")}
                >
                    <TbH1 size={32} />
                </button>
                <button
                    type="button"
                    title="약간 큰글씨"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    disabled={!editor.can().chain().focus().toggleHeading({ level: 2 }).run()}
                    className={clsx("w-10 h-full flex items-center justify-center hover:bg-base-200 transition-all")}
                >
                    <TbH2 size={30} />
                </button>
                <button
                    type="button"
                    title="보통 큰글씨"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    disabled={!editor.can().chain().focus().toggleHeading({ level: 3 }).run()}
                    className={clsx("w-10 h-full flex items-center justify-center hover:bg-base-200 transition-all")}
                >
                    <TbH3 size={28} />
                </button>
                <button
                    type="button"
                    title="보통 글씨"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    disabled={!editor.can().chain().focus().toggleHeading({ level: 4 }).run()}
                    className={clsx("w-10 h-full flex items-center justify-center hover:bg-base-200 transition-all")}
                >
                    <TbH4 size={26} />
                </button>
                <div className="mx-2 w-0.5 h-full bg-base-200" />
                <button
                    type="button"
                    title="굵게"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    className={clsx(
                        "w-10 h-full flex items-center justify-center hover:bg-base-200 transition-all",
                        editor.isActive("bold") && "bg-base-200"
                    )}
                >
                    <FaBold size={20} />
                </button>
                <button
                    type="button"
                    title="기울임"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editor.can().chain().focus().toggleItalic().run()}
                    className={clsx(
                        "w-10 h-full flex items-center justify-center hover:bg-base-200 transition-all",
                        editor.isActive("italic") && "bg-base-200"
                    )}
                >
                    <FaItalic size={20} />
                </button>
                <button
                    type="button"
                    title="취소선"
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editor.can().chain().focus().toggleStrike().run()}
                    className={clsx(
                        "w-10 h-full flex items-center justify-center hover:bg-base-200 transition-all",
                        editor.isActive("strike") && "bg-base-200"
                    )}
                >
                    <FaStrikethrough size={20} />
                </button>
                <div className="mx-2 w-0.5 h-full bg-base-200" />
                <button
                    type="button"
                    title="이미지 삽입"
                    onClick={() => imageInput.current?.click()}
                    className={clsx("w-10 h-full flex items-center justify-center hover:bg-base-200 transition-all")}
                >
                    <FaImage size={20} />
                </button>
                <button
                    type="button"
                    title="유튜브 삽입"
                    onClick={handleAddYoutube}
                    className={clsx(
                        "w-10 h-full flex items-center justify-center hover:bg-base-200 transition-all",
                        editor.isActive("youtube") && "bg-base-200"
                    )}
                >
                    <FaYoutube size={20} />
                </button>
            </div>
            <EditorContent
                className="p-4 bg-base-100 h-[512px] overflow-y-auto rounded-xl rounded-t  cursor-text"
                editor={editor}
            />
            <input type="file" accept="image/*" ref={imageInput} onChange={handleImageUpload} hidden />
        </div>
    );
};

export default PostContentEditor;
