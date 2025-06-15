<template>
  <section 
    id="home"
    class="min-h-screen flex flex-col items-center justify-center text-center gap-8 bg-indigo-100 px-8 lg:px-16"
  >
    <h1 class="uppercase text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
      Hey, I'm Annaliza Cabase
    </h1>

    <div class="max-w-xl space-y-2 text-base sm:text-lg">
      <p>
        Full-Stack Software Engineer with experience in building scalable web apps 
        using Vue, Nuxt, TypeScript, and Scala. 
      </p>
      <p>Passionate about clean code, great UI/UX, and agile teamwork.</p>
    </div>

    <PButton 
      label="Projects"
      :text="false"
      severity=""
      size="large"
      class="w-48 sm:w-60 uppercase font-bold mt-4"
    />
  </section>
</template>