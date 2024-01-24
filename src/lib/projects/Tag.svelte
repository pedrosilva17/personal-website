<script lang="ts">
	export let color: string;
</script>

<div
	class="flex w-fit px-2 py-1 rounded-xl text-xs md:text-sm text-primary drop-shadow-md font-bold {color}"
>
	<slot />
</div>
