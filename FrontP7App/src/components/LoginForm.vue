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
            <form @submit.prevent class="login-form">
                <h3>CONNECTEZ-VOUS</h3>

                <label for="email">E-MAIL</label>
                <input v-model="email" type="email" id="email">

                <label for="password">MOT DE PASSE</label>
                <input v-model="password" type="password" id="password">

                <button @click="SubmitForm()">Se Connecter</button>
            </form>

        </div>
    </div> 
</template>


<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        SubmitForm() {
            let FormSend = {
                email: this.email,
                password: this.password
            }

            fetch("http://localhost:3000/api/auth/login",
            {
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(FormSend)
            })
            .then((response) => {
                response.json()
            })
            .catch(error => console.log(error))
        }
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

nav .connecter {
    cursor: default;
    background: whitesmoke;
    color: grey;
}

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

</style>