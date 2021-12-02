<template>
    <div class="allposts">
        <div :key="post.id" v-for="(post) in allposts" class="post">

            <div :key="user.id" v-for="user in allusers">
                <div class="bandeauAllposts" v-if="post.userId == user.id">

                    <div class="bandeauuser" >
                        <img v-if="user.avatar" :src="user.avatar" alt="photo du profil de l'utilisatuer qui a écris la publication">
                        <img v-else src="../assets/randomuser.jpg" alt="photo du profil de l'utilisatuer qui a écris la publication">
                        <div class="blocname" v-if="post.userId == user.id">
                            <p> {{ user.firstname }} <span> {{ user.lastname }} </span></p>
                            <p class="datepost">Fait le {{ post.date }}</p>
                        </div>
                    </div>

                    <div class="bandeaubtn" v-if="post.userId == userId || admin == 1" > 
                        <button v-if="post.userId == userId" class="modify" ><i class="fas fa-pen"></i></button>
                        <button class="delete" ><i class="fas fa-trash-alt"></i></button>
                    </div>

                </div>
            </div>

            <div class="post-content">
                <img :src="post.media" alt="image du post">
                <p>
                    {{ post.message }}
                </p>
            </div>
            <div class="button">COMMENTER</div>

        </div>
  
    </div>
</template>



<script>

export default {
    name: 'AllPosts',
    data() {
        return {
            userId: '',
            admin: '',
            token: '',
            users: '',
            allposts: [],
            allusers: [],
        }
    },
    mounted() {
        this.started();
        this.getAllPosts();
        this.getAllUsers();
    },
    methods: {
        getAllPosts() {
            
            fetch(`http://localhost:3000/api/posts/`,
            {
                headers: 
                {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            .then(response => response.json())
            .then((response) => {

                this.allposts = response;
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
        started() {
            this.token = JSON.parse(localStorage.user).token;
            this.userId = JSON.parse(localStorage.user).userId;
            this.admin = JSON.parse(localStorage.user).admin;
        }

    }

}


</script>



<style>
.allposts {
    z-index: 900;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    width: auto;
}

.allposts .bandeauAllposts {
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
    margin-bottom: 15px;
    border-radius: 15px;
    background-color: white;
    border: 1px solid darkgrey;
}

.post-content {
    display: flex;
    height: auto;
    width: 100%;
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
    margin-right: 10px;
}

.post-content p {
    z-index: 100;
    margin-bottom: 10px;
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
    .allposts {
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

    .post-content img {
        width: 100%;
        max-width: none;
        margin-right: 0px;
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
}

</style>