<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let label: string, range: [number, number, number, number], bind: Writable<number>;
</script>

<span class="flex flex-col gap-2">
	<label for={label}>{label}</label>
	<input
		bind:value={$bind}
		type="range"
		min={range[0]}
		max={range[2]}
		step={range[3]}
		class="range range-primary w-full"
	/>
	<div class="w-full flex justify-between text-xs">
		<span>{range[0].toFixed(1)}</span>
		<span>|</span>
		<span>{range[1].toFixed(1)}</span>
		<span>|</span>
		<span>{range[2].toFixed(1)}</span>
	</div>
</span>
