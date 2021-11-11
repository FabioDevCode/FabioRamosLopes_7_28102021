<template>
    <div class="bloc-header">
        <header>
            <img src="../assets/icon-blanc.png" alt="Logo Groupomania">
            <nav>
                <div>
                    <i class="fas fa-home"></i>
                </div>
                <div>
                    <i class="fas fa-plus-square"></i>
                </div>
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div>
                    <i class="fas fa-sign-out-alt"></i>
                </div>
            </nav>
        </header>
    </div>
</template>



<script>
export default {
  name: 'TheHeader',
}

</script>



<style scoped>
.bloc-header {
    z-index: 1000;
    position: fixed;
    width: 100vw;
    height: auto;
    background: #FD3E15;
    box-shadow: 0 8px 12px rgba(0, 0, 0, .2);
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    overflow: hidden;
    background: #FD3E15;
    width: 80%;
    margin: 0 auto;
    padding: 0 15px;
}

header img {
    height: 200px;
    align-self: center;
}

nav {
    display: flex;
    align-items: center;
    color: white;
}

nav div {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 20px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: rgb(177, 39, 15);
}

nav div:active {
    transform: scale(0.95);
}

nav div p {
    font-size: 0.85em;
    text-align: center;
}

nav div i {
    font-size: 1.4em;
}

</style>