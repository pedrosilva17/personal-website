<script lang="ts">
	import '../app.css';
	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';
</script>

<Header />
<main class="bg-green-500 flex-grow">
	<slot />
</main>
<Footer />

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
