<template>
  <section 
    id="contact"
    class="min-h-screen px-8 sm:px-8 lg:px-16 py-40 flex flex-col items-center justify-center gap-12 bg-white"
  >
    <h1 class="uppercase text-3xl sm:text-4xl md:text-5xl font-bold">
      Contact
    </h1>

    <p class="text-center text-base sm:text-lg max-w-2xl">
      Interested in working together or have any questions? 
      Send me a message through the form below, and I’ll respond promptly.
    </p>

    <PrimeCard class="w-full max-w-4xl shadow-lg">
      <template #content>
        <PrimeForm class="flex flex-wrap gap-6">
          <PrimeFormField
            v-slot="$field" 
            name="name"
            class="flex flex-col gap-2 w-full"
          > 
            <label class="text-sm font-medium">Name</label>
            <PrimeInputText 
              placeholder="Enter your name" 
              class="h-12" 
            />
          </PrimeFormField>

          <PrimeFormField
            v-slot="$field" 
            name="email"
            class="flex flex-col gap-2 w-full"
          > 
            <label class="text-sm font-medium">Email</label>
            <PrimeInputText 
              placeholder="Enter your email" 
              type="email"
              class="h-12"
            />
          </PrimeFormField>

          <PrimeFormField
            v-slot="$field" 
            name="message"
            class="flex flex-col gap-2 w-full"
          > 
            <label class="text-sm font-medium">Message</label>
            <PrimeTextarea placeholder="Enter your message" rows="10" />
          </PrimeFormField>

          <div class="flex justify-end w-full">
            <PButton 
              label="Submit"
              :text="false"
              severity=""
              size="large"
              type="submit"
              autoResize
              class="w-full sm:w-60 uppercase font-bold"
            />
          </div>
        </PrimeForm>
      </template>
    </PrimeCard>
  </section>
</template>