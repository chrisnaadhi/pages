<script lang="ts">
  export let myName: string;
</script>

<section class="flex items-center justify-center gap-5 my-4">
  <div class="max-w-70 text-right">
    <h4>{myName}</h4>
    <p class="text-sm text-gray-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, illum
      laudantium iusto eum animi possimus error reprehenderit.
    </p>
    <p>Learn more..</p>
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
</style>
