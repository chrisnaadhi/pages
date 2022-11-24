<script>
</script>

<template>
  <main>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
    <header>
      <p class="text-2xl">⚡</p>
    </header>
    <section>
      <button type="menu" class="btn bg-gray-50">Twitter</button>
      <button type="menu" class="btn bg-gray-50">Github</button>
      <button type="menu" class="btn bg-gray-50">Dark</button>
    </section>
  </main>
</template>

<style>
  main {
    @apply flex justify-between items-center bg-gray-2 rounded-b-xl p-3;
  }

  header {
    font-family: "Mochiy Pop One", sans-serif;
  }
</style>
