
import type { Navigation, WalkFn, FindFn } from './model'

export function Breadcrumbs(navigation: Navigation, path: string): Navigation[] {
    const navigations: Navigation[] = []
    const found = Find(navigation, ByPath(path))
    // console.log(found)

    if (found) {
        WalkUp(found, (current: Navigation) => {
            navigations.unshift(current)
        })
    }

    return navigations
}

export function SetExpanded(expanded: boolean): WalkFn {
    return function (navigation: Navigation) {
        navigation.expanded = expanded
    }
}

export function ByPath(path: String): FindFn {
    return function (item: Navigation): boolean {
        return path === item.path
    }
}

export function Find(item: Navigation, fn: FindFn): Navigation {
    if (fn(item)) {
        return item
    }

    if (item.children) {
        for (let i = 0; i < item.children.length; i++) {
            const child = item.children[i];
            const found = Find(child, fn)

            if (found) {
                return found
            }
        }
    }

    return null
}

export function WalkDown(item: Navigation, fn: WalkFn): void {
    fn(item)

    if (item.children) {
        item.children.forEach(child => {
            WalkDown(child, fn)
        })
    }
}

export function WalkUp(item: Navigation, fn: WalkFn) {
    fn(item)

    if (item.parent) {
        WalkUp(item.parent, fn)
    }
}