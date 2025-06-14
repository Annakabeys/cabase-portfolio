<template>
  <section 
    id="contact"
    class="min-h-screen px-8 py-40 flex flex-col items-center justify-center gap-16 bg-indigo-100"
  >
    <h1 class="uppercase text-5xl font-bold">
      Contact
    </h1>

    <p>
      Interested in working together or have any questions? 
      Send me a message through the form below, and I’ll respond promptly.
    </p>

    <PrimeCard class="lg:w-[75%]">
      <template #content>
        <PrimeForm class="flex flex-wrap gap-4">
          <PrimeFormField
            v-slot="$field" 
            name="name"
            class="flex flex-col gap-2 w-full"
          > 
            <label>Name</label>
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
            <label>Email</label>
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
            <label>Message</label>
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
              class="w-60 uppercase font-bold"
            />
          </div>
        </PrimeForm>
      </template>
    </PrimeCard>
  </section>
</template>