<script lang="ts">
    export let href: string;
</script>

<a href="{href}" class="btn btn-primary text-xl border-2 hover:border-secondary rounded-xl">
    <slot />
</a>