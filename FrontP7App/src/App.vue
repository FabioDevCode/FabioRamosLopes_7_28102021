<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'App',
};
</script>


<style>
*, ::before, ::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  overflow-x: hidden;
}


</style>