<script lang="ts">
	import type { Project } from '$lib/server/db/types';
	import Tag from './Tag.svelte';

	export let project: Project;

	let path = `assets/images/projects/${project.title.toLowerCase().split(' ').join('-')}.png`;
</script>

<a href={project.link} target="_blank" class="flex w-full md:w-96 card shine shadow-lg">
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
