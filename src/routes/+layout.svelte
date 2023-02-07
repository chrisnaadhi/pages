<script lang="ts">
  import "uno.css";
  import "../app.css";

  import { onMount } from "svelte";
  import Header from "./Header.svelte";

  let nowDate = new Date();

  function updateTime() {
    nowDate = new Date();
  }

  $: formatTime = nowDate.toLocaleTimeString("en-us", { hour12: false });
  $: formatDate = nowDate.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  onMount(() => {
    setInterval(updateTime, 1000);
  });
</script>

<svelte:head>
  <title>Miniature Garden | Chrisna Adhi's Blog</title>
  <link rel="shortcut icon" href="mini-garden.ico" type="image/x-icon" />
  <meta name="description" content="My Mini Blogs like a Miniature Garden" />
</svelte:head>

<main class="max-w-4xl ma flex flex-col min-h-screen">
  <header>
    <Header />
  </header>
  <section class="main-content">
    <slot />
  </section>
  <footer>
    <div class="text-center">
      <h3 class="text-4xl">{formatTime}</h3>
      <p class="text-xs">&copy; {formatDate}</p>
    </div>
  </footer>
  <div class="fixed bottom-0 right-0 m-2">
    <div class="bg-dark rounded-lg p-2">
      <div class="icon i-mdi-weather-night text-2xl bg-blue-3" />
    </div>
  </div>
</main>

<style>
  .main-content {
    @apply flex-1 mt-12 items-center justify-center text-center;
  }
  footer {
    @apply bg-white rounded-t-xl p-3;
  }
</style>
