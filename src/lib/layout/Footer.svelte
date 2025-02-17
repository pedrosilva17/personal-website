<script lang="ts">
	import LogoLinkedIn from 'svelte-ionicons/LogoLinkedin.svelte';
	import LogoGithub from 'svelte-ionicons/LogoGithub.svelte';
	import IconLink from './IconLink.svelte';
</script>

<footer class="flex flex-row p-3 bg-primary w-full p-auto text-center justify-center text-white">
	<p class="flex text-lg border-r border-white px-2">Pedro Silva</p>
	<div class="flex flex-row gap-2 px-2">
		<IconLink
			id="github"
			href="https://www.linkedin.com/in/pedrosilva17/"
			ariaLabel="Pedro Silva's GitHub profile"
			class="rounded-sm"
		>
			<LogoLinkedIn size="28" aria-labelledby="github" tabindex="-1" class="outline-none" />
		</IconLink>
		<IconLink
			id="linkedin"
			href="https://github.com/pedrosilva17"
			ariaLabel="Pedro Silva's LinkedIn profile"
			class="rounded-full"
		>
			<LogoGithub size="28" aria-labelledby="linkedin" tabindex="-1" class="outline-none" />
		</IconLink>
	</div>
</footer>

<style>
	footer {
		view-transition-name: footer;
	}
</style>
