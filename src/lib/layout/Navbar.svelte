<script>
	import NavLink from './NavLink.svelte';
	import Menu from 'svelte-ionicons/Menu.svelte';
	let hidden = true;
</script>

<header>
	<nav
		class="py-3 px-5 lg:pr-28 flex flex-row bg-primary text-white lg:text-lg border-b-2 border-secondary"
	>
		<div class="flex flex-1 flex-col md:flex-row md:w-full justify-end">
			<button
				on:click={() => {
					hidden = !hidden;
				}}
				class="btn btn-primary flex w-fit ml-auto text-lg md:hidden mb-2 md:mb-0 border-0 {hidden
					? 'bg-primary-variant'
					: 'bg-primary-dark'}"
			>
				<Menu size="30" class="flex m-auto text-secondary" />
			</button>
			<div class="hidden md:flex gap-3 w-full md:gap-10 justify-end">
				<NavLink href="/">Home</NavLink>
				<NavLink href="/about">About</NavLink>
				<NavLink href="/projects">Projects</NavLink>
				<NavLink href="/sandbox">Sandbox</NavLink>
			</div>
			<div class:hidden class="flex w-full md:hidden flex-col z-10">
				<NavLink href="/">Home</NavLink>
				<NavLink href="/about">About</NavLink>
				<NavLink href="/projects">Projects</NavLink>
				<NavLink href="/sandbox">Sandbox</NavLink>
			</div>
		</div>
	</nav>
</header>

<style>
	header {
		view-transition-name: header;
	}
</style>
