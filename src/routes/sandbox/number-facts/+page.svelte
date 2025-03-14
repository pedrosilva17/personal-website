<script lang="ts">
	import { interpolateRound } from 'd3-interpolate';
	import type { NumberInfo } from '$lib/server/db/types';
	import { tweened, type Tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import Dice from 'svelte-ionicons/Dice.svelte';
	import SandboxAreaPage from '$lib/sandbox/SandboxAreaPage.svelte';
	import MainHeading from '$lib/layout/MainHeading.svelte';
	import InfoModal from '$lib/sandbox/InfoModal.svelte';

	let info: NumberInfo;
	let tweenedNumber: Tweened<number> = tweened(1, {
		duration: 2000,
		easing: cubicOut,
		interpolate: interpolateRound
	});
	async function newNumber() {
		const button = document.getElementById('roll') as HTMLButtonElement;
		button.disabled = true;
		const response = await fetch('/api/number-facts', {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});

		info = await response.json();
		$tweenedNumber = Math.floor(info.number);
		setTimeout(() => {
			button.disabled = false;
		}, 2000);
	}
</script>

<SandboxAreaPage title="Numbers">
	<svelte:fragment slot="content">
		<MainHeading>{info ? $tweenedNumber : 'Number Facts'}</MainHeading>
		{#key info?.description}
			<p in:fade={{ duration: 1000 }} class="min-h-24">
				{@html info
					? info.description
					: 'Click the button below and learn something new about a number!'}
			</p>
		{/key}
		<button
			id="roll"
			on:click={newNumber}
			class="btn btn-secondary w-fit m-auto text-lg text-primary group disabled:bg-secondary/60 disabled:text-primary"
			>Roll <Dice class="group-hover:animate-shake outline-none" /></button
		>
	</svelte:fragment>
	<InfoModal slot="modal">
		This is a simple random fact generator about numbers, scraped from <a
			target="_blank"
			href="https://erich-friedman.github.io/numbers.html"
			class="text-secondary underline">Erich Friedman's</a
		> website. Click the "Roll" button and learn something new!
	</InfoModal>
</SandboxAreaPage>
