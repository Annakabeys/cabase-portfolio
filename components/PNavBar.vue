<template>
  <section class="shadow-md bg-white sticky top-0 z-50 w-full">
    <div 
      class="flex items-center justify-between py-4 px-2 lg:px-8"
      :class="menuBar ? 'border-b border-gray-300' : ''"  
    >
      <div class="flex items-center gap-4">
        <PButton
          label="Annaliza Cabase"
          class="uppercase font-bold"
        >
          <template #default>
            <PrimeAvatar 
              image="/profile.png" 
              size="large" 
              shape="circle" 
            />  
          </template>
        </PButton>
      </div>

      <!-- Desktop Nav -->
      <div class="hidden lg:block">
        <PNavItems />
      </div>

      <!-- Mobile Toggle Button -->
      <div class="block lg:hidden">
        <PButton 
          icon="pi pi-bars"
          size="large"
          @on-click="toggleMenu"
        />
      </div>
    </div>

    <!-- Mobile Nav -->
    <transition name="fade">
      <div 
        v-if="menuBar"
        class="lg:hidden bg-white shadow-lg absolute backdrop-blur-sm z-40 w-full"
      >
        <PNavItems />
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
const menuBar = useState('menuBar', () => false)
const toggleMenu = () => {
  menuBar.value = !menuBar.value
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 300ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
