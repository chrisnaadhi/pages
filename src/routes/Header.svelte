<script>
</script>

<template>
  <main>
    <nav>
      <a href="/" class="link">Home</a>
      <a href="/about" class="link">About</a>
      <a href="/contact" class="link">Contact</a>
    </nav>
    <section>
      <a href="https://github.com/chrisnaadhi" target="_blank" rel="noreferrer">
        <button type="menu" class="btn social" id="github">
          <div class="icon i-mdi-github bg-dark" id="github-icon" />
        </button>
      </a>
      <a
        href="https://twitter.com/chrisnaadhip"
        target="_blank"
        rel="noreferrer"
      >
        <button class="btn social" id="twitter">
          <div class="icon i-mdi-twitter bg-blue" id="twitter-icon" />
        </button>
      </a>
      <a
        href="https://instagram.com/chrisnaadhip"
        target="_blank"
        rel="noreferrer"
      >
        <button type="menu" class="btn social" id="discord">
          <div class="icon i-mdi-instagram bg-pink-5" id="discord-icon" />
        </button>
      </a>
    </section>
  </main>
</template>

<style>
  main {
    @apply flex justify-between items-center bg-white rounded-b-xl p-3;
  }
  .social:hover .icon {
    @apply bg-white;
  }
  #twitter:hover {
    @apply bg-blue;
  }
  #github:hover {
    @apply bg-dark;
  }
  #discord:hover {
    @apply bg-pink-5;
  }
</style>
