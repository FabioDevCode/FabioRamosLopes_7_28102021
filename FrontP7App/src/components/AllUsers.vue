<template>
    <div class="blocusers">

        <div class="cardusers">
            <div class="blocimg">
                <img src="../assets/randomuser.jpg" alt="photo de profil">
            </div>
            <div class="info">
                <div class="firstname">Prénom</div>
                <div class="lastname">NOM DE FAMILLE</div>
            </div>
        </div>

        <div class="cardusers">
            <div class="blocimg">
                <img src="../assets/randomuser.jpg" alt="photo de profil">
            </div>
            <div class="info">
                <div class="firstname">Prénom</div>
                <div class="lastname">NOM DE FAMILLE</div>
            </div>
        </div>

    </div>
</template>



<script>
export default {
    name: 'AllUsers',
    data() {
        return {
            token: '',
            userId: '',
        }
    },
    mounted() {
        this.getAllUsers();
    },
    methods: {
        getAllUsers() {
            this.token = JSON.parse(localStorage.user).token;
            this.userId = JSON.parse(localStorage.user).userId;

            fetch(`http://localhost:3000/api/auth/?${this.userId}`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            .then(response => response.json())
            .then((res) => {
                const users = res;

                console.log(typeof users)
               
            })
        }
    },
}
</script>



<style scoped>
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
    background: tomato;
}

.cardusers:hover {
    transform: scale(1.025);
}

.blocimg {
    background: grey;
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