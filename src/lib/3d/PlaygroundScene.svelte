<script lang="ts">
	import { T, Canvas } from '@threlte/core';
	import { OrbitControls, TransformControls } from '@threlte/extras';
	import Pokeball from './Pokeball.svelte';
	import { Clock } from 'three';
	import RangeInput from '$lib/common/RangeInput.svelte';
	import ColorInput from '$lib/common/ColorInput.svelte';
	import SceneGui from './SceneGui.svelte';
	import GuiFolder from './GuiFolder.svelte';
	import {
		scaling,
		dirIntensity,
		ambIntensity,
		rotationY,
		topColor,
		midColor,
		botColor,
		positionY,
	} from './stores';

	let clock = new Clock();
	let toggleParts = 0;
	let visibleTranslationControls = 1;
	let activeWave = 0;
	let sinPos = 0;

	const setPosition = () => {
		sinPos = 4 + Math.sin(clock.getElapsedTime() * 3) * 3;
	};

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
		<T.Mesh position.y={activeWave ? sinPos : 4} rotation.y={-Math.PI / 2}>
			<TransformControls visible={Boolean(visibleTranslationControls)}>
				<!-- No semitransparent colors - model doesn't like that -->
				<Pokeball
					rotation.y={$rotationY}
					scale={$scaling}
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
				<RangeInput label="Scale" range={[0.0, 1.0, 2.0, 0.01]} bind={scaling} />
				<RangeInput
					label="Rotation (Y axis)"
					range={[0.0, Math.PI, 2 * Math.PI, 0.01]}
					scaleValues={['0.0', '180.0', '360.0']}
					bind={rotationY}
				/>
				<ColorInput label="Top Color" bind={topColor} />
				<ColorInput label="Mid Color" bind={midColor} />
				<ColorInput label="Bottom Color" bind={botColor} />
			</svelte:fragment>
		</GuiFolder>
		<GuiFolder title="Light">
			<svelte:fragment slot="content">
				<RangeInput
					label="Ambient light intensity"
					range={[0.0, 1.0, 2.0, 0.01]}
					bind={ambIntensity}
				/>
				<RangeInput
					label="Directional light intensity"
					range={[0.0, 1.0, 2.0, 0.01]}
					bind={dirIntensity}
				/>
			</svelte:fragment>
		</GuiFolder>
		<GuiFolder title="Animation">
			<svelte:fragment slot="content">
				<button
					on:click={() => {
						clock.start(), (activeWave ^= 1);
					}}
					class="btn btn-primary bg-primary-variant text-white px-0"
				>
					Toggle wave animation
				</button>
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
		<GuiFolder title="Misc">
			<svelte:fragment slot="content">
				<button
					on:click={() => {
						visibleTranslationControls ^= 1;
					}}
					class="btn btn-primary bg-primary-variant text-white px-0"
				>
					Toggle axis visibility
				</button>
			</svelte:fragment>
		</GuiFolder>
	</svelte:fragment>
</SceneGui>
