import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET = (() => {
  const blogs = [
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
      <iframe width="100%" height="365" src="https://www.youtube.com/embed/kMlkCYL9qo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <br />
      Svelte also has really great <a href="https://svelte.dev/tutorial" target="_blank">standard tutorial</a> and <a href="https://learn.svelte.dev/" target="_blank">learning page</a> that can be followed so easily. What i've really hooked to Svelte was the word that Rich Harris said in the Documenter : <br />
      <em>"We would rather have a thing that a small number of people love than a thing a large number of people tolerate"</em> <br/>~ Rich Harris(2022)
      `,
      slug: "react-was-overhead",
    },
    {
      id: 9,
      title: "Librarian and the future of library infrastructure with AI disruption",
      date: "22 February 2025",
      content: `Librarian was the most underrated profession in the world, because most of people was thinking that librarian was just a person that manage the books and the library itself. But, librarian was more than that, librarian was the information professional that can manage and disseminate the information to the end-users in the most convenient way. The librarian was the information architect that can make the information more accessible and reliable for the end-users. <br />
      The future of library infrastructure was really depend on the AI disruption that was happening in the world right now. AI was the most powerful tool that can be used to manage and disseminate the information in the most efficient way, but the AI was also the most dangerous tool that can be used to manipulate the information and the end-users itself. The librarian was the key to make sure the AI was used in the most ethical way and can be used to make the information more accessible and reliable for the end-users. <br />
      AI Races revives the "Western Bloc" and "Eastern Bloc" then Developers of illegal journal sites such as LibGen, Sci-Hub and Anna's Archive have begun to speak up and take the opportunity at this AI Races moment to vocally "threaten" America to "Reform" the issue of Copyright and Ownership of Copyrighted Works, by taking the case study of the Chinese LLM company.
      <br />
      Context: https://annas-archive.org/blog/ai-copyright.html
      <br />
      In My Humble Opinion: Knowledge should be free, but ownership shall be granted thus it's all matters of ethics (just like citation). So I am very (and always have been) skeptical of the use of "legal" works that are locked with billions of subscriptions when most of us rely more on "illegal" works. After all, I believe more that all my works are made with the MIT License on GitHub so that everyone can use them, rather than having to be published with a _paywall_ which only benefits a few people.
      <br />
      In My Humble Opinion: Knowledge should be free and accessible to all, as it is a fundamental pillar of progress, learning, and intellectual growth. However, ownership and attribution must be acknowledged and respected, as they are matters of ethics—just like citation in academic and creative works. Recognizing the contributions of authors, researchers, and creators ensures that intellectual property is valued while still allowing knowledge to be shared and built upon.
      <br />
      Libraries, as institutions of knowledge preservation and dissemination, will not endure merely because of their physical structures or printed collections. Rather, their survival hinges on the role of librarians and information professionals in curating, organizing, and delivering valuable and relevant information to users. It is through our dedication, expertise, and service that libraries remain indispensable in an ever-evolving digital world.
      <br />
      With this belief, I am convinced that infrastructure and information systems are not merely supporting elements but foundational components of modern libraries. A well-designed, adaptable, and user-centered information system can bridge gaps, enhance accessibility, and illuminate the path toward a more informed and connected society. Libraries, in essence, are not just about storing books—they are about empowering individuals with knowledge, fostering intellectual curiosity, and ensuring that information remains a beacon of enlightenment for generations to come.`,
      slug: "librarian-and-the-future",
    }
  ];
  if (!blogs) {
    throw error(404, "No Blogs can't be fetched");
  }
  return new Response(JSON.stringify(blogs));
}) satisfies RequestHandler;
