<template>
   <div class="forms-log">
       <div class="bloc-img">
           <img src="../assets/icon-rougeblanc.png" alt="Logo Groupomania">
       </div>

       <nav>
            <router-link class="lien inscrire" to="/signup">S'inscrire</router-link>
            <router-link class="lien connecter" to="/">Se Connecter</router-link>
       </nav>

        <div class="bloc-form">
            <form @submit.prevent class="signup-form" id="signup">
                <h3>INSCRIVEZ-VOUS</h3>

                <label for="firstname">PRÉNOM</label>
                <input v-model="firstname" type="text" id="firstname">
                <p class="thefirst cache">Votre prénom doit contenir 2 caractères minimum</p>

                <label for="lastname">NOM</label>
                <input v-model="lastname" type="text" id="lastname">
                <p class="thelast cache">Votre nom doit contenir 2 caractères minimum</p>

                <label for="email">E-MAIL</label>
                <input v-model="email" type="email" id="email">
                <p class="email cache">email non valide</p>

                <label for="password">MOT DE PASSE</label>
                <input v-model="password" type="password" id="password">
                <p class="password cache">Votre mot de passe doit contenir :<br> 1 majuscule, 1 minuscule, 1 chiffre et doit faire entre 8 et 100 caractères</p>

                <button @click="SubmitForm()">S'incrire</button>
            </form>

        </div>
    </div> 
</template>


<script>
export default {
    name: 'Signup',
    data() {
        return {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
        }
    },
    methods: {
        SubmitForm() {
            if(this.veriForm()) {
                
                let FormSend = {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password
                };

                fetch("http://localhost:3000/api/auth/signup",
                {
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(FormSend)
                })
                .then(response => response.json())
                .catch(error => console.log(error))
                //------------------------------------
                setTimeout(200);
                alert("Bienvenue ! Veuillez-vous connecter.")
                window.location = "/"
            }
        },
        veriForm() {

            let emailRegex = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
            let mdpRegex = new RegExp ('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,100}$', 'g');
            let emailTest = emailRegex.test(this.email);
            let mdpTest = mdpRegex.test(this.password);

            const first = this.firstname.length;
            const last = this.lastname.length;

            //-------------------------------------------------
            if(first <= 1) {
                let fi = document.querySelector('.thefirst');
                fi.classList.remove('cache');
            } else {
                let fi = document.querySelector('.thefirst');
                fi.classList.add('cache');
            }
            //--------------------------------------------------
            if(last <= 1) {
                let la = document.querySelector('.thelast');
                la.classList.remove('cache');
            } else {
                let la = document.querySelector('.thelast');
                la.classList.add('cache');
            }
            //--------------------------------------------------
            if(!emailTest) {
                let msg = document.querySelector('.email');
                msg.classList.remove('cache');
            } else {
                let msg = document.querySelector('.email');
                msg.classList.add('cache');
            }
            //--------------------------------------------------
            if(!mdpTest) {
                let msg = document.querySelector('.password');
                msg.classList.remove('cache');
            } else {
                let msg = document.querySelector('.password');
                msg.classList.add('cache');
            }
            //--------------------------------------------------

            if(this.firstname.length >= 2 && this.lastname.length >= 2 && mdpTest && emailTest) {
                return true
            } else {
                return false
            }
        },

    }
};
</script>



<style scoped>
nav {
    margin: 0 auto;
    width: 20%;
    min-width: 310px;
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
    width: 50%;
    text-decoration: none;
    background: #FD3E15;
    height: 100%;
}

nav .inscrire {
    cursor: default;
    background: whitesmoke;
    color: grey;
}

.forms-log {
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
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
    min-width: 310px;
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

.cache {
    display: none;
}

.bloc-form form p {
    color: red;
    font-weight: bold;
    font-size: .9em;
}

</style>