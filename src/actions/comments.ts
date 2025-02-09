"use server";

import { supabaseServerClient } from "@/supabase/supabaseServer";

export async function getCommentsFromPost(postid: string) {
    const supabase = await supabaseServerClient();
    const { data: comments, error } = await supabase.from("comments_view").select("*").eq("post", parseInt(postid));

    if (!comments || error) {
        console.log(`Error getting comments for post ${postid}`);
        return [];
    }

    return comments;
}

export async function createComment(postid: string, content: string) {
    const supabase = await supabaseServerClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        console.log("User not signed in");
        return;
    }

    await supabase.from("comments").insert([{ post: parseInt(postid), author: user.id, content }]);
}
