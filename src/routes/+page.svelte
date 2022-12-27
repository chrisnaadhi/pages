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
    <h3 class="heading-text">My Recent Posts</h3>
    <MainContent blogs={data.blogs} />
    <a href="/posts">Other Posts ></a>
  </section>
</main>

<style>
  section {
    @apply bg-white rounded-xl p-5 my-5;
  }

  .heading-text {
    @apply text-orange-6;
  }
</style>
