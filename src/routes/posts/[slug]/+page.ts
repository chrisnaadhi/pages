import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch, params }) => {
  const response = await fetch("/api");
  const data = await response.json();
  const blog = data.find((el: { slug: string }) => el.slug === params.slug);

  if (params.slug && blog) {
    return {
      title: blog.title,
      content: blog.content,
      date: blog.date,
    };
  }

  throw error(404, "Not Found");
}) satisfies PageLoad;
