<script lang="ts">
	import IconLink from '$lib/layout/IconLink.svelte';
	import type { Project } from '$lib/server/db/types';
	import LogoGithub from 'svelte-ionicons/LogoGithub.svelte';
	import Tag from './Tag.svelte';
	import GlobeOutline from 'svelte-ionicons/GlobeOutline.svelte';

	export let project: Project;
	const htmlId = project.title.toLowerCase().replaceAll(' ', '-');

	let path = `assets/images/projects/${project.title.toLowerCase().split(' ').join('-')}.avif`;
</script>

<div class="flex w-full md:w-96 card shine shadow-lg">
	<figure aria-label="Screenshot/logo of project {project.title}" class="h-32 bg-primary-variant">
		{#if project.hasImage}
			<img
				class="object-cover w-100% h-auto"
				src={path}
				alt="Screenshot/logo of project {project.title}"
			/>
		{/if}
	</figure>
	<span
		class="absolute flex flex-row gap-3 px-4 py-2 top-0 right-0 shadow-md bg-primary-variant rounded-bl-2xl"
	>
		{#if project.website}
			<IconLink
				class="rounded-full"
				id="{htmlId}-website"
				href={project.website}
				ariaLabel="Project Website"
			>
				<GlobeOutline aria-labelledby="{htmlId}-website" size="28" />
			</IconLink>
		{/if}
		{#if project.github}
			<IconLink
				class="rounded-full"
				id="{htmlId}-github"
				href={project.github}
				ariaLabel="Project Github Repository"
			>
				<LogoGithub aria-labelledby="{htmlId}-github" size="28" />
			</IconLink>
		{/if}
	</span>
	<section class="card-body bg-primary-variant items-center text-center min-h-52">
		<h2 class="card-title">{project.title}</h2>
		<p>{project.description}</p>
		<div class="card-actions justify-center gap-2">
			{#each project.tags as tag}
				<Tag color="bg-secondary">{tag}</Tag>
			{/each}
		</div>
	</section>
</div>
