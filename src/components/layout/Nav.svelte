<script lang="ts">
    import NavStore from "../../config/store";
    import NavItem from "./NavItem.svelte";
</script>

<style>
    ul {
        padding-left: 0.7rem;
    }
</style>

<ul>
    {#each $NavStore.children as navigation}
        <NavItem {navigation} />
    {/each}
</ul>
