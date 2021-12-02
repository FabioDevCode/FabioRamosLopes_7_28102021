<template>
    <div class="onepost">
      <TheHeader />
      <APost />
    </div>
</template>


<script>
import TheHeader from '@/components/TheHeader.vue'
import APost from '@/components/APost.vue'

export default {
  name: 'OnePost',
  components: {
    TheHeader,
    APost,
    
  }
}
</script>


<style scoped>
.onepost {
  background-color: whitesmoke;
}
</style>