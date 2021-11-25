<template>
    <div class="blocpost">
        <div class="blocfrompost">
            <form @submit.prevent>
                <h1>Publication</h1>
                <label for="media">Choisir un media :</label>
                <p class="formats">Formats : jpg, jpeg, png et gif</p>
                <input type="file" accept="image/png, image/jpeg, image/jpg, image/gif" id="media" name="media">

                <label for="message">Votre message :</label>
                <textarea class="textarea" name="message"></textarea>

                <button>Publier</button>
            </form>
        </div>
    </div>
</template>



<script>
export default {
    name: 'Post',
}

</script>



<style scoped>
.blocpost {
    z-index: 900;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    width: auto;
    min-height: 100vh;
}

.blocfrompost {
    overflow: hidden;
    background: white;
    border: 2px solid black;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, .3);
    height: 80vh;
    min-height: 650px;
    min-width: 315px;
    width: 65vw;
    border-radius: 20px;
}

.blocfrompost form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    min-width: 290px;
    height: 100%;
    padding: 15px 0px;
}

.blocfrompost form h1 {
    align-self: center;
    border-bottom: 2px solid black;
    margin-bottom: 4vh;
}

.blocfrompost form label {
    font-weight: bold;
    font-size: 1.5em;
    margin-bottom: 1vh;
    word-break: break-word;
}

.formats {
    font-size: 1em;
    font-style: italic;
    margin-bottom: 1.5vh;
}

.blocfrompost form input {
    margin-bottom: 3vh;
    word-break: break-all;
    overflow-wrap: break-word;
}

textarea {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    padding: 5px 10px;
    height: 30vh;
    border-radius: 12px;
    border: 1px solid black;
}

.blocfrompost button {
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

.blocfrompost button:active {
    transform: scale(.95);
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, .3);
}

@media screen and (max-width: 1024px) {
    .blocpost {
        padding: 100px 0px;
    }
}

</style>