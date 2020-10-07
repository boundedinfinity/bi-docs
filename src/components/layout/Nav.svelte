<script lang="ts">
    import NavStore from "../../config/store";
    import NavItem from "./NavItem.svelte";

    function expandAll() {
        NavStore.expandDown("/", true, true);
    }

    function collapseAll() {
        NavStore.expandDown("/", false, true);
    }
</script>

<style>
    ul {
        padding: 0;
        font-size: 1.1rem;
    }

    .wrapper {
        height: 99%;
        display: flex;
        flex-direction: column;
    }

    .box1 {
        display: flex;
        flex: 1 1 auto;
    }

    .box2 {
        display: flex;
        flex: 0 1 auto;
        justify-content: space-evenly;
    }
</style>

<div class="wrapper">
    <div class="box1">
        <ul>
            {#each $NavStore.children as navigation}
                <NavItem {navigation} />
            {/each}
        </ul>
    </div>
    <div class="box2">
        <button on:click={expandAll}>Expand</button>
        <button on:click={collapseAll}>Collapse</button>
    </div>
</div>
