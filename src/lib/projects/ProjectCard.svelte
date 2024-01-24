<script lang="ts">
	import type { Project } from '$lib/server/db/types';

	export let project: Project;
	
	let path = `/src/lib/assets/projects/${project.title.toLowerCase().split(' ').join('-')}`;
</script>

<div class="card shine shadow-2xl">
	<figure class="h-32 bg-secondary">
		{#if project.hasImage}
		<img
			class="object-cover w-100% h-auto"
			src="{path}"
			alt="Screenshot/logo of project {project.title}"
		/>
		{/if}
	</figure>
	<div class="card-body">
		<h2 class="card-title">{project.title}</h2>
		<p class="text-left h-fit">{project.description}</p>
		<div class="card-actions justify-end gap-2">
			{#each project.technologies as technology}
				<button class="btn btn-primary">{technology}</button>
			{/each}
		</div>
	</div>
</div>

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
		background-color: rgba(255, 255, 255, 0.2);
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
