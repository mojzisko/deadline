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
    /* padding: 24px; */
    padding-top: 0;
    /* width: 100%;
    max-width: 1440px; */
    /* margin: 0 auto; */
    box-sizing: border-box;
  }
</style>
