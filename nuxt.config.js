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
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'}
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
          bas1:'Özellikler',
          bas2:'Yardım',
          yazi1: 'Touriple ile',
          yazi2: 'En uygun turu',
          yazi3: 'Yapay zeka oluştursun!',
          yazi4: 'Touriple, kişiselleştirilmiş tercihlere göre internetdeki mevcut',
          yazi5: 'veritabanlarını yapay zeka ile analiz ederek üretilen olası ',
          yazi6: 'rotalardan bütçeniz için en uygun olanını hesaplayan bir gezi',
          yazi7: 'planlama motorudur.',
          yazi8: 'Nasıl Çalışır?',
          yazi9: 'Ziyaret edeceğiniz şehirleri ve gidiş - dönüş',
          yazi10: 'tarihlerini belirleyin.',
          yazi11: 'Konaklama ve ulaşım ile ilgili özelleştirilmiş',
          yazi12: 'kişisel tercihlerinizi belirtin.',
          yazi13: 'Touriple robotu sizin için optimum güzergahı',
          yazi14: 'hesaplasın. Size de sadece size sunulan gezi',
          yazi15: 'planındaki linklere tıklayarak satın alma',
          yazi16: 'işlemi kalsın.',
          yazi17: 'Neden Touriple ?',
          yazi18: 'Touriple, size uygun optimum seyahat rotası',
          yazi19: 'için yapay zeka ile internette en çok',
          yazi20: 'kullanılan seyahat uygulamalarını',
          yazi21: 'birleştirerek gerekli herşeyi tek noktada',
          yazi22: 'topluyor.',
          yazi23: 'Böylelikle gitmek istediğiniz yerleri',
          yazi24: 'barındıran en uygun rotayı bulmak için farklı',
          yazi25: 'yerlerde araştırmaya gerek olmaksızın kendi',
          yazi26: 'turunuzu kendiniz oluşturmuş olursunuz.',
          yazi27: 'Kişiselleştirme tercihlerinizi kullanan ',
          yazi28: 'algoritma sonucunda sizlere sunulacak en ',
          yazi29: 'uygun rota üzerindeki ulaşım ve konaklama ',
          yazi30: 'satın almalarını yine internetteki mevcut',
          yazi31: 'uygulamalardan alabileceksiniz.',

        },
        tr: {
          bas1:'Features',
          bas2:'Suport',
          yazi1: 'Let Artificial intelligence',
          yazi2: 'create Your tour ',
          yazi3: 'with Touriple!',
          yazi4: 'Touriple is a trip planning engine that calculates the most',
          yazi5: 'suitable route for your budget from the possible routes produced',
          yazi6: 'by analyzing the existing databases on the internet with artificial',
          yazi7: 'intelligence according to personalized preferences.',
          yazi8: 'How it works?',
          yazi9: 'Select the cities and dates that you’d like to ',
          yazi10: 'travel.',
          yazi11: 'Customize your accommodation and ',
          yazi12: 'transportation preferences for yourself.',
          yazi13: 'Let the Touriple engine calculate the optimum ',
          yazi14: 'route for you. Then, all you have to do is make ',
          yazi15: 'the purchase by clicking on the links in ',
          yazi16: 'the offered trip plan.',
          yazi17: 'Why Touriple?',
          yazi18: 'Touriple combines artificial intelligence and ',
          yazi19: 'the most used travel applications to ',
          yazi20: 'calculate the optimum travel route that',
          yazi21: 'suits you.',
          yazi22: 'This way, you create your own tour without ',
          yazi23: 'needing to search on different websites to find ',
          yazi24: 'the most suitable itinerary that includes the ',
          yazi25: 'locations you want. As a result of the',
          yazi26: 'algorithm using your personalization',
          yazi27: 'preferences, you will be able to purchase ',
          yazi28: 'transportation and accommodation on the ',
          yazi29: 'most suitable route to be presented to you ',
          yazi30: 'from the applications available on the ',
          yazi31: 'internet.',
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
