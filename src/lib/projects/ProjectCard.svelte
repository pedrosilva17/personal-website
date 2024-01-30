<script lang="ts">
	import type { Project } from '$lib/server/db/types';
	import Tag from './Tag.svelte';

	export let project: Project;

	let path = `/src/lib/assets/projects/${project.title.toLowerCase().split(' ').join('-')}.png`;
</script>

<a
	href={project.link}
	target="_blank"
	class="flex w-full md:w-96 card shine shadow-lg"
>
	<figure class="h-32 bg-primary-variant">
		{#if project.hasImage}
			<img
				class="object-cover w-100% h-auto"
				src={path}
				alt="Screenshot/logo of project {project.title}"
			/>
		{/if}
	</figure>
	<div class="card-body bg-primary items-center text-center min-h-52">
		<h2 class="card-title">{project.title}</h2>
		<p>{project.description}</p>
		<div class="card-actions justify-center gap-2">
			{#each project.tags as tag}
				<Tag color="bg-secondary">{tag}</Tag>
			{/each}
		</div>
	</div>
</a>

<style>
	.shine {
		justify-content: center;
		transition: transform 200ms ease;
		overflow: hidden;
	}
	.shine:before {
		content: '';
		position: absolute;
		height: 200%;
		width: 4rem;
		transform: rotate(30deg);
		background-color: #ffffff33;
		left: -80%;
	}
	.shine:hover {
		transform: scale(1.05);
	}
	.shine:hover:before {
		transition: left 600ms ease;
		left: 160%;
	}
</style>
