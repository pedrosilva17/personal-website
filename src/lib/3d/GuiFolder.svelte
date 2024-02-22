<script lang="ts">
	export let title: string;
</script>

<div class="collapse collapse-arrow p-0 rounded-none">
	<input tabindex="-1" name="radio" type="radio" />
	<label for={title} class="collapse-title md:text-xl flex w-full p-auto">{title}</label>
	<div
		tabindex="-1"
		class="collapse-content flex flex-col gap-5 max-h-48 md:max-h-96 overflow-y-auto pt-1"
	>
		<slot name="content" />
	</div>
</div>

<style>
	.collapse {
		scrollbar-color: theme('colors.primary') theme('colors.secondary');
	}

	.collapse::-webkit-scrollbar-track {
		background: theme('colors.secondary');
	}

	.collapse::-webkit-scrollbar-thumb {
		background: theme('colors.secondary');
		border-radius: 100vh;
		border: 1px solid theme('colors.primary');
	}

	.collapse::-webkit-scrollbar-thumb:hover {
		background: theme('colors.secondary');
	}
</style>
