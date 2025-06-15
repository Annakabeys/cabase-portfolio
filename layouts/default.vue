<template>
  <main>
    <PNavBar />
    <PHome />
    <PAbout />
    <PResume />
    <PContact />
  </main>

  <PFooter />
  <PrimeScrollTop />
  <PrimeToast
    :pt="{
      root: 'flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-[90vw] max-w-xs sm:max-w-sm px-3 py-2 rounded-md shadow-md',
      summary: 'text-sm font-medium break-words',
      detail: 'text-xs text-gray-600 break-words',
      icon: 'text-lg shrink-0'
    }"
  />
</template>

<script>
const route = useRoute()
const menuBar = useState('menuBar')

watch(route, (newValue) => {
  if (newValue) {
    menuBar.value = false
  }
}, { deep: true })
</script>