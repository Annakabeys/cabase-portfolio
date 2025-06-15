<template>
  <main>
    <PNavBar />
    <PHome />
    <PAbout />
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
    console.log(newValue)
    menuBar.value = false
  }
}, { deep: true })
</script>