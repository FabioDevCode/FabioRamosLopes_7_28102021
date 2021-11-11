<template>
    <div class="profil-home">
         <div class="bloc-img">
            <img src="../assets/randomuser.jpg" alt="Utilisateur">
        </div>
        <div class="bloc-name">
            <p class="prénom">Gérard</p>
            <p class="nom">HUGUET</p>
        </div>
        <div class="button-profil">
            Voir mon profil
        </div>
    </div>
</template>



<script>

export default {
    name: 'ProfilView',
}


</script>



<style scoped>

.profil-home {
    position: relative;
    border: 1px solid darkgrey;
    width: 300px;
    height: 300px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    background-color: white;
    overflow: hidden;
    padding-bottom: 45px;
}

.bloc-img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 6px 12px rgba(0, 0, 0, .3);
}

.bloc-img img {
    width: 100%;
    object-fit: cover;
    object-position: center;
}

.bloc-name {
    font-size: 1.1em;
}

.bloc-name .nom {
    font-weight: bold;
}

.button-profil {
    position: absolute;
    font-size: .95em;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    bottom: 0px;
    width: 100%;
    height: 45px;
    border-top: 1px solid darkgrey;
}

.button-profil:hover {
    border-top: none;
    transform: scale(1.02);
    color: white;
    background-color: #FD3E15;
}


</style>