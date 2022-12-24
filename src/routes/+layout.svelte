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
  <title>Miniature Garden</title>
</svelte:head>

<main class="max-w-4xl ma flex flex-col min-h-screen">
  <header>
    <Header />
  </header>
  <section class="main-content">
    <slot />
  </section>
  <footer>
    <div>
      <p />
    </div>
    <div class="text-center">
      <h3 class="text-4xl">{formatTime}</h3>
      <p class="text-xs">&copy; {formatDate}</p>
    </div>
  </footer>
</main>

<style>
  .main-content {
    @apply flex-1 mt-15 items-center justify-center text-center;
  }
  footer {
    @apply bg-white rounded-t-xl p-3;
  }
</style>
