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
    {
      id: 8,
      title: "React was overhead for me, Vue and Svelte did better.",
      date: "18 June 2023",
      content: `
      React was the most popular and well known frontend library out there, it was always got the first rank in developer survey in the total usage in the frontend world. But in my opinion, React was overhead and really difficult to learn or grasp even though there is a lot of React tutorial out there in the willd, it was a real pain when i've been tried to learning it in the past.<br/>
      When i'm still a students in university (around 2018), i've always seen learning materials about frontend stuff is all about React and it was make me feel overwhelmed from the concept to the implementation itself (how is JSX can be readable for non-programmer anyway ?). The Library and Information Science approach was architecture of information and how the information was delivered and disseminated to the end-users in convenient way, and end-users doesn't care about what tech you're gonna uses. But, for the librarian, using tech was sometimes really exhausting and can distract us with learning complex stuff and doing debugging rather than focus more on product itself (the information). <br />
      Year of 2020, Vue was the most starred project on GitHub and the road to Vue 3 was pave it's way. I'm started to learning Vue and it was incredible experience, the documentation and example was really easy to follow and give me more faster adoption to it's implementation. The tooling was also convenient, because the SFC concept and Vite (build tool of Vue) was initially release and give breeze usage for Vue, later it was adopted in most frontend framework. After Vue 3 stabilized in 2022, the documentation and feature of Vue progressively enhanced (like the motto on it's page) like no brake! The Composition API was my favourite from the Vue 3, because the concise structure and easy to follow mutable state for value. <br />
      Svelte on 2020 gaining my attention because the syntax and pattern was really simple but powerful. I've read the blog post from Rich Harris that say <a href="https://svelte.dev/blog/virtual-dom-is-pure-overhead" target="_blank">Virtual DOM was pure overhead</a>. I don't really "get" what does that mean, but when i'm compare the load speed and bundle size of React, Vue and Svelte then i'm nearly "get" that. Build things to be more optimized was mandatory in the era of information, because a lot of people hate distraction and want to get information more quickly and efficient. I know maybe there is a lot of people using a high-end device that can process web load and information pages more quickly from the help of their devices and fast network, but don't forget there is a lot of people too that barely afford to use 3G network in their place. Indonesia was one of the most middle-to-low area for network connectivity and devices power, thus most of consumer really have limited access over the internet and the web. Bundle Size and Performance was the important actor here right now, because we need to use user-friendly architecture and infrastructure to make sure our user can get information they need more fast, low-resources and reliable. Svelte was the key here to implement this kind of architecture and platform.<br />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/kMlkCYL9qo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <br />
      Svelte also has really great standard tutorial and learning page that can be followed so easily. What i've really hooked to Svelte was the word that Rich Harris said in the Documenter : <br />
      "We would rather have a thing that a small number of people love than a thing a large number of people tolerate" ~ Rich Harris(2022)
      `,
      slug: "react-was-overhead",
    },
  ];
  if (!blogs) {
    throw error(404, "No Blogs can't be fetched");
  }
  return new Response(JSON.stringify(blogs));
}) satisfies RequestHandler;
