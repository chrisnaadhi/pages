<script lang="ts">
  import type { PageData } from "./$types";
  import BaseCard from "$lib/components/BaseCard.svelte";
  import { limitTextContent } from "$lib/helper/limiter";

  export let data: PageData;
</script>

<section>
  <h2>All of my Posts</h2>
  <div class="blogs">
    {#each data.blogs as post}
      <BaseCard>
        <h3>{post.title}</h3>
        <p>{limitTextContent(post.content)}...</p>
        <a href={"/posts/" + post.slug}>Read more</a>
      </BaseCard>
    {/each}
  </div>
</section>

<style>
  section {
    @apply min-h-150 bg-white rounded-xl p-5 my-5;
  }
  .blogs {
    --at-apply: flex flex-wrap sm:(grid grid-cols-2);
  }
</style>
