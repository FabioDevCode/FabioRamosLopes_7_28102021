<template>
    <div class="userpage">
        <TheHeader />
        <UserUnique />
    </div>
</template>



<script>
import TheHeader from '@/components/TheHeader.vue'
import UserUnique from '@/components/UserUnique.vue'

export default {
    name: 'UserPage',
    components: {
        TheHeader,
        UserUnique,
    }
}
</script>



<style scoped>
.userpage {
    background-color: whitesmoke;
}

</style>