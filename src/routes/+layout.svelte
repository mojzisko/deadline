<script>
  import Header from "../components/Header.svelte";
  import "../app.css";
</script>

<div class="app bg-lightBackground dark:bg-darkBackground">
  <Header />

  <main>
    <slot />
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100svh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: 0;
    box-sizing: border-box;
  }
</style>
