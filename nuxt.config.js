import colors from 'vuetify/es5/util/colors'

export default {

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - touriple',
    title: 'touriple',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;500&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          yazi1: 'Touriple ile',
          yazi2: 'En uygun turu',
          yazi3: 'Yapay zeka oluştursun!',
          yazi4: 'Touriple, kişiselleştirilmiş tercihlere göre internetdeki mevcut',
          yazi5: 'veritabanlarını yapay zeka ile analiz ederek üretilen olası ',
          yazi6: 'rotalardan bütçeniz için en uygun olanını hesaplayan bir gezi',
          yazi7: 'planlama motorudur.',
          yazi8: 'Touriple ile',
          yazi9: 'Touriple ile',
          yazi10: 'Touriple ile',
          yazi11: 'Touriple ile',
          yazi12: 'Touriple ile',
        },
        tr: {
          yazi1: 'Let Artificial intelligence',
          yazi2: 'create Your tour ',
          yazi3: 'with Touriple!',
          yazi4: 'Touriple is a trip planning engine that calculates the most',
          yazi5: 'suitable route for your budget from the possible routes produced',
          yazi6: 'by analyzing the existing databases on the internet with artificial',
          yazi7: 'intelligence according to personalized preferences.',
          yazi8: 'Touriple ile',
          yazi9: 'Touriple ile',
          yazi10: 'Touriple ile',
          yazi11: 'Touriple ile',
          yazi12: 'Touriple ile',
        },

      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
