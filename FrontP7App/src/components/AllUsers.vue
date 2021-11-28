<template>
    <div class="blocusers">
        
    </div>
</template>



<script>
export default {
    name: 'AllUsers',
    data() {
        return {
            userId: '',
            token: '',
            users: '',
        }
    },
    mounted() {
        this.getAllUsers();
    },
    methods: {
        getAllUsers() {
            this.token = JSON.parse(localStorage.user).token;
            this.userId = JSON.parse(localStorage.user).userId;

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

                this.users = response;

                const blocUsers = document.querySelector('.blocusers');

                for (let user in this.users) {

                    let userCard = document.createElement("div");
                    userCard.classList.add("cardusers");
                    userCard.innerHTML = `
                    <a href="http://localhost:8080/userpage/?${this.users[user].id}">
                        <div class="blocimg">
                            <img src="${this.users[user].avatar}" alt="photo de profil">
                        </div>
                        <div class="info">
                            <div class="firstname">${this.users[user].firstname}</div>
                            <div class="lastname">${this.users[user].lastname}</div>
                        </div>
                    </a>
                    `;

                    blocUsers.appendChild(userCard);
                }
            })
            .catch(error => console.log(`Erreur : ${error}`))
        },

        seeUserPage(id) {
            window.location = `/userpage/?${id}`;
            console.log(`/userpage/?${id}`)
        },
    },
}
</script>




<style>
.blocusers {
    display: flex;
    padding-top: 100px;
    width: 80%;
    margin: 0 auto;
    height: auto;
    min-height: 100vh;
    flex-wrap: wrap;
}

.cardusers {
    cursor: pointer;
    height: 240px;
    width: 160px;
    border-radius: 10px;
    margin: 0 5px 15px 5px;
    overflow: hidden;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, .3);
    background: white;
    background: linear-gradient(180deg, #FD3E15 2%, rgba(255,250,255,1) 40%);
    flex-shrink: 0;
}

.cardusers:hover {
    transform: scale(1.025);
}
.cardusers:active {
    transform: scale(.98);
}

.cardusers a {
    text-decoration: none;
    color: black;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
}

.blocimg {
    background: white;
    overflow: hidden;
    height: 125px;
    width: 125px;
    border-radius: 50%;
}

.blocimg img {
    height: 100%;
    width: 100%;
    object-position: center;
    object-fit: cover; 
}

.firstname, .lastname {
    text-overflow: ellipsis;
}

.firstname {
    margin-bottom: 10px;
}

.lastname {
    font-weight: bold;
}

@media screen and (max-width: 1024px) {
    .blocusers {
        justify-content: center;
        padding: 100px 0;
        width: 98%;
    }
}

@media screen and (max-width: 425px) {
    .blocusers {
        width: 100%;
    }

    .cardusers {
        height: 200px;
        width: 140px;
    }

    .blocimg {
        height: 100px;
        width: 100px;
    }
    
    .firstname, .lastname {
        font-size: .9em;
    }
}
</style>