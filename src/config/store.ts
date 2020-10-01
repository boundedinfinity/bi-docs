import { writable } from 'svelte/store';
import configuration from "./load";
import type { Navigation } from './model'
import { WalkDown, WalkUp, ByPath, SetExpanded, Find, Breadcrumbs } from './walk'

function create() {
    const { subscribe, set, update } = writable(configuration.navigation);
    return {
        subscribe,
        set,
        collapseAll: () => update((navigation: Navigation) => {
            WalkDown(navigation, SetExpanded(false))
            return navigation
        }),
        expandAll: () => update((navigation: Navigation) => {
            WalkDown(navigation, SetExpanded(true))
            return navigation
        }),
        expandUp: (path: string) => update((navigation: Navigation) => {
            const found = Find(navigation, ByPath(path))

            if (found) {
                WalkUp(found, SetExpanded(true))
            }

            return navigation
        }),
        root: () => {
            return configuration.navigation
        },
        breadcrumbs: (path: string) => {
            const found = Find(configuration.navigation, ByPath(path))

            if (found) {
                return Breadcrumbs(configuration.navigation, path)
            } else {
                return [configuration.navigation]
            }
        }
    }
}

const NavStore = create()

export default NavStore