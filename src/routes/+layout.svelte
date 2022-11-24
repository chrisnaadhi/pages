<script lang="ts">
  import "uno.css";
  import "@unocss/reset/antfu.css";
  import "../app.css";
  import Header from "./Header.svelte";

  let date: Date = new Date();
</script>

<main class="min-w-4xl ma">
  <Header />
  <section class="main-content">
    <slot />
  </section>
  <footer>
    &copy; {date.toLocaleDateString("id-ID")}
  </footer>
</main>

<style>
  .main-content {
    @apply w-full flex items-center justify-center;
  }
</style>
