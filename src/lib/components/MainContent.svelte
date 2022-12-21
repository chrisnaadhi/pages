<script lang="ts">
  import BaseCard from "$lib/components/BaseCard.svelte";
  export let blogs: any;

  const limitTextContent = (content: string) => {
    return content.slice(0, 150);
  };
</script>

<section>
  {#each blogs as blog}
    <BaseCard>
      <h4>{blog.title}</h4>
      <p>{limitTextContent(blog.content)}...</p>
    </BaseCard>
  {/each}
</section>

<style>
  section {
    --at-apply: flex flex-wrap sm:(grid grid-cols-2) lg:grid-cols-3;
  }
  h4 {
    --at-apply: py-1 text-dark transition-all-500 hover:text-orange ;
  }
</style>
