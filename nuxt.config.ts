import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module'
  ],
  app: {
    head: {
      title: 'Annaliza Cabase - Portfolio',
      meta: [
        {
          name: 'description',
          content: 'Explore the portfolio of Annaliza Cabase – Full Stack Developer specializing in Vue, Nuxt, and modern web technologies.'
        },
        { property: 'og:title', content: 'Annaliza Cabase – Portfolio' },
        { property: 'og:description', content: 'Explore the portfolio of Annaliza Cabase – Full Stack Developer specializing in Vue, Nuxt, and modern web technologies.' },
        { property: 'og:image', content: '/preview.png' },
        { property: 'og:url', content: 'https://cabase-portfolio.vercel.app/' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css'
        }
      ]
    },
    baseurl: '/cabase-portfolio/'
  },
  ssr: false,
  primevue: {
    importTheme: { from: '@/themes/mytheme.js' },
    components: {
      include: '*',
      prefix: 'Prime'
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['@/assets/css/tailwind.css'],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})

