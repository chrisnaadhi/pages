<script lang="ts">
  export let myName: string;
</script>

<section class="flex items-center justify-center gap-5 my-4">
  <div class="max-w-70 text-right">
    <h4>{myName}</h4>
    <p class="text-xs text-white">
      I'm Chrisna, Full-time Learner. Aspiring Web Developer and Enthusiast of
      IT in Library & Information Science.
    </p>
    <a href="/about" class="text-sm text-orange-2 no-underline">About me..</a>
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
</section>

<style>
  h4 {
    --at-apply: text-white;
  }
</style>
