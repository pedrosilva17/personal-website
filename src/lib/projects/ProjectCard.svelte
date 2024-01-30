<script lang="ts">
	import type { Project } from '$lib/server/db/types';
	import Tag from './Tag.svelte';

	export let project: Project;

	let path = `/src/lib/assets/projects/${project.title.toLowerCase().split(' ').join('-')}`;
</script>

<a
	href={project.link}
	class="flex w-full min-w-64 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 card shine shadow-lg"
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
	<div class="card-body bg-primary items-center text-center h-52">
		<h2 class="card-title">{project.title}</h2>
		<p class="text-left h-fit">{project.description}</p>
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
		left: 140%;
	}
</style>
