<script lang="ts">
    import Trace from "../components/util/Trace.svelte"
    import Header from "../components/layout/Header.svelte";
    import Nav from "../components/layout/Nav.svelte";
    import Aside from "../components/layout/Aside.svelte";
    import Footer from "../components/layout/Footer.svelte";
</script>

<style>
    :root {
        --grid-sides: minmax(5rem, auto);
        --grid-header: 5rem;
        --grid-footer: 5rem;
        --grid-main: minmax(30rem, auto);

        --debug-border-header: solid red 1px;
        --debug-border-nav: solid red 1px;
        --debug-border-main: solid red 1px;
        --debug-border-aside: solid red 1px;
        --debug-border-footer: solid red 1px;
    }

    .template {
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: var(--grid-sides) var(--grid-main) var(--grid-sides);
        grid-template-rows: var(--grid-header) auto var(--grid-footer);
        grid-template-areas:
            "header header  header"
            "nav    main    aside"
            "footer footer  footer";
    }

    header {
        grid-area: header;
        border: var(--debug-border-header);
    }

    nav {
        grid-area: nav;
        border: var(--debug-border-nav);
    }

    main {
        grid-area: main;
        border: var(--debug-border-main);
    }

    aside {
        grid-area: aside;
        border: var(--debug-border-aside);
    }

    footer {
        grid-area: footer;
        border: var(--debug-border-footer);
    }
</style>

<div class="template">
    <header>
        <Header />
    </header>
    <nav>
        <Nav />
    </nav>
    <main>
        <slot />
    </main>
    <aside>
        <Aside />
    </aside>
    <footer>
        <Footer />
    </footer>
</div>

<Trace />