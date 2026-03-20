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
      AI Races revives the "Western Bloc" and "Eastern Bloc" then the Developers of illegal journal sites such as LibGen, Sci-Hub and Anna's Archive have begun to speak up and take the opportunity at this AI Races moment to give a "threat" to the US to "Reform" the issue of Copyright and Ownership of Copyrighted Works, by taking the case of the Chinese LLM company if they want to win the AI Races.
      <br />
      Context: <a href="https://annas-archive.org/blog/ai-copyright.html" target="_blank">https://annas-archive.org/blog/ai-copyright.html</a>
      <br />
      In My Humble Opinion: Knowledge should be free and accessible to all, as it is a fundamental pillar of progress, learning, and intellectual growth. However, ownership and attribution must be acknowledged and respected, as they are matters of ethics—just like citation in academic and creative works. Recognizing the contributions of authors, researchers, and creators ensures that intellectual property is valued while still allowing knowledge to be shared and built upon.
      <br />
      Libraries, as institutions of knowledge preservation and dissemination, will not endure merely because of their physical structures or printed collections. Rather, their survival hinges on the role of librarians and information professionals in curating, organizing, and delivering valuable and relevant information to users. It is through our dedication, expertise, and service that libraries remain indispensable in an ever-evolving digital world.
      <br />
      I mean even SciHub uses Web 3 and Blockchains infrastructure to keep their stuff survived. You can check it on their sites : <a href="https://sci-hub.se" target="_blank">https://sci-hub.se</a>
      <br />
      With this belief, I am convinced that infrastructure and information systems are not merely supporting elements but foundational components of modern libraries. A well-designed, adaptable, and user-centered information system can bridge gaps, enhance accessibility, and illuminate the path toward a more informed and connected society. Libraries, in essence, are not just about storing books—they are about empowering individuals with knowledge, fostering intellectual curiosity, and ensuring that information remains a beacon of enlightenment for generations to come.
      <br />
      <br />
      As a starting point, i'm also initiate the Curatorian Projects : <br />
      <a href="https://curatorian.id" target="_blank">https://curatorian.id</a>
      `,
      slug: "librarian-and-the-future",
    },
    {
      id: 10,
      title: "仁 — Socialism in My Head",
      date: "20 March 2025",
      content: `I am not a political person.
      <br /><br />
      I do not follow parties. I do not argue about economic systems on the internet. I do not have a manifesto pinned to my wall.
      <br /><br />
      But I have believed in something for a long time — something I could never quite name — about how people <em>should</em> treat each other. About resources and effort and generosity. About who deserves what, and why.
      <br /><br />
      I found the word for it, eventually. Not in a political textbook. Not in a philosophy lecture. In Bushido.
      <br /><br />
      仁 — <em>Jin</em>. Benevolence. And once I had the word, everything else started to make sense.
      <br /><br />
    
      <strong>What I Mean When I Say Socialism</strong>
      <br /><br />
      The word socialism carries a lot of weight. Most people hear it and immediately picture one of two things: either a government handing out free things to everyone, or a Soviet-era authoritarian state controlling every aspect of life.
      <br /><br />
      I mean neither of those things.
      <br /><br />
      When I say socialism — my version of it, the personal and internalized version — I mean something much simpler and much harder at the same time: <em>you work hard, you build something real, someone else works hard and genuinely needs what you have, you share — not because you are forced to, not because you feel guilty, but because you chose to.</em>
      <br /><br />
      That is it. That is the whole model.
      <br /><br />
      There are no free rides in this version. There is no entitlement. There is no state machinery enforcing redistribution. There is only effort meeting effort, and one person choosing to extend their strength toward another.
      <br /><br />
      It is not capitalism, because the motive is not personal gain. It is not welfare, because the recipient must genuinely try. The closest word I have found for it is <em>covenant</em> — a mutual agreement built not on contract but on character.
      <br /><br />
    
      <strong>The Formula</strong>
      <br /><br />
      I think about it as a simple flow: you work hard → you genuinely have something → someone else genuinely needs it → you share, not from guilt but from 仁 → they use it well, they grow → the ecosystem lifts everyone.
      <br /><br />
      That last step is important. This is not a transaction between two people. When knowledge flows freely between people who deserve it, the whole environment changes. Libraries understood this long before anyone called it socialism. The idea that a community's shared knowledge belongs to everyone in that community — that is one of the oldest human instincts we have.
      <br /><br />
      I studied Library and Information Science. I work as a librarian and a developer at a university. Every day I see what happens when information is locked behind institutions that can afford it, and what happens when it is not. The difference is not small. It is the difference between a person who can grow and a person who cannot.
      <br /><br />
    
      <strong>仁 — It Is Not Softness</strong>
      <br /><br />
      A common misreading of benevolence is that it means being endlessly accommodating. Giving to anyone who asks. Tolerating anything from anyone. That is not 仁.
      <br /><br />
      In Bushido, 仁 is the discipline of the <em>strong</em>. It is the samurai who has trained for years, who has real power, who <em>chooses</em> to use that power in service of others — but only of those who deserve it. It is not softness. It is strength with direction.
      <br /><br />
      What I cannot stand — what genuinely exhausts and angers me — is <strong>laziness dressed as entitlement</strong>. People who take without trying. People who consume without contributing. People who receive generosity and waste it, and then go right back to doing nothing and expecting more.
      <br /><br />
      There is a difference between struggling but trying — those are my people. Lazy but honest about it — I can at least respect that. Entitled and ungrateful — you violate 仁 itself.
      <br /><br />
      仁 without self-respect becomes enabling. Self-respect without 仁 becomes elitism. You need both. You always need both.
      <br /><br />
    
      <strong>I Saw It First in Onizuka</strong>
      <br /><br />
      Before I had the word 仁, I had Eikichi Onizuka. <em>Great Teacher Onizuka</em> is, on the surface, a story about a delinquent who becomes a high school teacher. He is reckless and impulsive and barely qualified for the job on paper.
      <br /><br />
      But he has something that none of the "proper" teachers in that show have. Every technically correct, rule-following, diligent teacher in GTO is working hard — for themselves. For their career. For their reputation. When it costs nothing, they are generous. When it costs something real, they disappear.
      <br /><br />
      Onizuka fights for his students when no one else will. Not because it benefits him. Not because it looks good. Because they are <em>his</em>, and he refuses to let them fall. When he says "you're my friend", he means it completely. He does not say it to everyone — only to the people who have shown him their whole selves.
      <br /><br />
      That is 仁. Untrained, unpolished, dressed in a tracksuit. But pure.
      <br /><br />
    
      <strong>I Hate People</strong>
      <br /><br />
      Let me be honest about something that seems to contradict everything I have just said.
      <br /><br />
      I am introverted in a way that goes beyond preference. Social gatherings drain me. Public speaking makes me want to disappear. Crowds feel like noise I have not consented to. And sometimes — often — I feel like I simply hate people.
      <br /><br />
      But I have also stayed awake through the night for the right project, with the right people, giving more than I thought I had left. I have felt that specific energy of being in a room where everyone is actually <em>there</em>, actually trying, actually building something that matters. And in those moments I am not introverted at all.
      <br /><br />
      The difference was never introvert versus extrovert. The difference was authenticity. What I actually hate is <strong>inauthenticity</strong>. Presence without sincerity. Showing up without being there. Performing participation in things that no one actually cares about.
      <br /><br />
      Selectivity is not antisocial. It is integrity.
      <br /><br />
    
      <strong>Then There Is Shinji</strong>
      <br /><br />
      I want to talk about a character I used to hate. Shinji Ikari, from <em>Neon Genesis Evangelion</em>, is one of the most frustrating protagonists in anime. He hesitates. He runs away. He cries when he should fight. For a long time I was impatient with him. <em>Just get in the robot</em>, I thought.
      <br /><br />
      Then I hit my own lowest point.
      <br /><br />
      There was a period when I was exhausted in a way that sleep could not fix. Invisible in a way that presence could not remedy. Unsure, in a genuine and frightening way, why I should keep going at all.
      <br /><br />
      And I understood Shinji completely.
      <br /><br />
      He is not a failed hero. He is an <em>honest portrait</em> of what a person looks like when they are carrying too much with no one to share the weight. What I missed, when I was impatient with him, was the thing that actually matters: <strong>he still got in the robot.</strong>
      <br /><br />
      Not because he was brave. Not because someone gave him a great speech that fixed everything. He got in because something in him — small, exhausted, barely alive — refused to let the world continue without him in it.
      <br /><br />
      I know that feeling now. I have lived it. And I think that is the most human kind of courage there is — not the dramatic kind, but the quiet, terrible, everyday courage of continuing when you have every reason not to.
      <br /><br />
      I do not hate Shinji anymore. He was showing me something I was not ready to see.
      <br /><br />
    
      <strong>Internalize, Then Externalize</strong>
      <br /><br />
      Most political and social theory tries to fix human behavior through systems. Build the right structure, incentivize the right actions, and good behavior will follow. The system produces the character.
      <br /><br />
      I think it works the other way. <strong>Fix the person first. The system follows.</strong>
      <br /><br />
      Internalize benevolence — work on yourself, build real skill, build real integrity, have something genuine to give. Not performed virtue. Not strategic generosity. Real capacity, built through real effort.
      <br /><br />
      Then externalize altruism — look outward with discernment, find the people who are genuinely trying, and share without condition but not without judgment.
      <br /><br />
      The sequence matters. You cannot skip the first step. Generosity without capacity is just guilt. Altruism without self-respect is just performance. 仁 cannot be legislated. It can only be cultivated — person by person, choice by choice.
      <br /><br />
    
      <strong>This Is What I Believe</strong>
      <br /><br />
      Work hard. Share well. Choose your people carefully. Give everything when you find them.
      <br /><br />
      That is enough. That is everything.
      <br /><br />
      仁 is not a political position. It is a character you build inside yourself until it overflows outward — toward people who are trying, toward communities that are forgotten, toward the places where knowledge should be but is not.
      <br /><br />
      I do not know if what I am building will last. I do not know if it will reach everyone it should reach. I do not know if I am doing it right.
      <br /><br />
      But I know why I am doing it. And that, I think, is where 仁 begins.
      `,
      slug: "jin-socialism-in-my-head",
    }
  ];
  if (!blogs) {
    throw error(404, "No Blogs can't be fetched");
  }
  return new Response(JSON.stringify(blogs));
}) satisfies RequestHandler;
