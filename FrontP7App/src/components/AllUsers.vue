<template>
    <div class="blocusers">
        <div class="cardusers">
            <div class="blocimg">
                <img src="../assets/randomuser.jpg" alt="photo de profil">
            </div>
            <div class="info">
                <div class="firstname">Beta</div>
                <div class="lastname">TESTEUR</div>
            </div>
        </div>
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

            fetch(`http://localhost:3000/api/auth/`,{
                headers: {
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
                    <div class="blocimg">
                        <img src="${this.users[user].avatar}" alt="photo de profil">
                    </div>
                    <div class="info">
                        <div class="firstname">${this.users[user].firstname}</div>
                        <div class="lastname">${this.users[user].lastname}</div>
                    </div>
                    `;

                    blocUsers.appendChild(userCard);
                }
            })
            .catch(error => console.log(`Erreur : ${error}`))
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
    height: min-content;
    min-height: 100vh;
    background: whitesmoke;
}

.cardusers {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    height: 250px;
    width: 200px;
    border-radius: 10px;
    margin: 0 5px;
    overflow: hidden;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, .3);
    background: white;
    background: linear-gradient(180deg, #FD3E15 2%, rgba(255,250,255,1) 40%);
}

.cardusers:hover {
    transform: scale(1.025);
}
.cardusers:active {
    transform: scale(.98);
}

.blocimg {
    background: lightgray;
    border: 1px solid black;
    overflow: hidden;
    height: 125px;
    width: 125px;
    border-radius: 50%;
}

.blocimg img {
    height: 125px;
    width: 125px;
    object-position: center;
    object-fit: cover; 
}

.firstname {
    margin-bottom: 10px;
}

.lastname {
    font-weight: bold;
}

</style>