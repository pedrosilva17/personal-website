<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let label: string,
		range: [number, number, number, number],
		scaleValues: [string, string, string] | string = '',
		bind: Writable<number>,
		valueDisplayModifier: (a: number) => number = (a) => {
			return a;
		};
</script>

<span class="flex flex-col gap-2">
	<label for={label}>{label}</label>
	<p class="w-full text-right">
		{Number.isInteger($bind)
			? valueDisplayModifier($bind).toString()
			: valueDisplayModifier($bind).toFixed(2)}
	</p>
	<input
		bind:value={$bind}
		type="range"
		min={range[0]}
		max={range[2]}
		step={range[3]}
		class="range range-primary w-full"
	/>
	<div class="w-full flex justify-between text-xs px-2">
		<span class="text-left w-1/4">{scaleValues[0] ?? range[0].toFixed(1)}</span>
		<span class="text-center w-1/2 border-x">{scaleValues[1] ?? range[1].toFixed(1)}</span>
		<span class="text-right w-1/4">{scaleValues[2] ?? range[2].toFixed(1)}</span>
	</div>
</span>
