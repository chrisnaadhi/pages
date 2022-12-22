<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<section>
  <h1>{data.title}</h1>
  <p>{data.content}</p>
</section>

<style>
  section {
    @apply min-h-150 bg-white rounded-xl p-5 my-5;
  }
</style>
