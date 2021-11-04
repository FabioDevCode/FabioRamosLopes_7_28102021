<template>
   <div>
       <div class="bloc-img">
           <img src="../assets/icon-noir.png" alt="Logo Groupomania">
       </div>

       <div class="bloc-title">
           <div class="tilte">SE CONNECTER</div>
           <div class="title">S'INSCRIRE</div>
       </div>
       
        <div class="bloc-form">
            <form class="login-form" id="login">

                <label for="login-email">E-MAIL :</label>
                <input type="email" id="login-email">


                <label for="">MOT DE PASSE :</label>
                <input type="password" id="login-password">

                <button>Se Connecter</button>
            </form>


            <form class="signup-form" id="signup">

                <label for="prenom"></label>
                <input type="text" id="prenom">

                <label for="prenom"></label>
                <input type="text" id="nom">

                <label for="prenom"></label>
                <input type="email" id="signup-email">

                <label for="prenom"></label>
                <input type="password" id="signup-password">

            </form>
        </div>
    </div> 
</template>


<script>
export default {
    
}
</script>



<style scoped>




</style>