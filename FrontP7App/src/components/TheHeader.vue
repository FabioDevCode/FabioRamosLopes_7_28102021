<template>
    <div class="bloc-header">
        <header>
            <img src="../assets/icon-blanc.png" alt="Logo Groupomania">
            <nav>
                <div class="menu">
                    <i class="fas fa-home"></i>
                    <div class="text">Accueil</div>
                </div>

                <div class="menu">
                    <i class="fas fa-user"></i>
                    <div class="text">Profil</div>
                </div>
                <div class="menu">
                    <i class="fas fa-plus-square"></i>
                    <div class="text">Publier</div>
                </div>
                <div class="menu">
                    <i class="fas fa-users"></i>
                    <div class="text">Utilisateurs</div>
                </div>
                <div class="menu">
                    <i class="fas fa-sign-out-alt"></i>
                    <div class="text">Déconnexion</div>
                </div>
            </nav>
        </header>
    </div>
</template>



<script>
export default {
  name: 'TheHeader',
}

</script>



<style scoped>
.bloc-header {
    z-index: 1000;
    position: fixed;
    width: 100vw;
    height: auto;
    background: #FD3E15;
    box-shadow: 0 8px 12px rgba(0, 0, 0, .4);
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    overflow: hidden;
    background: #FD3E15;
    width: 80%;
    margin: 0 auto;
    padding: 0 15px;
}

header img {
    height: 200px;
    align-self: center;
}

nav {
    display: flex;
    align-items: center;
    color: white;
}

.menu {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 10px;
    width: 100px;
    height: 60px;
    margin-top: 10px;
    border-radius: 15px 15px 0 0;
    background-color: rgb(177, 39, 15);
}

.menu:active {
    transform: scale(0.95);
    margin-top: 13px;
}

.menu i {
    font-size: 1.4em;
}

.text {
    font-size: .80em;
    font-weight: bold;
}

@media screen and (max-width: 1024px) {
    header {
        position: absolute;
        top: calc(100vh - 70px);
        width: 100%;
        justify-content: center;
        box-shadow: 0px -5px 12px 5px rgba(0, 0, 0, .5);
    }

    header img {
        display: none;
    }

    nav {
        width: 100%;
        max-width: 500px;
        min-width: 320px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        color: white;
    }

    .menu:active {
        margin-top: 10px;
    }
}

@media screen and (max-width: 768px) {
    .menu {
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin-left: 0px;
        width: 18%;
        height: 50px;
        margin-top: 0px;
        border-radius: 25px;
    }

    .menu:active {
        margin-top: auto;
    }

    nav {
        padding: 0 5px;
    }

    .text {
        display: none;
    }
}

@media screen and (max-width: 425px) {
    .menu i {
        font-size: 1.2em;
    }


}

</style>