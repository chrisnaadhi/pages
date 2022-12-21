import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET = (({ url }) => {
  const blogs = [
    {
      title: "Hello World!",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi harum consequuntur, eos natus quidem obcaecati enim earum quibusdam aliquam.",
      slug: "hello-world",
    },
    {
      title: "Make it doubled!",
      content:
        "Here's an easy one that you can whip up quickly when you're running short on time. List the top 10 blog posts from the year. Or the top blog posts from around the web that week. Or simply do a ‘Best Of' post for your industry. This could be the best Twitter posts, forum posts, best blog posts, best news items, best product releases, etc. Whip up any combination of your choice. You could even do this on a weekly basis. People love these types of posts because it keeps them in the loop on what's going on in the industry without having to do all the searching themselves. Kikolani.com does a really good job of this in their ‘Fetching Friday' posts and check, out Pat’s Best of 2016 list.",
      slug: "make-it-doubled",
    },
    {
      title: "Thrice upon a time!",
      content:
        "Following NERV's failed attempt to retrieve the Spears of Longinus and carry out the Human Instrumentality Project, the destruction caused by the Fourth Impact has been largely averted. In a state of disarray, Shinji Ikari, Asuka Langley Shikinami, and Rei Ayanami travel to Village 3—a survivor settlement free from Earth's ruination. There, Shinji slowly comes to terms with his past, developing an entirely different life from his days as an Evangelion pilot. Meanwhile, NERV makes preparations to continue the Instrumentality Project by means of a new Impact. When WILLE's main aerial battleship arrives at the village, Shinji decides to board, believing that he can help by piloting an Evangelion. As new secrets are uncovered and a battle between WILLE and NERV approaches, the future of Earth hangs in the balance. Can Shinji save humanity and the rest of the world one last time?",
      slug: "thrice-upon-a-time",
    },
    {
      title: "Things I Wish I Had Done Differently",
      content:
        "These types of posts are almost always a hit because people love to read about other people's ‘mistakes'. Plus, they provide a ton of value for your readers and help them to avoid common pitfalls. Give your readers a look behind-the-curtain. Be authentic and transparent and people will love you for it.",
      slug: "things-i-wish",
    },
  ];
  if (!blogs) {
    throw error(400, "No Blogs can't be fetched");
  }
  return new Response(JSON.stringify(blogs));
}) satisfies RequestHandler;
