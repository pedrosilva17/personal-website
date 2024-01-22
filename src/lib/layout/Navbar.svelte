<script>
	import NavLink from './NavLink.svelte';
</script>

<header>
	<nav class="py-3 px-24 flex flex-row bg-primary text-primary-content text-lg border-b-2 border-secondary">
		<div class="flex w-full">
			<NavLink href="/">Home</NavLink>
		</div>
		<div class="flex w-full justify-end gap-10">
			<NavLink href="/about">About</NavLink>
			<NavLink href="/projects">Projects</NavLink>
			<NavLink href="/sandbox">Sandbox</NavLink>
		</div>
	</nav>
</header>
