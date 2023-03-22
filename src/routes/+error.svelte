<script>
  import { page } from "$app/stores";
</script>

<main>
  <h1 class="text-7xl">{$page.status}</h1>
  <p>${$page.error?.message}</p>
</main>

<style>
  main {
    --at-apply: pt-10;
  }
</style>
