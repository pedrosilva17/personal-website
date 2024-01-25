<script lang="ts">
	import Page from '$lib/layout/Page.svelte';
	import { Canvas } from '@threlte/core';
	import Background3D from '$lib/3d/Background3D.svelte';
</script>

<Page title="Home">
	<h1 class="text-4xl md:text-8xl">Pedro Silva</h1>
	<div class="gap-2 italic">
		<p>Highly curious individual and passionate developer, lover of all things internet.</p> 
		<p class="font-bold">Welcome to my virtual home!</p>
	</div>
	<div class="absolute blur-sm left-0 w-full h-2/3 opacity-25">
		<Canvas>
			<Background3D />
		</Canvas>
	</div>
</Page>
