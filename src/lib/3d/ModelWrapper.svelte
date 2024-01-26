<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { OrbitControls, interactivity } from '@threlte/extras';
	import { AmbientLight } from 'three';

	interactivity();
	let rotation = 0;
	useTask((delta) => {
		rotation += delta;
	});
</script>

<T.DirectionalLight position={[0, 10, 10]} />
<T.AmbientLight />

<T.PerspectiveCamera
	makeDefault
	position={[0, 2, 15]}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
	}}
>
	<OrbitControls enableDamping />
</T.PerspectiveCamera>

<T.Mesh rotation.y={rotation / 2}>
	<slot />
	<T.MeshStandardMaterial />
</T.Mesh>
