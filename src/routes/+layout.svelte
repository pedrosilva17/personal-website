<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import '../app.css';
	import Navbar from '$lib/layout/Navbar.svelte';
	import Footer from '$lib/layout/Footer.svelte';

	// Does not work with Firefox or Safari
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Navbar />
<main class="flex bg-primary flex-grow text-white">
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
