<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@2.0.1 src/lib/3d/models/scene.gltf --transform
Author: Computing (https://sketchfab.com/johnnysmithco.business)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/rm-machines-c-series-computer-read-desc-739bcfabdd244375b37010701d43b86d
Title: RM Machines C-Series Computer | READ DESC
-->

<script>
	import { Group } from 'three';
	import { T, forwardEventHandlers } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import { scale } from 'svelte/transition';

	export const ref = new Group();

	const gltf = useGltf('/assets/models/computer-transformed.glb', { useDraco: true });

	const component = forwardEventHandlers();
</script>

<T is={ref} dispose={false} {...$$restProps} bind:this={$component}>
	{#await gltf}
		<slot name="fallback" />
	{:then gltf}
		<!-- The following mesh was not automatically generated: it was added to better fit the canvas -->
		<T.Mesh position={[0, -2, 0]} scale={[1.5, 1.5, 1.5]}>
			<T.Group position={[0, -0.09, 0]} scale={[1.84, 0.65, 1.73]}>
				<T.Mesh geometry={gltf.nodes.Object_4.geometry} material={gltf.materials.Material} />
				<T.Mesh geometry={gltf.nodes.Object_5.geometry} material={gltf.materials['Material.001']} />
				<T.Mesh geometry={gltf.nodes.Object_6.geometry} material={gltf.materials['Material.002']} />
				<T.Mesh geometry={gltf.nodes.Object_7.geometry} material={gltf.materials.BACK} />
			</T.Group>
			<T.Group
				position={[0.06, 1.87, 0.33]}
				rotation={[0, -Math.PI / 2, 0]}
				scale={[1.72, 1.53, 1.49]}
			>
				<T.Mesh
					geometry={gltf.nodes.Object_9.geometry}
					material={gltf.materials.Monitor_White_Plastic}
				/>
				<T.Mesh geometry={gltf.nodes.Object_10.geometry} material={gltf.materials.Screen_Surface} />
				<T.Mesh geometry={gltf.nodes.Object_11.geometry} material={gltf.materials.Win_98_Screen} />
			</T.Group>
			<T.Group position={[0.31, -0.35, -1.64]} scale={[0.07, 0.03, 0.02]}>
				<T.Mesh
					geometry={gltf.nodes.Object_13.geometry}
					material={gltf.materials['Material.003']}
				/>
				<T.Mesh
					geometry={gltf.nodes.Object_14.geometry}
					material={gltf.materials['Material.004']}
				/>
			</T.Group>
		</T.Mesh>
	{:catch error}
		<slot name="error" {error} />
	{/await}

	<slot {ref} />
</T>
