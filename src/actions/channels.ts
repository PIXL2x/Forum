"use server";

import { supabaseServerClient } from "@/supabase/supabaseServer";

export async function getChannelByID(id: string) {
    const supabase = await supabaseServerClient();

    const { data: channel, error } = await supabase
        .from("channels")
        .select("id, name, description, created_at, image_icon, image_banner")
        .eq("id", id)
        .single();

    if (!channel || error) {
        console.log(`Error getting channel ${id}`);
        return null;
    }

    return channel;
}

export async function getChannels() {
    const supabase = await supabaseServerClient();
    const { data: channels, error } = await supabase.from("channels").select("id, name, description, created_at, image_icon");

    if (!channels || error) {
        console.log("Error getting channels");
        return [];
    }

    return channels;
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

    const { data, error } = await supabase.from("subscribes_view").select("id, name, image_icon").eq("profile_id", user.id);

    if (error) {
        console.error("Error fetching subscribes", error);
        return [];
    }

    return data;
}
