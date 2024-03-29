<script lang="ts">
	import { interpolateRound } from 'd3-interpolate';
	import type { NumberInfo } from '$lib/server/db/types';
	import { tweened, type Tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import Dice from 'svelte-ionicons/Dice.svelte';
	import SandboxAreaPage from '$lib/layout/SandboxAreaPage.svelte';
	import MainHeading from '$lib/layout/MainHeading.svelte';

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

<SandboxAreaPage title="Numbers">
	<svelte:fragment slot="content">
		<MainHeading>{info ? $tweenedNumber : 'Number Facts'}</MainHeading>
		{#key info?.description}
			<p in:fade={{ duration: 1000 }}>
				{@html info
					? info.description
					: 'Click the button below and learn something new about a number!'}
			</p>
		{/key}
		<button on:click={newNumber} class="btn btn-secondary w-fit m-auto text-lg text-primary group"
			>Roll <Dice class="group-hover:animate-shake outline-none" /></button
		>
	</svelte:fragment>
	<section slot="modal">
		<h2 class="font-bold text-lg m-auto">What is this?</h2>
		<p class="py-5">
			This is a simple random fact generator about numbers, scraped from <a
				target="_blank"
				href="https://erich-friedman.github.io/numbers.html"
				class="text-secondary underline">Erich Friedman's</a
			> website. Click the "Roll" button and learn something new!
		</p>
	</section>
</SandboxAreaPage>
