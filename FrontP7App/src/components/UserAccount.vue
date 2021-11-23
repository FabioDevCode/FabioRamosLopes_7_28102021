<template>
    <div class="blocaccount">
        <div class="card">
            <div class="blocimg">
                <form class="none">
                    <label for="avatar">Choisir une nouvelle pohto :</label>
                    <input type="file" accept="image/png, image/jpeg, image/jpg" id="avatar" name="avatar">
                    <p>Format : .jpg, .jpeg ou .png</p>
                    <button>Envoyer</button>
                </form>
                <img v-if="this.image" :src="this.image" alt="photo de profil">
                <img v-else src="../assets/randomuser.jpg" alt="photo de profil random">
            </div>
            <div class="info">
                <div class="firstname">{{ firstname }}</div>
                <div class="lastname">{{ lastname }}</div>
            </div>
            <div class="option">
                <button v-if="toggletext == 0" @click="buttonModif()" class="modif">Modifer ma photo</button>
                <button v-else-if="toggletext == 1" @click="buttonModif()" class="modif">Annuler la modification</button>
                <button v-if="admin == 1 || userid >= 1" class="suppr">Supprimer mon profil</button>
            </div>
            <div class="statut">
                <p v-if="this.admin == 0">UTILISATEUR</p>
                <p v-if="this.admin == 1">ADMINISTRATEUR</p>    
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'UserAccount',
    data() {
        return {
            toggletext: '0',
            token: '',
            image: '',
            firstname: '',
            lastname: '',
            admin: '',
            userid: '',
            data: null,
        }
    },
    mounted() {
      this.getProfil();
    },
    methods: {
        getProfil() {
            this.firstname = JSON.parse(localStorage.user).firstname;
            this.lastname = JSON.parse(localStorage.user).lastname;
            this.admin = JSON.parse(localStorage.user).admin;
            this.userid = JSON.parse(localStorage.user).userId;
            this.token = JSON.parse(localStorage.user).token;
        },
        buttonModif() {
            const form = document.querySelector('form');
            form.classList.toggle('none');
            if (this.toggletext == 0) {
                this.toggletext = 1;
            } else {
                this.toggletext = 0;
            }
        },
        modifyImage() {
            // const formData = new FormData()
        }
    }
}
</script>



<style scoped>
.blocaccount {
    padding: 100px 0;
    height: auto;
    width: 100%;
}

.card {
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    height: 80vh;
    min-height: 700px;
    width: 80%;
    border-radius: 25px;
    background: white;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, .3);
    display: flex;
}

form {
    background: rgba(50, 50, 50, .9);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

form p {
    font-weight: bold;
    font-style: italic;
    color: white;
    font-size: .9em;
}

form input {
    margin-bottom: 5px;
}

label {
    font-weight: bold;
    color: white;
    font-size: 1.2em;
}
label, form p {
    margin-bottom: 25px;
}
form button {
    font-weight: bold;
    cursor: pointer;
    border: none;
    width: 120px;
    height: 30px;
    border-radius: 9999px;
}

.blocimg, .info, .option {
    margin-top: 30px;
}

.blocimg, .blocimg img, form {
    border-radius: 12px;
}

.blocimg {
    position: relative;
    height: 500px;
    width: 500px;
    margin-left: 30px;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
}

.none {
    display: none;
}

.blocimg img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
    flex-wrap: nowrap;
}

.info {
    width: 50%;
    word-break: break-all;
}
.firstname {
    font-size: 1.85em;
}
.lastname {
    font-size: 2em;
    font-weight: bold;
}

.option {
    width: 200px;
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    flex-wrap: nowrap;
}

.option button {
    cursor: pointer;
    width: 200px;
    font-size: .85em;
    font-weight: bold;
    margin-bottom: 20px;
    border: none;
    height: 50px;
    border-radius: 25px;
    color: white;
    
}

.modif {
    background: midnightblue;
}

.suppr {
    background: rgb(226, 55, 24);
}

.option button:active {
    transform: scale(.95);
}

.statut {
    position: absolute;
    bottom: 0px;
    color: white;
    background: rgb(82, 82, 82);
    width: 100%;
    height: 60px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

@media screen and (max-width: 1200px) {
    .blocimg {
        height: 300px;
        width: 300px;
    }
} 


@media screen and (max-width: 1024px) {
    .card {
        width: 90%;
        min-width: 310px;
        flex-direction: column;
        align-items: center;
    }

    .blocimg {
        margin-left: 0;
        margin-right: 0;
    }

    .info {
        margin-top: 15px;
    }

    .info, .option {
        width: 100%;
        align-items: center;
        text-align: center;
    }

    .option {
        justify-content: center;
        align-items: center;
        margin-right: 0;
    }

}

@media screen and (max-width: 375px) {
    .blocimg, .blocimg img {
        border-radius: 0;
        
    }

    .blocimg {
        margin-top: 0;
        margin-bottom: 25px;
        width: 100%;
        min-width: 310px;
    }



}

</style>