<script lang="ts">
	import { page } from '$app/stores';
	export let href: string;
</script>

<a
	{href}
	class:active={$page.url.pathname === href}
	class="group transition duration-300 ease-in-out px-4 py-1 w-full md:w-fit text-base lg:text-xl justify-center text-center outline-none focus:ring-1 focus:ring-primary hover:text-secondary
	 focus:text-secondary"
>
	<slot />
	<span
		class="block max-w-0 m-auto md:group-hover:max-w-full group-focus:max-w-full transition-all bg-secondary duration-500 h-0.5"
	></span>
</a>

<style>
	a.active > span {
		max-width: 100%;
	}
</style>
