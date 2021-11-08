const defaultSeo = {
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.url.ie/',
    site_name: 'eco₂rd - Browser extension',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [{
    property: 'msapplication-TileColor',
    content: '#da532c'
  }, {
    name: 'theme-color',
    content: '#ffffff'
  }],
  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: './setup/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: './setup/favicon-32x32.png',
      sizes: '32x32'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: './setup/favicon-16x16.png',
      sizes: '16x16'
    },
    {
      rel: 'mask-icon',
      href: './setup/safari-pinned-tab.svg',
      color: '#5bbad5'
    },
    {
      rel: 'icon',
      href: './setup/favicon.ico',
    },
    {
      rel: 'manifest',
      href: './setup/site.webmanifest'
    },
    {
      rel: 'stylesheet',
      href: './icons.css'
    }
  ],
};

export default defaultSeo;