<script lang="ts">
  import Header from "./Header.svelte";
  import bg from "$lib/images/background.webp";
  import "./styles.css";

  let date: Date = new Date();
</script>

<main>
  <Header />
  <section>
    <slot />
  </section>
  <footer>
    &copy; {date.toLocaleDateString("id-ID")}
  </footer>
</main>
