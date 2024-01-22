<script>
	import NavLink from './NavLink.svelte';
</script>

<header>
	<nav
		class="py-3 pr-28 flex flex-row bg-primary text-primary-content text-lg border-b-2 border-secondary"
	>
		<div class="flex w-full justify-end gap-10">
			<NavLink href="/">Home</NavLink>
			<NavLink href="/about">About</NavLink>
			<NavLink href="/projects">Projects</NavLink>
			<NavLink href="/sandbox">Sandbox</NavLink>
		</div>
	</nav>
</header>
