<script lang="ts">
	import type { Writable } from 'svelte/store';
	import Add from 'svelte-ionicons/Add.svelte';
	import Remove from 'svelte-ionicons/Remove.svelte';
	import { onMount } from 'svelte';

	export let label: string, range: [number, number], bind: Writable<number>;

	function changeValue(step: number) {
		if ($bind + step < range[0] || $bind + step > range[1]) return;
		return bind.set($bind + step);
	}

	onMount(() => {
		const numberInput = document.querySelector(
			`#numberInput-${label.split(' ').join('-')}`
		) as HTMLInputElement;
		numberInput.addEventListener('input', function () {
			const value = parseInt(this.value);
			const min = parseInt(this.min);
			const max = parseInt(this.max);
			if (Number.isNaN(value)) bind.set(parseInt(this.min));
			if (value < min) {
				this.value = min.toString();
				bind.set(parseInt(this.value));
			} else if (value > max) {
				this.value = max.toString();
				bind.set(parseInt(this.value));
			}
		});
	});
</script>

<span class="flex flex-col gap-2">
	<label for={label}>{label}</label>
	<input
		type="number"
		bind:value={$bind}
		min={range[0]}
		max={range[1]}
		id="numberInput-{label.split(' ').join('-')}"
		class="bg-secondary rounded-xl text-right px-2"
	/>
	<span class="flex flex-row gap-2 md:gap-5">
		<button
			on:mousedown={() => {
				changeValue(-1);
			}}
			class="btn btn-primary flex flex-1"
		>
			<Remove />
		</button>
		<button
			on:mousedown={() => {
				changeValue(1);
			}}
			class="btn btn-primary flex flex-1"
		>
			<Add />
		</button>
	</span>
</span>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
