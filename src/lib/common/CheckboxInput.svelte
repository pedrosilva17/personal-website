<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let label: string, bind: Writable<boolean>;
</script>

<button class="w-full">
	<label for={label} class="flex flex-row justify-between">
		{label} <input id={label} type="checkbox" bind:checked={$bind} />
	</label>
</button>
