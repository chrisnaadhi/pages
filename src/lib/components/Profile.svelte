<script lang="ts">
  import WebList from "$lib/components/WebList.svelte";

  export let myName: string;
</script>

<section class="section-wrapper">
  <div class="flex items-center justify-center gap-5 my-4">
    <div class="max-w-70 text-right">
      <h4>{myName}</h4>
      <p class="text-xs text-dark dark:text-white">
        I'm Chrisna, Full-time Learner. Aspiring Web Developer and Enthusiast of
        IT in Library & Information Science.
      </p>
      <a href="/about" class="text-sm text-orange no-underline">About me..</a>
    </div>
    <div>
      <img
        src="/images/foto-profil.webp"
        alt="Foto Profil"
        width="128px"
        height="128px"
        class="rounded-full"
      />
    </div>
  </div>

  <WebList />
</section>

<style>
  .section-wrapper {
    --at-apply: bg-white dark:bg-dark rounded-xl mt-5 py-3;
  }

  h4 {
    --at-apply: text-orange dark:text-white;
  }
</style>
