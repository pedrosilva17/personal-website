<script lang="ts">
	import { page } from "$app/stores";
	export let href: string;
</script>

<a {href} class:active={$page.url.pathname === href} class="btn btn-primary text-xl border-2 hover:border-secondary focus:border-secondary active:border-secondary rounded-xl">
	<slot />
</a>
