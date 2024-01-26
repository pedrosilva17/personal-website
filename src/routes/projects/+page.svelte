<script lang="ts">
	import Page from '$lib/layout/Page.svelte';
	import ProjectCard from '$lib/projects/ProjectCard.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<Page title="Projects">
	<h1 class="text-6xl md:text-8xl">Projects</h1>
	<p>Personal and course projects I've worked on.</p>
	<div class="flex flex-wrap justify-center gap-5">
		{#each data.projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</Page>
