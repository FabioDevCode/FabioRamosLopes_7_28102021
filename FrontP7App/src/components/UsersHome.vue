<template>
    <div class="user-home">
        <div class="bloc-users">
            <div class="card-user">
                <div class="user-img">
                    <img src="../assets/randomuser.jpg" alt="Utilisateur">
                </div>
            </div>
            <div class="card-user">
                <div class="user-img">
                    <img src="../assets/randomuser.jpg" alt="Utilisateur">
                </div>
            </div>
            <div class="card-user">
                <div class="user-img">
                    <img src="../assets/randomuser.jpg" alt="Utilisateur">
                </div>
            </div>
            <div class="card-user">
                <div class="user-img">
                    <img src="../assets/randomuser.jpg" alt="Utilisateur">
                </div>
            </div>
            <div class="card-user">
                <div class="user-img">
                    <img src="../assets/randomuser.jpg" alt="Utilisateur">
                </div>
            </div>
            <div class="card-user">
                <div class="user-img">
                    <img src="../assets/randomuser.jpg" alt="Utilisateur">
                </div>
            </div>
            <div class="card-user">
                <div class="user-img">
                    <img src="../assets/randomuser.jpg" alt="Utilisateur">
                </div>
            </div>
            <div class="card-user">
                <div class="user-img">
                    <img src="../assets/randomuser.jpg" alt="Utilisateur">
                </div>
            </div>
            <div class="card-user">
                <div class="user-img">
                    <img src="../assets/randomuser.jpg" alt="Utilisateur">
                </div>
            </div>
            <div class="card-user">
                <div class="user-img">
                    <img src="../assets/randomuser.jpg" alt="Utilisateur">
                </div>
            </div>
                        <div class="card-user">
                <div class="user-img">
                    <img src="../assets/randomuser.jpg" alt="Utilisateur">
                </div>
            </div>




        </div>
        <div class="button-user">Voir tout les utilisateurs</div>
    </div>
    
    
</template>



<script>
export default {
  name: 'UsersView',
}


</script>



<style scoped>
.user-home {
    position: relative;
    border: 1px solid darkgrey;
    width: 300px;
    height: auto;
    max-height: 70vh;
    padding-bottom: 45px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background-color: white;
    overflow: hidden;
}

.user-img {
    border-radius: 50%;
}

.user-img img {
    width: 100%;
    object-fit: cover;
    object-position: center;
}

.bloc-users {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: max-content;
    width: 100%;
    max-height: 90%;
}

.card-user {
    cursor: pointer;
    overflow: hidden;
    height: 75px;
    width: 75px;
    border-radius: 50%;
    border: 1px solid darkgray;
    margin: 5px;
}

.button-user {
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

.button-user:hover {
    border-top: none;
    transform: scale(1.02);
    color: white;
    background-color: #FD3E15;
}


</style>