<script lang="ts">
  import BaseCard from "$lib/components/BaseCard.svelte";
  import { limitTextContent } from "$lib/helper/limiter";
  export let blogs: any;
</script>

<section>
  {#each blogs as blog}
    <BaseCard>
      <a href={"posts/" + blog.slug} class="no-underline">
        <h5 class="head-title">{blog.title}</h5>
      </a>
      <p class="text-left text-dark dark:text-gray-3">
        {limitTextContent(blog.content)}...
      </p>
      <a href={"posts/" + blog.slug}>Read More</a>
    </BaseCard>
  {/each}
</section>

<style>
  section {
    --at-apply: flex flex-1 flex-wrap bg-gray-50 dark:bg-dark-500 sm:(grid grid-cols-2) lg:grid-cols-2;
  }
  .head-title {
    --at-apply: py-1 text-dark dark:text-white transition-all-500 hover:text-orange;
  }
</style>
