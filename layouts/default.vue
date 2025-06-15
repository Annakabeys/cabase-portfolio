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
      root: 'flex items-center gap-4 w-full sm:max-w-md px-4 py-3',
      summary: 'text-base',
      detail: 'text-sm'
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