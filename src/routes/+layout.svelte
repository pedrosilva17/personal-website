<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import Navbar from '$lib/layout/Navbar.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	import { afterNavigate } from '$app/navigation';
	import '../app.css';

	let entries, backEntry;

	// Does not work with Firefox or Safari
	onNavigate((svelteNav) => {
		if (
			!document.startViewTransition ||
			svelteNav.to?.url.pathname === svelteNav.from?.url.pathname
		)
			return;

		document.documentElement.classList.remove('back-transition');
		if (svelteNav.to?.url.href === backEntry?.url) {
			document.documentElement.classList.add('back-transition');
		}

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await svelteNav.complete;
			});
		});
	});

	afterNavigate(() => {
		if (!document.startViewTransition) return;
		entries = navigation.entries();
		backEntry = entries[navigation.currentEntry.index - 1];
	});
</script>

<Navbar />
<main class="flex relative bg-primary flex-grow text-white">
	<slot />
</main>
<Footer />

<style lang="postcss">
	:root {
		background-color: theme('colors.primary');
	}

	:global(html) {
		min-height: 100vh;
	}

	:global(body) {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	@keyframes slide-to-right {
		to {
			transform: translateX(30px);
		}
	}

	@keyframes slide-from-left {
		from {
			transform: translateX(-30px);
		}
	}

	:root::view-transition {
		background-color: theme('colors.primary');
	}

	:root::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
		overflow: hidden;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
		overflow: scroll;
	}

	:global(.back-transition)::view-transition-old(root) {
		animation-name: fade-out, slide-to-right;
	}

	:global(.back-transition)::view-transition-new(root) {
		animation-name: fade-in, slide-from-left;
	}
</style>
