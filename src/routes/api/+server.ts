import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET = (() => {
  const blogs = [
    {
      id: 1,
      title: "Hello World!",
      date: "20 December 2022",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi harum consequuntur, eos natus quidem obcaecati enim earum quibusdam aliquam.`,
      slug: "hello-world",
    },
    {
      id: 2,
      title: "Make it doubled!",
      date: "20 December 2022",
      content: `Here's an easy one that you can whip up quickly when you're running short on time. List the top 10 blog posts from the year. Or the top blog posts from around the web that week. Or simply do a ‘Best Of' post for your industry. This could be the best Twitter posts, forum posts, best blog posts, best news items, best product releases, etc. Whip up any combination of your choice. You could even do this on a weekly basis. People love these types of posts because it keeps them in the loop on what's going on in the industry without having to do all the searching themselves. Kikolani.com does a really good job of this in their ‘Fetching Friday' posts and check, out Pat’s Best of 2016 list.`,
      slug: "make-it-doubled",
    },
    {
      id: 3,
      title: "Thrice upon a time!",
      date: "20 December 2022",
      content: `Following NERV's failed attempt to retrieve the Spears of Longinus and carry out the Human Instrumentality Project, the destruction caused by the Fourth Impact has been largely averted. In a state of disarray, Shinji Ikari, Asuka Langley Shikinami, and Rei Ayanami travel to Village 3—a survivor settlement free from Earth's ruination. There, Shinji slowly comes to terms with his past, developing an entirely different life from his days as an Evangelion pilot. Meanwhile, NERV makes preparations to continue the Instrumentality Project by means of a new Impact. When WILLE's main aerial battleship arrives at the village, Shinji decides to board, believing that he can help by piloting an Evangelion. As new secrets are uncovered and a battle between WILLE and NERV approaches, the future of Earth hangs in the balance. Can Shinji save humanity and the rest of the world one last time?`,
      slug: "thrice-upon-a-time",
    },
    {
      id: 4,
      title: "Things I Wish I Had Done Differently",
      date: "23 December 2022",
      content: `These types of posts are almost always a hit because people love to read about other people's ‘mistakes'. Plus, they provide a ton of value for your readers and help them to avoid common pitfalls. Give your readers a look behind-the-curtain. Be authentic and transparent and people will love you for it.`,
      slug: "things-i-wish",
    },
    {
      id: 5,
      title: "New Blog with SvelteKit",
      date: "24 December 2022",
      content: `Excited by SvelteKit reach 1.0, i'm built this blog with SvelteKit. This Blog is built upon <a href="https://kit.svelte.dev" target="_blank" rel="noreferrer">SvelteKit</a> + <a href="https://uno.antfu.me/" target="_blank" rel="noreferrer">UnoCSS</a> and they looks promising in any near future. First thing i need to wrap up is that this content posts is only JSON that served in API Routes in SvelteKit, and i need to figure out how to serve content for this list of my posts (thought) conveniently. For now i'm trying to use MDSveX or SQLite to save my list of posts.<br /> Lately i'm trying to use some free cloud services of any CMS, but there is really a lot of tradeoffs and disadvantages like pause activity and limited resources. Maybe it's time to experiments with those options (MDSveX and SQLite) so i can make this blogs be static but can update the blog posts. <br /> Then it's about time! Let's make this happen on next trial`,
      slug: "new-blog",
    },
    {
      id: 6,
      title: "User Experience is Hard",
      date: "27 December 2022",
      content: `It's been years since i'm doing some design and user interface with the tendency of better user experiences. Sometimes kinda kinky to do optimization of views on any devices, tho it's going better with the support of CSS Frameworks. When CSS Frameworks make it easier to do scaling mobile view to desktop view, css framework come with some caveats that i need to breakthrough. <div class="code-block"><pre>@apply text-black px-3 py-2;</pre><pre>--at-apply: text-black px-3 py-2;</pre></div> I'm doing something like that for months because <a href="https://github.com/unocss/unocss" target="_blank" rel="noreferrer">UnoCSS</a> has some flaw with it's transformerDirectives. Though, it was ugly but it's better enough, just need some styling rule so it's not going to messed up real quick.`,
      slug: "ux-is-hard",
    },
    {
      id: 7,
      title:
        "Web Platform today make everything easier and harder at the same time",
      date: "7 February 2023",
      content: `Build something in web is really easy nowaday, thanks to the innovation of three of the main language of the web (HTML, CSS and Javascript) that has evolved throught the year. Tho sometimes there is some caveat that web platform was harder than what we think, more over because everyday we got newer and fresh javascript framework to compete. But that's the reason we're saw the easier part of the web and the harder part of the web, thus i think web platform are not going to anywhere soon. <br /> Gotta love to experiment and doing something fun on the web!`,
      slug: "web-platform-today",
    },
  ];
  if (!blogs) {
    throw error(404, "No Blogs can't be fetched");
  }
  return new Response(JSON.stringify(blogs));
}) satisfies RequestHandler;
