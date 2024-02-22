<script lang="ts">
	/*TODO: 
	- Create components for common GUI inputs/controls
	- Style checkboxes with @tailwind/forms and daisyUI
	- See what else can be added
	*/
	import { T, Canvas } from '@threlte/core';
	import { OrbitControls, TransformControls } from '@threlte/extras';
	import { writable } from 'svelte/store';
	import Pokeball from './Pokeball.svelte';
	import { Clock } from 'three';
	import RangeInput from '$lib/common/RangeInput.svelte';
	import ColorInput from '$lib/common/ColorInput.svelte';
	import CheckboxInput from '$lib/common/CheckboxInput.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import SceneGui from './SceneGui.svelte';
	import GuiFolder from './GuiFolder.svelte';

	const clock = new Clock();
	const duration = (a: number, b: number) => Math.abs(a - b) * 1000;
	const setPosition = () => sinPos.set(3 + Math.sin(clock.getElapsedTime() * 3) * 3);

	let toggleParts = 0;
	let isMoving = writable(false);
	let sinPos = writable(0);
	let scale = writable(1);
	let rotationY = writable(0);
	let positionY = tweened(0, {
		duration: duration,
		easing: cubicOut
	});
	let ambIntensity = writable(1);
	let dirIntensity = writable(1);
	let topColor = writable('#ff0000');
	let midColor = writable('#000000');
	let botColor = writable('#ffffff');
	setInterval(setPosition, 10);
</script>

<Canvas>
	<T.DirectionalLight intensity={$dirIntensity} position={[0, 5, 15]} />
	<T.AmbientLight intensity={$ambIntensity} />

	<T.PerspectiveCamera
		makeDefault
		position={[0, 10, 20]}
		on:create={({ ref }) => {
			ref.lookAt(0, 0, 0);
		}}
	>
		<OrbitControls />
	</T.PerspectiveCamera>

	<T.Mesh position.y={-4}>
		<T.Mesh position.y={$isMoving ? $sinPos : 4} rotation.y={-Math.PI / 2}>
			<TransformControls>
				<!-- No semitransparent colors - model doesn't like that -->
				<Pokeball
					rotation.y={$rotationY}
					scale={$scale}
					topColor={$topColor.slice(0, 7)}
					midColor={$midColor.slice(0, 7)}
					botColor={$botColor.slice(0, 7)}
					partsY={positionY}
				/>
			</TransformControls>
			<T.MeshStandardMaterial />
		</T.Mesh>
		<T.GridHelper />
	</T.Mesh>
</Canvas>

<SceneGui title="Controls">
	<svelte:fragment slot="folders">
		<GuiFolder title="Model">
			<svelte:fragment slot="content">
				<RangeInput label="Scale" range={[0.0, 1.0, 2.0, 0.01]} bind={scale} />
				<RangeInput
					label="Rotation (Y axis)"
					range={[0.0, Math.PI, 2 * Math.PI, 0.01]}
					scaleValues={['0.0', '180.0', '360.0']}
					bind={rotationY}
				/>
				<ColorInput label="Top Color" bind={topColor} />
				<ColorInput label="Mid Color" bind={midColor} />
				<ColorInput label="Bottom Color" bind={botColor} />
				<!-- $positionY ^= 1 doesn't produce the same behaviour because of tweening -->
				<button
					on:click={() => {
						(toggleParts ^= 1), ($positionY = toggleParts);
					}}
					class="btn btn-primary bg-primary-variant text-white px-0"
				>
					Toggle disassembly
				</button>
			</svelte:fragment>
		</GuiFolder>
		<GuiFolder title="Light">
			<svelte:fragment slot="content">
				<RangeInput label="Ambient Intensity" range={[0.0, 1.0, 2.0, 0.01]} bind={ambIntensity} />
				<RangeInput
					label="Directional Intensity"
					range={[0.0, 1.0, 2.0, 0.01]}
					bind={dirIntensity}
				/>
			</svelte:fragment>
		</GuiFolder>
		<GuiFolder title="Animation">
			<svelte:fragment slot="content">
				<CheckboxInput label="Wave Animation" bind={isMoving} />
			</svelte:fragment>
		</GuiFolder>
	</svelte:fragment>
</SceneGui>
