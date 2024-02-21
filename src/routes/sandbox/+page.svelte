<script lang="ts">
	import MainHeading from '$lib/layout/MainHeading.svelte';
	import Page from '$lib/layout/Page.svelte';
	let sandbox_pages = [
		{
			name: 'Number Facts',
			description: 'A compilation of facts and curiosities about integers from 1 to 9999.'
		},
		{
			name: 'Threlte Playground',
			description:
				'An interactive Threlte (three.js + Svelte) scene, where I explore different aspects of the library.'
		}
	];
</script>

<Page title="Sandbox">
	<MainHeading>Sandbox</MainHeading>
	<p>Random tools and playthings.</p>
	<div class="flex flex-wrap justify-center gap-5">
		{#each sandbox_pages as page}
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
