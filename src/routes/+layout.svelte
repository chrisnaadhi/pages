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

<main class="max-w-4xl ma">
  <Header />
  <section class="main-content">
    <slot />
  </section>
  <footer>
    <div>
      <p />
    </div>
    <div class="text-center">
      <h3>{formatTime}</h3>
      <p>&copy; {formatDate}</p>
    </div>
  </footer>
</main>

<style>
  .main-content {
    @apply flex items-center justify-center;
  }
</style>
