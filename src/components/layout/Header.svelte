<script lang="ts">
    import { stores } from "@sapper/app";
    import NavStore from "../../config/store";
    import type { Navigation } from "../../config/model";

    const { page } = stores();
    let last: Navigation;
    let first: Navigation[] = [];

    $: {
        const bcs = NavStore.breadcrumbs($page.path);

        if (bcs) {
            last = bcs[bcs.length - 1];
            first = bcs.slice(0, bcs.length - 1);

            if (!last) {
                last = NavStore.root();
            }
        }

        NavStore.expandDown("/", false, true);
        NavStore.expandUp($page.path, true, true);
    }
</script>

<style>
    li {
        display: inline;
        padding: 0 1rem;
    }
</style>

<svelte:head>
    <title>{last.title}</title>
</svelte:head>

<ul>
    {#each first as navigation}
        <li><a href={navigation.path}>{navigation.title}</a></li>
    {/each}

    <li>{last.title}</li>
</ul>
