<template>
    <div class="allposts">

        <div class="post">
            <div class="bandeaupost">
                <div class="bandeauuser">
                    <img src="../assets/randomuser.jpg" alt="photo du profil de l'utilisatuer qui a écris la publication">
                    <div>Beta</div>
                    <div>TESTEUR</div>
                </div>
                <div class="bandeaubtn">
                    <button class="modify" ><i class="fas fa-pen"></i></button>
                    <button class="delete" ><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
            <div class="post-content">
                <img src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg" alt="image du travail">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga architecto saepe error similique nihil eligendi sed magnam labore, quisquam facilis recusandae dolorum, pariatur esse optio. Itaque dignissimos, voluptatibus quod inventore aliquid pariatur sint sapiente ex nulla quaerat accusamus. In, soluta quis ullam nemo consequatur a animi hic nihil ipsa voluptate.
                </p>
            </div>
            <div class="button">COMMENTER</div>
        </div>

        <div class="post">
            <div class="bandeaupost">
                <div class="bandeauuser">
                    <img src="../assets/randomuser.jpg" alt="photo du profil de l'utilisatuer qui a écris la publication">
                    <div>Beta</div>
                    <div>TESTEUR</div>
                </div>
                <div class="bandeaubtn">
                    <button class="modify" ><i class="fas fa-pen"></i></button>
                    <button class="delete" ><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
            <div class="post-content">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga architecto saepe error similique nihil eligendi sed magnam labore, quisquam facilis recusandae dolorum, pariatur esse optio. Itaque dignissimos, voluptatibus quod inventore aliquid pariatur sint sapiente ex nulla quaerat accusamus. In, soluta quis ullam nemo consequatur a animi hic nihil ipsa voluptate.
                </p>
            </div>
            <div class="button">COMMENTER</div>
        </div>

    </div>
</template>



<script>
export default {
  name: 'AllPosts',
}


</script>



<style scoped>
.allposts {
    z-index: 900;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    width: auto;
}

.bandeaupost {
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