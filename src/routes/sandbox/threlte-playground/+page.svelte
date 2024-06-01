<script lang="ts">
	import SandboxAreaPage from '$lib/sandbox/SandboxAreaPage.svelte';
	import PlaygroundScene from '$lib/3d/PlaygroundScene.svelte';
	import InfoModal from '$lib/sandbox/InfoModal.svelte';
</script>

<SandboxAreaPage title="Threlte Playground" class="my-0">
	<svelte:fragment slot="content">
		<div class="relative flex flex-col m-auto w-full md:w-[85%] h-full">
			<PlaygroundScene />
		</div>
	</svelte:fragment>
	<InfoModal slot="modal">
		This is a 3D scene where you can play around with a Pokéball model by changing its color,
		rotation, position, size, animating it, making the scene brighter, and so on, nothing too fancy.
		Have fun!
	</InfoModal>
</SandboxAreaPage>
