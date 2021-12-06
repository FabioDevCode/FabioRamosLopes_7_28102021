<template>
    <div class="apost">
        <div class="post">

            <div class="bandeauAllposts">
                <div class="bandeauuser" >
                    <img v-if="this.avatar" :src="this.avatar" alt="photo du profil de l'utilisatuer qui a écris la publication">
                    <img v-else src="../assets/randomuser.jpg" alt="photo du profil de l'utilisatuer qui a écris la publication">
                    <div class="blocname">
                        <p>{{ firstname }}<span> {{ lastname }}</span></p>
                    </div>
                </div>
            </div>

            <div class="post-content">
                <form @submit.prevent id="">
                    <h1>Modifiez votre publication</h1>

                    <div class="blocfromcenter">
                        <div class="blocfromleft">
                            <label for="media">Choisir une image :</label>
                            <p class="formats">Formats : jpg, jpeg, png et gif</p>
                            <input type="file" @change="UploadImg" accept="image/png, image/jpeg, image/jpg, image/gif" id="media" name="media">
                            <i v-if="this.url" class="fas fa-check-circle"></i>
                        </div>

                        <div class="blocfromright">
                            <label for="message">Votre message :</label>
                            <textarea v-model="newmsg" class="textarea" name="message" :placeholder="this.message"></textarea>
                        </div>
                    </div>

                    <p class="errors"> {{errors }}</p>

                </form>

                <img v-if="this.media" :src="this.media" alt="image du post">
                <img v-else src="" alt="" id="none">
                <p> {{ message }} </p>
            </div>

            <button @click="ModifyPost()" >Publier</button>
        </div>
    </div>


</template>


<script>
import axios from 'axios';

export default {
    name: 'APost',
    data() {
        return {
            token: '',
            postid: '',

            media: '',
            message: '',
            date: '',
            
            firstname: '',
            lastname: '',
            avatar: '',

            url: null,
            image: null,
            file: null,
            newmsg: '',

            errors: '',
        }
    },
    mounted() {
        this.started();
        this.getThePost();
    },
    methods: {
        started() {
            this.token = JSON.parse(localStorage.user).token;
            this.firstname = JSON.parse(localStorage.user).firstname;
            this.lastname = JSON.parse(localStorage.user).lastname;
            this.avatar = JSON.parse(localStorage.user).avatar;

            const urlWindow = window.location.search;
            let idPost = urlWindow.slice(1);

            this.postid = idPost
        },
        getThePost() {

            fetch(`http://localhost:3000/api/posts/${this.postid}`,
            {
                headers: 
                {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            .then(response => response.json())
            .then((response) => {

                this.media = response.media;
                this.message = response.message;
                this.date = response.date;
                this.newmsg = response.message;
            })

        },
        VerifPost() {
            if(this.newmsg.length >= 2) {
  
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
                this.url = undefined;
                this.image = undefined;
                this.file = undefined;            
            } else {
                this.image = event.target.files[0];
                this.file = event.target.files[0];
                this.url = URL.createObjectURL(this.image);
            }
            
        },
        ModifyPost() {
            if(this.VerifPost()) {
                this.userid = JSON.parse(localStorage.user).userId;
                this.token = JSON.parse(localStorage.user).token;

                const dateX = new Date();
                const createdAt = dateX.toLocaleString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                });
                this.createdAt = createdAt;

                if(this.file == undefined) {

                    const fd = new FormData()

                    fd.append("message", this.newmsg)

                    axios.put(`http://localhost:3000/api/posts/${this.postid}`, fd, {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${this.token}`
                        }
                    })
                    .then((res) => {
                        if(res.status === 200) {
                            alert("Votre publication à bien été modifiée !")

                            this.newmsg = '',
                            this.image = null,
                            window.location = "/home";
                        }
                    })
                    .catch(error => console.log(error))
                    
                } else {
                    const fd = new FormData()

                    fd.append("message", this.newmsg)
                    fd.append("image", this.file, this.file.name)

                    axios.put(`http://localhost:3000/api/posts/${this.postid}`, fd, {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${this.token}`
                        }
                    })
                    .then((res) => {
                        if(res.status === 200) {
                            alert("Votre publication à bien été modifiée !")
                            this.userid = '',
                            this.newmsg = '',
                            this.image = null,
                            window.location = "/home";
                        }
                    })
                    .catch(error => console.log(error))
                }
            }
        },
    }
}
</script>



