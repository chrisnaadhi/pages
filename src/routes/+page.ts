import type { PageLoad } from "./$types";

export const load = (async ({ fetch, params }) => {
  let response = await fetch("/api");
  let data = await response.json();
  let blogs = data.reverse().slice(0, 3);
  return { blogs };
}) satisfies PageLoad;
