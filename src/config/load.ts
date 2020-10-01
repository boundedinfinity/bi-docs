
import type { Config, Navigation } from './model'
import { WalkDown } from './walk'
import superjson from 'superjson'

//@ts-ignore
import configFile from '../../config.yaml'

const config: Config = configFile

normalizeConfig(config)

export default config

function normalizeConfig(config: Config) {
    normalizeNavigation(config.navigation)
}

function normalizeNavigation(navigation: Navigation) {
    WalkDown(navigation, normalizeChildren)
    normalizeParent(navigation, null)
    WalkDown(navigation, normalizeTitle)
    WalkDown(navigation, normalizeSegment)
    WalkDown(navigation, normalizeExpanded)
    WalkDown(navigation, normalizePath)
    // WalkDown(navigation, trace)
}

function trace(navigation: Navigation) {
    console.log('--------------------------------------------------------------')
    console.log(superjson.stringify(navigation))
}

function normalizePath(item: Navigation) {
    item.path = ""

    if (item.parent) {
        item.path += item.parent.path
    }

    item.path += "/" + item.segment
    item.path = item.path.replace("//", "/")
}

function normalizeExpanded(item: Navigation) {
    if (!item.expanded) {
        item.expanded = false
    }
}

function normalizeSegment(item: Navigation) {
    if (item.segment && item.segment.length > 0) {
        return
    }

    if (item.title && item.title.length > 0) {
        item.segment = item.title.toLowerCase().replace(' ', '-')
        return
    }
}

function normalizeTitle(item: Navigation) {
    if (item.title && item.title.length > 0) {
        return
    }

    if (item.segment && item.segment.length > 0) {
        item.title = item.segment
        return
    }
}

function normalizeParent(item: Navigation, parent: Navigation) {
    if (parent) {
        item.parent = parent
    }

    if (item.children) {
        item.children.forEach(child => normalizeParent(child, item))
    }
}

function normalizeChildren(item: Navigation) {
    if (item && !item.children) {
        item.children = []
    }
}