<script lang="ts">
	import type { PageInfo } from '$lib/server/sandbox/types';

	export let page: PageInfo;
</script>

<a
	href="/sandbox/{page.name.toLowerCase().split(' ').join('-')}"
	class="flex card shine w-full md:w-96 bg-primary-variant text-center items-center"
>
	<section class="card-body items-center">
		<h2 class="card-title">{page.name}</h2>
		<div class="flex flex-1 items-center">
			<p class="h-fit">{page.description}</p>
		</div>
	</section>
</a>
