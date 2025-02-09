"use server";

import { supabaseServerClient } from "@/supabase/supabaseServer";

export async function getChannelByID(id: string) {
    const supabase = await supabaseServerClient();

    const { data: channel, error } = await supabase.from("channels").select("*").eq("id", id).single();

    if (!channel || error) {
        console.log(`Error getting channel ${id}`);
        return null;
    }

    return channel;
}

export async function getChannels() {
    const supabase = await supabaseServerClient();
    const { data: channels, error } = await supabase.from("channels").select("*");

    if (!channels || error) {
        console.log("Error getting channels");
        return [];
    }

    return channels;
}

export async function getRecommendedChannels() {
    const supabase = await supabaseServerClient();
    const { data: channels, error } = await supabase.from("channels").select("*").limit(5);

    if (!channels || error) {
        console.log("Error getting recommended channels");
        return [];
    }

    return channels;
}

export async function getRecommendedChannelsWithPosts() {
    const supabase = await supabaseServerClient();
    const { data: channels, error } = await supabase.from("channels").select("id, name").limit(5);

    if (!channels || error) {
        console.log("Error getting recommended channels");
        return [];
    }

    const channelsWithPosts = await Promise.all(
        channels.map(async (channel) => {
            const { data: posts, error } = await supabase
                .from("posts_view")
                .select("id, title, username, channel, created_at, comments")
                .eq("channel", channel.id)
                .limit(5);

            if (!posts || error) {
                console.log("Error getting posts for channel", channel.id);
                return { ...channel, posts: [] };
            }

            return { ...channel, posts };
        })
    );

    return channelsWithPosts;
}

export async function getSubscribedChannels() {
    const supabase = await supabaseServerClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        console.log("User not signed in");
        return [];
    }

    const { data, error } = await supabase.from("subscribes_view").select("*").eq("profile_id", user.id);

    if (error) {
        console.error("Error fetching subscribes", error);
        return [];
    }

    return data;
}
