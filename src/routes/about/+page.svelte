<script lang="ts">
	import Page from '$lib/layout/Page.svelte';
	import { Canvas } from '@threlte/core';
	import Document from 'svelte-ionicons/Document.svelte';
	import ModelWrapper from '$lib/3d/ModelWrapper.svelte';
	import Computer from '$lib/3d/Computer.svelte';
	import NintendoSwitch from '$lib/3d/NintendoSwitch.svelte';
	import MainHeading from '$lib/layout/MainHeading.svelte';
</script>

<Page title="About me">
	<MainHeading>About me</MainHeading>
	<p>
		Here's some information about me you <span class="italic">surely</span> want to know.
		<span class="text-xs">(not)</span>
	</p>
	<a
		href="/src/lib/assets/pedro-silva-cv.pdf"
		class="flex mb-10 w-fit px-5 m-auto btn btn-secondary text-primary"
		download>Download CV <Document size="20" /></a
	>
	<div class="flex flex-col gap-10">
		<div class="flex flex-col-reverse lg:flex-row gap-10 h-fit">
			<section class="flex flex-col flex-auto my-auto lg:text-left w-full lg:w-2/3 gap-3">
				<h2 class="text-2xl lg:text-4xl">My story with programming</h2>
				<p class="text-justify lg:text-left 3xl:text-2xl">
					<span class="text-secondary">Informatics</span> was not my planned area of study until my
					<span class="text-secondary">final year</span>
					of high school, where I decided to break free of the "kid with good grades goes to medical
					school" stereotype. I didn't know how much of a good idea that was until I enrolled at
					<a
						target="_blank"
						href="https://sigarra.up.pt/feup/en/web_page.inicial"
						class="underline text-secondary">FEUP</a
					>, where my broad
					<span class="text-secondary">curiosity</span>
					of the <span class="text-secondary">internet</span>,
					<span class="text-secondary">technology</span>
					and <span class="text-secondary">computers</span> turned into genuine
					<span class="text-secondary">passion</span>: it was undoubtedly one of the
					<span class="text-secondary">best decisions</span>
					I've made in my life to this day. Since then, I've enjoyed expanding my knowledge almost every
					day and while the university experience <span class="text-secondary">hasn't</span>
					been <span class="text-secondary">flawless</span> and the
					<span class="text-secondary">motivation</span>
					isn't always there, the hurdles I've faced are nothing compared to the sheer satisfaction of
					<span class="text-secondary">programming</span>
					and
					<span class="text-secondary">learning</span>.
				</p>
			</section>
			<div
				class="relative flex flex-col m-auto w-full md:w-1/2 lg:w-1/3 h-48 lg:h-full cursor-grab pointer-events-auto"
			>
				<Canvas>
					<ModelWrapper>
						<Computer />
					</ModelWrapper>
				</Canvas>
				<p class="absolute bottom-0 left-0 right-0 m-auto text-sm w-fit cursor-default italic">
					(drag me!)
				</p>
			</div>
		</div>
		<div class="flex flex-col-reverse lg:flex-row-reverse gap-10 h-full">
			<section class="flex flex-col flex-1 my-auto lg:text-right w-full lg:w-2/3 gap-3">
				<h2 class="text-2xl lg:text-4xl">Other interests</h2>
				<p class="text-justify lg:text-right 3xl:text-2xl">
					Stepping outside of programming, I'm a huge fan of <span class="text-secondary"
						>videogames</span
					>, <span class="text-secondary">board games</span>,
					<span class="text-secondary">wrestling</span>
					and <span class="text-secondary">art/history museums</span>. I visit
					<a target="_blank" href="https://www.serralves.pt/en/" class="text-secondary underline"
						>Serralves</a
					>
					on their free sundays (every <span class="text-secondary">first sunday</span> of each
					month) whenever I can, and enjoy playing videogames/board games of various genres. Not an
					avid listener of <span class="text-secondary">music</span>, but
					<a
						target="_blank"
						href="https://open.spotify.com/artist/4LOV7E9ZHPnxIDeFWtA6N9"
						class="text-secondary underline">David Bruno</a
					>
					and
					<a
						target="_blank"
						href="https://open.spotify.com/artist/3qiHUAX7zY4Qnjx8TNUzVx"
						class="text-secondary underline">Yeat</a
					>
					are two of my go-tos when it comes to that. I casually watch
					<span class="text-secondary">movies</span>
					and <span class="text-secondary"> TV series</span> and especially love those with a good
					<span>story</span>
					and <span>unpredictable</span> twists and turns:
					<a
						target="_blank"
						href="https://www.imdb.com/title/tt1130884/"
						class="text-secondary underline">Shutter Island</a
					>
					and
					<a
						target="_blank"
						href="https://www.imdb.com/title/tt5753856/"
						class="text-secondary underline">Dark</a
					> come to mind, in their respective categories.
				</p>
			</section>
			<div
				class="relative flex flex-col m-auto w-full md:w-1/2 lg:w-1/3 h-48 lg:h-full cursor-grab pointer-events-auto"
			>
				<Canvas>
					<ModelWrapper>
						<NintendoSwitch />
					</ModelWrapper>
				</Canvas>
				<p class="absolute bottom-0 left-0 right-0 m-auto text-sm w-fit cursor-default italic">
					(drag me!)
				</p>
			</div>
		</div>
	</div>
</Page>
