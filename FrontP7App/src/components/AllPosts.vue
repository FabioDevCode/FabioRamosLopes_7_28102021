<template>
    <div class="allposts">

        
    </div>
</template>



<script>

export default {
    name: 'AllPosts',
    data() {
        return {
            userId: '',
            token: '',
            posts: '',
            users: '',

        }
    },
    mounted() {
        this.started();
        this.getAllPosts();
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

                this.posts = response;
                

                const blocAllPosts = document.querySelector(".allposts");

                for (let post in this.posts) {

                    let postCard = document.createElement('div');
                    postCard.classList.add("post");
                    postCard.innerHTML = `
                    <div class="bandeauAllposts">
                        <div class="bandeauuser">
                            <img src="http://localhost:3000/images/randomuser.jpg" alt="photo du profil de l'utilisatuer qui a écris la publication">
                            <div class="blocname">
                                <p>Beta <span>TESTEUR</span></p>
                                <p class="datepost">${this.posts[post].date}</p>
                            </div>
                        </div>
                        
                        <div class="bandeaubtn">   
                            <button v-if="this.userId == ${this.posts[post].userId}" class="modify" ><i class="fas fa-pen"></i></button>
                            <button v-if="this.userId == ${this.posts[post].userId}" class="delete" ><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                    <div class="post-content">
                        <img src="${this.posts[post].media}" alt="image du post">
                        <p>
                            ${this.posts[post].message}
                        </p>
                    </div>
                    <div class="button">COMMENTER</div>
                    `;
                    console.log(this.posts[post].userId)
                    blocAllPosts.appendChild(postCard);
                }
            })

        },
        started() {
            this.token = JSON.parse(localStorage.user).token;
            this.userId = JSON.parse(localStorage.user).userId;
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
    align-items: center;
    overflow: hidden;
    height: auto;
    width: 800px;
    margin-bottom: 15px;
    border-radius: 15px;
    background-color: white;
    border: 1px solid darkgrey;
}

.post-content {
    height: auto;
    width: 100%;
}

.post-content img {
    border-radius: 8px;
    margin-bottom: 10px;
    width: 100%;
    height: auto;
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

</style>