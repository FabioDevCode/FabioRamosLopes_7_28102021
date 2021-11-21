<template>
  <div class="users">
    <TheHeader />
    <AllUsers />
  </div>
</template>



<script>
import TheHeader from '@/components/TheHeader.vue'
import AllUsers from '@/components/AllUsers.vue'

export default {
  name: 'Users',
  components: {
    TheHeader,
    AllUsers,
  }
}
</script>



<style scoped>
.users {
  background-color: whitesmoke;
}

</style>