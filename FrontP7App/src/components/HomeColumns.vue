<template>
    <div class="home-columns">
        <ProfilView />
        <UsersView />
    </div>
</template>



<script>
import UsersView from './UsersHome.vue';
import ProfilView from './AccountHome.vue';

export default {
    name: 'Columns',
    components: {
        ProfilView,
        UsersView
    }
};


</script>



<style scoped>
.home-columns {
    z-index: 500;
    position: fixed;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 120px 10vW 0 10vw;
    width: 100%;
}



</style>