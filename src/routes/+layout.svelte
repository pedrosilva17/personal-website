<script lang="ts">
    import "../app.css";
</script>

<header>Header</header>
<main class="flex-grow">
    <slot />
</main>
<footer>Footer</footer>

<style lang="postcss">
    :global(html) {
      min-height: 100vh;
    }
  
    :global(body) {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
</style>