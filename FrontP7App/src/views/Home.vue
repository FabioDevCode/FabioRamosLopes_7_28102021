<template>
  <div class="home">
    <TheHeader />
    <ProfilView />
    <AllPosts />
  </div>
</template>



<script>
import TheHeader from '@/components/TheHeader.vue'
import ProfilView from '@/components/AccountHome.vue'
import AllPosts from '@/components/AllPosts.vue'

export default {
  name: 'Index',
  components: {
    TheHeader,
    ProfilView,
    AllPosts
  }
}
</script>



<style scoped>
.home {
  background-color: whitesmoke;
}

</style>