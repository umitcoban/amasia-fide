/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.haber3.com', 'www.shutterstock.com', 'cdnuploads.aa.com.tr', 'images.migrosone.com', 'www.bahcetohum.com',
      'productimages.hepsiburada.net', 'www.fidebahcesi.com']
  },
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "tr"
  }
}

module.exports = nextConfig
