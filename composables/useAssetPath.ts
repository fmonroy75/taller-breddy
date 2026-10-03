export const useAssetPath = (path?: string): string => {
  if (!path) return ''
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path
  }
  
  const config = useRuntimeConfig()
  const base = config.app.baseURL || '/'
  
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  if (base === '/' || base === '') {
    return cleanPath
  }
  
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
  return `${normalizedBase}${cleanPath}`
}
