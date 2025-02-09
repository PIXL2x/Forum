"use server";

import { supabaseServerClient } from "../supabase/supabaseServer";

export async function getPostFromID(postid: string) {
    const supabase = await supabaseServerClient();

    const { data: post, error } = await supabase.from("posts").select().eq("id", parseInt(postid)).single();

    if (!post || error) {
        console.log(`Error getting post with id ${postid}`);
        return null;
    }

    return post;
}

export async function getPostsFromChannel(channelid: string, category: string, page: number) {
    const supabase = await supabaseServerClient();

    if (category === "all") {
        let { data: posts, error } = await supabase
            .from("posts_view")
            .select("*")
            .eq("channel", channelid)
            .order("created_at", { ascending: false })
            .range((page - 1) * 10, page * 10 - 1);

        if (!posts || error) {
            console.log(`Error getting posts from channel with id ${channelid}`);
            console.log(error);
            return [];
        }

        return posts;
    } else {
        let { data: posts, error } = await supabase
            .from("posts_view")
            .select("*")
            .eq("channel", channelid)
            .eq("category", category)
            .order("created_at", { ascending: false })
            .range((page - 1) * 10, page * 10 - 1);

        if (!posts || error) {
            console.log(`Error getting posts from channel with id ${channelid}`);
            console.log(error);
            return [];
        }

        return posts;
    }
}

export async function countPagesFromChannel(channelid: string) {
    const supabase = await supabaseServerClient();

    const { data, error } = await supabase.from("posts_view").select("count", { count: "exact" }).eq("channel", channelid);

    if (!data || error) {
        console.log(`Error counting posts from channel with id ${channelid}`);
        return -1;
    }

    return Math.ceil(data[0].count / 10);
}

export async function isPostMine(postid: string) {
    const supabase = await supabaseServerClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        console.log("User not signed in");
        return false;
    }

    const post = await getPostFromID(postid);

    if (!post) {
        console.log(`Post with id ${postid} not found`);
        return false;
    }

    return post.author === user.id;
}

export async function createPost(title: string, content: string, channelid: string, category: string, thumbnail: string) {
    const supabase = await supabaseServerClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        console.log("User not signed in");
        return;
    }

    await supabase.from("posts").insert({
        content,
        title,
        channel: channelid,
        category,
        thumbnail,
        author: user.id,
    });
}

export async function getPostsFromUser(userid: string) {
    const supabase = await supabaseServerClient();

    const { data: posts, error } = await supabase
        .from("posts")
        .select("*, author (username), comments (count), channel (name_id)")
        .eq("author", userid);

    if (!posts || error) {
        console.log(`Error getting posts from user with id ${userid}`);
        return [];
    }

    return posts;
}
