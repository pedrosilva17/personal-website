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

	const clock = new Clock();
	const duration = (a: number, b: number) => Math.abs(a - b) * 1000;
	const setPosition = () => sinPos.set(3 + Math.sin(clock.getElapsedTime() * 3) * 3);

	function toggleFocusable() {
		const subCollapseList = document
			.getElementById('main-collapse-content')
			?.getElementsByTagName('input');
		if (!subCollapseList) return;
		for (const collapse of subCollapseList) {
			console.log(collapse.getAttribute('tabindex'));
			const newValue = collapse.getAttribute('tabindex') === ('0' || null) ? '-1' : '0';
			collapse.setAttribute('tabindex', newValue);
			console.log(newValue);
		}
		console.log($scale);
	}

	let isMoving = writable(false);
	let sinPos = writable(0);
	let scale = writable(1);
	let rotationY = writable(0);
	let toggleParts = 0;
	let positionY = tweened(0, {
		duration: duration,
		easing: cubicOut
	});
	let ambIntensity = writable(1);
	let dirIntensity = writable(1);
	let hex = writable('#ff0000');
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
				<Pokeball
					rotation.y={$rotationY}
					scale={$scale}
					hex={$hex.slice(0, 7)}
					partsY={positionY}
				/>
			</TransformControls>
			<T.MeshStandardMaterial />
		</T.Mesh>
		<T.GridHelper />
	</T.Mesh>
</Canvas>

<div
	class="collapse collapse-arrow absolute mx-auto top-0 right-0 max-md:left-0 md:mt-20 w-36 md:w-64 bg-secondary text-primary rounded-xl text-left break-words"
>
	<input on:click={toggleFocusable} type="checkbox" class="focus:ring-1 focus:ring-secondary" />
	<label for="controls" class="collapse-title text-base md:text-2xl text-center font-bold"
		>Controls</label
	>
	<div id="main-collapse-content" class="collapse-content p-0 text-sm md:text-base font-semibold">
		<div class="collapse collapse-arrow p-0">
			<input tabindex="-1" name="model" type="checkbox" />
			<label for="model" class="collapse-title md:text-xl flex w-full p-auto">Model</label>
			<div class="collapse-content flex flex-col gap-5">
				<RangeInput label="Scale" range={[0.0, 1.0, 2.0, 0.01]} bind={scale} />
				<RangeInput
					label="Rotation (Y axis)"
					range={[0.0, Math.PI, 2 * Math.PI, 0.01]}
					scaleValues={['0.0', '180.0', '360.0']}
					bind={rotationY}
				/>
				<ColorInput label="Top Color" bind={hex} />
				<!-- $positionY ^= 1 doesn't produce the same behaviour because of tweening -->
				<button
					on:click={() => {
						(toggleParts ^= 1), ($positionY = toggleParts);
					}}
					class="btn btn-primary bg-primary-variant text-white px-0"
				>
					Toggle disassembly
				</button>
			</div>
		</div>
		<div class="collapse collapse-arrow">
			<input tabindex="-1" name="light" type="checkbox" />
			<label for="light" class="collapse-title md:text-xl">Light</label>
			<div class="collapse-content flex flex-col gap-5">
				<RangeInput label="Ambient Intensity" range={[0.0, 1.0, 2.0, 0.01]} bind={ambIntensity} />
				<RangeInput
					label="Directional Intensity"
					range={[0.0, 1.0, 2.0, 0.01]}
					bind={dirIntensity}
				/>
			</div>
		</div>
		<div class="collapse collapse-arrow">
			<input tabindex="-1" name="motion" type="checkbox" />
			<label for="motion" class="collapse-title md:text-xl">Motion</label>
			<div class="collapse-content">
				<CheckboxInput label="Wave Motion" bind={isMoving} />
			</div>
		</div>
	</div>
</div>
