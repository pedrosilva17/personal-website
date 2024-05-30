<script lang="ts">
	import Page from '$lib/layout/Page.svelte';
	import { Canvas } from '@threlte/core';
	import BackgroundScene from '$lib/3d/BackgroundScene.svelte';
	import MainHeading from '$lib/layout/MainHeading.svelte';
</script>

<Page title="Home">
	<MainHeading class="z-10">Pedro Silva</MainHeading>
	<div class="gap-2 italic z-10">
		<p>Highly curious individual and passionate developer, lover of all things internet.</p>
		<p class="font-bold">Welcome to my virtual home!</p>
	</div>
	<div class="absolute blur-sm left-0 w-full h-2/3 opacity-25">
		<Canvas>
			<BackgroundScene />
		</Canvas>
	</div>
</Page>
