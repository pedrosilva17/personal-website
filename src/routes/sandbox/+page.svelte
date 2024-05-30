<script lang="ts">
	import MainHeading from '$lib/layout/MainHeading.svelte';
	import Page from '$lib/layout/Page.svelte';
	import type { PageData } from './$types';

	export let data: PageData
</script>

<Page title="Sandbox">
	<MainHeading>Sandbox</MainHeading>
	<p>Random tools and playthings.</p>
	<div class="flex flex-wrap justify-center gap-5">
		{#each data.pages as page}
			<a
				href="/sandbox/{page.name.toLowerCase().split(' ').join('-')}"
				class="flex card shine w-full md:w-96 bg-primary-variant text-center items-center"
			>
				<section class="card-body items-center">
					<h2 class="card-title">{page.name}</h2>
					<p>{page.description}</p>
				</section>
			</a>
		{/each}
	</div>
</Page>
