<template>
    <div class="blocuserpage">
        <div class="card">
            <div class="blocimgprofil">
                <img v-if="this.image" :src="this.image" alt="photo de profil">
                <img v-else src="../assets/randomuser.jpg" alt="photo de profil">
            </div>
            <div class="info">
                <div class="firstname">{{ firstname }}</div>
                <div class="lastname">{{ lastname }}</div>
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
    name: 'UserUnique',
    data() {
        return {
            image: '',
            firstname: '',
            lastname: '',
            admin: '',

            token: '',
        }
    },
    mounted() {
        this.getUser();
    },
    methods: {
        getUser() {
            this.token = JSON.parse(localStorage.user).token;

            const urlWindow = window.location.search;
            let idUser = urlWindow.slice(1);

            fetch(`http://localhost:3000/api/auth/${idUser}`,
            {
                headers: 
                {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            .then(response => response.json())
            .then((response) => {

                this.image = response.avatar;
                this.firstname = response.firstname;
                this.lastname = response.lastname;
                this.admin = response.admin;

            })
        }
    }
}
</script>



<style scoped>
.blocuserpage {
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

.blocimgprofil, .blocimgprofil img {
    border-radius: 12px;
}

.blocimgprofil, .info {
    margin-top: 30px;
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
        width: 100%;
        align-items: center;
        text-align: center;
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