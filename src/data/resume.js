/** Optional cruise photos — basename only in resume.js */
const cruiseModules = {
  ...import.meta.glob('../assets/media/cruises/*.jpg', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/cruises/*.jpeg', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/cruises/*.png', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/cruises/*.webp', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/cruises/*.JPG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/cruises/*.JPEG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/cruises/*.PNG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/cruises/*.WEBP', { eager: true, import: 'default' })
}

/** Resolve optional cruise image basename → bundled URL (or null) */
export function resolveCruiseImage (basename) {
  if (!basename) return null
  const key = Object.keys(cruiseModules).find((p) => {
    const normalized = p.replace(/\\/g, '/')
    return normalized.endsWith('/' + basename) || normalized.endsWith(basename)
  })
  if (!key) {
    console.warn(`[media] cruises image not found: ${basename}`)
    return null
  }
  const mod = cruiseModules[key]
  return typeof mod === 'string' ? mod : mod.default
}
