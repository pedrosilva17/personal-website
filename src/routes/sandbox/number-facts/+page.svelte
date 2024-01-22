<script lang="ts">
	import { interpolateRound } from 'd3-interpolate';
	import type { NumberInfo } from '$lib/server/db/types';
	import { tweened, type Tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import Page from '$lib/layout/Page.svelte';

	let info: NumberInfo;
	let tweenedNumber: Tweened<number> = tweened(1, { 
		duration: 2000, 
		easing: cubicOut, 
		interpolate: interpolateRound
	 });
	async function newNumber() {
		const response = await fetch('/api/number-facts', {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});

		info = await response.json();
		$tweenedNumber = Math.floor(info.number);
	}
</script>

<Page title="Numbers">
	<h1 class="text-4xl md:text-8xl">{info ? $tweenedNumber : 'Number Facts'}</h1>
	{#key info?.description}
		<p in:fade={{ duration: 1000 }}>{@html info ? info.description : 'Click the button below and learn something new about a number!'}</p>
	{/key}
	<button on:click={newNumber} class="btn btn-secondary w-fit m-auto text-lg">New Number</button>
	<p class=""></p>
</Page>
