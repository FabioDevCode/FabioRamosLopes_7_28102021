<template>
    <div class="frompost">
        <div class="thepost">
            <form @submit.prevent>
                <h1>Publication</h1>

                <label for="media">Choisir une image :</label>
                <p class="formats">Formats : jpg, jpeg, png et gif</p>
                
                <div class="blocfromtop">
                    <input @change="UploadImg" type="file" accept="image/png, image/jpeg, image/jpg, image/gif" id="media" name="media">
                    <i v-if="this.url" class="fas fa-check-circle"></i>
                </div>

                <label for="message">Votre message :</label>
                <textarea v-model="message" class="textarea" name="message" placeholder="écrivez ici..."></textarea>

                <p class="errors" v-if="this.errors">{{ errors }}</p>

                <button @click="PublishPost()" >Publier</button>
            </form>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'Post',
    data() {
        return {
            userid: '',
            message: '',
            image: null,
            file: null,
            createdAt: '',
            errors: '',
            url: null,
            token: '',
        }
    },
    methods: {
        PublishPost() {
            if(this.VerifPost()) {
                this.userid = JSON.parse(localStorage.user).userId;
                this.token = JSON.parse(localStorage.user).token;

                const dateX = new Date();
                const createdAt = dateX.toLocaleString('en-GB', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                });
                this.createdAt = createdAt;

                const fd = new FormData();
                fd.append("userId", this.userid)
                fd.append("message", this.message)
                fd.append("image", this.file, this.file.name)
                fd.append("date", this.createdAt)

                axios.post('http://localhost:3000/api/posts', fd, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.token}`
                    }
                })
                .then((res) => {
                    if(res.status === 200) {
                        alert("Votre publication à bien été créée !")
                        this.userid = '',
                        this.message = '',
                        this.image = null,

                        window.location = "/home";
                    }
                })
                .catch(error => console.log(error))

            }
        },
        VerifPost() {
            if(this.message.length >= 2) {
  
                if(this.image == null) {
                    this.errors = '';
                    return true;
                } else {
                    this.errors = '';
                    return true;
                }

            } else {

                if(this.image == null) {

                    this.errors = "Votre publication doit au moins contenir une image ou/et un message (2 caractères minimum)";
                    return false;

                } else {

                    this.errors = "Votre message doit contenir plus de 2 caratères";
                    return false;
                }
            }
        },
        UploadImg(event) {
            
            if(!event.target.files[0]) {
                this.url = null;
                this.image = null;
                this.file = null;            
            } else {
                this.image = event.target.files[0];
                this.file = event.target.files[0];
                this.url = URL.createObjectURL(this.image);
            }
            
        }
    }
}

</script>


<style scoped>
.frompost {
    position: relative;
    z-index: 900;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    width: 100vw;
    min-height: 100vh;
}

.thepost {
    position: relative;
    overflow: hidden;
    background: white;
    background: linear-gradient(180deg, #FD3E15 0%, rgba(255,250,255,1) 12%);
    border: 1px solid black;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, .3);
    height: 80vh;
    min-height: 650px;
    min-width: 315px;
    width: 65vw;
    border-radius: 20px;
}

.thepost form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    min-width: 290px;
    height: 100%;
    padding: 15px 0px;
}

.thepost form h1 {
    align-self: center;
    border-bottom: 2px solid black;
    margin-bottom: 4vh;
}

.thepost form label {
    font-weight: bold;
    font-size: 1.5em;
    margin-bottom: 1vh;
    word-break: break-word;
}

.thepost .errors {
    text-align: center;
    font-weight: bold;
    color: red;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
}

.blocfromtop {
    height: 30px;
    display: flex;
    align-items: center;
    margin-bottom: 3vh;
}

.thepost form .blocfromtop input {
    margin: 0px;
}

.fa-check-circle {
    font-size: 1.6em;
    color: green;
}

.formats {
    font-size: 1em;
    font-style: italic;
    margin-bottom: 1.5vh;
}

.thepost form input {
    margin-bottom: 3vh;
    word-break: break-all;
    overflow-wrap: break-word;
}

.thepost textarea {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    padding: 5px 10px;
    height: 30vh;
    border-radius: 12px;
    border: 1px solid black;
}

.thepost button {
    cursor: pointer;
    border: none;
    height: 50px;
    width: 200px;
    border-radius: 999px;
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    background: #FD3E15;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, .3);
    margin: 0 auto;
    margin-top: 10vh;
}

.thepost button:active {
    transform: scale(.95);
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, .3);
}

@media screen and (max-width: 1024px) {
    .frompost {
        padding: 50px 0px 100px 0px;
    }

    .thepost {
        width: 85vw;
    }
}

</style>