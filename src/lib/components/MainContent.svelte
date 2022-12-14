<script lang="ts">
  export let blogs: any;
</script>

<section>
  {#each blogs as blog}
    <div>
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
    </div>
  {/each}
</section>

<style>
</style>
