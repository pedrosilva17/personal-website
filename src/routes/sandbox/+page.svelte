<script lang="ts">
	import MainHeading from '$lib/layout/MainHeading.svelte';
	import Page from '$lib/layout/Page.svelte';
	import SandboxCard from '$lib/sandbox/SandboxCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Page title="Sandbox">
	<MainHeading>Sandbox</MainHeading>
	<p>Random tools and playthings.</p>
	<div class="flex flex-wrap justify-center gap-5">
		{#each data.pages as page}
			<SandboxCard {page} />
		{/each}
	</div>
</Page>
