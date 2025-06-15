<template>
  <section 
    id="about" 
    class="min-h-screen flex flex-col justify-center gap-16 bg-white px-8 lg:px-16 py-20"
  >
    <h1 class="uppercase text-3xl sm:text-4xl md:text-5xl font-bold text-center">
      About Me
    </h1>

    <p class="text-center text-base sm:text-lg">
      Here you’ll find more about who I am, what I do, and the skills 
      I’ve built in software engineering and modern web development.
    </p>
    
    <article class="flex flex-col justify-start gap-4">
      <p class="font-bold text-2xl!">Get to know me!</p>
      
      <p>
        I'm a Full-Stack Software Engineer with a strong focus on Frontend Development. 
        I help build scalable, responsive web applications — transforming designs into clean, 
        reusable components and delivering great user experiences.
      </p>

      <p>
        I've contributed to projects like 
        <span class="font-medium">
          <NuxtLink
            href="https://passnize.com"
            target="_blank"
            rel="noopener"
            class="hover:text-indigo-500 transition"
          >
            Passnize
          </NuxtLink>
        </span>, a platform for customizable digital cards and real-time customer engagement. 
        I value clean code, intuitive UI/UX, and team collaboration.
      </p>

      <p>
        I’m passionate about continuous learning and professional growth. 
        You can find more about my work experience and career journey on my 
        <span class="font-medium">
          <NuxtLink
            href="https://www.linkedin.com/in/annaliza-c-499929259/"
            target="_blank"
            rel="noopener"
            class="hover:text-indigo-500 transition"
          >
            LinkedIn
          </NuxtLink>
        </span>where I keep my profile up to date.
      </p>

      <p>
        I’m open to job opportunities where I can grow, make an impact, and build meaningful tech. 
        If you think we’d be a good fit — feel free to connect!
      </p>

      <PButton 
        label="Contact"
        :text="false"
        severity=""
        size="large"
        class="w-48 sm:w-60 uppercase font-bold mt-4"
      />
    </article>

    <article class="flex flex-wrap gap-6 justify-center mt-8">
      <div 
        v-for="(item, index) in skills" 
        :key="index"
        class="flex items-center gap-2 p-2"
      >
        <i :class="item.icon" v-tooltip.bottom="item.name" class="text-8xl" />
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
const skills = [
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'Scala', icon: 'devicon-scala-plain-wordmark colored' },
  { name: 'SQL', icon: 'devicon-mysql-plain colored' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
  { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
  { name: 'Nuxt.js', icon: 'devicon-nuxtjs-plain colored' },
  { name: 'React.js', icon: 'devicon-react-original colored' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
  { name: 'HTML5', icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original colored' }
]
</script>