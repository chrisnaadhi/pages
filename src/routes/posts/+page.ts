import type { PageLoad } from "./$types";

export const load = (async ({ fetch, params }) => {
  let response = await fetch("/api");
  let blogs = await response.json();
  return { blogs };
}) satisfies PageLoad;
