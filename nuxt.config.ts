import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module'
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css'
        }
      ]
    },
    baseurl: '/cabase-portfolio/'
  },
  ssr: false,
  target: 'static',
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

