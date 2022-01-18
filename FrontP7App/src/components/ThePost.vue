<template>
    <div class="apost">
        <div class="post">

            <div class="bandeauAllposts">
                <div class="bandeauuser" >
                    <img v-if="this.userpost == this.ownid" :src="this.ownavatar" alt="photo du profil de l'utilisatuer qui a écris la publication">
                    <img v-else src="../assets/randomuser.jpg" alt="photo du profil de l'utilisatuer qui a écris la publication">
                    <div v-if="this.userpost == this.ownid" class="blocname">
                        <p> {{ ownfirstname }} <span> {{ ownlastname }} </span></p>
                        <p class="datepost">{{ date }}</p>
                    </div>
                    
                    <div v-else class="blocname">
                        <p> Beta <span> TESTEUR </span></p>
                        <p class="datepost">{{ date }}</p>
                    </div>
                </div>
            </div>

            <div class="post-content">

                <img v-if="this.media" :src="this.media" alt="image du post">
                <img v-else src="" alt="" class="none">
                <p> {{ message }} </p>

            </div>

            <div class="allcomments">
                <h1 v-if="allcomments.length <= 1"> {{ allcomments.length }} commentaire</h1>
                <h1 v-else> {{ allcomments.length }} commentaires</h1>

                <div :key="com.id" class="comment" v-for="com in allcomments">

                    <div :key="user.id" class="commentuser" v-for="user in allusers">
                        <div class="bandeauuser" v-if="user.id == com.userId">

                            <img v-if="user.avatar" :src="user.avatar" alt="photo du commentateur">
                            <img v-else src="../assets/randomuser.jpg" alt="photo du commentateur">
                            <div class="blocname" v-if="user.id == com.userId">
                                    <p> {{ user.firstname }} <span> {{ user.lastname }} </span></p>
                                    <p class="datecomment"> {{ com.createdAt }} </p>
                            </div>
                            <div v-else class="none"></div>
                        </div>

                        <div class="bandeaubtn" v-if="user.id == com.userId"> 
                            <button class="modify" @click="buttonModif(com.id)" v-if="com.userId == ownid"><i class="fas fa-pen"></i></button>
                            <button class="delete" @click="deleteComment(com.id)" v-if="com.userId == ownid || admin == 1"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                    <div class="commenttext">
                        {{ com.comment }}
                    </div>
                    <form @submit.prevent class="thisform none" :id="com.id">
                        <textarea v-model="com.comment" name="newcomment" id="newcomment"></textarea>
                        <button @click="modifyComment(com.id)" >Modifier</button>
                    </form>
                </div>

            </div>
            

            <form @submit.prevent id="fromtocomment">
                <label for="comment">Laissez un commentaire</label>
                <textarea v-model="comment" name="comment" id="comment"></textarea>
                <button @click="CommentThisPost()" >Commenter</button>
            </form>
            
        </div>
    </div>

</template>


<script>
// import axios from 'axios';