<style scoped>
.apost {
    z-index: 900;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    width: auto;
    min-height: 100vh;
}

#none {
    display: none;
}

.post-content form {
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: black;
    position: absolute;
    background: rgba(255, 255, 255, .7);
    border-radius: 8px;
    padding: 8px;
    height: 100%;
    width: 100%;
}

.post-content form .blocfromcenter {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: space-between;
}

.post-content form .blocfromcenter .blocfromright  {
    display: flex;
    flex-direction: column;
    width: 50%;
}

.blocfromleft {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
}

.blocfromleft label {
    margin-bottom: 50px;
}

.blocfromright label {
    margin-bottom: 25px;
}

label {
    font-weight: bold;
    font-size: 1.2em;
    align-self: center;
}

textarea {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    padding: 5px 10px;
    height: 100%;
    border: 1px solid grey;
}

textarea::placeholder {
    padding: 4px;
}

button {
    cursor: pointer;
    border: none;
    height: 50px;
    width: 200px;
    border-radius: 999px;
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    background: #FD3E15;
    margin: 0 auto;
}

.apost .bandeauAllposts {
    height: 45px;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
}

.bandeauuser, .bandeaubtn {
    display: flex;
    align-items: center;
}

.bandeauuser img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    object-position: center;
    background: lightgray;
    border: 1px solid Black;
    border-radius: 50%;
    margin-right: 10px;
}

.bandeauuser div {
    margin-right: 5px;
}

.bandeaubtn button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 40px;
    width: 40px;
    border: none;
    color: white;
    border-radius: 50%;
    font-size: 1.1em;
    margin-left: 5px;
}

.modify:active, .delete:active {
    transform: scale(.90);
}

.bandeaubtn .modify {
    background: midnightblue;
}

.bandeaubtn .delete {
    background: #FD3E15;
}

.blocname p span {
    font-weight: bold;
}

.blocname .datepost {
    color: rgb(46, 46, 46);
    font-size: .8em;
}

.post {
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: left;
    overflow: hidden;
    height: auto;
    width: 70vw;
    min-width: 900px;
    border-radius: 15px;
    background-color: white;
    border: 1px solid darkgrey;
}

.post-content {
    min-height: 500px;
    overflow: hidden;
    position: relative;
    display: flex;
    height: auto;
    width: 100%;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, .3);
}

.post-content #none {
    display: none;
}

.post-content img {
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
    margin-bottom: 10px;
    width: 50%;
    min-width: 50%;
    max-width: 50%;
    height: auto;
    margin-right: 15px;
    box-shadow: 5px 0px 8px rgba(0, 0, 0, .3);
}

.post-content p {
    z-index: -1;
    margin-bottom: 10px;
}

.errors {
    text-align: center;
    font-weight: bold;
    color: red;
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    font: 1em;
    color: white;
    font-weight: 600;
    background-color: #f8512c;
    height: 45px;
    width: 100%;
    border-radius: 999px;
    cursor: pointer;
}

.button:active {
    transform: scale(.98);
}

@media screen and (max-width: 1024px) {
    .apost {
        padding: 50px 0 100px 0;
    }

    .post {
        width: 95vw;
        min-width: 310px;
    }

}

@media screen and (max-width: 768px) {
    .post-content {
        flex-direction: column;
    }

    h1 {
        font-size: 1.5em;
    }

    .blocfromcenter {
        padding: none;
        height: 100%;
        width: 100%;
        flex-direction: column;
        align-items: center;
    }

    .post-content form .blocfromcenter .blocfromleft {
        width: 95%;
        min-width: 230px;
    }

    .post-content form .blocfromcenter .blocfromright {
        height: 70%;
        width: 95%;
    }

    .post-content img {
        margin-top: 50px;
        width: 100%;
        max-width: none;
        margin-right: 0px;
        box-shadow: none;
        border: 1px solid rgba(0, 0, 0, .1);
    }

}

@media screen and (max-width: 425px) {
    .blocname {
        width: calc(100px + 15vw);
        min-width: 115px;
        overflow: hidden;
        font-size: .9em;
    }

    .post-content p {
        font-size: .9em;
    }

    .bandeaubtn {
        padding: 0px;
    }

    .blocname p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

}

@media screen and (max-width: 375px) {
    .blocname {
        width: calc(100px + 4.6vw);
    }

    h1 {
        font-size: 1.2em;
    }
}


</style>