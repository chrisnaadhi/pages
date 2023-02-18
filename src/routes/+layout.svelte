<script lang="ts">
  import "uno.css";
  import "../app.css";

  import { onMount } from "svelte";
  import Header from "./Header.svelte";
  import { isDark } from "$lib/helper/viewStore";

  let nowDate = new Date();

  function updateTime() {
    nowDate = new Date();
  }
  function changeColor() {
    $isDark = !$isDark;
    const bodyClass = document.body;
    localStorage.setItem("dark", $isDark.toString());
    if ($isDark === true) {
      bodyClass.classList.add("dark");
    } else {
      bodyClass.classList.remove("dark");
    }
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
    const checkDark = window.localStorage.getItem("dark");
    if (checkDark === "false") {
      $isDark = false;
      document.body.classList.remove("dark");
      console.log(checkDark, $isDark);
    } else {
      $isDark = true;
      document.body.classList.add("dark");
      console.log(checkDark, $isDark);
    }
  });
</script>

<svelte:head>
  <title>Miniature Garden | Chrisna Adhi's Blog</title>
  <link rel="shortcut icon" href="mini-garden.ico" type="image/x-icon" />
  <meta name="description" content="My Mini Blogs like a Miniature Garden" />
</svelte:head>

<main class="main-layer">
  <header>
    <Header />
  </header>
  <section class="main-content">
    <slot />
  </section>
  <footer>
    <div class="text-center text-dark">
      <p>{$isDark}</p>
      <h3 class="text-4xl dark:text-orange">{formatTime}</h3>
      <p class="text-xs dark:text-orange">&copy; {formatDate}</p>
    </div>
  </footer>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="fixed bottom-0 right-0 m-2" on:click={changeColor}>
    <div class="bg-dark rounded-lg p-2">
      <div class="icon i-mdi-weather-night text-2xl bg-blue-3" />
    </div>
  </div>
</main>

<style>
  .main-layer {
    @apply max-w-4xl bg-dark-50 ma flex flex-col min-h-screen;
    --at-apply: dark:bg-dark-50;
  }
  .main-content {
    @apply flex-1 mt-12 items-center justify-center text-center;
  }
  footer {
    --at-apply: bg-white dark:bg-dark-500 rounded-t-xl p-3;
  }
</style>
