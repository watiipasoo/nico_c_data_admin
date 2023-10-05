import { supabase } from "$lib/supabaseClient";

export async function load() {
  let { data: profiles, error } = await supabase
    .from("profiles")
    .select(
      `
      id,
      email,
      status,
      username,
      Subscriptions (
        subscription
      )
    `
    )
    .order("updated_at", { ascending: true });

  console.log(profiles);
  return {
    countries: profiles ?? [],
  };
}
