<template>
  <PrimeButton
    :icon
    :text
    severity="contrast"
    @click="onClick"
    :size
    :class="text ? 'p-0 bg-transparent!' : ''"
    v-bind="$attrs"
  >
    <slot />
    <p v-if="$attrs.label" :class="{ 'hover:text-indigo-500' : text }">{{ $attrs.label }}</p>
  </PrimeButton>
</template>

<script setup lang="ts">
interface Props {
  icon?: string
  size?: 'small' | 'large'
  text?: boolean
}

withDefaults(defineProps<Props>(), {
  icon: '',
  size: 'small',
  text: true
})

const emit = defineEmits(['onClick'])

const onClick = () => {
  console.log('clicked')
  emit('onClick')
}
</script>