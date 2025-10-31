export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://test-mini-chunks.vercel.app/sitemap.xml',
  }
}