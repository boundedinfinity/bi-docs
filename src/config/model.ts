export type WalkFn = (Navigation) => void
export type FindFn = (Navigation) => boolean

export interface Config {
    global: Global
    navigation: Navigation
}

export interface Global {
    
}

export interface Navigation {
    title: string
    path: string
    segment: string
    parent: Navigation
    children: Navigation[]
    expanded: boolean
}