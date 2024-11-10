<script lang="ts">
	import SandboxAreaPage from '$lib/sandbox/SandboxAreaPage.svelte';
	import InfoModal from '$lib/sandbox/InfoModal.svelte';
	import DiceRollerScene from '$lib/3d/DiceRollerScene.svelte';
	import { Canvas } from '@threlte/core';
	import { World } from '@threlte/rapier';
	import SceneGui from '$lib/3d/SceneGui.svelte';
	import GuiFolder from '$lib/3d/GuiFolder.svelte';
	import RangeInput from '$lib/common/RangeInput.svelte';
	import { diceColor, groundColor, launchAngle, launchSpeed, numDice } from '$lib/stores';
	import NumericInput from '$lib/common/NumericInput.svelte';
	import { radToDeg } from 'three/src/math/MathUtils.js';
	import ColorInput from '$lib/common/ColorInput.svelte';

	let innerWidth = 0;
	let innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<SandboxAreaPage title="Dice Roller" class="my-0">
	<svelte:fragment slot="content">
		<div class="relative flex flex-col h-full w-full">
			<Canvas size={{ width: Math.min(1536, innerWidth), height: innerHeight - 200 }}>
				<World>
					<DiceRollerScene />
				</World>
			</Canvas>
			<SceneGui title="Settings">
				<svelte:fragment slot="folders">
					<GuiFolder title="Dice">
						<svelte:fragment slot="content">
							<RangeInput
								label="Launch Angle"
								range={[0.0, Math.PI, 2 * Math.PI, Math.PI / 32]}
								scaleValues={['0', '180', '360']}
								bind={launchAngle}
								valueDisplayModifier={radToDeg}
							/>
							<RangeInput
								label="Launch Speed"
								range={[1, 5, 20, 1]}
								scaleValues={['1', '10', '20']}
								bind={launchSpeed}
							/>
							<ColorInput label="Color" bind={diceColor} />
						</svelte:fragment>
					</GuiFolder>
					<GuiFolder title="Scene">
						<svelte:fragment slot="content">
							<ColorInput label="Ground Color" bind={groundColor} />
						</svelte:fragment>
					</GuiFolder>
					<GuiFolder title="Performance">
						<svelte:fragment slot="content">
							<NumericInput label="Dice Limit" range={[1, 100]} bind={numDice} />
						</svelte:fragment>
					</GuiFolder>
				</svelte:fragment>
			</SceneGui>
		</div>
	</svelte:fragment>
	<InfoModal slot="modal">
		This is a 3D scene where you can throw dice and see what numbers you get, just click/tap the
		screen to spawn a new die. Might be useful if you are playing a board game remotely with your
		friends, or maybe you just really like watching cubes roll.
	</InfoModal>
</SandboxAreaPage>
