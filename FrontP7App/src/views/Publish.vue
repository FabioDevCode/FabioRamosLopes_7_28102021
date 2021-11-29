<template>
  <div class="publish">
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
.publish {
  background-color: whitesmoke;
}

</style>