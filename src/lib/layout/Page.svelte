<script lang="ts">
	export let title: string;
</script>

<svelte:head>
	<title>user@{title.toLowerCase()}</title>
</svelte:head>
<section
	class="flex flex-grow flex-col max-w-[95%] md:max-w-[90%] mx-auto my-5 pt-5 text-lg text-white text-center gap-5"
>
	<slot />
</section>
