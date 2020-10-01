<script lang="ts">
    import { stores } from "@sapper/app";
    import type { Navigation } from "../../config/model";

    const { page } = stores();
    export let navigation: Navigation;
</script>

<style>
    .selected {
        font-weight: bolder;
        font-size: 1.1rem;
    }
</style>

<li>
    <div class:selected={navigation.path === $page.path}>
        <a href={navigation.path}>{navigation.title}</a>
    </div>
    {#if navigation.children}
        {#each navigation.children as child}
            <ul>
                <svelte:self navigation={child} />
            </ul>
        {/each}
    {/if}
</li>
