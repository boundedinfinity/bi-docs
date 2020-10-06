<script lang="ts">
    import { slide } from "svelte/transition";
    import FaChevronRight from "svelte-icons/fa/FaChevronRight.svelte";
    import FaChevronDown from "svelte-icons/fa/FaChevronDown.svelte";
    import { stores } from "@sapper/app";
    import type { Navigation } from "../../config/model";
    import NavStore from "../../config/store";

    const { page } = stores();
    export let navigation: Navigation;
    let expandable: boolean;
    let expanded: boolean;
    let icon = null;

    $: {
        expandable = navigation.children && navigation.children.length > 0;
        expanded = navigation.expanded;

        if (expandable) {
            if (expanded) {
                icon = FaChevronDown;
            } else {
                icon = FaChevronRight;
            }
        }
    }

    function toggle() {
        NavStore.expandDown(navigation.path, !expanded, false);
    }
</script>

<style>
    ul {
        padding-left: 0.7rem;
    }

    li {
        list-style: none;
    }

    .selected {
        font-weight: bolder;
        font-size: 1.1rem;
    }

    .icon {
        display: inline-block;
        width: 0.5rem;
    }

    .icon-expanded {
        width: 0.75rem;
    }
</style>

<li>
    <div class:selected={navigation.path === $page.path}>
        <a href={navigation.path}>{navigation.title}</a>
        {#if expandable}
            <div class="icon" class:icon-expanded={expanded} on:click={toggle}>
                <svelte:component this={icon} />
            </div>
        {/if}
    </div>

    {#if expandable && expanded}
        <div transition:slide>
            {#each navigation.children as child}
                <ul>
                    <svelte:self navigation={child} />
                </ul>
            {/each}
        </div>
    {/if}
</li>
