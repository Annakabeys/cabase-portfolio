<template>
  <div>
    <ul 
      class="items-center flex justify-between"
      :class="[
        menuBar ? 'flex flex-col items-end text-right' : 'flex flex-row gap-8',
        'lg:flex lg:flex-row lg:items-center lg:text-left'
      ]"
    >
      <li 
        v-for="(i, index) in items"
        :key="index"
        :class="[
          menuBar ? 'border-b border-gray-300 w-full py-6 px-2 lg:px-8' : '',
          'lg:border-none lg:w-auto lg:py-0'
        ]"
      >
        <NuxtLink
          :href="`#${i.name}`"
          class="hover:text-indigo-500 transition uppercase font-bold"
        >
          {{ i.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useState } from 'nuxt/app'

const menuBar = useState('menuBar')
const items = [
  { name: 'home' },
  { name: 'about' },
  { name: 'projects' },
  { name: 'contact' }
]
</script>
