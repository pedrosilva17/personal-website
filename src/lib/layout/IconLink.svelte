<script lang="ts">
	export let id, href, ariaLabel: string;
</script>

<a
	class={'transition duration-300 ease-in-out outline-none flex items-center hover:text-secondary focus:ring-1 focus:ring-circle focus:ring-offset-2 focus:ring-offset-transparent focus:ring-secondary ' +
		($$props.class ?? '')}
	{id}
	{href}
	aria-label={ariaLabel}
	target="_blank"
>
	<slot />
</a>
