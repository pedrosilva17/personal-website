<script lang="ts">
	import type { RigidBody as RapierRigidBody } from '@dimforge/rapier3d-compat';
	import { T, useTask } from '@threlte/core';
	import { AutoColliders, RigidBody } from '@threlte/rapier';
	import { BoxGeometry, Mesh, MeshStandardMaterial, Vector3 } from 'three';
	import { randFloat } from 'three/src/math/MathUtils.js';

	export let position: [number, number, number];
	export let launchAngle: number;
	let dieMesh: Mesh;

	let rigidBody: RapierRigidBody;

	const { stop } = useTask(() => {
		if (rigidBody) {
			//TODO: Make dice throw intensity controllable by an input (range/numeric) instead of random float
			rigidBody.applyImpulse(
				new Vector3(
					randFloat(1, 10) * Math.cos(launchAngle),
					2,
					randFloat(1, 10) * Math.sin(launchAngle)
				),
				true
			);
			rigidBody.applyTorqueImpulse(new Vector3(randFloat(-2, 2), 2, randFloat(-2, 2)), true);
			stop();
		}
	});
</script>

<T.Group>
	<RigidBody bind:rigidBody>
		<AutoColliders shape={'cuboid'}>
			<T.Mesh
				on:click={() => {
					rigidBody.applyImpulse(new Vector3(0, 5, 0), true);
				}}
				bind={dieMesh}
				receiveShadow
				castShadow
				{position}
				rotation={[randFloat(0, 360), randFloat(0, 360), randFloat(0, 360)]}
				geometry={new BoxGeometry(1, 1, 1)}
				material={new MeshStandardMaterial({
					transparent: true,
					opacity: 1.0,
					color: 0x33ffff
				})}
			/>
		</AutoColliders>
	</RigidBody>
</T.Group>
