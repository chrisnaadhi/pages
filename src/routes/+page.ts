import type { PageLoad } from "./$types";

export const load = (async ({ fetch, params }) => {
  // const res = await fetch("server/api/data.json");
  return {
    post: {
      title: `Title for goes here`,
      content: `Content for goes here`,
    },
  };
}) satisfies PageLoad;
