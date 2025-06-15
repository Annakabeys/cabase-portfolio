<template>
  <section 
    id="resume" 
    class="min-h-screen px-8 sm:px-8 lg:px-16 py-40 flex flex-col items-center justify-center gap-12 bg-indigo-100"
  >
    <h1 class="uppercase text-3xl sm:text-4xl md:text-5xl font-bold text-center">
      Resume
    </h1>

    <p class="max-w-xl space-y-2 text-base sm:text-lg text-center">
      You can view or download my full resume to explore my professional experience and technical skills. It also includes details about my education and background.
    </p>

    <!-- <NuxtLink 
      href="/resume.pdf" 
      target="_blank" 
      rel="noopener"
    > -->
      <PButton 
        :label="`${show ? 'Close' : 'View'} Resume`"
        :text="false"
        severity=""
        size="large"
        class="w-60 uppercase font-bold"
        @on-click="show = !show"
      />
    <!-- </NuxtLink> -->

    <div v-if="show" class="w-full max-w-5xl mx-auto border rounded-md shadow-lg aspect-[8.5/11]">
      <iframe 
        src="/resume.pdf#zoom=100"
        class="w-full h-full rounded"
        frameborder="0"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
