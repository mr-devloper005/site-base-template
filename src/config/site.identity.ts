export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'site-code',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Site name',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'General posting site',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A general content platform for articles, images, listings, profiles, and discoverable resources across different topics.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'example.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || 'AIzaSyBco7dIECu3rJWjP3J0MImnR_uxlbeqAe0',

} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
