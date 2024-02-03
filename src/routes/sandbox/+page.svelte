<script lang="ts">
	import MainHeading from '$lib/layout/MainHeading.svelte';
	import Page from '$lib/layout/Page.svelte';
</script>

<Page title="Sandbox">
	<MainHeading>Sandbox</MainHeading>
	<p>Random tools and playthings.</p>
	<div class="flex flex-wrap justify-center">
		<a
			href="/sandbox/number-facts"
			class="flex card shine w-full md:w-96 bg-primary-variant text-center items-center"
		>
			<section class="card-body items-center">
				<h2 class="card-title">Number Facts</h2>
				<p>A compilation of facts and curiosities about integers from 1 to 9999.</p>
			</section>
		</a>
	</div>
</Page>
