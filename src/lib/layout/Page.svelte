<script lang="ts">
	export let title: string;
</script>

<svelte:head>
	<title>~/{title === 'Home' ? '' : title.toLowerCase().split(' ').join('-')}</title>
</svelte:head>
<section
	class="flex flex-grow flex-col m-auto p-5 text-lg w-full text-white justify-center text-center gap-5 {$$props.class ??
		''}"
>
	<slot />
</section>
