<template>
  <b-container>
    <div>
      <b-img src="https://cdn.pixabay.com/photo/2016/07/31/16/24/banner-1559400_1280.jpg" fluid alt="Responsive image"></b-img>
    </div>
    <br>
    <router-view />
  </b-container>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
