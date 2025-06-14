<template>
  <section 
    id="home"
    class="min-h-screen flex flex-col items-center justify-center text-center gap-8 bg-indigo-100"
  >
    <h1 class="uppercase text-5xl font-bold">
      Hey, I'm Annaliza Cabase
    </h1>

    <div>
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
      class="w-60 uppercase font-bold"
    />
  </section>
</template>