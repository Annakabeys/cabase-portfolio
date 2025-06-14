<template>
  <footer class="p-8 flex flex-wrap gap-8 text-white bg-gray-900">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8">
      <div class="lg:w-2/3">
        <p class="font-bold">
          Designed & built by Annaliza Cabase. 
        </p>

        <p> 
          Passionate software engineer focused on creating clean, 
          responsive, and user-friendly web applications.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <p class="uppercase font-bold">Social</p>

        <div class="flex gap-4">
          <NuxtLink
            v-for="(s, index) in socials"
            :key="index"
            :href="s.url"
            target="_blank"
            rel="noopener"
            class="text-2xl hover:text-indigo-500 transition"
          >
            <i :class="s.icon" />
          </NuxtLink>
        </div>
      </div>
    </div>
    
    <PrimeDivider />

    <p class="flex justify-center text-center text-xs! w-full">©Copyright 2025</p>
  </footer>
</template>

<script setup lang="ts">
const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/Annakabeys',
    icon: 'devicon-github-original'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/annaliza-c-499929259/',
    icon: 'devicon-linkedin-plain'
  },
  {
    name: 'Gmail',
    url: 'mailto:cabaseannaliza@gmail.com',
    icon: 'devicon-google-plain'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/annakabeys',
    icon: 'devicon-facebook-plain'
  }
]
</script>