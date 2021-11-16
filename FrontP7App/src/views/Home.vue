<template>
  <div class="home">
    <TheHeader />
    <Columns />
    <AllPosts />

  </div>
</template>



<script>
import TheHeader from '@/components/TheHeader.vue'
import AllPosts from '@/components/AllPosts.vue'
import Columns from '@/components/HomeColumns.vue'

export default {
  name: 'Index',
  components: {
    TheHeader,
    AllPosts,
    Columns
  }
}
</script>



<style scoped>
.home {
  background-color: whitesmoke;
}

</style>