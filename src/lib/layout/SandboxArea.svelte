<script lang="ts">
	import Page from './Page.svelte';
	import ArrowBack from 'svelte-ionicons/ArrowBack.svelte';
	import Help from 'svelte-ionicons/Help.svelte';
	export let title: string;
</script>

<Page title="sandbox/{title}">
	<a href="/sandbox" class="absolute top-0 left-0 btn btn-circle btn-secondary text-primary m-5"
		><ArrowBack tabindex="-1" /></a
	>
	<button
		onclick="help_modal.showModal()"
		class="absolute top-0 right-0 btn btn-circle btn-secondary text-primary m-5"
		><Help tabindex="-1" /></button
	>
	<dialog id="help_modal" tabindex="-1" class="modal m-auto gap-5">
		<div class="modal-box m-auto bg-primary">
			<h3 class="font-bold text-lg m-auto">What is this?</h3>
			<p class="py-5">
				This is a simple random fact generator about numbers, scraped from <a
					href="https://erich-friedman.github.io/numbers.html"
					class="text-secondary underline">Erich Friedman's</a
				> website. Click the "Roll" button and learn something new!
			</p>
			<form method="dialog">
				<button class="btn btn-secondary text-primary">Close</button>
			</form>
		</div>
		<form method="dialog" class="modal-backdrop">
			<button tabindex="-1">close</button>
		</form>
	</dialog>
	<slot />
</Page>
