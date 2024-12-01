<script>
  import Header from "../components/Header.svelte";
  import "../app.css";
</script>

<div class="app bg-darkBackground">
  <Header />

  <main>
    <slot />
  </main>
</div>

<style global>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100svh;
  }

  html,
  body {
    background-color: black; /* Ensure no white background leaks */
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: 0;
    box-sizing: border-box;
  }
</style>
