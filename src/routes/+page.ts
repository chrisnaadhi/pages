import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch, params }) => {
  let response = await fetch("/api");
  let data = await response.json();
  let blogs = await data;
  return { blogs };
}) satisfies PageLoad;
