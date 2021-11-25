<template>
  <div class="post">
        <TheHeader />
        <Post />
  </div>
</template>



<script>
import TheHeader from '@/components/TheHeader.vue'
import Post from '@/components/PostForm.vue'

export default {
  name: 'Publish',
  components: {
    TheHeader,
    Post,
    
  }
}
</script>



<style scoped>
.post {
  background-color: whitesmoke;
}

</style>