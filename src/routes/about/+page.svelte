<script lang="ts">
	import Page from '$lib/layout/Page.svelte';
	import { Canvas } from '@threlte/core';
	import Background3D from '$lib/3d/Background3D.svelte';
	import Document from 'svelte-ionicons/Document.svelte';
	import ModelWrapper from '$lib/3d/ModelWrapper.svelte';
	import Pokeball from '$lib/3d/Pokeball.svelte';
</script>

<Page title="About">
	<h1 class="text-6xl md:text-8xl">About me</h1>
	<p>
		Here's some information about me you <span class="italic">surely</span> want to know.
		<span class="text-xs">(not)</span>
	</p>
	<button class="flex mb-10 w-fit px-5 m-auto btn btn-secondary text-primary"
		>Download CV <Document size="20" /></button
	>
	<div class="flex flex-col gap-10">
		<div class="flex flex-col-reverse md:flex-row gap-10 h-fit">
			<section class="flex flex-col flex-1 md:text-left w-full gap-3">
				<h2 class="text-2xl md:text-4xl">My story with programming</h2>
				<p class="text-justify md:text-left">
					<span class="text-secondary">Informatics</span> was not my planned area of study until my
					<span class="text-secondary">final year</span>
					of high school, where I decided to break free of the "kid with good grades goes to medical
					school" stereotype. I didn't know how much of a good idea that was until I enrolled at
					<span class="text-secondary">FEUP</span>, where my broad
					<span class="text-secondary">curiosity</span>
					of the <span class="text-secondary">internet</span>,
					<span class="text-secondary">technology</span>
					and <span class="text-secondary">computers</span> turned into genuine
					<span class="text-secondary">passion</span>: it was undoubtedly one of the
					<span class="text-secondary">best decisions</span>
					I've made in my life to this day. Since then, I've enjoyed expanding my knowledge almost
					every day and while the university experience <span class="text-secondary">hasn't</span>
					been <span class="text-secondary">flawless</span> and the
					<span class="text-secondary">motivation</span>
					isn't always there, the hurdles I've faced are nothing compared to the sheer satisfaction
					of <span class="text-secondary">programming</span> and
					<span class="text-secondary">learning</span>.
				</p>
			</section>
			<div class="relative w-1/2 md:w-1/4 h-full m-auto cursor-grab pointer-events-auto">
				<Canvas>
					<ModelWrapper>
						<Pokeball />
					</ModelWrapper>
				</Canvas>
				<p class="absolute bottom-0 left-0 right-0 m-auto text-sm w-fit italic">(drag me!)</p>
			</div>
		</div>
		<div class="flex flex-col md:flex-row gap-10 h-fit">
			<div class="relative w-1/2 md:w-1/4 h-full m-auto cursor-grab pointer-events-auto">
				<Canvas>
					<ModelWrapper>
						<Pokeball />
					</ModelWrapper>
				</Canvas>
				<p class="absolute bottom-0 left-0 right-0 m-auto text-sm w-fit italic">(drag me!)</p>
			</div>
			<section class="flex flex-col flex-1 md:text-right w-full gap-3">
				<h2 class="text-2xl md:text-4xl">Other interests</h2>
				<p class="text-justify md:text-right">
					Stepping outside of programming, I'm a huge fan of <span class="text-secondary"
						>videogames</span
					>, <span class="text-secondary">board games</span>,
					<span class="text-secondary">wrestling</span>
					and <span class="text-secondary">art/history museums</span>.
				</p>
			</section>
		</div>
	</div>
</Page>
