<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import QuestionBlock from './QuestionBlock.svelte';
	let rotation = 0;
	useTask((delta) => {
		rotation += delta;
	});
</script>

<T.DirectionalLight position={[0, 10, 10]} />

<T.PerspectiveCamera
	makeDefault
	position={[0, -4, 15]}
	on:create={({ ref }) => {
		ref.lookAt(0, 1, 0);
	}}
/>

<T.Mesh rotation.y={rotation / 2}>
	<QuestionBlock />
	<T.MeshStandardMaterial />
</T.Mesh>
