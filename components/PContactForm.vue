<template>
  <PrimeCard class="w-full max-w-4xl shadow-lg">
    <template #content>
      <PrimeForm 
        ref="formRef"
        v-slot="$form"
        :resolver 
        @submit="onFormSubmit" 
        class="flex flex-wrap gap-6"
      >
        <PrimeFormField
          v-slot="$field" 
          name="name"
          initial-value=""
          class="flex flex-col gap-2 w-full"
        > 
          <label class="text-sm font-medium">Name</label>
          <PrimeInputText 
            v-model="initialValues.name"
            placeholder="Enter your name" 
            name="name"
            class="h-12" 
          />
          <LazyPrimeMessage 
            v-if="$field?.invalid"
            severity="error"
            variant="simple"
          >
            {{ $field.error?.message }}
          </LazyPrimeMessage>
        </PrimeFormField>

        <PrimeFormField
          v-slot="$field" 
          name="email"
          initial-value=""
          class="flex flex-col gap-2 w-full"
        > 
          <label class="text-sm font-medium">Email</label>
          <PrimeInputText 
            v-model="initialValues.email"
            placeholder="Enter your email" 
            name="email"
            class="h-12"
          />
          <LazyPrimeMessage 
            v-if="$field?.invalid"
            severity="error"
            variant="simple"
          >
            {{ $field.error?.message }}
          </LazyPrimeMessage>
        </PrimeFormField>

        <PrimeFormField
          v-slot="$field" 
          name="message"
          initial-value=""
          class="flex flex-col gap-2 w-full"
        > 
          <label class="text-sm font-medium">Message</label>
          <PrimeTextarea 
            v-model="initialValues.message"
            placeholder="Enter your message" 
            name="message"
            rows="5" 
          />
          <LazyPrimeMessage 
            v-if="$field?.invalid"
            severity="error"
            variant="simple"
          >
            {{ $field.error?.message }}
          </LazyPrimeMessage>
        </PrimeFormField>

        <div class="flex justify-end w-full">
          <PButton 
            label="Submit"
            :text="false"
            :loading="isPending"
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
</template>

<script setup lang="ts">
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { z } from 'zod'
import type { FormInstance } from 'primevue/form'

const toast = useToast()
const initialValues = ref({
  name: '',
  email: '',
  message: '',
})

const formRef = useTemplateRef<FormInstance>('formRef')
const isPending = ref(false)

const resolver = zodResolver(
  z.object({
    name: z.string().min(1, { message: 'This field is required.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    message: z.string()
      .min(5, { message: 'Message must be between 5 and 80 characters long.' })
      .max(80, { message: 'Message must be between 5 and 80 characters long.' })
  })
)

const sendEmail = async () => {
  isPending.value = true

  const formData = new FormData()
  formData.append('access_key', '1ca728b7-4ebf-451d-be49-89062a18942c')
  formData.append('subject', 'Portfolio Inquiry')
  formData.append('name', initialValues.value.name)
  formData.append('email', initialValues.value.email)
  formData.append('message', initialValues.value.message)

  try {
    await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    Object.assign(initialValues.value, {
      access_key: '1ca728b7-4ebf-451d-be49-89062a18942c',
      subject: 'Portfolio Inquiry',
      name: '',
      email: '',
      message: ''
    })

    formRef.value?.reset()
    toast.add({ 
      severity: 'success', 
      summary: 'Message Sent', 
      detail: 'Your message has been sent successfully. Thank you!', 
      life: 5000 
    })
  } catch (err) {
    toast.add({ 
      severity: 'error', 
      summary: 'Submission Failed', 
      detail: 'Unable to send your message. Please try again later.', 
      life: 5000 
    })
  } finally {
    isPending.value = false
  }
}

const onFormSubmit = async ({ valid }) => {
  if (valid) {
    await sendEmail()
  } else {
    toast.add({ 
      severity: 'warn', 
      summary: 'Validation Error', 
      detail: 'Please fill out all required fields correctly.', 
      life: 5000 
    })
  }
}
</script>