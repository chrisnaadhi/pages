<script lang="ts">
  import { page } from "$app/stores";
  let path: string;

  $: path = $page.url.pathname;
  $: active = (value: string) => {
    return path === value ? "menu-active menu-link" : "menu-link";
  };
</script>

<template>
  <main>
    <nav>
      <a href="/" class={active("/")}>Home</a>
      <a href="/about" class={active("/about")}>About</a>
      <a href="/posts" class={active("/posts")}>Blog</a>
      <a href="/contact" class={active("/contact")}>Contact</a>
    </nav>
    <section>
      <a
        href="https://github.com/chrisnaadhi"
        target="_blank"
        rel="noreferrer"
        aria-label="Github Profile"
      >
        <button
          class="icon-wrapper social"
          id="github"
          aria-label="Github Button"
        >
          <div class="icon i-mdi-github bg-dark" id="github-icon" />
        </button>
      </a>
      <a
        href="https://twitter.com/chrisnaadhip"
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter Profile"
      >
        <button
          class="icon-wrapper social"
          id="twitter"
          aria-label="Twitter Button"
        >
          <div class="icon i-mdi-twitter bg-blue" id="twitter-icon" />
        </button>
      </a>
      <a
        href="https://instagram.com/chrisnaadhip"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram Profile"
      >
        <button
          class="icon-wrapper social"
          id="instagram"
          aria-label="Instagram Button"
        >
          <div class="icon i-mdi-instagram bg-pink-5" id="discord-icon" />
        </button>
      </a>
    </section>
  </main>
</template>

<style>
  main {
    --at-apply: fixed w-full max-w-4xl flex justify-between items-center bg-white dark:bg-dark-500 rounded-b-xl p-3;
  }
  .icon-wrapper {
    --at-apply: p-1 bg-gray-50 dark:bg-gray-2 rounded-lg cursor-pointer sm:(px-3 py-2 rounded-lg);
  }
  .social {
    @apply border-none;
  }
  .social:hover .icon {
    @apply bg-white;
  }
  #twitter:hover {
    @apply bg-blue;
  }
  #github:hover {
    @apply bg-dark;
  }
  #instagram:hover {
    @apply bg-pink-5;
  }
</style>
