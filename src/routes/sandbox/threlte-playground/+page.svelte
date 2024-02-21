<script lang="ts">
	import SandboxAreaPage from '$lib/layout/SandboxAreaPage.svelte';
	import MainHeading from '$lib/layout/MainHeading.svelte';
	import { T, Canvas } from '@threlte/core';
	import PlaygroundScene from '$lib/3d/PlaygroundScene.svelte';
</script>

<SandboxAreaPage title="Threlte Playground" class="my-0">
	<svelte:fragment slot="content">
		<div class="relative flex flex-col m-auto w-full md:w-[85%] h-full">
			<PlaygroundScene />
		</div>
	</svelte:fragment>
	<section slot="modal">
		<h2 class="font-bold text-lg m-auto">What is this?</h2>
		<p class="py-5">
			TODO: Type a proper description for this page
		</p>
	</section>
</SandboxAreaPage>
