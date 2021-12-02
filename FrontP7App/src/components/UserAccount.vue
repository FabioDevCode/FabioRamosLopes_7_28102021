<template>
    <div class="blocaccount">
        <div class="card">
            <div class="blocimgprofil">
                <form @submit.prevent class="none">
                    <label for="avatar">Choisir une nouvelle pohto :</label>
                    <input type="file" @change="onFileSelected" accept="image/png, image/jpeg, image/jpg" id="avatar" name="avatar">
                    <p>Format : .jpg, .jpeg ou .png</p>
                    <button @click="modifyImage()">Envoyer</button>
                </form>
                <img v-if="this.url" :src="this.url" alt="photo de profil">
                <img v-else-if="this.image" :src="this.image" alt="photo de profil">
                <img v-else src="../assets/randomuser.jpg" alt="photo de profil random">
            </div>
            <div class="info">
                <div class="firstname">{{ firstname }}</div>
                <div class="lastname">{{ lastname }}</div>
            </div>
            <div class="option">
                <button v-if="toggletext == 0" @click="buttonModif()" class="modif">Modifer ma photo</button>
                <button v-else-if="toggletext == 1" @click="buttonModif()" class="modif">Annuler la modification</button>
                <button v-if="admin == 1 || userid >= 1" @click="deleteUser(userid)" class="suppr">Supprimer mon profil</button>
            </div>
            <div class="statut">
                <p v-if="this.admin == 0">UTILISATEUR</p>
                <p v-if="this.admin == 1">ADMINISTRATEUR</p>    
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

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
            file: null,
            url: null,
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
            this.image = JSON.parse(localStorage.user).avatar;
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
            const fd = new FormData();
            fd.append('image', this.file, this.file.name)

            axios.put(`http://localhost:3000/api/auth/${this.userid}`, fd, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                }
            })
            .then((res) => {
                localStorage.setItem("update", JSON.stringify(res.data));

                let newUpProfil = {
                    admin: JSON.parse(localStorage.user).admin,
                    avatar: JSON.parse(localStorage.update).avatar,
                    firstname: JSON.parse(localStorage.user).firstname,
                    lastname: JSON.parse(localStorage.user).lastname,
                    token: JSON.parse(localStorage.user).token,
                    userId: JSON.parse(localStorage.user).userId,
                };
                localStorage.setItem("user", JSON.stringify(newUpProfil));
                alert(`${JSON.parse(localStorage.update).message}`);
                localStorage.removeItem("update");
                this.buttonModif();
            })
            .catch(error => console.log({ error }));
            
        },
        onFileSelected(event) {
            this.file = event.target.files[0]
            this.url = URL.createObjectURL(this.file);
        },
        deleteUser(userId) {
            fetch(`http://localhost:3000/api/auth/${userId}`, 
            {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
                },
                method: "DELETE",
            })
            .then(() => {
                alert("Votre compte à bien été supprimé.");
                localStorage.removeItem('user');
                window.location = '/';
            })
        },
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

.blocimgprofil form.none {
    display: none;
}

.blocimgprofil form {
    background: rgba(50, 50, 50, .9);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.blocimgprofil form p {
    font-weight: bold;
    font-style: italic;
    color: white;
    font-size: .9em;
}

.blocimgprofil form input {
    margin-bottom: 5px;
}

.blocimgprofil label {
    font-weight: bold;
    color: white;
    font-size: 1.2em;
}
.blocimgprofil label, form p {
    margin-bottom: 25px;
}
.blocimgprofil form button {
    font-weight: bold;
    cursor: pointer;
    border: none;
    width: 120px;
    height: 30px;
    border-radius: 9999px;
}

.blocimgprofil form button:active {
    transform: scale(.95);
}

.blocimgprofil, .info, .option {
    margin-top: 30px;
}

.blocimgprofil, .blocimgprofil img, form {
    border-radius: 12px;
}

.blocimgprofil {
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
    min-width: 300px;
}

.blocimgprofil img {
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
    .blocimgprofil {
        height: 300px;
        width: 300px;
    }
} 

@media screen and (max-width: 1024px) {
    .blocaccount {
        padding: 50px 0 100px 0;
    }


    .card {
        width: 90%;
        min-width: 310px;
        flex-direction: column;
        align-items: center;
    }

    .blocimgprofil {
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
    .blocimgprofil, .blocimgprofil img {
        border-radius: 0;
        
    }

    .blocimgprofil {
        margin-top: 0;
        margin-bottom: 25px;
        width: 100%;
        min-width: 310px;
    }

}

</style>