<template>
  <div class="home">
    <TheHeader />
    <AllPosts />
  </div>
</template>


<script>
import TheHeader from '@/components/TheHeader.vue'
import AllPosts from '@/components/AllPosts.vue'

export default {
  name: 'Index',
  components: {
    TheHeader,
    AllPosts,
  }
}
</script>


<style scoped>
.home {
  background-color: whitesmoke;
}

</style>