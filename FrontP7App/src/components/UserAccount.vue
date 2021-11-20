<template>
    <div class="blocaccount">
        <div class="card">
            <div class="blocimg">
                <form>
                    <label for="avatar">Choisir une nouvelle pohto :</label>
                    <input type="file" accept="image/png, image/jpeg, image/jpg" id="avatar" name="avatar">
                    <button>Envoyer</button>
                </form>
                <img src="../assets/randomuser.jpg" alt="photo de profil">
            </div>
            <div class="info">
                <div class="firstname">Fabio</div>
                <div class="lastname">TEST1</div>
            </div>
            <div class="option">
                <button class="modif">Modifier ma pohto</button>
                <button class="suppr">Supprimer mon profil</button>

            </div>
            <div class="statut">
                <p>UTILISATEUR</p>    
            </div>
        </div>
    </div>
</template>



<script>
export default {
  name: 'UserAccount',
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

.blocimg, .info, .option {
    margin-top: 30px;
}

.blocimg, .blocimg img {
    border-radius: 12px;
}

.blocimg {
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
}

form {
    background: rgba(128, 128, 128, .8);
    position: absolute;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
label {
    font-weight: bold;
    
}
label, input {
    margin-bottom: 25px;
}
form button {
    cursor: pointer;
    border: none;
    width: 120px;
    height: 30px;
    border-radius: 9999px;

}

.blocimg img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: auto;
    min-width: 100%;
}

.info {
    width: 100%;
}
.firstname {
    font-size: 2em;
}
.lastname {
    font-size: 3.5em;
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
}

.statut {
    position: absolute;
    bottom: 0px;
    background: rgba(253, 62, 21, .7);
    width: 100%;
    height: 60px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

@media screen and (max-width: 1200px) {
    .blocimg {
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

    .blocimg {
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
    .blocimg, .blocimg img {
        border-radius: 0;
        
    }

    .blocimg {
        margin-top: 0;
        width: 100%;
        min-width: 310px;
    }

    .firstname {
        font-size: 1.5em;
    }
    .lastname {
        font-size: 2em;
    }

}

</style>