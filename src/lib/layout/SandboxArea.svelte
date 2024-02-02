<script lang="ts">
	import Page from './Page.svelte';
	import ArrowBack from 'svelte-ionicons/ArrowBack.svelte';
	import Information from 'svelte-ionicons/Information.svelte';
	export let title: string;

	function toggleModal() {
		let modal = document.getElementById('help_modal');
		if (!modal) return;
		if (modal.style.visibility !== 'visible') {
			modal.showModal();
			modal.style.visibility = 'visible';
		} else {
			modal.close();
			modal.style.visibility = 'hidden';
		}
	}
</script>

<Page title="sandbox/{title}">
	<a
		href="/sandbox"
		aria-label="Return"
		class="absolute top-0 left-0 btn btn-circle btn-secondary text-primary m-5"
		><ArrowBack tabindex="-1" class="outline-none" /></a
	>
	<button
		on:click={toggleModal}
		aria-label="Information"
		class="absolute top-0 right-0 btn btn-circle btn-secondary text-primary m-5"
		><Information tabindex="-1" class="outline-none" /></button
	>
	<dialog id="help_modal" tabindex="-1" class="invisible modal m-auto gap-5">
		<div class="modal-box m-auto bg-primary">
			<slot name="modal" />
			<button on:click={toggleModal} class="btn btn-secondary text-primary">Close</button>
		</div>
		<form class="modal-backdrop">
			<button on:click={toggleModal} tabindex="-1">close</button>
		</form>
	</dialog>
	<slot name="content" />
</Page>
