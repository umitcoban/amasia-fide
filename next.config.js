/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.haber3.com']
  },
  i18n: {
    locales:["en", "tr"],
    defaultLocale: "tr"
  }
}

module.exports = nextConfig
