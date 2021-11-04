<template>
    <div class="header-container">
        <div class="header-bloc">
            <img class="img" src="../assets/icon-noir.png" alt="Logo Groupomania">
            <nav class="">
                <router-link>Accueil</router-link>
                <router-link>Publier</router-link>
                <router-link>Profil</router-link>
            </nav>
        </div>
    </div>
</template>


//------------------------------------
<script>
export default {



};
</script>


//------------------------------------
<style scoped>
.header-container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.header-bloc {
    position: fixed;
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: space-evenly;
    background-color: crimson;
}

.header-bloc img {
    height: 80px;
    width: auto;
    object-fit: cover;
}

.header-bloc nav {
    display: flex;
    list-style-type: none;
    color: black;
    
}



</style>