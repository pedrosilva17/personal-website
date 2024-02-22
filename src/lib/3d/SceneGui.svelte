<script lang="ts">
	function toggleFocusable() {
		const subCollapseList = document
			.getElementById('main-collapse-content')
			?.querySelectorAll('input,button');
		if (!subCollapseList) return;
		for (const collapse of subCollapseList) {
			console.log(collapse.getAttribute('tabindex'));
			const newValue = collapse.getAttribute('tabindex') === ('0' || null) ? '-1' : '0';
			collapse.setAttribute('tabindex', newValue);
			console.log(newValue);
		}
	}

	export let title: string;
</script>

<div
	class="collapse collapse-arrow absolute mx-auto top-0 right-0 max-md:left-0 w-36 md:w-64 bg-secondary text-primary rounded-xl text-left break-words opacity-80 md:opacity-100 z-10"
>
	<input
		on:click={toggleFocusable}
		name={title}
		type="checkbox"
		class="focus:ring-1 focus:ring-secondary"
	/>
	<label for={title} class="collapse-title text-base md:text-2xl text-center font-bold"
		>{title}</label
	>
	<div id="main-collapse-content" class="collapse-content p-0 text-sm md:text-base font-semibold">
		<slot name="folders" />
	</div>
</div>
