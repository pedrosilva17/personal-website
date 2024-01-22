<script lang="ts">
    export let title: string = "Welcome";
</script>

<svelte:head>
    <title>Pedro Silva - {title}</title>
</svelte:head>
<section class="flex flex-grow flex-col max-w-[80%] m-auto text-lg text-primary-content justify-center text-center gap-5">
    <slot />
</section>