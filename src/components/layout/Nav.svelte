<script lang="ts">
    import { stores } from "@sapper/app";
    import NavStore from "../../config/store";
    import NavItem from "./NavItem.svelte";

    const { page } = stores();
</script>

<ul>
    {#each $NavStore.children as navigation}
        <NavItem {navigation} />
    {/each}
</ul>
