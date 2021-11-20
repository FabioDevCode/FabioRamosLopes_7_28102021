<template>
  <div class="profil">
    <TheHeader />
    <UserAccount />
  </div>
</template>



<script>
import TheHeader from '@/components/TheHeader.vue'
import UserAccount from '@/components/UserAccount.vue'


export default {
  name: 'Profil',
  components: {
    TheHeader,
    UserAccount,
  }
}
</script>



<style scoped>
.profil {
  background-color: whitesmoke;
}

</style>