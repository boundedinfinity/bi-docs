<script lang="ts">
    import type { Navigation } from "../../config/model";
    export let navigation: Navigation;
</script>

<li>
    <a href={navigation.path}>{navigation.title}</a>

    {#if navigation.children}
        {#each navigation.children as child}
            <ul>
                <svelte:self navigation={child} />
            </ul>
        {/each}
    {/if}
</li>
