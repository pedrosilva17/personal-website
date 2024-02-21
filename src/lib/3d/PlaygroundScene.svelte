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

	let clock = new Clock();

	function setPosition() {
		sinePos.set(3 + Math.sin(clock.getElapsedTime() * 3) * 3);
	}

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
	let sinePos = writable(0);
    let scale = writable(1.05);
    let ambIntensity = writable(1);
	let dirIntensity = writable(1);
	let hex = writable("#ff0000");
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

	<T.Mesh position={[0, -2, 0]}>
		<T.Mesh position={[0, $isMoving ? $sinePos : 3, 0]} scale={$scale}>
			<TransformControls scale={$scale}>
				<Pokeball rotation.y={-Math.PI / 2} hex={$hex.slice(0, 7)}/>
			</TransformControls>
			<T.MeshStandardMaterial />
		</T.Mesh>
		<T.GridHelper />
	</T.Mesh>
</Canvas>
<div
	class="collapse collapse-arrow absolute mx-auto top-0 right-0 max-md:left-0 md:mt-20 w-48 md:w-64 bg-secondary text-primary rounded-xl text-left break-words"
>
	<input on:click={toggleFocusable} type="checkbox" class="focus:ring-1 focus:ring-secondary"/>
	<h1 class="collapse-title text-base md:text-2xl text-center font-bold">Controls</h1>
	<div id="main-collapse-content" class="collapse-content p-0 text-sm md:text-base font-semibold">
		<div class="collapse collapse-arrow p-0">
			<label for="model" class="collapse-title md:text-xl">Model</label>
			<input tabindex="-1" name="opt" type="checkbox" />
			<div class="flex flex-col collapse-content gap-5">
				<span class="flex flex-col gap-2">
					<label for="scale">Scale</label>
					<input bind:value={$scale} type="range" min="0.1" max="2.0" step="0.01" class="range range-primary w-full" />
					<div class="w-full flex justify-between text-xs">
						<span>0.1</span>
						<span>|</span>
						<span>1.0</span>
						<span>|</span>
						<span>2.0</span>
					</div>
				</span>
				<span class="flex flex-col gap-2">
					<label for="top color">Top Color</label>
					<input type="color" bind:value={$hex}/>
				</span>
			</div>
		</div>
		<div class="collapse collapse-arrow">
			<label for="light" class="collapse-title md:text-xl">Light</label>
			<input tabindex="-1" name="opt" type="checkbox" />
			<div class="collapse-content flex flex-col gap-5">
				<span class="flex flex-col gap-2">
					<label for="ambient intensity">Ambient Intensity</label>
					<input bind:value={$ambIntensity} type="range" min="0.1" max="2.0" step="0.01" class="range range-primary w-full" />
					<div class="w-full flex justify-between text-xs">
						<span>0.1</span>
						<span>|</span>
						<span>1.0</span>
						<span>|</span>
						<span>2.0</span>
					</div>
				</span>
				<span class="flex flex-col gap-2">
					<label for="directional intensity">Directional Intensity</label>
					<input bind:value={$dirIntensity} type="range" min="0.1" max="2.0" step="0.01" class="range range-primary w-full" />
					<div class="text-primary w-full flex justify-between text-xs">
						<span>0.1</span>
						<span>|</span>
						<span>1.0</span>
						<span>|</span>
						<span>2.0</span>
					</div>
				</span>
			</div>
		</div>
		<div class="collapse collapse-arrow">
			<label for="motion" class="collapse-title md:text-xl">Motion</label>
			<input tabindex="-1" name="opt" type="checkbox" />
			<div class="collapse-content">
				<label for="Wave Motion">Wave Motion</label>
				<input type="checkbox" bind:checked={$isMoving}/>
			</div>
		</div>
	</div>
</div>