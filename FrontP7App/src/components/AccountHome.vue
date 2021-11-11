<template>
    <div class="home-columns">
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
    </div>
</template>



<script>
export default {
  name: 'ProfilView',
}


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

.profil-home {
    position: fixed;
    border: 1px solid darkgrey;
    width: 210px;
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    background-color: white;
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
    font-size: .95em;
    font-weight: 600;
    position: absolute;
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