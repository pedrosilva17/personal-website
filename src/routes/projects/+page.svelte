<script lang="ts">
	import Page from '$lib/layout/Page.svelte';
	import ProjectCard from '$lib/projects/ProjectCard.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<Page title="Projects">
	<h1 class="text-4xl md:text-8xl">Projects</h1>
	<p>Personal and course projects I've worked on.</p>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr gap-5">
		{#each data.projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</Page>
