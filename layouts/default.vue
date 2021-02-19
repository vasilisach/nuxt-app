<template>
  <div>
    <Navbar />
    <main>
      <div class="container">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
  body{
    margin: 0;
    height: 100vh;
    background-color: #0C1228;
  }
  p{
    margin: 0;
  }
  main{
    position: relative;
  }
  .container{
    height: 100%;
    margin: 0 10%;
  }
</style>
