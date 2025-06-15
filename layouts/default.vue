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