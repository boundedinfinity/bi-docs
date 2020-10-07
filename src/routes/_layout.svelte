<script lang="ts">
    import Header from "../components/layout/Header.svelte";
    import Nav from "../components/layout/Nav.svelte";
    import Aside from "../components/layout/Aside.svelte";
    import Footer from "../components/layout/Footer.svelte";
</script>

<style>
    :root {
        --grid-sides: 2fr;
        --grid-header: minmax(auto, 5rem);
        --grid-content: auto;
        --grid-footer: minmax(auto, 5rem);
        --grid-main: 10fr;

        --main-padding-topbottom: 1rem;
        --main-padding-sides: 1rem;
        --top-padding: .25rem;
        --bottom-padding: .5rem;
        --side-padding: .5rem;
        --scroll-offset: 2rem;

        --shadow-h-offset: 5px;
        --shadow-v-offset: 2px;
        --shadow-blur-radius: 8px;
        --shadow-spread-radius: 6px;
        --shadow-color: #888888;

        /* --debug-border-header: solid red 1px;
        --debug-border-nav: solid red 1px;
        --debug-border-main: solid red 1px;
        --debug-border-aside: solid red 1px;
        --debug-border-footer: solid red 1px; */
    }

    .template {
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 
            var(--grid-sides) var(--grid-main) var(--grid-sides);
        grid-template-rows: 
            var(--grid-header) var(--grid-content) var(--grid-footer);
        grid-template-areas:
            "header header  header"
            "nav    main    aside"
            "footer footer  footer";
    }

    header {
        grid-area: header;
        padding: var(--top-padding);
        border: var(--debug-border-header);
        box-shadow: 
            var(--shadow-h-offset) var(--shadow-v-offset) var(--shadow-blur-radius) var(--shadow-color);
    }

    nav {
        grid-area: nav;
        border: var(--debug-border-nav);
        padding: var(--side-padding);
        box-shadow: 
            0 calc(var(--shadow-v-offset) * -1) white, 
            0 var(--shadow-v-offset) white, 
            var(--shadow-h-offset) 0 var(--shadow-blur-radius) calc(var(--shadow-spread-radius) * -1) var(--shadow-color),
            calc(var(--shadow-h-offset) * -1) 0 var(--shadow-blur-radius) calc(var(--shadow-spread-radius) * -1) var(--shadow-color);
    }

    .scroll-wrapper {
        height: 100%;
        overflow-y: scroll;
        margin-right: calc(var(--scroll-offset) * -1);
        padding-left: var(--main-padding-sides);
        padding-right: calc(var(--main-padding-sides) + var(--scroll-offset) / 4);
    }

    main {
        grid-area: main;
        border: var(--debug-border-main);
        overflow: hidden;
        padding-top: var(--main-padding-topbottom);
        padding-bottom: var(--main-padding-topbottom);
    }

    aside {
        grid-area: aside;
        border: var(--debug-border-aside);
        padding: var(--side-padding);
        box-shadow: 
            0 calc(var(--shadow-v-offset) * -1) white, 
            0 var(--shadow-v-offset) white, 
            var(--shadow-h-offset) 0 var(--shadow-blur-radius) calc(var(--shadow-spread-radius) * -1) var(--shadow-color),
            calc(var(--shadow-h-offset) * -1) 0 var(--shadow-blur-radius) calc(var(--shadow-spread-radius) * -1) var(--shadow-color);
    }

    footer {
        grid-area: footer;
        padding: var(--bottom-padding);
        border: var(--debug-border-footer);
        box-shadow: var(--shadow-h-offset) calc(var(--shadow-v-offset) * -1)
            var(--shadow-blur-radius) var(--shadow-color);
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
        <div class="scroll-wrapper">
            <slot />
        </div>
    </main>
    <aside>
        <Aside />
    </aside>
    <footer>
        <Footer />
    </footer>
</div>
