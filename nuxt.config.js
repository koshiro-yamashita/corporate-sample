
// const base_url = 'http://localhost:3000/'
const base_url = 'https://www.kikagaku.co.jp/'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '株式会社キカガク|公式ホームページ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: `${base_url}css/style.css`},
      { rel: 'stylesheet', type: 'text/css', href: `${base_url}css/lib/swiper.css`}
    ],
    script: [
      { src: `${base_url}js/lib/jquery-3.4.1.js`},
      { src: `${base_url}js/lib/countTo.js`},
      { src: `${base_url}js/lib/inview.js`},
      { src: `${base_url}js/lib/ofi.js`},
      { src: `${base_url}js/lib/pf.intrinsic.js`},
      { src: `${base_url}js/lib/picturefill.js`},
      { src: `${base_url}js/lib/swiper.js`},
      { src: `${base_url}js/common.js`},
      { src: `${base_url}js/loading.js`},
      { src: `${base_url}js/front.js`},
      { src: `${base_url}js/member.js`}
    ]
  },
  env: {
    base_url: base_url
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // '~assets/css/style.css',
    // '~assets/css/lib/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  // ビルド後のフォルダ名
  generate: {
    dir: 'docs'
  }
}
