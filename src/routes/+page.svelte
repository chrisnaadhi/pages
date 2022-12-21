<script lang="ts">
  import type { PageData } from "./$types";
  import Profile from "$lib/components/Profile.svelte";
  import MainContent from "$lib/components/MainContent.svelte";

  let myName = "Chrisna Adhi Pranoto";
  export let data: PageData;
</script>

<main class="text-center">
  <Profile {myName} />
  <section>
    <h2 class="heading-text">Recent Posts</h2>
    <MainContent blogs={data.blogs} />
  </section>
</main>

<style>
  section {
    @apply bg-white rounded-xl p-5 my-5;
  }

  .heading-text {
    @apply text-orange mb-5;
  }
</style>