export default {
    name: 'APost',
    data() {
        return {
            token: '',
            ownid: '',
            ownavatar: '',
            ownfirstname: '',
            ownlastname: '',
            admin: '',
            
            postid: '',
            userpost: '',
            media: '',
            message: '',
            date: '',

            allusers: [],
            allcomments: [],

            comment: '',
            createdAt: '',

            errors: '',

        }
    },
    mounted() {
        this.started();
        this.getThePost();
        this.getAllUsers();
        this.getAllComments();
    },
    methods: {
        started() {
            this.token = JSON.parse(localStorage.user).token;
            this.ownid = JSON.parse(localStorage.user).userId;
            this.ownavatar = JSON.parse(localStorage.user).avatar;
            this.ownfirstname = JSON.parse(localStorage.user).firstname;
            this.ownlastname = JSON.parse(localStorage.user).lastname;
            this.admin = JSON.parse(localStorage.user).admin;

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
                this.userpost = response.userId;
            })

        },
        getAllUsers() {
            fetch(`http://localhost:3000/api/auth/`,
            {
                headers: 
                {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            .then(response => response.json())
            .then((response) => {

                this.allusers = response;
            })
        },
        verifComment() {
            if(this.comment.length >= 2) { 
                return true
            } else {
                alert("Votre commentaires doit contenir 2 caratères ou plus.");
                return false
            }
        },
        CommentThisPost() {
            if(this.verifComment()) {

                const dateX = new Date();
                const createdAt = dateX.toLocaleString('en-GB', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                });
                this.createdAt = createdAt;

                const comment = {
                    comment: this.comment,
                    postId: this.postid,
                    userId: this.ownid,
                    createdAt: this.createdAt
                }
                
                fetch(`http://localhost:3000/api/posts/${this.postid}/comments/`,
                {
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                    },
                    method: "POST",
                    body: JSON.stringify(comment)
                })
                .then(response => response.json())
                .then(() => {
                    alert("Votre commentaire à bien été créé !")
                            
                    this.comment = '',
                    this.createdAt = '',

                    location.reload();
                })
                .catch(error => console.log(error))
            }
        },
        getAllComments() {
            fetch(`http://localhost:3000/api/posts/${this.postid}/comments/`,
            {
                headers: 
                {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            .then(response => response.json())
            .then((response) => {

                this.allcomments = response;
            })
        },
        deleteComment(comId) {
            fetch(`http://localhost:3000/api/posts/${this.postid}/comments/${comId}`, 
            {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
                },
                method: "DELETE",
            })
            .then(() => {
                alert("Le commentaire a bien été supprimé.");
                location.reload();
            })
        },
        buttonModif(ID) {
            const theForm = document.getElementById(`${ID}`);
            const theActualTxt = document.getElementById(`${ID}`).previousElementSibling;

            theForm.classList.toggle("none");
            theActualTxt.classList.toggle("none");
        },
        modifyComment(comId) {
            let newTxt = document.getElementById(`${comId}`).firstChild;

            const upComment = {
                comment: newTxt.value,
            };

            fetch(`http://localhost:3000/api/posts/${this.postid}/comments/${comId}`, 
            {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
                },
                method: "PUT",
                body: JSON.stringify(upComment),
            })
            .then(() => {
                alert("Le commentaire a bien été modifé.");
                location.reload();
            })
        }
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

.apost .bandeauAllposts {
    height: 45px;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
}

.bandeauuser, .bandeaubtn, .commentuser {
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
    background: #ac1f00;
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
    position: relative;
    display: flex;
    height: auto;
    width: 100%;
}

.post-content #none {
    display: none;
}

.post-content img {
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
    margin-bottom: 10px;
    width: 60%;
    min-width: 60%;
    max-width: 60%;
    height: auto;
    margin-right: 15px;
    box-shadow: 5px 0px 8px rgba(0, 0, 0, .3);
}

.post-content p {
    z-index: 100;
    margin-bottom: 10px;
}

.errors {
    text-align: center;
    font-weight: bold;
    color: red;
}

h1 {
    font-size: 2em;
    line-height: 2em;
    text-align: center;
    margin: 8px 0px;
    border-radius: 0 0 12px 12px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, .2);
    background: rgb(245, 245, 245);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(245,245,245,1) 100%);
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    font: 1em;
    color: white;
    font-weight: 600;
    background-color: #ac1f00;
    height: 45px;
    width: 100%;
    border-radius: 999px;
    cursor: pointer;
}

.button:active {
    transform: scale(.98);
}

.allcomments {
    border-radius: 8px;
}

.comment {
    padding: 8px;
    background: whitesmoke;
    border-radius: 12px;
    margin-bottom: 12px;
}

.commentuser {
    justify-content: space-between;
}

.commentuser img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    object-position: center;
    background: lightgray;
    border: 1px solid Black;
    border-radius: 50%;
    margin-right: 10px;
}

.commentuser div {
    margin-right: 5px;
}

.commenttext {
    margin-top: 8px;
    padding: 0px 4px 8px 4px;
    text-align: justify;
}

.comment, form {
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, .2);
}

form {
    display: flex;
    flex-direction: column;
    padding: 8px;
    background: whitesmoke;
    border-radius: 12px;
    margin-bottom: 8px;
}

form label {
    align-self: center;
    font-weight: bold;
    font-size: 1.5em;
}

form textarea {
    font-size: 1em;
    font-family: Arial, Helvetica, sans-serif;
    margin: 12px 0px;
    min-height: 175px;
    border-radius: 8px;
    padding: 5px 10px;
    border: 1px solid black;
}

form button {
    cursor: pointer;
    border: none;
    height: 50px;
    width: 200px;
    border-radius: 999px;
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    background: #ac1f00;
    margin: 0 auto;
}

form button:active {
    transform: scale(.95);
}

.allcomments .comment form.thisform {
    box-shadow: none;
    margin-top: -8px;
}

.allcomments .comment form.thisform textarea {
    min-height: 100px;
    height: auro;
}

.allcomments .comment form.thisform button {
    width: max-content;
    padding: 0 35px;
}


#none, .none {
    display: none;
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

    form label {
        font-size: 1.2em;
    }

    .commenttext {
        font-size: .9em;
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