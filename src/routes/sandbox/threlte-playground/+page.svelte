<script lang="ts">
	import SandboxAreaPage from '$lib/layout/SandboxAreaPage.svelte';
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
			This is a 3D scene where you can play around with a Pokéball model by changing its color,
			rotation, position, size, animating it, making the scene brighter, and so on, nothing too
			fancy. Have fun!
		</p>
	</section>
</SandboxAreaPage>
