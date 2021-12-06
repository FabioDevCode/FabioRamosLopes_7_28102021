<template>
    <div class="postncmnts">
      <TheHeader />
      <ThePost />
    </div>
</template>


<script>
import TheHeader from '@/components/TheHeader.vue'
import ThePost from '@/components/ThePost.vue'

export default {
  name: 'PostnCmnts',
  components: {
    TheHeader,
    ThePost,
    
  }
}
</script>


<style scoped>
.postncmnts {
  background-color: whitesmoke;
}
</style>