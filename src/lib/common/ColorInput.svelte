<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let label: string, bind: Writable<string>;
</script>

<span class="flex flex-col gap-2">
	<label for={label}>{label}</label>
	<input type="color" bind:value={$bind} />
</span>
