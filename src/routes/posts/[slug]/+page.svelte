<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <meta name="description" content={data.title} />
</svelte:head>
<section>
  <h3>{data.title}</h3>
  <p class="italic font-500 pb-3">{data.date}</p>
  <p class="text-justify">{@html data.content}</p>
  <div class="mt-5">
    <a class="btn btn-link" href="/posts">Back to Posts</a>
    <a class="btn btn-link" href="/">Back to Home</a>
  </div>
</section>

<style>
  section {
    --at-apply: min-h-150 bg-white text-dark dark:bg-dark-500 rounded-xl px-5 sm:px-10 py-5 my-5;
  }
  .btn-link {
    --at-apply: bg-gray-2 text-orange-6 no-underline hover:(bg-orange text-white);
  }
  h3, p {
    --at-apply: text-dark dark:text-white;
  }
</style>
