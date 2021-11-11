<template>
   <div class="forms-log">
       <div class="bloc-img">
           <img src="../assets/icon-rougeblanc.png" alt="Logo Groupomania">
       </div>

       <nav>
            <router-link class="lien" to="/SignupForm">S'inscrire</router-link>
            <div class="nav-text">
                <p>N</p>
                <p>A</p>
                <p>V</p>
            </div>
            <router-link class="lien" to="/">Se Connecter</router-link>
       </nav>

        <div class="bloc-form">
            <form class="signup-form" id="signup">
                <h3>INSCRIVEZ-VOUS</h3>

                <label for="prenom">PRÉNOM</label>
                <input type="text" id="prenom">

                <label for="nom">NOM</label>
                <input type="text" id="nom">

                <label for="signup-email">E-MAIL</label>
                <input type="email" id="signup-email">

                <label for="signup-password">MOT DE PASSE</label>
                <input type="password" id="signup-password">

                <button>S'incrire</button>
            </form>

        </div>
    </div> 
</template>


<script>
export default {
    name: 'SignupForm',
}

</script>



<style scoped>
nav {
    margin: 0 auto;
    width: 20%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
    border-radius: 999px;
    overflow: hidden;
}

.nav-text {
    font-weight: 600;
    color: #FD3E15;
}

nav .lien {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    width: 48%;
    text-decoration: none;
    background: #FD3E15;
    height: 100%;
    
}

nav .lien

.forms-log {
    width: 100vw;
    display: flex;
    flex-direction: column;
}

.bloc-img {
    height: max-content;
    width: max-content;
    margin: 0 auto;
    height: 250px;
}

.bloc-img img {
    height: 250px;
    margin: 0 auto;
    object-fit: contain;
}

.bloc-form {
    display: flex;
    justify-content: center;
}

.bloc-form form h3 {
    text-align: center;
    border-bottom: 2px solid #FD3E15;
    padding-bottom: 15px;
    margin-bottom: 15px;
}

.bloc-form form {
    border-radius: 7px;
    width: 20%;
    display: flex;
    flex-direction: column;
}

.bloc-form form label {
    font-weight: bold;
    font-style: italic;
    margin-bottom: 5px;
    margin-top: 25px;
}

.bloc-form form input {
    height: 2em;
    font-size: 1em;
}

.bloc-form form button {
    font-weight: bold;
    color: whitesmoke;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    margin-top: 35px;
    font-size: 1.2em;
    border: none;
    height: 50px;
    border-radius: 25px;
    background-color: #FD3E15;
    cursor: pointer;
}

.bloc-form form button:active {
    box-shadow: 5px 5px 12px rgba(66, 47, 47, 0.2);
}

</style>