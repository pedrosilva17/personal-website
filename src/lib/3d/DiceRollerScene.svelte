<script lang="ts">
	import { T, useTask, useThrelte } from '@threlte/core';
	import { AutoColliders, CollisionGroups } from '@threlte/rapier';
	import { DirectionalLight, MeshStandardMaterial } from 'three';
	import Die from './Dice.svelte';
	import { interactivity } from '@threlte/extras';
	import { writable, type Writable } from 'svelte/store';
	import { launchAngle, launchSpeed, numDice } from '$lib/stores';

	interactivity();

	const { scene } = useThrelte();
	const light = new DirectionalLight(0xffffff, 1.5);
	light.position.set(0, 20, 30);
	light.castShadow = true;
	light.shadow.camera.top = 30;
	light.shadow.camera.left = -30;
	light.shadow.camera.bottom = -30;
	light.shadow.camera.right = 30;
	scene.add(light);

	let cursorPosition = { x: 0, z: 0 };
	const dicePositions: Writable<[number, number, number][]> = writable([]);

	function handleMouseClick() {
		if ($numDice <= 0) return;
		dicePositions.update((dicePos) => {
			return [...dicePos, [cursorPosition.x, 3, cursorPosition.z]];
		});
	}

	useTask(() => {
		if ($dicePositions.length >= $numDice) {
			dicePositions.update((dicePos) => {
				return dicePos.slice(-$numDice);
			});
		}
	});
</script>

<T.OrthographicCamera
	makeDefault
	position={[-12, 15, 0]}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
	}}
	near={0.01}
	far={4000}
	zoom={30}
/>

<!--
        The ground needs to be on both group 15 which is the group
        to detect the groundedness of the die as well as on group
        0 which is the group that the die is actually physically
        interacting with.
    -->
<CollisionGroups groups={[0, 15]}>
	<T.Group position={[0, -0.5, 0]}>
		<AutoColliders shape={'cuboid'}>
			<T.Mesh
				on:click={(e) => {
					cursorPosition.x = e.point.x;
					cursorPosition.z = e.point.z;
					handleMouseClick();
				}}
				receiveShadow
				material={new MeshStandardMaterial({
					transparent: false,
					color: 0x444444
				})}
			>
				<T.BoxGeometry args={[500, 1, 500]} />
			</T.Mesh>
		</AutoColliders>
	</T.Group>
</CollisionGroups>

<!--
        All physically interactive stuff should be on group 0
    -->
<CollisionGroups groups={[0]}>
	<!-- WALLS -->
	{#each $dicePositions as diePos (diePos)}
		<Die bind:position={diePos} launchAngle={$launchAngle} launchSpeed={$launchSpeed} />
	{/each}
</CollisionGroups>
