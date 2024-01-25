<script lang="ts">
	import LogoLinkedIn from 'svelte-ionicons/LogoLinkedin.svelte';
	import LogoGithub from 'svelte-ionicons/LogoGithub.svelte';
</script>

<footer
	class="flex flex-row p-3 bg-primary w-full p-auto text-center justify-center gap-2 text-white"
>
	<p>Pedro Silva 2024</p>
	<span>|</span>
	<div class="flex flex-row gap-2">
		<a href="https://www.linkedin.com/in/pedrosilva17/" target="_blank">
			<LogoLinkedIn tabindex="-1" />
		</a>
		<a href="https://github.com/pedrosilva17" target="_blank">
			<LogoGithub tabindex="-1" />
		</a>
	</div>
</footer>
