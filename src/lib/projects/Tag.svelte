<script lang="ts">
	export let color: string;
</script>

<div
	class="flex w-fit px-2 py-1 rounded-xl text-sm md:text-base text-primary drop-shadow-md font-bold {color}"
>
	<slot />
</div>
