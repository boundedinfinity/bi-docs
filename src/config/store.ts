import { writable } from 'svelte/store';
import configuration from "./load";
import type { Navigation } from './model'
import { WalkDown, WalkUp, ByPath, SetExpanded, Find, Breadcrumbs } from './walk'

function create() {
    const { subscribe, set, update } = writable(configuration.navigation);
    return {
        subscribe,
        set,
        expandUp: (path: string, expanded: boolean, recurse: boolean) => update((navigation: Navigation) => {
            const found = Find(navigation, ByPath(path))

            if (found) {
                if (recurse) {
                    WalkUp(found, SetExpanded(expanded))
                } else {
                    found.expanded = expanded
                }
            }

            return navigation
        }),
        expandDown: (path: string, expanded: boolean, recurse: boolean) => update((navigation: Navigation) => {
            const found = Find(navigation, ByPath(path))

            if (found) {
                if (recurse) {
                    WalkDown(found, SetExpanded(expanded))
                } else {
                    found.expanded = expanded
                }
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